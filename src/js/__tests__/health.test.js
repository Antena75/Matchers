import sort from '../sort.js';

 
test('tobe execution', () => {
    const heroes = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
    const sortHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    
    const result = sort(heroes);

    
    expect(result).not.toBe(sortHeroes); 
});


test('toEqual execution', () => {
    const heroes = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
    const sortHeroes  = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    
    const result = sort(heroes);

    expect(result).toEqual(sortHeroes); 
});