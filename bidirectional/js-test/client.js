var PROTO_PATH = __dirname + '/cycletlsproto/cycletls.proto';

var async = require('async');

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
var cyclestream = grpc.loadPackageDefinition(packageDefinition).cyclestream;
var client = new cyclestream.CycleStream('localhost:10000',
                                       grpc.credentials.createInsecure());

/**
 * Run the routeChat demo. Send some chat messages, and print any chat messages
 * that are sent from the server.
 * @param {function} callback Called when the demo is complete
 */
function runCycleTLS(callback) {
  var call = client.Stream();
  call.on('data', function(note) {
    console.log('Got message "' + note.RequestID + '" at ' +
        note.Status + ', ' + note.Body);
  });
  call.on('end', callback);

  var note = {RequestID: "2", Options: {URL: "11", Method: "22", Headers: "33", Body: "44", Ja3: "55", UserAgent: "66", Proxy: "77", Cookies: "88"}}

  call.write(note);

  call.end();
}

/**
 * Run all of the demos in order
 */
function main() {
  async.series([
    runCycleTLS
  ]);
}
if (require.main === module) {
  main();
}
exports.runCycleTLS = runCycleTLS;