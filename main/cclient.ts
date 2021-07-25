import * as grpc from '@grpc/grpc-js';
import { CycleStreamClient } from './proto/cycletls_grpc_pb';
import { CycleTLSRequest, Response } from './proto/cycletls_pb';

const host = '0.0.0.0:10000';

const client = new CycleStreamClient(host, grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 20);
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
  const stream = client.stream();

  // Server stream
  stream.on('data', (serverMessage: Response) => {
    console.log(
      `(client) Got server message: ${serverMessage.getRequestid()}`
    );
  });

  // Client stream
  const cycleTLSRequest = new CycleTLSRequest();
  cycleTLSRequest.setRequestid('Message from client');
  cycleTLSRequest.setUrl("http://localhost:8081");
  cycleTLSRequest.setMethod( "GET");
  cycleTLSRequest.setHeaders("");
  cycleTLSRequest.setBody("");
  cycleTLSRequest.setJa3('771,4865-4867-4866-49195-49199-52393-52392-49196-49200-49162-49161-49171-49172-156-157-47-53-10,0-23-65281-10-11-35-16-5-51-43-13-45-28-21,29-23-24-25-256-257,0", UserAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0');

  cycleTLSRequest.setProxy("");
  cycleTLSRequest.setCookies("");  

  stream.write(cycleTLSRequest);
}
