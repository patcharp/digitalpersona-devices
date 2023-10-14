/**@internal
 *
 */
export declare class Deferred<T> {
    promise: Promise<T>;
    resolve: Function;
    reject: Function;
    constructor();
}
