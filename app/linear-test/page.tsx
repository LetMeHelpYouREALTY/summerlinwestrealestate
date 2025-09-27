'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import type { CreateIssueInput, LinearIssue } from '@/lib/linear';

export default function LinearTestPage() {
  const [issues, setIssues] = useState<LinearIssue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newIssue, setNewIssue] = useState<CreateIssueInput>({
    title: '',
    description: '',
    priority: 3,
  });

  const titleId = useId();
  const descriptionId = useId();
  const priorityId = useId();

  const fetchIssues = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/linear');
      const data = await response.json();

      if (data.success) {
        setIssues(data.issues);
      } else {
        setError(data.error || 'Failed to fetch issues');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error fetching issues:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch issues on component mount
  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  const createIssue = async () => {
    if (!newIssue.title.trim()) {
      setError('Issue title is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/linear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newIssue),
      });

      const data = await response.json();

      if (data.success) {
        setNewIssue({ title: '', description: '', priority: 3 });
        fetchIssues(); // Refresh the list
      } else {
        setError(data.error || 'Failed to create issue');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error creating issue:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateIssueStatus = async (issueId: string, newStateId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/linear', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          issueId,
          stateId: newStateId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        fetchIssues(); // Refresh the list
      } else {
        setError(data.error || 'Failed to update issue');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error updating issue:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Linear Integration Test</h1>

            {/* Error Display */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* Create New Issue Form */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Issue</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor={titleId} className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id={titleId}
                    value={newIssue.title}
                    onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter issue title"
                  />
                </div>

                <div>
                  <label
                    htmlFor={descriptionId}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id={descriptionId}
                    rows={3}
                    value={newIssue.description}
                    onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter issue description"
                  />
                </div>

                <div>
                  <label htmlFor={priorityId} className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    id={priorityId}
                    value={newIssue.priority}
                    onChange={(e) =>
                      setNewIssue({ ...newIssue, priority: parseInt(e.target.value, 10) })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value={1}>Urgent</option>
                    <option value={2}>High</option>
                    <option value={3}>Medium</option>
                    <option value={4}>Low</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={createIssue}
                  disabled={loading || !newIssue.title.trim()}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating...' : 'Create Issue'}
                </button>
              </div>
            </div>

            {/* Issues List */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Issues ({issues.length})</h2>
                <button
                  type="button"
                  onClick={fetchIssues}
                  disabled={loading}
                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Refresh'}
                </button>
              </div>

              {loading && issues.length === 0 ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-gray-600">Loading issues...</p>
                </div>
              ) : issues.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No issues found. Create your first issue above.
                </div>
              ) : (
                <div className="space-y-4">
                  {issues.map((issue) => (
                    <div key={issue.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{issue.title}</h3>
                          {issue.description && (
                            <p className="mt-1 text-gray-600">{issue.description}</p>
                          )}
                          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                            <span>Priority: {issue.priority}</span>
                            <span>Team: {issue.team.name}</span>
                            <span>State: {issue.state.name}</span>
                            {issue.assignee && <span>Assignee: {issue.assignee.name}</span>}
                          </div>
                        </div>
                        <div className="ml-4 flex space-x-2">
                          <select
                            value={issue.state.id}
                            onChange={(e) => updateIssueStatus(issue.id, e.target.value)}
                            disabled={loading}
                            title="Update issue status"
                            className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value={issue.state.id}>{issue.state.name}</option>
                            {/* You can add more state options here based on your Linear setup */}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
