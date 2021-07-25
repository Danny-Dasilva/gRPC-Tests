"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const cycletls_grpc_pb_1 = require("./proto/cycletls_grpc_pb");
const cycletls_pb_1 = require("./proto/cycletls_pb");
const host = '0.0.0.0:10000';
const exampleServer = {
    stream(call) {
        call.on('data', (cycleTLSRequest) => {
            console.log(`(server) Got client message: ${cycleTLSRequest.getRequestid()}`);
        });
        const response = new cycletls_pb_1.Response();
        response.setRequestid('Message from server');
        call.write(response);
    },
};
function getServer() {
    const server = new grpc.Server();
    server.addService(cycletls_grpc_pb_1.CycleStreamService, exampleServer);
    return server;
}
if (require.main === module) {
    const server = getServer();
    server.bindAsync(host, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Server error: ${err.message}`);
        }
        else {
            console.log(`Server bound on port: ${port}`);
            server.start();
        }
    });
}
