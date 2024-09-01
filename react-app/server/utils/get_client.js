const { PrismaClient } = require('@prisma/client');

const client = new PrismaClient();

const getClient = () => {
    return client;
}

module.exports = { getClient };