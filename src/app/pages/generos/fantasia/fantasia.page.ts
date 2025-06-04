import { Component } from '@angular/core';

@Component({
  selector: 'app-fantasia',
  templateUrl: './fantasia.page.html',
  styleUrls: ['./fantasia.page.scss'],
})
export class FantasiaPage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  public livrosFantasiaDestaque = [
    {
      titulo: 'O Senhor dos Anéis',
      capa: 'assets/capas/livro2.jpg',
      id: 'fantasia1',
      autor: 'J.R.R. Tolkien',
      ano: 1954,
      descricao: 'A épica jornada para destruir o Um Anel na Terra-Média.'
    },
    {
      titulo: 'Harry Potter e a Pedra Filosofal',
      capa: 'assets/capas/fantasia2.jpg',
      id: 'fantasia2',
      autor: 'J.K. Rowling',
      ano: 1997,
      descricao: 'O início da aventura do jovem bruxo na Escola de Magia e Bruxaria de Hogwarts.'
    },
    {
      titulo: 'As Crônicas de Nárnia',
      capa: 'assets/capas/fantasia3.jpg',
      id: 'fantasia3',
      autor: 'C.S. Lewis',
      ano: 1950,
      descricao: 'Viagens mágicas através de um guarda-roupa para um mundo de fantasia.'
    },
  ];

  public livrosFantasiaMaisLidos = [
    {
      titulo: 'As Crônicas de Nárnia',
      capa: 'assets/capas/fantasia3.jpg',
      id: 'fantasia3',
      autor: 'C.S. Lewis',
      ano: 1950,
      descricao: 'Viagens mágicas através de um guarda-roupa para um mundo de fantasia.'
    },
    {
      titulo: 'O Senhor dos Anéis',
      capa: 'assets/capas/livro2.jpg',
      id: 'fantasia1',
      autor: 'J.R.R. Tolkien',
      ano: 1954,
      descricao: 'A épica jornada para destruir o Um Anel na Terra-Média.'
    },
    {
      titulo: 'Harry Potter e a Pedra Filosofal',
      capa: 'assets/capas/fantasia2.jpg',
      id: 'fantasia2',
      autor: 'J.K. Rowling',
      ano: 1997,
      descricao: 'O início da aventura do jovem bruxo na Escola de Magia e Bruxaria de Hogwarts.'
    }
  ];

  public livrosFantasiaRecemADD = [
    {
      titulo: 'O Nome do Vento',
      capa: 'assets/capas/fantasia4.jpg',
      id: 'fantasia4',
      autor: 'Patrick Rothfuss',
      ano: 2007,
      descricao: 'A história do lendário mago Kvothe contada por ele mesmo.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}