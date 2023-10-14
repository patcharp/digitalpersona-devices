import { __awaiter, __generator } from "tslib";
import { CardsReader } from './reader';
import { Env } from './../../test';
import { WebSdk } from 'WebSdk';
describe("CardsReader: ", function () {
    var api;
    beforeEach(function () {
        api = new CardsReader(new WebSdk.WebChannelOptions({ debug: Env.Trace, reconnectAlways: true }));
    });
    it("must enumerate readers", function () { return __awaiter(void 0, void 0, void 0, function () {
        var devices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Env.Hardware)
                        return [2 /*return*/];
                    return [4 /*yield*/, api.enumerateReaders()];
                case 1:
                    devices = _a.sent();
                    expect(devices.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("must enumerate cards", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cards;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Env.Hardware)
                        return [2 /*return*/];
                    return [4 /*yield*/, api.enumerateCards()];
                case 1:
                    cards = _a.sent();
                    expect(cards.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("must get card info", function () { return __awaiter(void 0, void 0, void 0, function () {
        var cards, devices, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Env.Hardware)
                        return [2 /*return*/];
                    return [4 /*yield*/, api.enumerateCards()];
                case 1:
                    cards = _a.sent();
                    expect(cards.length).toBeGreaterThanOrEqual(1);
                    return [4 /*yield*/, api.enumerateReaders()];
                case 2:
                    devices = _a.sent();
                    expect(devices.length).toBeGreaterThanOrEqual(1);
                    return [4 /*yield*/, api.getCardInfo(devices[0])];
                case 3:
                    info = _a.sent();
                    expect(info).toEqual(cards[0]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("must fail", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!Env.Hardware)
                return [2 /*return*/];
            expectAsync(api.getCardInfo("NonexistentID")).toBeRejected();
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=api.spec.js.map