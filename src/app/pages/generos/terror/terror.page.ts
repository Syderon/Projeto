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

  public livrosTerrorDestaque = [
    {
      titulo: 'O Iluminado',
      capa: 'assets/capas/terror1.jpg',
      id: 'terror1',
      autor: 'Stephen King',
      ano: 1977,
      descricao: 'Clássico do terror sobre um hotel mal-assombrado e a loucura que consome seus habitantes.'
    },
    {
      titulo: 'It: A Coisa',
      capa: 'assets/capas/livro15.jpg',
      id: 'terror2',
      autor: 'Stephen King',
      ano: 1986,
      descricao: 'Um grupo de crianças enfrenta uma entidade maligna que se alimenta de seus medos.'
    }
  ];

  public livrosTerrorMaisLidos = [
    {
      titulo: 'O Exorcista',
      capa: 'assets/capas/terror3.jpg',
      id: 'terror3',
      autor: 'William Peter Blatty',
      ano: 1971,
      descricao: 'Aterrorizante história de possessão demoníaca que se tornou um marco do gênero.'
    }
  ];

  public livrosTerrorRecemADD = [
    {
      titulo: 'Coraline',
      capa: 'assets/capas/terror4.jpg',
      id: 'terror4',
      autor: 'Neil Gaiman',
      ano: 2002,
      descricao: 'Conto sombrio sobre uma menina que descobre uma versão alternativa e assustadora de sua família.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
    // Adicione aqui a navegação para a página de leitura
  }
}