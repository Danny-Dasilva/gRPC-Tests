node server.js --db_path route_guide_db.json


protoc --go_out=. --go_opt=paths=source_relative     --go-grpc_out=. --go-grpc_opt=paths=source_relative     route_guide/route_guide.proto