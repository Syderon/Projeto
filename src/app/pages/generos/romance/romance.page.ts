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

  public livrosRomanceDestaque = [
    {
      titulo: 'Orgulho e Preconceito',
      capa: 'assets/livros/romance1.jpg',
      id: 'romance1',
      autor: 'Jane Austen',
      ano: 1813,
      descricao: 'Clássico sobre Elizabeth Bennet e Mr. Darcy em uma história de amor e superação de preconceitos.'
    },
    {
      titulo: 'Como Eu Era Antes de Você',
      capa: 'assets/livros/romance2.jpg',
      id: 'romance2',
      autor: 'Jojo Moyes',
      ano: 2012,
      descricao: 'Comovente história de amor entre uma cuidadora e um homem tetraplégico.'
    }
  ];

  public livrosRomanceMaisLidos = [
    {
      titulo: 'A Culpa é das Estrelas',
      capa: 'assets/livros/romance3.jpg',
      id: 'romance3',
      autor: 'John Green',
      ano: 2012,
      descricao: 'Doce e trágica história de amor entre dois adolescentes com câncer.'
    },
    {
      titulo: 'Eleanor & Park',
      capa: 'assets/livros/romance4.jpg',
      id: 'romance4',
      autor: 'Rainbow Rowell',
      ano: 2013,
      descricao: 'História de amor entre dois adolescentes incomuns nos anos 1980.'
    },
    {
      titulo: 'Orgulho e Preconceito',
      capa: 'assets/livros/romance1.jpg',
      id: 'romance1',
      autor: 'Jane Austen',
      ano: 1813,
      descricao: 'Clássico sobre Elizabeth Bennet e Mr. Darcy em uma história de amor e superação de preconceitos.'
    },
    {
      titulo: 'Como Eu Era Antes de Você',
      capa: 'assets/livros/romance2.jpg',
      id: 'romance2',
      autor: 'Jojo Moyes',
      ano: 2012,
      descricao: 'Comovente história de amor entre uma cuidadora e um homem tetraplégico.'
    }
  ];

  public livrosRomanceRecemADD = [
    {
      titulo: 'Eleanor & Park',
      capa: 'assets/livros/romance4.jpg',
      id: 'romance4',
      autor: 'Rainbow Rowell',
      ano: 2013,
      descricao: 'História de amor entre dois adolescentes incomuns nos anos 1980.'
    },
    {
      titulo: 'Orgulho e Preconceito',
      capa: 'assets/livros/romance1.jpg',
      id: 'romance1',
      autor: 'Jane Austen',
      ano: 1813,
      descricao: 'Clássico sobre Elizabeth Bennet e Mr. Darcy em uma história de amor e superação de preconceitos.'
    },
    {
      titulo: 'Como Eu Era Antes de Você',
      capa: 'assets/livros/romance2.jpg',
      id: 'romance2',
      autor: 'Jojo Moyes',
      ano: 2012,
      descricao: 'Comovente história de amor entre uma cuidadora e um homem tetraplégico.'
    },
    {
      titulo: 'A Culpa é das Estrelas',
      capa: 'assets/livros/romance3.jpg',
      id: 'romance3',
      autor: 'John Green',
      ano: 2012,
      descricao: 'Doce e trágica história de amor entre dois adolescentes com câncer.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}