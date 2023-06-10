import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora Vida' },
    { codEditora: 2, nome: 'Editora Mundo Cristão' },
    { codEditora: 3, nome: 'Editora Betânia' },
    { codEditora: 4, nome: 'Editora Central Gospel' },
    { codEditora: 5, nome: 'Ágape' },
  ];

  constructor() {}

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(
      (e: Editora) => e.codEditora == codEditora
    );
    return editora?.nome || 'Desconhecido';
  }
}
