import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let MakeNounsBigPipe = class MakeNounsBigPipe {
    transform(value) {
        if (!value) {
            return null;
        }
        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (this.isPreposition(word) && i > 0) {
                words[i] = word.toLowerCase();
            }
            else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    }
    toTitleCase(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    isPreposition(word) {
        let prepositions = ["of", "the"];
        return prepositions.includes(word.toLowerCase());
    }
};
MakeNounsBigPipe = __decorate([
    Pipe({
        name: 'makeNounsBig'
    })
], MakeNounsBigPipe);
export { MakeNounsBigPipe };
//# sourceMappingURL=make-nouns-big.pipe.js.map