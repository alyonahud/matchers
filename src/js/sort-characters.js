export default function sortCharactersByHealth(characterList) {
    return [ ...characterList ].sort((a, b) => b.health - a.health);
}