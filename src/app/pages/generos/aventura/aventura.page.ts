import { Component } from '@angular/core';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.page.html',
  styleUrls: ['./aventura.page.scss'],
})
export class AventuraPage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  livrosAventura = [
    {
      titulo: 'As Aventuras de Tom Sawyer',
      capa: 'assets/livros/aventura1.jpg'
    },
    {
      titulo: 'Viagem ao Centro da Terra',
      capa: 'assets/livros/aventura2.jpg'
    }
    // Adicione mais livros de aventura conforme desejar
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
