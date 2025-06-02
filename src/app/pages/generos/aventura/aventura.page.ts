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

  public livrosAventuraDestaque = [
    {
      titulo: 'As Aventuras de Tom Sawyer',
      capa: 'assets/livros/aventura1.jpg',
      id: 'aventura1',
      autor: 'Mark Twain',
      ano: 1876,
      descricao: 'Clássico sobre as travessuras de um menino no rio Mississippi.'
    },
    {
      titulo: 'Viagem ao Centro da Terra',
      capa: 'assets/livros/aventura2.jpg',
      id: 'aventura2',
      autor: 'Júlio Verne',
      ano: 1864,
      descricao: 'Expedição científica a lugares nunca antes explorados.'
    },
    {
      titulo: 'Moby Dick',
      capa: 'assets/livros/aventura4.jpg',
      id: 'aventura4',
      autor: 'Herman Melville',
      ano: 1851,
      descricao: 'Epopeia da obsessão humana pela natureza.'
    }
  ];

  public livrosAventuraMaisLidos = [
    {
      titulo: 'A Ilha do Tesouro',
      capa: 'assets/livros/aventura3.jpg',
      id: 'aventura3',
      autor: 'Robert Louis Stevenson',
      ano: 1883,
      descricao: 'Caça ao tesouro pirata em uma ilha misteriosa.'
    },
    {
      titulo: 'Moby Dick',
      capa: 'assets/livros/aventura4.jpg',
      id: 'aventura4',
      autor: 'Herman Melville',
      ano: 1851,
      descricao: 'Epopeia da obsessão humana pela natureza.'
    },
    {
      titulo: 'Viagem ao Centro da Terra',
      capa: 'assets/livros/aventura2.jpg',
      id: 'aventura2',
      autor: 'Júlio Verne',
      ano: 1864,
      descricao: 'Expedição científica a lugares nunca antes explorados.'
    }
  ];

  public livrosAventuraRecemADD = [
    {
      titulo: 'Moby Dick',
      capa: 'assets/livros/aventura4.jpg',
      id: 'aventura4',
      autor: 'Herman Melville',
      ano: 1851,
      descricao: 'Epopeia da obsessão humana pela natureza.'
    },
    {
      titulo: 'Viagem ao Centro da Terra',
      capa: 'assets/livros/aventura2.jpg',
      id: 'aventura2',
      autor: 'Júlio Verne',
      ano: 1864,
      descricao: 'Expedição científica a lugares nunca antes explorados.'
    },
    {
      titulo: 'A Ilha do Tesouro',
      capa: 'assets/livros/aventura3.jpg',
      id: 'aventura3',
      autor: 'Robert Louis Stevenson',
      ano: 1883,
      descricao: 'Caça ao tesouro pirata em uma ilha misteriosa.'
    },
    {
      titulo: 'As Aventuras de Tom Sawyer',
      capa: 'assets/livros/aventura1.jpg',
      id: 'aventura1',
      autor: 'Mark Twain',
      ano: 1876,
      descricao: 'Clássico sobre as travessuras de um menino no rio Mississippi.'
    },
    {
      titulo: 'Na Natureza Selvagem',
      autor: 'Jon Krakauer',
      ano: 1996,
      descricao: 'A história real de Christopher McCandless, que abandona sua vida para uma jornada no Alasca, buscando a liberdade na natureza selvagem.'
    },
    {
      titulo: 'A Volta ao Mundo em Oitenta Dias',
      autor: 'Júlio Verne',
      ano: 1873,
      descricao: 'Phileas Fogg aposta que pode dar a volta ao mundo em apenas oitenta dias, embarcando em uma emocionante corrida contra o tempo com seu fiel mordomo.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}