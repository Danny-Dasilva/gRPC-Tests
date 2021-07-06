var PROTO_PATH = __dirname + '/protos/route_guide.proto';

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
var routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;
var client = new routeguide.RouteGuide('localhost:50051',
                                       grpc.credentials.createInsecure());

var COORD_FACTOR = 1e7;




/**
 * Run the routeChat demo. Send some chat messages, and print any chat messages
 * that are sent from the server.
 * @param {function} callback Called when the demo is complete
 */
function runRouteChat(callback) {
  var call = client.routeChat();
  call.on('data', function(note) {
    console.log('Got message "' + note.message + '" at ' +
        note.location.latitude + ', ' + note.location.longitude);
  });

  call.on('end', callback);

  var notes = [{
    location: {
      latitude: 0,
      longitude: 0
    },
    message: 'First message'
  }, {
    location: {
      latitude: 0,
      longitude: 1
    },
    message: 'Second message'
  }, {
    location: {
      latitude: 1,
      longitude: 0
    },
    message: 'Third message'
  }, {
    location: {
      latitude: 0,
      longitude: 0
    },
    message: 'Fourth message'
  }];
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    console.log('Sending message "' + note.message + '" at ' +
        note.location.latitude + ', ' + note.location.longitude);
    call.write(note);
  }
  call.end();
}

/**
 * Run all of the demos in order
 */
function main() {
  async.series([
    runRouteChat
  ]);
}

if (require.main === module) {
  main();
}


exports.runRouteChat = runRouteChat;