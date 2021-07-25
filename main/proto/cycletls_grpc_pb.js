// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_cycletls_pb = require('../proto/cycletls_pb.js');

function serialize_cycletls_CycleTLSRequest(arg) {
  if (!(arg instanceof proto_cycletls_pb.CycleTLSRequest)) {
    throw new Error('Expected argument of type cycletls.CycleTLSRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cycletls_CycleTLSRequest(buffer_arg) {
  return proto_cycletls_pb.CycleTLSRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cycletls_Response(arg) {
  if (!(arg instanceof proto_cycletls_pb.Response)) {
    throw new Error('Expected argument of type cycletls.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cycletls_Response(buffer_arg) {
  return proto_cycletls_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Interface exported by the server.
var CycleStreamService = exports.CycleStreamService = {
  // A Bidirectional streaming RPC.
//
// Accepts a stream of RouteNotes sent while a route is being traversed,
// while receiving other RouteNotes (e.g. from other users).
stream: {
    path: '/cycletls.CycleStream/Stream',
    requestStream: true,
    responseStream: true,
    requestType: proto_cycletls_pb.CycleTLSRequest,
    responseType: proto_cycletls_pb.Response,
    requestSerialize: serialize_cycletls_CycleTLSRequest,
    requestDeserialize: deserialize_cycletls_CycleTLSRequest,
    responseSerialize: serialize_cycletls_Response,
    responseDeserialize: deserialize_cycletls_Response,
  },
};

exports.CycleStreamClient = grpc.makeGenericClientConstructor(CycleStreamService);
