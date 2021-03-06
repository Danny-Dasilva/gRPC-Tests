// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package cyclestream

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CycleStreamClient is the client API for CycleStream service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CycleStreamClient interface {
	// A Bidirectional streaming RPC.
	//
	// Accepts a stream of RouteNotes sent while a route is being traversed,
	// while receiving other RouteNotes (e.g. from other users).
	Stream(ctx context.Context, opts ...grpc.CallOption) (CycleStream_StreamClient, error)
}

type cycleStreamClient struct {
	cc grpc.ClientConnInterface
}

func NewCycleStreamClient(cc grpc.ClientConnInterface) CycleStreamClient {
	return &cycleStreamClient{cc}
}

func (c *cycleStreamClient) Stream(ctx context.Context, opts ...grpc.CallOption) (CycleStream_StreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &CycleStream_ServiceDesc.Streams[0], "/cyclestream.CycleStream/Stream", opts...)
	if err != nil {
		return nil, err
	}
	x := &cycleStreamStreamClient{stream}
	return x, nil
}

type CycleStream_StreamClient interface {
	Send(*CycleTLSRequest) error
	Recv() (*Response, error)
	grpc.ClientStream
}

type cycleStreamStreamClient struct {
	grpc.ClientStream
}

func (x *cycleStreamStreamClient) Send(m *CycleTLSRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *cycleStreamStreamClient) Recv() (*Response, error) {
	m := new(Response)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// CycleStreamServer is the server API for CycleStream service.
// All implementations must embed UnimplementedCycleStreamServer
// for forward compatibility
type CycleStreamServer interface {
	// A Bidirectional streaming RPC.
	//
	// Accepts a stream of RouteNotes sent while a route is being traversed,
	// while receiving other RouteNotes (e.g. from other users).
	Stream(CycleStream_StreamServer) error
	mustEmbedUnimplementedCycleStreamServer()
}

// UnimplementedCycleStreamServer must be embedded to have forward compatible implementations.
type UnimplementedCycleStreamServer struct {
}

func (UnimplementedCycleStreamServer) Stream(CycleStream_StreamServer) error {
	return status.Errorf(codes.Unimplemented, "method Stream not implemented")
}
func (UnimplementedCycleStreamServer) mustEmbedUnimplementedCycleStreamServer() {}

// UnsafeCycleStreamServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CycleStreamServer will
// result in compilation errors.
type UnsafeCycleStreamServer interface {
	mustEmbedUnimplementedCycleStreamServer()
}

func RegisterCycleStreamServer(s grpc.ServiceRegistrar, srv CycleStreamServer) {
	s.RegisterService(&CycleStream_ServiceDesc, srv)
}

func _CycleStream_Stream_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(CycleStreamServer).Stream(&cycleStreamStreamServer{stream})
}

type CycleStream_StreamServer interface {
	Send(*Response) error
	Recv() (*CycleTLSRequest, error)
	grpc.ServerStream
}

type cycleStreamStreamServer struct {
	grpc.ServerStream
}

func (x *cycleStreamStreamServer) Send(m *Response) error {
	return x.ServerStream.SendMsg(m)
}

func (x *cycleStreamStreamServer) Recv() (*CycleTLSRequest, error) {
	m := new(CycleTLSRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// CycleStream_ServiceDesc is the grpc.ServiceDesc for CycleStream service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CycleStream_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "cyclestream.CycleStream",
	HandlerType: (*CycleStreamServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Stream",
			Handler:       _CycleStream_Stream_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "cycletlsproto/cycletls.proto",
}
