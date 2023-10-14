import { __awaiter } from "tslib";
import { CardsReader } from './reader';
import { Env } from './../../test';
import { WebSdk } from 'WebSdk';
describe("CardsReader: ", () => {
    let api;
    beforeEach(() => {
        api = new CardsReader(new WebSdk.WebChannelOptions({ debug: Env.Trace, reconnectAlways: true }));
    });
    it("must enumerate readers", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        const devices = yield api.enumerateReaders();
        expect(devices.length).toBeGreaterThanOrEqual(1);
    }));
    it("must enumerate cards", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        const cards = yield api.enumerateCards();
        expect(cards.length).toBeGreaterThanOrEqual(1);
    }));
    it("must get card info", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        const cards = yield api.enumerateCards();
        expect(cards.length).toBeGreaterThanOrEqual(1);
        const devices = yield api.enumerateReaders();
        expect(devices.length).toBeGreaterThanOrEqual(1);
        const info = yield api.getCardInfo(devices[0]);
        expect(info).toEqual(cards[0]);
    }));
    it("must fail", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        expectAsync(api.getCardInfo("NonexistentID")).toBeRejected();
    }));
});
//# sourceMappingURL=api.spec.js.map