protoc-gen:
    @protoc --proto_path=protoc --js_out=library=petshop,binary:protoc protoc/petshop.proto