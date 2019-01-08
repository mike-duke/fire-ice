import { housesReducer } from '../housesReducer';
import { housesHelper } from '../housesHelper';

jest.mock('../housesHelper');

describe('housesReducer', () => {
  const mockHouseData = [{name: 'Stark', words: 'Winter and stuff'}];
  it('should call housesHelper if the action type is "ADD_HOUSES"', () => {
    const mockAction = {type: 'ADD_HOUSES', houseData: mockHouseData}

    housesReducer([], mockAction);
    expect(housesHelper).toHaveBeenCalledWith(mockHouseData);
  });

  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'DELETE_HOUSES', mockHouseData}

    const result = housesReducer([], mockAction);
    expect(result).toEqual([]);
  })
});