const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'my-vite-react-boilerplate',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;
