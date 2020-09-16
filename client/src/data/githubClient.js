import { Octokit } from '@octokit/rest';

const owner = 'jjfitzpatrick';
const repo = 'fitzpatrickio';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const GetIssues = () => {
  return octokit.issues.list({ owner, repo });
};

const GetMilestones = () => {
  const state = 'all';

  return octokit.issues.listMilestones({ owner, repo, state });
};

export { GetIssues, GetMilestones };
