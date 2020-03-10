import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SummaryPipe = class SummaryPipe {
    transform(value, limit) {
        if (!value) {
            return null;
        }
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
};
SummaryPipe = __decorate([
    Pipe({
        name: 'summary'
    })
], SummaryPipe);
export { SummaryPipe };
//# sourceMappingURL=summary.pipe.js.map