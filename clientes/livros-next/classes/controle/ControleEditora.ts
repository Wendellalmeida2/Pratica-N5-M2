import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  { codEditora: 1, nome: 'Editora Vida' },
  { codEditora: 2, nome: 'Editora Mundo Cristão' },
  { codEditora: 3, nome: 'Editora Betânia' },
  { codEditora: 4, nome: 'Editora Central Gospel' },
  { codEditora: 5, nome: 'Editora Ágape' },
];

export default class ControleEditora {
  public getNomeEditora(codEditora: number): string {
    if (!Number.isInteger(codEditora)) {
      throw new Error('O código da editora deve ser um número inteiro.');
    }
    const editora = editoras.find(item => item.codEditora == codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }

  public getEditoras(): Editora[] {
    return editoras;
  }
}