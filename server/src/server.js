const http = require('http');

const app = require('./app');

const PORT = prcoess.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
});



