import { JSONRPCServer } from "json-rpc-2.0";

const server = new JSONRPCServer();
server.addMethod("hello", ({ name }: { name?: string }) => {
    console.log("Hello, %s!", name);
});
