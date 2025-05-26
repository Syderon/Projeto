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

  livrosFiccao = [
    {
      titulo: '1984',
      capa: 'assets/livros/ficcao1.jpg'
    },
    {
      titulo: 'Admirável Mundo Novo',
      capa: 'assets/livros/ficcao2.jpg'
    }
    // Adicione mais livros conforme desejar
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
