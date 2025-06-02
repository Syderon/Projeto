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

  public livrosSuspenseDestaque = [
    {
      titulo: 'Garota Exemplar',
      capa: 'assets/livros/suspense1.jpg',
      id: 'suspense1',
      autor: 'Gillian Flynn',
      ano: 2012,
      descricao: 'Thriller psicológico sobre o desaparecimento misterioso de uma mulher perfeita.'
    },
    {
      titulo: 'O Silêncio dos Inocentes',
      capa: 'assets/livros/suspense2.jpg',
      id: 'suspense2',
      autor: 'Thomas Harris',
      ano: 1988,
      descricao: 'Clássico do suspense com o icônico Hannibal Lecter.'
    }
  ];

  public livrosSuspenseMaisLidos = [
    {
      titulo: 'A Paciente Silenciosa',
      capa: 'assets/livros/suspense3.jpg',
      id: 'suspense3',
      autor: 'Alex Michaelides',
      ano: 2019,
      descricao: 'Thriller psicológico sobre uma mulher que se recusa a falar após assassinar o marido.'
    }
  ];

  public livrosSuspenseRecemADD = [
    {
      titulo: 'O Homem de Giz',
      capa: 'assets/livros/suspense4.jpg',
      id: 'suspense4',
      autor: 'C.J. Tudor',
      ano: 2018,
      descricao: 'Mistério sombrio que envolve desenhos infantis e segredos do passado.'
    },
    {
      titulo: 'A Paciente Silenciosa',
      capa: 'assets/livros/suspense3.jpg',
      id: 'suspense3',
      autor: 'Alex Michaelides',
      ano: 2019,
      descricao: 'Thriller psicológico sobre uma mulher que se recusa a falar após assassinar o marido.'
    },
    
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
    // Adicione aqui a lógica para abrir o livro
  }
}