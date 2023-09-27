const config = {
    port: process.env.NODE_ENV === 'test' ? 3000 : 4000
  };
  
  module.exports = config;
  