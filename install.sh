go get -u github.com/golang/protobuf/protoc-gen-go
go env -w  GO111MODULE=auto
protoc --go_out=plugins=grpc:chat chat.proto
protoc --go-grpc_out=chat chat.proto



protoc --go_out=chat --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative --go-grpc_out=chat chat.proto
GO111MODULE=on go get golang.org/x/tools/gopls@latest
