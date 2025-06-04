import { Component } from '@angular/core';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.page.html',
  styleUrls: ['./comedia.page.scss'],
})
export class ComediaPage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  public livrosComediaDestaque = [
    {
      titulo: 'O Alienista',
      capa: 'assets/capas/comedia1.jpg',
      id: 'comedia1',
      autor: 'Machado de Assis',
      ano: 1882,
      descricao: 'Sátira sobre a loucura e a ciência no Brasil Imperial.'
    },
    {
      titulo: 'As Memórias de um Fusca',
      capa: 'assets/capas/comedia2.jpg',
      id: 'comedia2',
      autor: 'Pedro Bandeira',
      ano: 1985,
      descricao: 'História hilária de um fusca que ganha vida.'
    },
    {
      titulo: 'Diário de um Banana',
      capa: 'assets/capas/comedia3.jpg',
      id: 'comedia3',
      autor: 'Jeff Kinney',
      ano: 2007,
      descricao: 'As desventuras cômicas de um adolescente desastrado.'
    }
  ];

  public livrosComediaMaisLidos = [
    {
      titulo: 'A Arte de Fazer Inimigos',
      capa: 'assets/capas/comedia4.jpg',
      id: 'comedia4',
      autor: 'Oscar Wilde',
      ano: 1890,
      descricao: 'Máximas afiadas sobre a sociedade hipócrita.'
    },
        {
      titulo: 'Diário de um Banana',
      capa: 'assets/capas/comedia3.jpg',
      id: 'comedia3',
      autor: 'Jeff Kinney',
      ano: 2007,
      descricao: 'As desventuras cômicas de um adolescente desastrado.'
    }
  ];

  public livrosComediaRecemADD = [
    {
      titulo: 'Diário de um Banana',
      capa: 'assets/capas/comedia3.jpg',
      id: 'comedia3',
      autor: 'Jeff Kinney',
      ano: 2007,
      descricao: 'As desventuras cômicas de um adolescente desastrado.'
    },
    {
      titulo: 'A Arte de Fazer Inimigos',
      capa: 'assets/capas/comedia4.jpg',
      id: 'comedia4',
      autor: 'Oscar Wilde',
      ano: 1890,
      descricao: 'Máximas afiadas sobre a sociedade hipócrita.'
    },
    {
      titulo: 'O Alienista',
      capa: 'assets/capas/comedia1.jpg',
      id: 'comedia1',
      autor: 'Machado de Assis',
      ano: 1882,
      descricao: 'Sátira sobre a loucura e a ciência no Brasil Imperial.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}