const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    apiUrl: 'http://pokeapi.co/api/v2',
  }
};

module.exports = config[env];
