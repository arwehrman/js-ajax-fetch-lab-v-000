function getIssues() {
}

function showIssues(json) {
  GET /repos/:owner/:repo/issues
}

function createIssue() {
  POST /repos/:owner/:repo/issues
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = 'https://api.github.com/repos/' + repo + '/forks'
  //use fetch to fork it!
  fetch(url, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    console.log(res);
    showForkedRepo(res.url)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
