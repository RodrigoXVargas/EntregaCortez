const settings = {
  api: {
    personas: {
      getAll: 'http://localhost:8080/api/personas/getAll',
      getOne: 'http://localhost:8080/api/personas/get',
      save: 'http://localhost:8080/api/personas/save',
      update: 'http://localhost:8080/api/personas/update',
      delete: 'http://localhost:8080/api/personas/delete',
    },
    entidad: {
      getAll: 'http://localhost:8080/api/entidad/getAll',
      getOne: 'http://localhost:8080/api/entidad/get/',
      save: 'http://localhost:8080/api/personas/save/',
      update: 'http://localhost:8080/api/personas/update/',
      delete: 'http://localhost:8080/api/personas/delete/',
    }
  },
};

export default settings;
