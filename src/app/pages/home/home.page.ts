import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../theme.service';

interface Livro {
  titulo: string;
  capa: string;
  id?: string; // Adicionando a propriedade 'id' como opcional
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    speed: 400,
  };

  termoBusca: string = '';
  resultadosBusca: Livro[] = [];

  livrosDestaquesOriginais: Livro[] = [
    { titulo: '1984', capa: 'assets/capas/destaque.jpg', id: 'destaque1' },
    { titulo: 'O Pequeno Príncipe', capa: 'assets/capas/destaque2.jpg', id: 'destaque2' },
    { titulo: 'Dom Casmurro', capa: 'assets/capas/destaque3.jpg', id: 'destaque3' },
    { titulo: 'A Revolução dos Bichos', capa: 'assets/capas/livro6.jpg', id: 'destaque4' },
  ];

  livrosMaisLidosOriginais: Livro[] = [
    { titulo: '1984', capa: 'assets/capas/livro1.webp', id: 'lido1' },
    { titulo: 'O Pequeno Príncipe', capa: 'assets/capas/livro2.jpg', id: 'lido2' },
    { titulo: 'Dom Casmurro', capa: 'assets/capas/livro3.webp', id: 'lido3' },
    { titulo: 'O Hobbit', capa: 'assets/capas/livro4.jpg', id: 'lido4' },
    { titulo: 'Memórias Póstumas', capa: 'assets/capas/livro5.webp', id: 'lido5' },
    { titulo: 'Capitães da Areia', capa: 'assets/capas/capitaes.jpg', id: 'lido6' },
  ];

  livrosRecentesOriginais: Livro[] = [
    { titulo: 'Ensaio Sobre a Cegueira', capa: 'assets/capas/cegueira.jpg', id: 'recente1' },
    { titulo: 'It: A Coisa', capa: 'assets/capas/it.jpg', id: 'recente2' },
    { titulo: 'O Conto da Aia', capa: 'assets/capas/aia.jpg', id: 'recente3' },
    { titulo: 'Drácula', capa: 'assets/capas/dracula.jpg', id: 'recente4' },
  ];

  livrosDestaques: Livro[] = [...this.livrosDestaquesOriginais];
  livrosMaisLidos: Livro[] = [...this.livrosMaisLidosOriginais];
  livrosRecentes: Livro[] = [...this.livrosRecentesOriginais];
  isDarkMode: boolean = false;
  private themeSubscription: Subscription | null = null;

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  lerLivro(livro: Livro) {
    console.log('Lendo livro:', livro.titulo);
  }

  salvarLivro(livro: Livro) {
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
      ...this.livrosRecentesOriginais,
    ];

    this.resultadosBusca = todosLivros.filter(livro =>
      livro.titulo.toLowerCase().includes(termo)
    );
  }

  trackByLivro(index: number, livro: Livro): string | number | undefined {
    return livro.id || index;
  }
}