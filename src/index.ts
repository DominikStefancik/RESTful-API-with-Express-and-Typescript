// import * as debug from "debug";
import * as http from "http";

import Server from "./server";

// debug("Typescript-Express Server");

const port = normalizePort(process.env.PORT || 3000);
Server.set("port", port);

const server = http.createServer(Server);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

console.log(`Server listening on port ${port}`);


function normalizePort(value: number | string): number | string | boolean {
  const port: number = typeof value === "string" ? parseInt(value, 10) : value;

  if (port > 0) {
    return port;
  } else {
    return false;
  }
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  } 
}

function onListening(): void {
  const address = server.address;
  const bind = typeof address === "string" ? `Pipe ${port}` : `Port ${port}`;
  // debug(`Listening on ${bind}`);
}
