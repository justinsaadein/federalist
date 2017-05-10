import github from '../util/githubApi'
import alertActions from './alertActions'
import { dispatch } from '../store'

import {
  githubBranchesFetchStarted as createGithubBranchesFetchStartedAction,
  githubBranchesFetchError as createGithubBranhcesFetchErrorAction,
  githubBranchesReceived as createGithubBranchesReceivedAction,
} from "./actionCreators/githubBranchActions"

const dispatchGithubBranchesFetchStartedAction = () => {
  dispatch(createGithubBranchesFetchStartedAction())
}

const dispatchGithubBranchesReceivedAction = (branches) => {
  dispatch(createGithubBranchesReceivedAction(branches))
}

const dispatchGithubBranchesFetchError = (error) => {
  dispatch(createGithubBranhcesFetchErrorAction(error))
}

export default {
  fetchBranches(site) {
    dispatchGithubBranchesFetchStartedAction()
    return github.fetchBranches(site)
      .then(dispatchGithubBranchesReceivedAction)
      .catch(dispatchGithubBranchesFetchError)
  },
}
