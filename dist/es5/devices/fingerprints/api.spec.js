import { __awaiter, __generator } from "tslib";
import { Env } from './../../test';
import { FingerprintReader } from './reader';
import { WebSdk } from 'WebSdk';
describe("FingerprintsApi: ", function () {
    var api;
    beforeEach(function () {
        api = new FingerprintReader(new WebSdk.WebChannelOptions({ debug: Env.Trace, reconnectAlways: true }));
    });
    it("must enumerate devices", function () { return __awaiter(void 0, void 0, void 0, function () {
        var devices;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Env.Hardware)
                        return [2 /*return*/];
                    return [4 /*yield*/, api.enumerateDevices()];
                case 1:
                    devices = _a.sent();
                    expect(devices.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("must obtain Device info", function () { return __awaiter(void 0, void 0, void 0, function () {
        var devices, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Env.Hardware)
                        return [2 /*return*/];
                    return [4 /*yield*/, api.enumerateDevices()];
                case 1:
                    devices = _a.sent();
                    return [4 /*yield*/, api.getDeviceInfo(devices[0])];
                case 2:
                    info = _a.sent();
                    expect(info).toBeDefined();
                    expect(info.DeviceID).toBeDefined();
                    expect(info.eDeviceModality).toBeDefined();
                    expect(info.eDeviceTech).toBeDefined();
                    expect(info.eUidType).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("must fail", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!Env.Hardware)
                return [2 /*return*/];
            expectAsync(api.getDeviceInfo("NonexistentID")).toBeRejected();
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=api.spec.js.map