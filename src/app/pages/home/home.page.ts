import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../theme.service';
import { IonSearchbar, IonContent, ToastController, ModalController } from '@ionic/angular';
import { BookDetailsModalComponent } from '../../components/book-details-modal/book-details-modal.component';
import { LivrosService } from '../../services/livros.service';

interface Livro {
  titulo: string;
  capa: string;
  id?: string;
  autor?: string;
  ano?: number;
  descricao?: string;
  pdfUrl?: string;
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
      titulo: 'Memórias do Subsolo',
      capa: 'assets/capas/destaque.jpg',
      id: 'destaque1',
      autor: 'Fiódor Dostoiévski',
      ano: 1864,
      descricao: 'Uma obra que explora a mente de um homem solitário, que vive em isolamento e se questiona sobre a vida, a sociedade e a natureza humana.',
      pdfUrl: 'https://drive.google.com/file/d/1KgZgweA2X-CwquLSktHAez58f8xqedUn/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Crime e Castigo',
      capa: 'assets/capas/destaque2.jpg',
      id: 'destaque2',
      autor: 'Fiódor Dostoiévski',
      ano: 1866,
      descricao: 'Um rapaz retraído e orgulhoso, se sente esmagado pela pobreza. Ao mesmo tempo, acha que está destinado a um grande futuro.',
      pdfUrl: 'https://drive.google.com/file/d/1VoalNBpUjti9iMXUPwp8eEnqKBbEQUCy/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'O Idiota',
      capa: 'assets/capas/destaque3.jpg',
      id: 'destaque3',
      autor: 'Fiódor Dostoiévski',
      ano: 1869,
      descricao: 'Explora a sociedade russa do século XIX e a complexidade humana, focando no Príncipe Míchkin.',
      pdfUrl: 'https://drive.google.com/file/d/1QrsyXMBlTnR_H9ICnfRePHapMpZvFCX3/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'A Revolução dos Bichos',
      capa: 'assets/capas/livro6.jpg',
      id: 'destaque4',
      autor: 'George Orwell',
      ano: 1945,
      descricao: 'Sátira política que critica o totalitarismo através de uma fábula sobre animais.',
      pdfUrl: 'https://drive.google.com/file/d/1aCRWI-uzzScNvmwOlGB_g_EqU7YiuBKt/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Orgulho e Preconceito',
      capa: 'assets/capas/livro7.webp',
      id: 'destaque5',
      autor: 'Jane Austen',
      ano: 1813,
      descricao: 'Clássico romance que aborda questões de classe social, moral e relacionamentos.',
      pdfUrl: 'https://drive.google.com/file/d/152fD0g3ZbcYt4h6trmoXbjzpY0P_b75_/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Frankenstein',
      capa: 'assets/capas/livro8.jpg',
      id: 'destaque6',
      autor: 'Mary Shelley',
      ano: 1818,
      descricao: 'Considerado o primeiro romance de ficção científica, explora os limites da criação humana.',
      pdfUrl: 'https://drive.google.com/file/d/13Sq2HUwOLI7SJGj6ViK1S4jrWbgzUaBd/view?usp=drive_link'  // Link do Google Drive
    },
  ];

  livrosMaisLidos: Livro[] = [
    {
      titulo: 'O Senhor dos Anéis (O Retorno do Rei)',
      capa: 'assets/capas/livro1.webp',
      id: 'lido1',
      autor: 'John Ronald Reuel Tolkien',
      ano: 1955,
      descricao: 'Em O Retorno do Rei, acompanhamos o mago Gandalf e o hobbit Pippin em sua visita à a majestosa cidade de Minas Tirith.',
      pdfUrl: 'https://drive.google.com/file/d/1roRnO_CU6aMGf-B1DU7KkXa2PCMxIvdi/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'O Pequeno Principe',
      capa: 'assets/capas/livro3.webp',
      id: 'lido3',
      autor: 'Antoine de Saint-Exupéry',
      ano: 1943,
      descricao: 'Um aviador que, após sofrer uma pane em seu avião no deserto, conhece um menino que veio de um planeta chamado B-612.',
      pdfUrl: 'https://drive.google.com/file/d/1xjpRQ6gUkbqy03QU-qJruNJUEnM9QYsv/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'O Corvo',
      capa: 'assets/capas/livro4.jpg',
      id: 'lido4',
      autor: 'Edgar Allan Poe',
      ano: 1845,
      descricao: 'Trata da visita misteriosa de um corvo falante a um homem, frequentemente identificado como estudante, que lamenta a perda de sua amada, Lenore.',
      pdfUrl: 'https://drive.google.com/file/d/1-j-PFraxmWyPfhbwxB0dnxN_GKgqI-no/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Verity',
      capa: 'assets/capas/livro5.webp',
      id: 'lido5',
      autor: 'Colleen Hoover',
      ano: 2018,
      descricao: 'Conta a história de Lowen Ashleigh, uma escritora que é contratada para terminar a série de livros da autora Verity Crawford, que ficou incapacitada após um acidente.',
      pdfUrl: 'https://drive.google.com/file/d/1nqQjE_DHLabeMDiSV-TA0RpCHoE3PZeB/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Capitães da Areia',
      capa: 'assets/capas/livro9.jpg',
      id: 'lido6',
      autor: 'Jorge Amado',
      ano: 1937,
      descricao: 'Retrato da vida de menores abandonados em Salvador nos anos 1930.',
      pdfUrl: 'https://drive.google.com/file/d/1yTmVRe5O5tGRVIh6Oc_SQmqPc9hM4E-d/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Cem Anos de Solidão',
      capa: 'assets/capas/livro10.jpg',
      id: 'lido7',
      autor: 'Gabriel García Márquez',
      ano: 1967,
      descricao: 'Obra-prima do realismo mágico que conta a saga da família Buendía.',
      pdfUrl: 'https://drive.google.com/file/d/1-PQ-3xm1buYerK8VflM2HgOW1IobwlbG/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'O Senhor dos Anéis',
      capa: 'assets/capas/livro11.jpg',
      id: 'lido8',
      autor: 'J.R.R. Tolkien',
      ano: 1954,
      descricao: 'Épico de fantasia que se tornou um dos livros mais influentes do século XX.',
      pdfUrl: 'https://drive.google.com/file/d/1XBei5_riFGsQwnh7X9nq_0LTJb8cu44d/view?usp=drive_link'  // Link do Google Drive
    },
  ];

  livrosRecentes: Livro[] = [
    {
      titulo: 'Ensaio Sobre a Cegueira',
      capa: 'assets/capas/livro14.jpg',
      id: 'recente1',
      autor: 'José Saramago',
      ano: 1995,
      descricao: 'Alegoria sobre a fragilidade humana quando uma epidemia de cegueira atinge uma cidade.',
      pdfUrl: 'https://drive.google.com/file/d/12OLhEt_d7Yyn86z2Uy_FZcYokCXfOFg9/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'It: A Coisa',
      capa: 'assets/capas/livro15.jpg',
      id: 'recente2',
      autor: 'Stephen King',
      ano: 1986,
      descricao: 'Terror psicológico sobre um grupo de amigos que enfrenta uma entidade maligna.',
      pdfUrl: 'https://drive.google.com/file/d/1Vyo4QiwsmWTqGgumWUiSvbvl4TeH4Wlm/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'O Conto da Aia',
      capa: 'assets/capas/livro13.png',
      id: 'recente3',
      autor: 'Margaret Atwood',
      ano: 1985,
      descricao: 'Distopia feminista sobre um futuro onde as mulheres são controladas pelo estado.',
      pdfUrl: 'https://drive.google.com/file/d/113lQit8sMlSM40XM3XaSpieR5b3VKPX6/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Drácula',
      capa: 'assets/capas/livro12.jpg',
      id: 'recente4',
      autor: 'Bram Stoker',
      ano: 1897,
      descricao: 'O romance epistolar que popularizou o mito do vampiro na cultura ocidental.',
      pdfUrl: 'https://drive.google.com/file/d/1T7aylKo2Gb9KDEbW3K4SapmSG_RaqtAK/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'Percy Jackson',
      capa: 'assets/capas/livro16.jpg',
      id: 'recente5',
      autor: 'Rick Riordan',
      ano: 2005,
      descricao: 'Aventura moderna que mistura mitologia grega com o mundo contemporâneo.',
      pdfUrl: 'https://drive.google.com/file/d/1YovNRAnqVCL-crcDvbWIztOXLxVVCg3S/view?usp=drive_link'  // Link do Google Drive
    },
    {
      titulo: 'As Crônicas de Nárnia',
      capa: 'assets/capas/livro17.jpg',
      id: 'recente6',
      autor: 'C.S. Lewis',
      ano: 1950,
      descricao: 'Série de fantasia que transporta crianças para um mundo mágico cheio de aventuras.',
      pdfUrl: 'https://drive.google.com/file/d/1mUF6oC3BPC1GHR0FLsp81GkrIZwgBoY_/view?usp=drive_link'  // Link do Google Drive
    },
  ];

  livrosSalvos: Livro[] = []; // Array dos Livros Salvos

  isDarkMode: boolean = false;
  isScrolled: boolean = false;

  private themeSubscription: Subscription | null = null;
  private scrollSubscription: Subscription | undefined;

  constructor(
    private livrosService: LivrosService,
    private router: Router,
    private themeService: ThemeService,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Inicializa a lógica do tema (modo escuro)
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });

    // Carregar os livros salvos do localStorage
    const livrosSalvos = localStorage.getItem('livrosSalvos');
    if (livrosSalvos) {
      this.livrosSalvos = JSON.parse(livrosSalvos);
    }
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

  // Função para abrir o modal com detalhes do livro
  async abrirModal(livro: Livro) {
    const modal = await this.modalController.create({
      component: BookDetailsModalComponent,
      componentProps: {
        book: livro
      },
      cssClass: 'my-custom-modal',
      backdropDismiss: true
    });
    modal.onDidDismiss().then(() => {
      console.log('Modal fechado');
    });

    await modal.present().catch(error => {
      console.error('Erro ao abrir modal:', error);
    });
  }

  async salvarLivro(livro: Livro) {
  const foiSalvo = this.livrosService.salvarLivro(livro);
  
  const toast = await this.toastController.create({
    message: foiSalvo ? `"${livro.titulo}" salvo!` : `"${livro.titulo}" já está salvo.`,
    duration: 2000,
    position: 'bottom',
    color: foiSalvo ? 'success' : 'warning'
  });
  await toast.present();
}

  // Função para salvar o livro e redirecionar para a página de salvos
  async salvarESair(livro: Livro) {
    await this.salvarLivro(livro);
    this.router.navigate(['/salvos']); // Redireciona para a página de salvos
  }

  // Função para fechar o modal
  async fecharModal() {
    await this.modalController.dismiss();
  }

  // Função para buscar livros
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
      ...this.livrosSalvos, // Incluindo os livros salvos para serem buscados também
    ];

    this.resultadosBusca = todosLivros.filter(livro =>
      livro.titulo.toLowerCase().includes(this.termoBusca) ||
      (livro.autor && livro.autor.toLowerCase().includes(this.termoBusca))
    );
  }

  // Função de tracking dos livros
  trackByLivro(index: number, livro: Livro): string | number | undefined {
    return livro.id || index;
  }

  // Função para ler e sair
  async lerESair(livro: Livro) {
    if (livro) {
      console.log(`Lendo o livro: ${livro.titulo}`);
      await this.fecharModal();  // Se você estiver usando modal, fecha aqui
    }
  }
}
