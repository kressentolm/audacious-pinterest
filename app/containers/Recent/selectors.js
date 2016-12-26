import { createSelector } from 'reselect';

/**
 * Direct selector to the recent state domain
 */
const selectRecentDomain = () => (state) => state.get('recent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Recent
 */

const selectRecent = () => createSelector(
  selectRecentDomain(),
  (substate) => substate.toJS()
);

export default selectRecent;
export {
  selectRecentDomain,
};
