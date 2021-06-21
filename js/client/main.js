
var server = new grpc.Server();
server.addService(grpcChat.ChatService.service, {
    chat:chat
});
server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());
server.start();


function chat(call) {
call.on('data', function(chatRequest{
    user=call.metadata.get('username');
    msg=chatRequest.message;


for (let [msgUser, userCall] of clients) {
    if (msgUser != username) {
        userCall.write(
           {
             fromName: username,
             message : msg
           });
       }
}if (clients.get(user) === undefined) {
clients.set(user, call);
}
