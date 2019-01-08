import { errorReducer } from '../errorReducer';

describe('errorReducer', () => {
  it('should return a message when the action type is "ADD_ERROR"', () => {
    const mockAction = {type: 'ADD_ERROR', message: 'Jon Snow is not dead'}
    const expected = 'Jon Snow is not dead';

    const result = errorReducer('', mockAction);
    expect(result).toEqual(expected);
  });

  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'ADD_HOUSES', message: 'Ringo is dead'}

    const result = errorReducer('', mockAction);
    expect(result).toEqual('');
  })
});