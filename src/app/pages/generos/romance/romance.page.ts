import { Component } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.page.html',
  styleUrls: ['./romance.page.scss'],
})
export class RomancePage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  livrosRomance = [
    {
      titulo: 'Orgulho e Preconceito',
      capa: 'assets/livros/romance1.jpg'
    },
    {
      titulo: 'Como Eu Era Antes de Você',
      capa: 'assets/livros/romance2.jpg'
    }
    // Adicione mais livros conforme desejar
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
