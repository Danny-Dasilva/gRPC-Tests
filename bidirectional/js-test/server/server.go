package main

import (

	"flag"
	"fmt"
	"io"
	"log"
	"net"
	"sync"

	"google.golang.org/grpc"

	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/examples/data"



	pb "github.com/Danny-Dasilva/gRPC-Tests/bidirectional/js-test/cycletlsproto"
)

var (
	tls        = flag.Bool("tls", false, "Connection uses TLS if true, else plain TCP")
	certFile   = flag.String("cert_file", "", "The TLS cert file")
	keyFile    = flag.String("key_file", "", "The TLS key file")
	port       = flag.Int("port", 10000, "The server port")
)

type routeGuideServer struct {
	pb.UnimplementedCycleStreamServer

	mu         sync.Mutex // protects routeNotes
}



// RouteChat receives a stream of message/location pairs, and responds with a stream of all
// previous messages at each of those locations.
func (s *routeGuideServer) Stream(stream pb.CycleStream_StreamServer) error {
	for {
		in, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

        headers := make(map[string]string)
        response := &pb.Response{RequestID: in.RequestID, Status: 200, Body: "someshit", Headers: headers}
        if err := stream.Send(response); err != nil {
            return err
        }
	}
}

func newServer() *routeGuideServer {
	s := &routeGuideServer{}
	return s
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	if *tls {
		if *certFile == "" {
			*certFile = data.Path("x509/server_cert.pem")
		}
		if *keyFile == "" {
			*keyFile = data.Path("x509/server_key.pem")
		}
		creds, err := credentials.NewServerTLSFromFile(*certFile, *keyFile)
		if err != nil {
			log.Fatalf("Failed to generate credentials %v", err)
		}
		opts = []grpc.ServerOption{grpc.Creds(creds)}
	}
	grpcServer := grpc.NewServer(opts...)
	pb.RegisterCycleStreamServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}

