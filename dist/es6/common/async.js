/**@internal
 *
 */
export class Deferred {
    constructor() {
        const _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
}
//# sourceMappingURL=async.js.map