const Band = require("./band");

class Bans {
    constructor() {
        this.bans = [];
    }

    addBand(band = new Band()) {
        this.bans.push(band);
    }

    getBans() {
        return this.bans;
    }
    deleteBand(id = '') {
        this.bans = this.bans.filter(b => b.id !== id);
        return this.bans;
    }

    voteBand(id = '') {
        this.bans = this.bans.map(banda => {
            if (banda.id === id) {
                banda.votes++;
                return band;
            } else {
                return banda;
            }
        });
    }
}

module.exports = Bans;