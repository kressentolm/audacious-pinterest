import expect from 'expect';
import boardsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('boardsReducer', () => {
  it('returns the initial state', () => {
    expect(boardsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
