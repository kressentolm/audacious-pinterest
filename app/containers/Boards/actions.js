/*
 *
 * Boards actions
 *
 */

import { DEFAULT_ACTION, TOKEN } from './constants';

export const SELECT_BOARD = 'SELECT_BOARD'
export const INVALIDATE_BOARD = 'INVALIDATE_BOARD'
export const REQUEST_PINS = 'REQUEST_PINS'
export const RECEIVE_PINS = 'RECEIVE_PINS'

export function selectBoard(board) {
  return {
    type: SELECT_BOARD,
    board
  }
}

export function invalidateBoard(board) {
  return {
    type: INVALIDATE_BOARD,
    board
  }
}

function requestPins(board) {
  return {
    type: REQUEST_PINS,
    board
  }
}

function receivePins(board, json) {
  return {
    type: RECEIVE_PINS,
    board,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// a username/board combo
function fetchPins(board) {
  return dispatch => {
    dispatch(requestPosts(board))
    return fetch('https://api.pinterest.com/v1/boards/'
    + board + '/pins/?access_token=' + TOKEN + '&fields=id,link,note,url,created_at,image')
      .then(response => response.json())
      .then(json => dispatch(receiveBoards(subreddit, json)))
  }
}

function shouldFetchPins(state, board) {
  const posts = state.postsByBoard[Board]
  if (!board) {
    return true
  } else if (board.isFetching) {
    return false
  } else {
    return board.didInvalidate
  }
}

export function fetchPinsIfNeeded(board) {
  return (dispatch, getState) => {
    if (shouldFetchPins(getState(), board)) {
      return dispatch(fetchPins(board))
    }
  }
}
