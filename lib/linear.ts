import { LinearClient } from '@linear/sdk';

// Initialize Linear client
export const linearClient = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY,
});

// Linear issue types
export interface LinearIssue {
  id: string;
  title: string;
  description?: string;
  priority: number;
  state: {
    id: string;
    name: string;
    type: string;
  };
  team: {
    id: string;
    name: string;
  };
  creator?: {
    id: string;
    name: string;
    email: string;
  };
  assignee?: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateIssueInput {
  title: string;
  description?: string;
  teamId?: string;
  priority?: number;
  assigneeId?: string;
  stateId?: string;
  labels?: string[];
}

export interface UpdateIssueInput {
  issueId: string;
  title?: string;
  description?: string;
  priority?: number;
  assigneeId?: string;
  stateId?: string;
  labels?: string[];
}

// Linear API functions
export class LinearAPI {
  private client: LinearClient;

  constructor() {
    this.client = linearClient;
  }

  // Get all issues for a team
  async getIssues(teamId?: string): Promise<LinearIssue[]> {
    try {
      const issues = await this.client.issues({
        filter: teamId ? { team: { id: { eq: teamId } } } : undefined,
      });

      return issues.nodes.map((issue) => ({
        id: issue.id,
        title: issue.title,
        description: issue.description || undefined,
        priority: issue.priority,
        state: {
          id: issue.state?.id || '',
          name: issue.state?.name || '',
          type: issue.state?.type || '',
        },
        team: {
          id: issue.team?.id || '',
          name: issue.team?.name || '',
        },
        creator: issue.creator
          ? {
              id: issue.creator.id,
              name: issue.creator.name,
              email: issue.creator.email,
            }
          : undefined,
        assignee: issue.assignee
          ? {
              id: issue.assignee.id,
              name: issue.assignee.name,
              email: issue.assignee.email,
            }
          : undefined,
        createdAt: issue.createdAt.toISOString(),
        updatedAt: issue.updatedAt.toISOString(),
      }));
    } catch (error) {
      console.error('Error fetching Linear issues:', error);
      throw new Error('Failed to fetch issues');
    }
  }

  // Get a specific issue
  async getIssue(issueId: string): Promise<LinearIssue | null> {
    try {
      const issue = await this.client.issue(issueId);

      if (!issue) return null;

      return {
        id: issue.id,
        title: issue.title,
        description: issue.description || undefined,
        priority: issue.priority,
        state: {
          id: issue.state.id,
          name: issue.state.name,
          type: issue.state.type,
        },
        team: {
          id: issue.team.id,
          name: issue.team.name,
        },
        creator: issue.creator
          ? {
              id: issue.creator.id,
              name: issue.creator.name,
              email: issue.creator.email,
            }
          : undefined,
        assignee: issue.assignee
          ? {
              id: issue.assignee.id,
              name: issue.assignee.name,
              email: issue.assignee.email,
            }
          : undefined,
        createdAt: issue.createdAt.toISOString(),
        updatedAt: issue.updatedAt.toISOString(),
      };
    } catch (error) {
      console.error('Error fetching Linear issue:', error);
      throw new Error('Failed to fetch issue');
    }
  }

  // Create a new issue
  async createIssue(input: CreateIssueInput): Promise<LinearIssue> {
    try {
      const result = await this.client.createIssue({
        title: input.title,
        description: input.description,
        teamId: input.teamId || process.env.LINEAR_DEFAULT_TEAM_ID || '',
        priority: input.priority || 3,
        assigneeId: input.assigneeId,
        stateId: input.stateId,
      });

      // Fetch the created issue to get all details
      const issue = await this.client.issue(result.issue?.id || '');

      if (!issue) {
        throw new Error('Failed to fetch created issue');
      }

      return {
        id: issue.id,
        title: issue.title,
        description: issue.description || undefined,
        priority: issue.priority,
        state: {
          id: issue.state?.id || '',
          name: issue.state?.name || '',
          type: issue.state?.type || '',
        },
        team: {
          id: issue.team?.id || '',
          name: issue.team?.name || '',
        },
        creator: issue.creator
          ? {
              id: issue.creator.id,
              name: issue.creator.name,
              email: issue.creator.email,
            }
          : undefined,
        assignee: issue.assignee
          ? {
              id: issue.assignee.id,
              name: issue.assignee.name,
              email: issue.assignee.email,
            }
          : undefined,
        createdAt: issue.createdAt.toISOString(),
        updatedAt: issue.updatedAt.toISOString(),
      };
    } catch (error) {
      console.error('Error creating Linear issue:', error);
      throw new Error('Failed to create issue');
    }
  }

  // Update an existing issue
  async updateIssue(input: UpdateIssueInput): Promise<LinearIssue> {
    try {
      const result = await this.client.updateIssue(input.issueId, {
        title: input.title,
        description: input.description,
        priority: input.priority,
        assigneeId: input.assigneeId,
        stateId: input.stateId,
      });

      // Fetch the updated issue to get all details
      const issue = await this.client.issue(result.issue?.id || input.issueId);

      if (!issue) {
        throw new Error('Failed to fetch updated issue');
      }

      return {
        id: issue.id,
        title: issue.title,
        description: issue.description || undefined,
        priority: issue.priority,
        state: {
          id: issue.state?.id || '',
          name: issue.state?.name || '',
          type: issue.state?.type || '',
        },
        team: {
          id: issue.team?.id || '',
          name: issue.team?.name || '',
        },
        creator: issue.creator
          ? {
              id: issue.creator.id,
              name: issue.creator.name,
              email: issue.creator.email,
            }
          : undefined,
        assignee: issue.assignee
          ? {
              id: issue.assignee.id,
              name: issue.assignee.name,
              email: issue.assignee.email,
            }
          : undefined,
        createdAt: issue.createdAt.toISOString(),
        updatedAt: issue.updatedAt.toISOString(),
      };
    } catch (error) {
      console.error('Error updating Linear issue:', error);
      throw new Error('Failed to update issue');
    }
  }

  // Get all teams
  async getTeams() {
    try {
      const teams = await this.client.teams();
      return teams.nodes;
    } catch (error) {
      console.error('Error fetching Linear teams:', error);
      throw new Error('Failed to fetch teams');
    }
  }

  // Get team by ID
  async getTeam(teamId: string) {
    try {
      const team = await this.client.team(teamId);
      return team;
    } catch (error) {
      console.error('Error fetching Linear team:', error);
      throw new Error('Failed to fetch team');
    }
  }
}

// Export singleton instance
export const linearAPI = new LinearAPI();
