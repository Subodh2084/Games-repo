import { Server } from "./server"

(async () => {
    const server = Server.getInstance();
    await server.start()
})();