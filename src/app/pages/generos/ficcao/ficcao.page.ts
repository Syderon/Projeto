import { Component } from '@angular/core';

@Component({
  selector: 'app-ficcao',
  templateUrl: './ficcao.page.html',
  styleUrls: ['./ficcao.page.scss'],
})
export class FiccaoPage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  public livrosFiccaoDestaque = [
    {
      titulo: '1984',
      capa: 'assets/livros/ficcao1.jpg',
      id: 'ficcao1',
      autor: 'George Orwell',
      ano: 1949,
      descricao: 'Uma distopia clássica sobre vigilância governamental e controle da verdade.'
    },
    {
      titulo: 'Admirável Mundo Novo',
      capa: 'assets/livros/ficcao2.jpg',
      id: 'ficcao2',
      autor: 'Aldous Huxley',
      ano: 1932,
      descricao: 'Visão futurista de uma sociedade controlada por prazeres e manipulação genética.'
    },
    {
      titulo: 'Fahrenheit 451',
      capa: 'assets/livros/ficcao3.jpg',
      id: 'ficcao3',
      autor: 'Ray Bradbury',
      ano: 1953,
      descricao: 'Sobre uma sociedade onde livros são proibidos e bombeiros queimam obras literárias.'
    }
  ];

  public livrosFiccaoMaisLidos = [
    {
      titulo: 'Fahrenheit 451',
      capa: 'assets/livros/ficcao3.jpg',
      id: 'ficcao3',
      autor: 'Ray Bradbury',
      ano: 1953,
      descricao: 'Sobre uma sociedade onde livros são proibidos e bombeiros queimam obras literárias.'
    },    
    {
      titulo: '1984',
      capa: 'assets/livros/ficcao1.jpg',
      id: 'ficcao1',
      autor: 'George Orwell',
      ano: 1949,
      descricao: 'Uma distopia clássica sobre vigilância governamental e controle da verdade.'
    },
    {
      titulo: 'Admirável Mundo Novo',
      capa: 'assets/livros/ficcao2.jpg',
      id: 'ficcao2',
      autor: 'Aldous Huxley',
      ano: 1932,
      descricao: 'Visão futurista de uma sociedade controlada por prazeres e manipulação genética.'
    }
  ];

  public livrosFiccaoRecemADD = [
    {
      titulo: 'O Conto da Aia',
      capa: 'assets/livros/ficcao4.jpg',
      id: 'ficcao4',
      autor: 'Margaret Atwood',
      ano: 1985,
      descricao: 'Distopia onde mulheres são oprimidas em um regime teocrático extremista.'
    },
    {
      titulo: 'Fahrenheit 451',
      capa: 'assets/livros/ficcao3.jpg',
      id: 'ficcao3',
      autor: 'Ray Bradbury',
      ano: 1953,
      descricao: 'Sobre uma sociedade onde livros são proibidos e bombeiros queimam obras literárias.'
    },
    {
      titulo: '1984',
      capa: 'assets/livros/ficcao1.jpg',
      id: 'ficcao1',
      autor: 'George Orwell',
      ano: 1949,
      descricao: 'Uma distopia clássica sobre vigilância governamental e controle da verdade.'
    },
    {
      titulo: 'Admirável Mundo Novo',
      capa: 'assets/livros/ficcao2.jpg',
      id: 'ficcao2',
      autor: 'Aldous Huxley',
      ano: 1932,
      descricao: 'Visão futurista de uma sociedade controlada por prazeres e manipulação genética.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}