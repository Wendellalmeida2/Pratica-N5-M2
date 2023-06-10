const mongoose = require('mongoose');

const banco = mongoose.connection;

mongoose.connect(
  '/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

banco.on(
  'error',
  console.error.bind(console, 'Erro na conexão com o MongoDB:')
);
banco.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
});

module.exports = banco;
