import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  // model() {
  //   return this.store.findAll('user'); // Carrega todos os usuários
  // }

  model() {
    return [
      { nome: "Ana Silva", email: "ana.silva@example.com" },
      { nome: "Bruno Martins", email: "bruno.martins@example.com" },
      { nome: "Carla Gomes", email: "carla.gomes@example.com" },
      { nome: "David Sampaio", email: "david.sampaio@example.com" },
      { nome: "Eduardo Rocha", email: "eduardo.rocha@example.com" },
      { nome: "Fernanda Lima", email: "fernanda.lima@example.com" },
      { nome: "Gabriel Costa", email: "gabriel.costa@example.com" },
      { nome: "Helena Dias", email: "helena.dias@example.com" },
      { nome: "Igor Santos", email: "igor.santos@example.com" },
      { nome: "Julia Carvalho", email: "julia.carvalho@example.com" }
    ];
  }
}
