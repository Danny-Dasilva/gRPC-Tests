import * as grpc from '@grpc/grpc-js';
import { CycleStream, ICycleStream } from './proto/example_grpc_pb';
import { ClientMessage, ServerMessage } from './proto/example_pb';

const host = '0.0.0.0:9090';

const exampleServer: ICycleStream = {
  
  bidirectionalStreamingCall(
    call: grpc.ServerDuplexStream<cycleTLSRequest, Response>
  ) {
    call.on('data', (cycleTLSRequest: cycleTLSRequest) => {
      console.log(
        `(server) Got client message: ${cycleTLSRequest.getClientMessage()}`
      );
    });

    const response = new Response();
    response.setResponse('Message from server');
    call.write(response);
  },
};

function getServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(CycleStream, exampleServer);
  return server;
}

if (require.main === module) {
  const server = getServer();
  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.log(`Server bound on port: ${port}`);
        server.start();
      }
    }
  );
}