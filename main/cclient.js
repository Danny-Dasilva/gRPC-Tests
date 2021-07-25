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
const client = new cycletls_grpc_pb_1.CycleStreamClient(host, grpc.credentials.createInsecure());
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 20);
client.waitForReady(deadline, (error) => {
    if (error) {
        console.log(`Client connect error: ${error.message}`);
    }
    else {
        onClientReady();
    }
});
function onClientReady() {
    switch (process.argv[process.argv.length - 1]) {
        case '--bidi-streaming':
            doBidirectionalStreamingCall();
            break;
        default:
            throw new Error('Example not specified');
    }
}
function doBidirectionalStreamingCall() {
    const stream = client.stream();
    // Server stream
    stream.on('data', (serverMessage) => {
        console.log(`(client) Got server message: ${serverMessage.getRequestid()}`);
    });
    // Client stream
    const cycleTLSRequest = new cycletls_pb_1.CycleTLSRequest();
    cycleTLSRequest.setRequestid('Message from client');
    cycleTLSRequest.setUrl("http://localhost:8081");
    cycleTLSRequest.setMethod("GET");
    cycleTLSRequest.setHeaders("");
    cycleTLSRequest.setBody("");
    cycleTLSRequest.setJa3('771,4865-4867-4866-49195-49199-52393-52392-49196-49200-49162-49161-49171-49172-156-157-47-53-10,0-23-65281-10-11-35-16-5-51-43-13-45-28-21,29-23-24-25-256-257,0", UserAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0');
    cycleTLSRequest.setProxy("");
    cycleTLSRequest.setCookies("");
    stream.write(cycleTLSRequest);
}
