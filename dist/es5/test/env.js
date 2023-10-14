var Env = /** @class */ (function () {
    function Env() {
    }
    Object.defineProperty(Env, "AppId", {
        get: function () {
            return "https://" + Env.Domain + "/DPFido/app-id.json";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Env, "AuthServerEndpoint", {
        get: function () {
            return "https://" + Env.Domain + "/DPWebAUTH/DPWebAUTHService.svc";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Env, "EnrollServerEndpoint", {
        get: function () {
            return "https://" + Env.Domain + "/DPWebEnroll/DPWebEnrollService.svc";
        },
        enumerable: true,
        configurable: true
    });
    Env.Integration = false; // enables integration tests. Must have Web Components configured for Domain
    Env.Hardware = false; // enables hardware tests. Must have all devices connected.
    Env.Trace = false; // enabled detailed tracing
    Env.Domain = "websvr-12-64.alpha.local";
    return Env;
}());
export { Env };
//# sourceMappingURL=env.js.map