import { createClient } from 'redis';

const client = createClient({
    password: redis_password,
    socket: {
        host: redis_host,
        port: redis_port
    }
});