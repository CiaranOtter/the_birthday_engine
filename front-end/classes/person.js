export default class person {
    constructor() {
        this.name = ''; // name of person
        this.nicknames = []; // nicknames that person goes by
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addNickname(nname) {
        this.nicknames.push(nname);
    }

    removeNickname(nname) {
        this.nicknames = this.nicknames.filter(function(nname, index, arr){ 
            return value > 5;
        });
    }

    hasNickname
}