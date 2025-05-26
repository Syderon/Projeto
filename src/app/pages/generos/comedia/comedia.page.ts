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

  livrosComedia = [
    {
      titulo: 'O Guia do Mochileiro das Galáxias',
      capa: 'assets/livros/comedia1.jpg'
    },
    {
      titulo: 'Diário de um Banana',
      capa: 'assets/livros/comedia2.jpg'
    }
    // Adicione mais livros conforme desejar
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
