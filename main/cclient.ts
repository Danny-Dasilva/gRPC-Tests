import * as grpc from '@grpc/grpc-js';
import { CycleStream } from './proto/cycletls_grpc_pb';
import { CycleTLSRequest, Response } from './proto/cycletls_pb';

const host = '0.0.0.0:9090';

const client = new CycleStream(host, grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client connect error: ${error.message}`);
  } else {
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
  const stream = client.Stream();

  // Server stream
  stream.on('data', (serverMessage: Response) => {
    console.log(
      `(client) Got server message: ${serverMessage.getResponse()}`
    );
  });

  // Client stream
  const cycleTLSRequest = new CycleTLSRequest();
  cycleTLSRequest.setCycleTLSRequest('Message from client');
  stream.write(cycleTLSRequest);
}