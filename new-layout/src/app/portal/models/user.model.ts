export interface IUser {
  id: string;
  nome: string;
  primeiroNome: string;
  sobrenome: string;
  authdata?: string;
}

export class User implements IUser {
  id: string;
  nome: string;
  primeiroNome: string;
  sobrenome: string;
  authdata?: string;

  public static fromResource(resource: IUser): IUser {
    const user = new User();
    user.id = resource.id;
    user.nome = resource.nome;
    user.primeiroNome = resource.primeiroNome;
    user.sobrenome = resource.sobrenome;
    user.authdata = resource.authdata;
    return user;
  }
}
