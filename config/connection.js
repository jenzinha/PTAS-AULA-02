const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://tebrpnub:0Au22-GP5cUAY3K3UIO3gBSYwGbPU9xM@silly.db.elephantsql.com/tebrpnub", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };