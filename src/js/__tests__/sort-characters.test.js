import sortCharactersByHealth from '../sort-characters';

const characterList = [
    {
        name: 'мечник', health: 10
    },
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 80
    },
];

test('sort characters by health', () => {
    const result = sortCharactersByHealth(characterList);

    const expected = [
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
        {
            name: 'мечник', health: 10
        },
    ];

    expect(result).toEqual(expected);
});