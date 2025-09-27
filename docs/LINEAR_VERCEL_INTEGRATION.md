# 🚀 Linear + Vercel Integration Guide

## Overview

This guide shows you how to optimize Linear project management integration with your Vercel deployment for the Summerlin West Real Estate project. The integration allows you to:

- **Track deployments** in Linear issues
- **Automate issue creation** from deployment events
- **Sync project status** between Linear and Vercel
- **Manage development workflow** with Linear webhooks

## 🛠️ Setup Instructions

### 1. Linear API Setup

#### Get Your Linear API Key
1. Go to [Linear Settings > API](https://linear.app/settings/api)
2. Click **"Create API Key"**
3. Give it a name like "Vercel Integration"
4. Copy the API key (you'll need this for Vercel)

#### Get Your Team ID
1. Go to your Linear workspace
2. Click on your team name in the sidebar
3. Copy the Team ID from the URL (e.g., `abc123` from `linear.app/team/abc123`)

### 2. Vercel Environment Variables

Add these environment variables to your Vercel project:

```bash
# Required
LINEAR_API_KEY=lin_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional but recommended
LINEAR_DEFAULT_TEAM_ID=your-team-id-here
LINEAR_WEBHOOK_SECRET=your-webhook-secret-here
```

#### Setting Environment Variables in Vercel:
1. Go to your Vercel dashboard
2. Select your project: `summerlinwestrealestate`
3. Go to **Settings > Environment Variables**
4. Add each variable:
   - **Name**: `LINEAR_API_KEY`
   - **Value**: `lin_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Environment**: Production, Preview, Development
5. Repeat for other variables
6. Click **Save**

### 3. Deploy the Integration

```bash
# Deploy to Vercel
vercel build
vercel --prod

# Or use the Vercel CLI for development
vercel dev
```

## 📡 API Endpoints

### Linear Issues API

#### Get All Issues
```http
GET /api/linear
```

#### Create New Issue
```http
POST /api/linear
Content-Type: application/json

{
  "title": "Fix property search bug",
  "description": "Property search is not returning correct results",
  "priority": 2,
  "teamId": "optional-team-id"
}
```

#### Update Issue
```http
PUT /api/linear
Content-Type: application/json

{
  "issueId": "issue-id-here",
  "title": "Updated title",
  "description": "Updated description",
  "priority": 1,
  "stateId": "new-state-id"
}
```

### Linear Teams API

#### Get All Teams
```http
GET /api/linear/teams
```

### Linear Webhook

#### Webhook Endpoint
```http
POST /api/linear/webhook
```

## 🔧 Integration Scripts

### Deployment Integration Script

Use the included script to create deployment issues:

```bash
# Create a deployment issue
node scripts/linear-vercel-integration.js create-deployment production https://summerlinwestrealestate.vercel.app abc123 "Fixed property search"

# Update deployment status
node scripts/linear-vercel-integration.js update-deployment issue-id-here completed "Deployment successful"

# List all deployment issues
node scripts/linear-vercel-integration.js list-deployments

# Create feature request
node scripts/linear-vercel-integration.js create-feature "Mobile optimization" "Optimize property listings for mobile devices"

# Create bug report
node scripts/linear-vercel-integration.js create-bug "Search not working" "Property search returns empty results"
```

## 🎯 Testing the Integration

### 1. Test API Endpoints

Visit the test page: `https://your-domain.vercel.app/linear-test`

This page allows you to:
- View all Linear issues
- Create new issues
- Update issue status
- Test the integration

### 2. Test Webhook Integration

1. Set up a Linear webhook:
   - Go to Linear Settings > Webhooks
   - Add webhook URL: `https://your-domain.vercel.app/api/linear/webhook`
   - Select events: Issue, Comment, Project
   - Set webhook secret

2. Test by creating/updating an issue in Linear
3. Check your Vercel function logs for webhook events

## 🚀 Deployment Workflow

### Automated Deployment Tracking

1. **Pre-deployment**: Create deployment issue
2. **During deployment**: Update issue status to "in-progress"
3. **Post-deployment**: Update issue status to "completed"
4. **On failure**: Create bug report issue

### Example Workflow

```bash
# 1. Before deployment
node scripts/linear-vercel-integration.js create-deployment production

# 2. Deploy
vercel --prod

# 3. After successful deployment
node scripts/linear-vercel-integration.js update-deployment <issue-id> completed "All tests passed"

# 4. If deployment fails
node scripts/linear-vercel-integration.js create-bug "Deployment failed" "Build process failed with error X"
```

## 📊 Linear Issue Templates

### Deployment Issue Template
```
🚀 Deployment: {environment} - {commit-message}

## Deployment Details
- **Environment:** {environment}
- **URL:** {url}
- **Git Commit:** {commit-sha}
- **Deployed At:** {timestamp}
- **Deployed By:** {user}

## Next Steps
- [ ] Verify deployment functionality
- [ ] Run smoke tests
- [ ] Update documentation
- [ ] Notify stakeholders
```

### Feature Request Template
```
✨ Feature Request: {title}

## Feature Description
{description}

## Requirements
- [ ] Requirement 1
- [ ] Requirement 2

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
```

### Bug Report Template
```
🐛 Bug Report: {title}

## Bug Description
{description}

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: {browser}
- OS: {os}
- URL: {url}
```

## 🔒 Security Considerations

### API Key Security
- Never commit API keys to version control
- Use Vercel environment variables for sensitive data
- Rotate API keys regularly
- Use webhook secrets for verification

### Webhook Security
- Verify webhook signatures
- Use HTTPS for all webhook endpoints
- Implement rate limiting
- Log all webhook events

## 🐛 Troubleshooting

### Common Issues

#### "Failed to fetch Linear issues"
- Check if `LINEAR_API_KEY` is set correctly
- Verify the API key has proper permissions
- Check Linear API status

#### "Invalid signature" webhook error
- Verify `LINEAR_WEBHOOK_SECRET` matches Linear webhook settings
- Check webhook URL is correct
- Ensure webhook is using HTTPS

#### "Team not found" error
- Verify `LINEAR_DEFAULT_TEAM_ID` is correct
- Check if the team ID exists in your Linear workspace
- Ensure API key has access to the team

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=linear:*
```

### Check Integration Status

```bash
# Test API connection
curl -H "Authorization: Bearer $LINEAR_API_KEY" https://api.linear.app/graphql

# Test webhook endpoint
curl -X POST https://your-domain.vercel.app/api/linear/webhook \
  -H "Content-Type: application/json" \
  -d '{"test": "webhook"}'
```

## 📈 Best Practices

### Issue Management
1. **Use consistent labels**: `deployment`, `bug`, `feature`, `enhancement`
2. **Set appropriate priorities**: 1=Urgent, 2=High, 3=Medium, 4=Low
3. **Include context**: Always include relevant URLs, environment info
4. **Link related issues**: Use Linear's issue linking features

### Deployment Tracking
1. **Create issues before deployment**: Track what's being deployed
2. **Update status during deployment**: Keep stakeholders informed
3. **Document deployment notes**: Include relevant details
4. **Create follow-up issues**: Track post-deployment tasks

### Team Collaboration
1. **Assign issues appropriately**: Use Linear's assignment features
2. **Use comments for updates**: Keep communication in Linear
3. **Set due dates**: Use Linear's scheduling features
4. **Regular reviews**: Schedule regular issue review meetings

## 🎯 Real Estate Specific Workflows

### Property Listing Updates
```
Linear Issue → Property Update → Deploy → Test → Update Issue Status
```

### Market Report Generation
```
Data Collection → Linear Task → Report Creation → Deploy → Publish
```

### SEO Optimization
```
SEO Audit → Linear Issue → Optimization → Deploy → Monitor Rankings
```

### Lead Capture Improvements
```
User Feedback → Linear Issue → Form Enhancement → Deploy → Test Conversion
```

## 📚 Additional Resources

- [Linear API Documentation](https://developers.linear.app/docs)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Linear Webhooks](https://developers.linear.app/docs/webhooks)
- [Vercel Functions](https://vercel.com/docs/functions)

## 🎉 Success Metrics

Track these metrics to measure integration success:

### Development Velocity
- **Issue creation time**: How quickly issues are created from problems
- **Deployment tracking**: Percentage of deployments tracked in Linear
- **Issue resolution time**: Time from creation to completion

### Team Collaboration
- **Issue assignment rate**: How often issues are properly assigned
- **Comment frequency**: Team engagement in issue discussions
- **Status update frequency**: How often issue status is updated

### Project Management
- **Issue completion rate**: Percentage of issues completed on time
- **Deployment success rate**: Percentage of successful deployments
- **Bug report accuracy**: Quality and completeness of bug reports

---

**Ready to optimize your Linear + Vercel integration!** 🚀

Start by setting up the environment variables and testing the integration with the `/linear-test` page.
