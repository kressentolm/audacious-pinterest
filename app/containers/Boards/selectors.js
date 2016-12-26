import { createSelector } from 'reselect';

/**
 * Direct selector to the boards state domain
 */
const selectBoardsDomain = () => (state) => state.get('boards');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Boards
 */

const selectBoards = () => createSelector(
  selectBoardsDomain(),
  (substate) => substate.toJS()
);

export default selectBoards;
export {
  selectBoardsDomain,
};
