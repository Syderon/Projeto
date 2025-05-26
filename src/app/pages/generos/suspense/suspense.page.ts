import { Component } from '@angular/core';

@Component({
  selector: 'app-suspense',
  templateUrl: './suspense.page.html',
  styleUrls: ['./suspense.page.scss'],
})
export class SuspensePage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  livrosSuspense = [
    {
      titulo: 'Garota Exemplar',
      capa: 'assets/livros/suspense1.jpg'
    },
    {
      titulo: 'O Silêncio dos Inocentes',
      capa: 'assets/livros/suspense2.jpg'
    }
    // Adicione mais livros conforme desejar
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
