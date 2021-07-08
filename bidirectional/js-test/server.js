var PROTO_PATH = __dirname + '/cycletlsproto/cycletls.proto';
var parseArgs = require('minimist');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var cycletls = grpc.loadPackageDefinition(packageDefinition).cyclestream;





/**
 * routeChat handler. Receives a stream of message/location pairs, and responds
 * with a stream of all previous messages at each of those locations.
 * @param {Duplex} call The stream for incoming and outgoing messages
 */
function Stream(call) {
  call.on('data', function(note) {
    var resp = {
        RequestID: note.RequestID,
        Status: 200,
        Body: "aaaaa",
      };
    call.write(resp);
  
  });
  call.on('end', function() {
    call.end();
  });
}

/**
 * Get a new server with the handler functions in this file bound to the methods
 * it serves.
 * @return {Server} The new server object
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(cycletls.CycleStream.service, {
    Stream: Stream
  });
  return server;
}

if (require.main === module) {
  // If this is run as a script, start a server on an unused port
  var routeServer = getServer();
  routeServer.bindAsync('0.0.0.0:10000', grpc.ServerCredentials.createInsecure(), () => {
    var argv = parseArgs(process.argv, {
      string: 'db_path'
    });
    routeServer.start();
  });
}

exports.getServer = getServer;