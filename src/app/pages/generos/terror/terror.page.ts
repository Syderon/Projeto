import { Component } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  livrosTerror = [
    {
      titulo: 'O Iluminado',
      capa: 'assets/livros/terror1.jpg'
    },
    {
      titulo: 'It: A Coisa',
      capa: 'assets/livros/terror2.jpg'
    }
    // Adicione mais livros de terror conforme desejar
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
