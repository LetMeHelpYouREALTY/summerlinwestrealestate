#!/usr/bin/env node

/**
 * Linear + Vercel Integration Script
 *
 * This script helps integrate Linear project management with Vercel deployments
 * by creating deployment-related issues and updating project status.
 */

const { LinearClient } = require('@linear/sdk');

// Configuration
const LINEAR_API_KEY = process.env.LINEAR_API_KEY;
const LINEAR_DEFAULT_TEAM_ID = process.env.LINEAR_DEFAULT_TEAM_ID;
const _VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const _VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

if (!LINEAR_API_KEY) {
  console.error('❌ LINEAR_API_KEY environment variable is required');
  process.exit(1);
}

const linear = new LinearClient({
  apiKey: LINEAR_API_KEY,
});

/**
 * Create a deployment issue in Linear
 */
async function createDeploymentIssue(deploymentInfo) {
  try {
    const issue = await linear.createIssue({
      title: `🚀 Deployment: ${deploymentInfo.environment} - ${deploymentInfo.gitCommit?.message || 'Unknown'}`,
      description: `
## Deployment Details

**Environment:** ${deploymentInfo.environment}
**URL:** ${deploymentInfo.url}
**Git Commit:** ${deploymentInfo.gitCommit?.sha || 'Unknown'}
**Commit Message:** ${deploymentInfo.gitCommit?.message || 'Unknown'}
**Deployed At:** ${new Date().toISOString()}
**Deployed By:** ${deploymentInfo.deployedBy || 'Unknown'}

## Deployment Notes
${deploymentInfo.notes || 'No additional notes provided.'}

## Next Steps
- [ ] Verify deployment functionality
- [ ] Run smoke tests
- [ ] Update documentation if needed
- [ ] Notify stakeholders
      `.trim(),
      teamId: LINEAR_DEFAULT_TEAM_ID,
      priority: deploymentInfo.environment === 'production' ? 2 : 3,
      labels: ['deployment', deploymentInfo.environment],
    });

    console.log(`✅ Created deployment issue: ${issue.id}`);
    return issue;
  } catch (error) {
    console.error('❌ Failed to create deployment issue:', error);
    throw error;
  }
}

/**
 * Update deployment issue status
 */
async function updateDeploymentIssue(issueId, status, notes = '') {
  try {
    // Get available states for the team
    const team = await linear.team(LINEAR_DEFAULT_TEAM_ID);
    const states = await team.states();

    let targetState;
    switch (status) {
      case 'completed':
        targetState = states.nodes.find((s) => s.type === 'completed');
        break;
      case 'failed':
        targetState = states.nodes.find(
          (s) => s.name.toLowerCase().includes('failed') || s.name.toLowerCase().includes('error')
        );
        break;
      case 'in-progress':
        targetState = states.nodes.find((s) => s.type === 'started' || s.type === 'in_progress');
        break;
      default:
        targetState = states.nodes.find((s) => s.type === 'triage');
    }

    if (!targetState) {
      console.warn(`⚠️ Could not find appropriate state for status: ${status}`);
      return;
    }

    await linear.updateIssue(issueId, {
      stateId: targetState.id,
    });

    // Add a comment with the status update
    if (notes) {
      await linear.createComment(issueId, {
        body: `**Status Update:** ${status}\n\n${notes}`,
      });
    }

    console.log(`✅ Updated deployment issue ${issueId} to ${status}`);
  } catch (error) {
    console.error('❌ Failed to update deployment issue:', error);
    throw error;
  }
}

/**
 * Get deployment-related issues
 */
async function getDeploymentIssues() {
  try {
    const issues = await linear.issues({
      filter: {
        team: { id: { eq: LINEAR_DEFAULT_TEAM_ID } },
        labels: { containsAll: ['deployment'] },
      },
    });

    return issues.nodes;
  } catch (error) {
    console.error('❌ Failed to fetch deployment issues:', error);
    throw error;
  }
}

/**
 * Create a feature request issue from a Vercel deployment
 */
async function createFeatureRequest(featureInfo) {
  try {
    const issue = await linear.createIssue({
      title: `✨ Feature Request: ${featureInfo.title}`,
      description: `
## Feature Description
${featureInfo.description}

## Requirements
${featureInfo.requirements || 'To be defined'}

## Acceptance Criteria
${featureInfo.acceptanceCriteria || 'To be defined'}

## Related Deployment
- **URL:** ${featureInfo.deploymentUrl}
- **Environment:** ${featureInfo.environment}
- **Created:** ${new Date().toISOString()}
      `.trim(),
      teamId: LINEAR_DEFAULT_TEAM_ID,
      priority: featureInfo.priority || 3,
      labels: ['feature-request', 'enhancement'],
    });

    console.log(`✅ Created feature request: ${issue.id}`);
    return issue;
  } catch (error) {
    console.error('❌ Failed to create feature request:', error);
    throw error;
  }
}

/**
 * Create a bug report issue from a failed deployment
 */
async function createBugReport(bugInfo) {
  try {
    const issue = await linear.createIssue({
      title: `🐛 Bug Report: ${bugInfo.title}`,
      description: `
## Bug Description
${bugInfo.description}

## Steps to Reproduce
${bugInfo.stepsToReproduce || 'To be investigated'}

## Expected Behavior
${bugInfo.expectedBehavior || 'To be defined'}

## Actual Behavior
${bugInfo.actualBehavior || 'To be observed'}

## Environment
- **URL:** ${bugInfo.deploymentUrl}
- **Environment:** ${bugInfo.environment}
- **Browser:** ${bugInfo.browser || 'Unknown'}
- **OS:** ${bugInfo.os || 'Unknown'}
- **Reported:** ${new Date().toISOString()}
      `.trim(),
      teamId: LINEAR_DEFAULT_TEAM_ID,
      priority: bugInfo.priority || 2,
      labels: ['bug', 'deployment'],
    });

    console.log(`✅ Created bug report: ${issue.id}`);
    return issue;
  } catch (error) {
    console.error('❌ Failed to create bug report:', error);
    throw error;
  }
}

// CLI interface
async function main() {
  const command = process.argv[2];
  const args = process.argv.slice(3);

  try {
    switch (command) {
      case 'create-deployment': {
        if (args.length < 1) {
          console.error(
            'Usage: node linear-vercel-integration.js create-deployment <environment> [url] [commit-sha] [commit-message]'
          );
          process.exit(1);
        }

        const [environment, url, commitSha, commitMessage] = args;
        const deploymentInfo = {
          environment,
          url: url || 'https://summerlinwestrealestate.vercel.app',
          gitCommit: {
            sha: commitSha || 'unknown',
            message: commitMessage || 'Deployment',
          },
          deployedBy: process.env.USER || 'unknown',
        };

        await createDeploymentIssue(deploymentInfo);
        break;
      }

      case 'update-deployment': {
        if (args.length < 2) {
          console.error(
            'Usage: node linear-vercel-integration.js update-deployment <issue-id> <status> [notes]'
          );
          process.exit(1);
        }

        const [issueId, status, notes] = args;
        await updateDeploymentIssue(issueId, status, notes);
        break;
      }

      case 'list-deployments': {
        const issues = await getDeploymentIssues();
        console.log(`Found ${issues.length} deployment issues:`);
        issues.forEach((issue) => {
          console.log(`- ${issue.id}: ${issue.title} (${issue.state.name})`);
        });
        break;
      }

      case 'create-feature': {
        if (args.length < 2) {
          console.error(
            'Usage: node linear-vercel-integration.js create-feature <title> <description>'
          );
          process.exit(1);
        }

        const [title, description] = args;
        await createFeatureRequest({
          title,
          description,
          environment: 'production',
          deploymentUrl: 'https://summerlinwestrealestate.vercel.app',
        });
        break;
      }

      case 'create-bug': {
        if (args.length < 2) {
          console.error(
            'Usage: node linear-vercel-integration.js create-bug <title> <description>'
          );
          process.exit(1);
        }

        const [bugTitle, bugDescription] = args;
        await createBugReport({
          title: bugTitle,
          description: bugDescription,
          environment: 'production',
          deploymentUrl: 'https://summerlinwestrealestate.vercel.app',
        });
        break;
      }

      default:
        console.log(`
Linear + Vercel Integration Script

Usage:
  node linear-vercel-integration.js <command> [args]

Commands:
  create-deployment <environment> [url] [commit-sha] [commit-message]
    Create a deployment issue in Linear

  update-deployment <issue-id> <status> [notes]
    Update deployment issue status (completed, failed, in-progress)

  list-deployments
    List all deployment-related issues

  create-feature <title> <description>
    Create a feature request issue

  create-bug <title> <description>
    Create a bug report issue

Environment Variables Required:
  LINEAR_API_KEY - Your Linear API key
  LINEAR_DEFAULT_TEAM_ID - Your Linear team ID (optional)
        `);
        break;
    }
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  createDeploymentIssue,
  updateDeploymentIssue,
  getDeploymentIssues,
  createFeatureRequest,
  createBugReport,
};
