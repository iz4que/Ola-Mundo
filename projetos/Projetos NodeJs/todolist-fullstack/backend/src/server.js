const server = require('./app');

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));

