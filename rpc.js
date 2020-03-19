const PROTO_PATH = __dirname + '/api/grpc/protoc/petshop.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        defaults: true
    });
