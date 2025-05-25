// home.page.ts
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../theme.service';
import { IonSearchbar, IonContent } from '@ionic/angular'; // Importe IonContent aqui

interface Livro {
  titulo: string;
  capa: string;
  id?: string;
  autor?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild(IonContent) ionContent!: IonContent; // Adicione esta linha para a referência à ion-content

  slideOpts = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    centeredSlides: false,
    speed: 400,
  };

  termoBusca: string = '';
  resultadosBusca: Livro[] = [];

  livrosDestaquesOriginais: Livro[] = [
    { titulo: '1984', capa: 'assets/capas/destaque.jpg', id: 'destaque1', autor: 'George Orwell' },
    { titulo: 'O Pequeno Príncipe', capa: 'assets/capas/destaque2.jpg', id: 'destaque2', autor: 'Antoine de Saint-Exupéry' },
    { titulo: 'Dom Casmurro', capa: 'assets/capas/destaque3.jpg', id: 'destaque3', autor: 'Machado de Assis' },
    { titulo: 'A Revolução dos Bichos', capa: 'assets/capas/livro6.jpg', id: 'destaque4', autor: 'George Orwell' },
    { titulo: 'Orgulho e Preconceito', capa: 'assets/capas/pride.jpg', id: 'destaque5', autor: 'Jane Austen' },
    { titulo: 'Frankenstein', capa: 'assets/capas/frankenstein.jpg', id: 'destaque6', autor: 'Mary Shelley' },
  ];

  livrosMaisLidosOriginais: Livro[] = [
    { titulo: '1984', capa: 'assets/capas/livro1.webp', id: 'lido1', autor: 'George Orwell' },
    { titulo: 'O Pequeno Príncipe', capa: 'assets/capas/livro2.jpg', id: 'lido2', autor: 'Antoine de Saint-Exupéry' },
    { titulo: 'Dom Casmurro', capa: 'assets/capas/livro3.webp', id: 'lido3', autor: 'Machado de Assis' },
    { titulo: 'O Hobbit', capa: 'assets/capas/livro4.jpg', id: 'lido4', autor: 'J.R.R. Tolkien' },
    { titulo: 'Memórias Póstumas', capa: 'assets/capas/livro5.webp', id: 'lido5', autor: 'Machado de Assis' },
    { titulo: 'Capitães da Areia', capa: 'assets/capas/capitaes.jpg', id: 'lido6', autor: 'Jorge Amado' },
    { titulo: 'Cem Anos de Solidão', capa: 'assets/capas/cem_anos.jpg', id: 'lido7', autor: 'Gabriel García Márquez' },
    { titulo: 'O Senhor dos Anéis', capa: 'assets/capas/lord.jpg', id: 'lido8', autor: 'J.R.R. Tolkien' },
  ];

  livrosRecentesOriginais: Livro[] = [
    { titulo: 'Ensaio Sobre a Cegueira', capa: 'assets/capas/cegueira.jpg', id: 'recente1', autor: 'José Saramago' },
    { titulo: 'It: A Coisa', capa: 'assets/capas/it.jpg', id: 'recente2', autor: 'Stephen King' },
    { titulo: 'O Conto da Aia', capa: 'assets/capas/aia.jpg', id: 'recente3', autor: 'Margaret Atwood' },
    { titulo: 'Drácula', capa: 'assets/capas/dracula.jpg', id: 'recente4', autor: 'Bram Stoker' },
    { titulo: 'Percy Jackson', capa: 'assets/capas/percy.jpg', id: 'recente5', autor: 'Rick Riordan' },
    { titulo: 'As Crônicas de Nárnia', capa: 'assets/capas/narnia.jpg', id: 'recente6', autor: 'C.S. Lewis' },
  ];

  livrosDestaques: Livro[] = [...this.livrosDestaquesOriginais];
  livrosMaisLidos: Livro[] = [...this.livrosMaisLidosOriginais];
  livrosRecentes: Livro[] = [...this.livrosRecentesOriginais];
  
  isDarkMode: boolean = false;
  isScrolled: boolean = false; // Nova propriedade para controlar a classe CSS
  
  private themeSubscription: Subscription | null = null;
  private scrollSubscription: Subscription | undefined; // Para gerenciar a inscrição do scroll

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });
  }
  

  // Lifecycle hook do Ionic: Chamado quando a view entra e é completamente animada
  ionViewDidEnter() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    // Importante: Remover o listener de scroll para evitar vazamento de memória
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  // Método para configurar o listener de scroll
  async setupScrollListener() {
    if (this.ionContent) {
      this.scrollSubscription = this.ionContent.ionScroll.subscribe((event: CustomEvent) => {
        // Define isScrolled como true se a rolagem for maior que 0, caso contrário, false
        this.isScrolled = event.detail.scrollTop > 0;
      });
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  lerLivro(livro: Livro) {
    console.log('Lendo livro:', livro.titulo);
    // Lógica para navegar para a página de detalhes do livro, por exemplo
  }

  buscarLivro(event: any) {
    this.termoBusca = event.target.value?.toLowerCase() || '';

    if (!this.termoBusca.trim()) {
      this.resultadosBusca = [];
      return;
    }

    const todosLivros = [
      ...this.livrosDestaquesOriginais,
      ...this.livrosMaisLidosOriginais,
      ...this.livrosRecentesOriginais,
    ];

    this.resultadosBusca = todosLivros.filter(livro =>
      livro.titulo.toLowerCase().includes(this.termoBusca) ||
      (livro.autor && livro.autor.toLowerCase().includes(this.termoBusca))
    );
  }

  trackByLivro(index: number, livro: Livro): string | number | undefined {
    return livro.id || index;
  }
}