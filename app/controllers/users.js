import Controller from '@ember/controller';

export default class UsersController extends Controller {

  saveUser(user) {
    user.save().then(() => {
      alert('Usuário salvo com sucesso!', this.user);
    }).catch(error => {
      console.error('Erro ao salvar o usuário:', error);
    });
  }

  deleteUser(user) {
    user.destroyRecord().then(() => {
      alert('Usuário deletado com sucesso!');
    }).catch(error => {
      console.error('Erro ao deletar o usuário:', error);
    });
  }
}
