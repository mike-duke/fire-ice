import { housesHelper } from '../housesHelper';

describe('housesHelper', () => {
  it('should return an array of house objects with only the specified properties', () => {
    const mockHouseData = [{
      ancestralWeapons: ["Lady Forlorn"],
      cadetBranches: [],
      coatOfArms: "Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
      currentLord: "https://www.anapioficeandfire.com/api/characters/681",
      diedOut: "",
      founded: "",
      founder: "https://www.anapioficeandfire.com/api/characters/256",
      heir: "https://www.anapioficeandfire.com/api/characters/677",
      name: "House Corbray of Heart's Home",
      overlord: "https://www.anapioficeandfire.com/api/houses/7",
      region: "",
      seats: ["Heart's Home"],
      swornMembers: ["https://www.anapioficeandfire.com/api/characters/255", "https://www.anapioficeandfire.com/api/characters/256", "https://www.anapioficeandfire.com/api/characters/447", "https://www.anapioficeandfire.com/api/characters/654", "https://www.anapioficeandfire.com/api/characters/677", "https://www.anapioficeandfire.com/api/characters/681", "https://www.anapioficeandfire.com/api/characters/871", "https://www.anapioficeandfire.com/api/characters/1182"],
      titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
      url: "https://www.anapioficeandfire.com/api/houses/81",
      words: "" 
    }]
    const expected = [{
      ancestralWeapons: ["Lady Forlorn"],
      coatOfArms: "Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
      founded: "",
      name: "House Corbray of Heart's Home",
      seats: ["Heart's Home"],
      titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
      url: "https://www.anapioficeandfire.com/api/houses/81",
      words: "" 
    }]

    const result = housesHelper(mockHouseData);
    expect(result).toEqual(expected);
  });
});