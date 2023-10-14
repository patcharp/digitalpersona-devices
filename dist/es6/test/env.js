export class Env {
    static get AppId() {
        return `https://${Env.Domain}/DPFido/app-id.json`;
    }
    static get AuthServerEndpoint() {
        return `https://${Env.Domain}/DPWebAUTH/DPWebAUTHService.svc`;
    }
    static get EnrollServerEndpoint() {
        return `https://${Env.Domain}/DPWebEnroll/DPWebEnrollService.svc`;
    }
}
Env.Integration = false; // enables integration tests. Must have Web Components configured for Domain
Env.Hardware = false; // enables hardware tests. Must have all devices connected.
Env.Trace = false; // enabled detailed tracing
Env.Domain = "websvr-12-64.alpha.local";
//# sourceMappingURL=env.js.map