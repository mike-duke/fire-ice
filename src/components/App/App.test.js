import { mapStateToProps, mapDispatchToProps } from './App';
import { fetchHouses } from '../../thunks/fetchHouses';

jest.mock('../../thunks/fetchHouses');

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return a props object with properties of houses and isLoading', () => {
      const mockState = {
        houses: [{name: 'Stark', words: 'Winter and stuff'}],
        isLoading: false
      }
      const expected = {
        houses: [{name: 'Stark', words: 'Winter and stuff'}],
        isLoading: false
      }
      
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch the fetchHouses thunk', () => {
      const mockDispatch = jest.fn();
      const url = 'www.jonsnowisdead.com';
      const expected = fetchHouses(url);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addHousesToStore(url);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});