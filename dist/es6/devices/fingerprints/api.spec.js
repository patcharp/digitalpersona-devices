import { __awaiter } from "tslib";
import { Env } from './../../test';
import { FingerprintReader } from './reader';
import { WebSdk } from 'WebSdk';
describe("FingerprintsApi: ", () => {
    let api;
    beforeEach(() => {
        api = new FingerprintReader(new WebSdk.WebChannelOptions({ debug: Env.Trace, reconnectAlways: true }));
    });
    it("must enumerate devices", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        const devices = yield api.enumerateDevices();
        expect(devices.length).toBeGreaterThanOrEqual(1);
    }));
    it("must obtain Device info", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        const devices = yield api.enumerateDevices();
        const info = yield api.getDeviceInfo(devices[0]);
        expect(info).toBeDefined();
        expect(info.DeviceID).toBeDefined();
        expect(info.eDeviceModality).toBeDefined();
        expect(info.eDeviceTech).toBeDefined();
        expect(info.eUidType).toBeDefined();
    }));
    it("must fail", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!Env.Hardware)
            return;
        expectAsync(api.getDeviceInfo("NonexistentID")).toBeRejected();
    }));
});
//# sourceMappingURL=api.spec.js.map