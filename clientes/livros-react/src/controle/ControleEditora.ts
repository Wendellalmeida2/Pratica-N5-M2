import Editora from '../modelo/Editora';

interface Editoras {
  [key: number]: Editora;
}

const editoras: Editoras = {
  1: { codEditora: 1, nome: 'Editora Vida' },
  2: { codEditora: 2, nome: 'Editora Mundo Cristão' },
  3: { codEditora: 3, nome: 'Editora Betânia' },
  4: { codEditora: 4, nome: 'Editora Central Gospel' },
  5: { codEditora: 5, nome: 'Editora Ágape' },
};

export default class ControleEditora {
  public getNomeEditora(codEditora: number): string {
    if (!Number.isInteger(codEditora)) {
      throw new Error('O código da editora deve ser um número inteiro.');
    }
    const editora = editoras[codEditora];
    return editora ? editora.nome : 'Editora não encontrada';
  }

  public getEditoras(): Editora[] {
    return Object.values(editoras);
  }
}