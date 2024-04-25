import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api'; // Se sua API estiver sob o caminho /api
  host = 'http://localhost:3000'; // URL do seu backend
}
