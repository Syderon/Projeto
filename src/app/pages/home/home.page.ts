import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    speed: 400
  };

  termoBusca: string = '';
  resultadosBusca: any[] = [];

  livrosDestaquesOriginais = [
    { titulo: '1984', capa: 'assets/capas/destaque.jpg' },
    { titulo: 'O Pequeno Príncipe', capa: 'assets/capas/destaque2.jpg' },
    { titulo: 'Dom Casmurro', capa: 'assets/capas/destaque3.jpg' },
    { titulo: 'A Revolução dos Bichos', capa: 'assets/capas/livro6.jpg' }
  ];

  livrosMaisLidosOriginais = [
    { titulo: '1984', capa: 'assets/capas/livro1.webp' },
    { titulo: 'O Pequeno Príncipe', capa: 'assets/capas/livro2.jpg' },
    { titulo: 'Dom Casmurro', capa: 'assets/capas/livro3.webp' },
    { titulo: 'O Hobbit', capa: 'assets/capas/livro4.jpg' },
    { titulo: 'Memórias Póstumas', capa: 'assets/capas/livro5.webp' },
    { titulo: 'Capitães da Areia', capa: 'assets/capas/capitaes.jpg' }
  ];

  livrosRecentesOriginais = [
    { titulo: 'Ensaio Sobre a Cegueira', capa: 'assets/capas/cegueira.jpg' },
    { titulo: 'It: A Coisa', capa: 'assets/capas/it.jpg' },
    { titulo: 'O Conto da Aia', capa: 'assets/capas/aia.jpg' },
    { titulo: 'Drácula', capa: 'assets/capas/dracula.jpg' }
  ];

  livrosDestaques = [...this.livrosDestaquesOriginais];
  livrosMaisLidos = [...this.livrosMaisLidosOriginais];
  livrosRecentes = [...this.livrosRecentesOriginais];

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  lerLivro(livro: any) {
    console.log('Lendo livro:', livro.titulo);
  }

  salvarLivro(livro: any) {
    console.log('Livro salvo:', livro.titulo);
  }

  salvarLivroPorIndex(index: number) {
    const allBooks = [...this.livrosDestaques, ...this.livrosMaisLidos, ...this.livrosRecentes];
    const livro = allBooks[index];
    this.salvarLivro(livro);
  }

  buscarLivro(event: any) {
    const termo = event.target.value?.toLowerCase() || '';
    
    if (!termo.trim()) {
      this.resultadosBusca = [];
      return;
    }

    const todosLivros = [
      ...this.livrosDestaquesOriginais,
      ...this.livrosMaisLidosOriginais,
      ...this.livrosRecentesOriginais
    ];

    this.resultadosBusca = todosLivros.filter(livro =>
      livro.titulo.toLowerCase().includes(termo)
    );
  }
}
