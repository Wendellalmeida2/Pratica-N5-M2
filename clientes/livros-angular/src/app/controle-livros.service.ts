import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Bíblia Sagrada',
      resumo:
        'A Bíblia Sagrada é o livro sagrado do cristianismo, contendo textos religiosos que são considerados pela maioria dos cristãos como inspirados por Deus. Dividida em duas partes, o Antigo e o Novo Testamento, a Bíblia é amplamente lida e estudada pelos fiéis como uma fonte de orientação espiritual e moral.',
      autores: ['Vários autores'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'O Peregrino',
      resumo:
        'O Peregrino é uma obra clássica da literatura cristã escrita por John Bunyan. O livro narra a jornada do personagem cristão em busca da Cidade Celestial, enfrentando obstáculos e tentações ao longo do caminho. Com alegorias e ensinamentos morais, O Peregrino é amplamente lido por cristãos de diversas denominações.',
      autores: ['John Bunyan'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'O Poder da Esposa que Ora',
      resumo:
        'O Poder da Esposa que Ora é um livro escrito por Stormie Omartian. O livro oferece orientações e conselhos práticos para as mulheres aprenderem a orar de maneira eficaz pelos seus maridos. Com base bíblica e exemplos inspiradores, a autora encoraja as esposas a fortalecerem seus relacionamentos e a se conectarem com Deus por meio da oração.',
      autores: ['Stormie Omartian'],
    },
    {
      codigo: 4,
      codEditora: 4,
      titulo: 'O Chamado Radical',
      resumo:
        'O Chamado Radical é um livro escrito por David Platt. A obra desafia os cristãos a repensarem seu compromisso com a fé e a viverem de acordo com os princípios ensinados por Jesus. O autor aborda temas como a missão da igreja, a generosidade, a renúncia e a dedicação total a Deus, apresentando um chamado à transformação e ao discipulado radical.',
      autores: ['David Platt'],
    },
  ];

  constructor() {}

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
