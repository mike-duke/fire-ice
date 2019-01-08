import * as actions from '../index';

describe('actions', () => {
  it('should return an array of house data with a type of "ADD_HOUSES"', () => {
    const mockHouseData = [{name: 'Stark', words: 'Winter and stuff'}];
    const expected = {type: 'ADD_HOUSES', houseData: mockHouseData}

    const result = actions.addHouses(mockHouseData);
    expect(result).toEqual(expected);
  });

  it('should return a message with a type of "ADD_ERROR"', () => {
    const expected = {type: 'ADD_ERROR', message: 'Jon Snow is dead'}

    const result = actions.addError('Jon Snow is dead');
    expect(result).toEqual(expected);
  });

  it('shoud return a boolean with a type "IS_LOADING"', () => {
    const expected = {type: 'IS_LOADING', bool: true}
    
    const result = actions.isLoading(true);
    expect(result).toEqual(expected);
  })
});