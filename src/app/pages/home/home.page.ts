import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../theme.service';
import { IonSearchbar, IonContent, ToastController, ModalController } from '@ionic/angular';
import { BookDetailsModalComponent } from '../../components/book-details-modal/book-details-modal.component';

interface Livro {
  titulo: string;
  capa: string;
  id?: string;
  autor?: string;
  ano?: number;
  descricao?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild(IonContent) ionContent!: IonContent;
  @ViewChild('livroDetalhesModal', { static: true }) livroDetalhesModal!: TemplateRef<any>;

  slideOpts = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    centeredSlides: false,
    speed: 400,
  };

  termoBusca: string = '';
  resultadosBusca: Livro[] = [];
  livroSelecionado: Livro | null = null;

  livrosDestaques: Livro[] = [
    {
      titulo: '1984',
      capa: 'assets/capas/destaque.jpg',
      id: 'destaque1',
      autor: 'George Orwell',
      ano: 1949,
      descricao: 'Uma distopia clássica sobre vigilância governamental e controle da verdade.'
    },
    {
      titulo: 'O Pequeno Príncipe',
      capa: 'assets/capas/destaque2.jpg',
      id: 'destaque2',
      autor: 'Antoine de Saint-Exupéry',
      ano: 1943,
      descricao: 'Uma obra poética e filosófica que aborda temas como amor, amizade e o sentido da vida.'
    },
    {
      titulo: 'Dom Casmurro',
      capa: 'assets/capas/destaque3.jpg',
      id: 'destaque3',
      autor: 'Machado de Assis',
      ano: 1899,
      descricao: 'Romance que explora temas como ciúme, ambiguidade e a natureza da verdade.'
    },
    {
      titulo: 'A Revolução dos Bichos',
      capa: 'assets/capas/livro6.jpg',
      id: 'destaque4',
      autor: 'George Orwell',
      ano: 1945,
      descricao: 'Sátira política que critica o totalitarismo através de uma fábula sobre animais.'
    },
    {
      titulo: 'Orgulho e Preconceito',
      capa: 'assets/capas/livro7.webp',
      id: 'destaque5',
      autor: 'Jane Austen',
      ano: 1813,
      descricao: 'Clássico romance que aborda questões de classe social, moral e relacionamentos.'
    },
    {
      titulo: 'Frankenstein',
      capa: 'assets/capas/livro8.jpg',
      id: 'destaque6',
      autor: 'Mary Shelley',
      ano: 1818,
      descricao: 'Considerado o primeiro romance de ficção científica, explora os limites da criação humana.'
    },
  ];

  livrosMaisLidos: Livro[] = [
    {
      titulo: '1984',
      capa: 'assets/capas/livro1.webp',
      id: 'lido1',
      autor: 'George Orwell',
      ano: 1949,
      descricao: 'Uma distopia clássica sobre vigilância governamental e controle da verdade.'
    },
    {
      titulo: 'O Pequeno Príncipe',
      capa: 'assets/capas/livro2.jpg',
      id: 'lido2',
      autor: 'Antoine de Saint-Exupéry',
      ano: 1943,
      descricao: 'Uma obra poética e filosófica que aborda temas como amor, amizade e o sentido da vida.'
    },
    {
      titulo: 'Dom Casmurro',
      capa: 'assets/capas/livro3.webp',
      id: 'lido3',
      autor: 'Machado de Assis',
      ano: 1899,
      descricao: 'Romance que explora temas como ciúme, ambiguidade e a natureza da verdade.'
    },
    {
      titulo: 'O Hobbit',
      capa: 'assets/capas/livro4.jpg',
      id: 'lido4',
      autor: 'J.R.R. Tolkien',
      ano: 1937,
      descricao: 'Aventura fantástica que precede os eventos de "O Senhor dos Anéis".'
    },
    {
      titulo: 'Memórias Póstumas',
      capa: 'assets/capas/livro5.webp',
      id: 'lido5',
      autor: 'Machado de Assis',
      ano: 1881,
      descricao: 'Narrado por um defunto-autor, este romance é uma sátira social brilhante.'
    },
    {
      titulo: 'Capitães da Areia',
      capa: 'assets/capas/livro9.jpg',
      id: 'lido6',
      autor: 'Jorge Amado',
      ano: 1937,
      descricao: 'Retrato da vida de menores abandonados em Salvador nos anos 1930.'
    },
    {
      titulo: 'Cem Anos de Solidão',
      capa: 'assets/capas/livro10.jpg',
      id: 'lido7',
      autor: 'Gabriel García Márquez',
      ano: 1967,
      descricao: 'Obra-prima do realismo mágico que conta a saga da família Buendía.'
    },
    {
      titulo: 'O Senhor dos Anéis',
      capa: 'assets/capas/livro11.jpg',
      id: 'lido8',
      autor: 'J.R.R. Tolkien',
      ano: 1954,
      descricao: 'Épico de fantasia que se tornou um dos livros mais influentes do século XX.'
    },
  ];

  livrosRecentes: Livro[] = [
    {
      titulo: 'Ensaio Sobre a Cegueira',
      capa: 'assets/capas/livro14.jpg',
      id: 'recente1',
      autor: 'José Saramago',
      ano: 1995,
      descricao: 'Alegoria sobre a fragilidade humana quando uma epidemia de cegueira atinge uma cidade.'
    },
    {
      titulo: 'It: A Coisa',
      capa: 'assets/capas/livro15.jpg',
      id: 'recente2',
      autor: 'Stephen King',
      ano: 1986,
      descricao: 'Terror psicológico sobre um grupo de amigos que enfrenta uma entidade maligna.'
    },
    {
      titulo: 'O Conto da Aia',
      capa: 'assets/capas/livro13.png',
      id: 'recente3',
      autor: 'Margaret Atwood',
      ano: 1985,
      descricao: 'Distopia feminista sobre um futuro onde as mulheres são controladas pelo estado.'
    },
    {
      titulo: 'Drácula',
      capa: 'assets/capas/livro12.jpg',
      id: 'recente4',
      autor: 'Bram Stoker',
      ano: 1897,
      descricao: 'O romance epistolar que popularizou o mito do vampiro na cultura ocidental.'
    },
    {
      titulo: 'Percy Jackson',
      capa: 'assets/capas/livro16.jpg',
      id: 'recente5',
      autor: 'Rick Riordan',
      ano: 2005,
      descricao: 'Aventura moderna que mistura mitologia grega com o mundo contemporâneo.'
    },
    {
      titulo: 'As Crônicas de Nárnia',
      capa: 'assets/capas/livro17.jpg',
      id: 'recente6',
      autor: 'C.S. Lewis',
      ano: 1950,
      descricao: 'Série de fantasia que transporta crianças para um mundo mágico cheio de aventuras.'
    },
  ];

  isDarkMode: boolean = false;
  isScrolled: boolean = false;

  private themeSubscription: Subscription | null = null;
  private scrollSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });
  }

  ionViewDidEnter() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }


  async setupScrollListener() {
    if (this.ionContent) {
      this.scrollSubscription = this.ionContent.ionScroll.subscribe((event: CustomEvent) => {
        this.isScrolled = event.detail.scrollTop > 0;
      });
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async abrirModal(livro: Livro) {
  const modal = await this.modalController.create({
    component: BookDetailsModalComponent,
    componentProps: {
      book: livro
    },
    cssClass: 'my-custom-modal', // Classe CSS personalizada
    backdropDismiss: true // Permite fechar clicando fora
  });
  modal.onDidDismiss().then(() => {
    console.log('Modal fechado');
  });

  await modal.present().catch(error => {
    console.error('Erro ao abrir modal:', error);
  });
}

  async lerLivro(livro: Livro) {
    console.log('Lendo livro:', livro.titulo);
    // Implemente sua lógica de leitura aqui
  }

  async lerESair(livro: Livro) {
    await this.lerLivro(livro);
    await this.fecharModal();
  }

  async salvarLivro(livro: Livro) {
    const toast = await this.toastController.create({
      message: `"${livro.titulo}" foi salvo em sua biblioteca!`,
      duration: 2000,
      position: 'bottom',
      color: 'success',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
  async salvarESair(livro: Livro) {
    await this.salvarLivro(livro);
    
  }
async fecharModal() {
  await this.modalController.dismiss();
}
  buscarLivro(event: any) {
    this.termoBusca = event.target.value?.toLowerCase() || '';

    if (!this.termoBusca.trim()) {
      this.resultadosBusca = [];
      return;
    }

    const todosLivros = [
      ...this.livrosDestaques,
      ...this.livrosMaisLidos,
      ...this.livrosRecentes,
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
