import { mapStateToProps } from './Container';

describe('Container', () => {
  describe('mapStateToProps', () => {
    it('should return a props object with a property of houses', () => {
      const mockState = {
        houses: [{name: 'Stark', words: 'Winter and stuff'}]
      }

      const expected = {
        houses: [{name: 'Stark', words: 'Winter and stuff'}]
      }

      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });
})