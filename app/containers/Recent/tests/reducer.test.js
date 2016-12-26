import expect from 'expect';
import recentReducer from '../reducer';
import { fromJS } from 'immutable';

describe('recentReducer', () => {
  it('returns the initial state', () => {
    expect(recentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
