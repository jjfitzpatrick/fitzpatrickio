import { Octokit } from '@octokit/rest'

const owner = 'jjfitzpatrick';
const repo = 'fitzpatrickio'

const octokit = new Octokit({
  auth: '',
});

const GetIssues = () => {
  return octokit.issues.list({owner, repo})
}

const GetMilestones = () => {
  return octokit.issues.listMilestones({ owner, repo })
}


export { GetIssues, GetMilestones }

// https://api.github.com

// Accept: application/vnd.github.v3+json

// All timestamps return in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ