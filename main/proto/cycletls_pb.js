// source: proto/cycletls.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.cycletls.CycleTLSRequest', null, global);
goog.exportSymbol('proto.cycletls.Response', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cycletls.CycleTLSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cycletls.CycleTLSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cycletls.CycleTLSRequest.displayName = 'proto.cycletls.CycleTLSRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cycletls.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cycletls.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cycletls.Response.displayName = 'proto.cycletls.Response';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cycletls.CycleTLSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cycletls.CycleTLSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cycletls.CycleTLSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cycletls.CycleTLSRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    method: jspb.Message.getFieldWithDefault(msg, 3, ""),
    headers: jspb.Message.getFieldWithDefault(msg, 4, ""),
    body: jspb.Message.getFieldWithDefault(msg, 5, ""),
    ja3: jspb.Message.getFieldWithDefault(msg, 6, ""),
    useragent: jspb.Message.getFieldWithDefault(msg, 7, ""),
    proxy: jspb.Message.getFieldWithDefault(msg, 8, ""),
    cookies: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cycletls.CycleTLSRequest}
 */
proto.cycletls.CycleTLSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cycletls.CycleTLSRequest;
  return proto.cycletls.CycleTLSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cycletls.CycleTLSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cycletls.CycleTLSRequest}
 */
proto.cycletls.CycleTLSRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeaders(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setJa3(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseragent(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCookies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cycletls.CycleTLSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cycletls.CycleTLSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cycletls.CycleTLSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cycletls.CycleTLSRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHeaders();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getJa3();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUseragent();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getProxy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCookies();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string RequestID = 1;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string URL = 2;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Method = 3;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Headers = 4;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getHeaders = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setHeaders = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Body = 5;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string Ja3 = 6;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getJa3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setJa3 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string UserAgent = 7;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getUseragent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setUseragent = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Proxy = 8;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getProxy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setProxy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Cookies = 9;
 * @return {string}
 */
proto.cycletls.CycleTLSRequest.prototype.getCookies = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.CycleTLSRequest} returns this
 */
proto.cycletls.CycleTLSRequest.prototype.setCookies = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cycletls.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cycletls.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cycletls.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cycletls.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    body: jspb.Message.getFieldWithDefault(msg, 3, ""),
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cycletls.Response}
 */
proto.cycletls.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cycletls.Response;
  return proto.cycletls.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cycletls.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cycletls.Response}
 */
proto.cycletls.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 4:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cycletls.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cycletls.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cycletls.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cycletls.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string RequestID = 1;
 * @return {string}
 */
proto.cycletls.Response.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.Response} returns this
 */
proto.cycletls.Response.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 Status = 2;
 * @return {number}
 */
proto.cycletls.Response.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cycletls.Response} returns this
 */
proto.cycletls.Response.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string Body = 3;
 * @return {string}
 */
proto.cycletls.Response.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cycletls.Response} returns this
 */
proto.cycletls.Response.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> Headers = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.cycletls.Response.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cycletls.Response} returns this
 */
proto.cycletls.Response.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
  return this;};


goog.object.extend(exports, proto.cycletls);
