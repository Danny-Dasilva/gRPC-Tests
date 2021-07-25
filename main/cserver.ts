import * as grpc from '@grpc/grpc-js';
import { CycleStreamService, ICycleStreamServer } from './proto/cycletls_grpc_pb';
import { CycleTLSRequest, Response } from './proto/cycletls_pb';

const host = '0.0.0.0:10000';

const exampleServer: ICycleStreamServer = {
  
  stream(
    call: grpc.ServerDuplexStream<CycleTLSRequest, Response>
  ) {
    call.on('data', (cycleTLSRequest: CycleTLSRequest) => {
      console.log(
        `(server) Got client message: ${cycleTLSRequest.getRequestid()}`
      );
    });

    const response = new Response();
    response.setRequestid('Message from server');
    call.write(response);
  },
};

function getServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(CycleStreamService, exampleServer);
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