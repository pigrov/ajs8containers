export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(newCharacter) {
        if (this.members.has(newCharacter)) {
            throw new Error('This character is already in the team');
        } else {
            this.members.add(newCharacter);
        }
    }

    addAll(...newCharacters) {
        newCharacters.forEach((item) => {
            this.members.add(item);
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}
