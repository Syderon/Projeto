import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ThemeService } from '../../../theme.service';
import { Router } from '@angular/router';
import { LivrosService } from '../../services/livros.service';
import { Subscription } from 'rxjs';
import { ModalController, ToastController } from '@ionic/angular';
import { BookDetailsModalComponent } from '../../components/book-details-modal/book-details-modal.component';

interface Livro {
  id: string;
  titulo: string;
  autor?: string;
  ano?: number;
  genero?: string;
  capa?: string;
  descricao?: string;
}

// Interface para o evento de scroll
interface ScrollCustomEvent extends CustomEvent {
  detail: {
    scrollTop: number;
    scrollLeft: number;
  };
}

// Interface para o evento de busca
interface SearchBarCustomEvent extends CustomEvent {
  detail: {
    value?: string;
  };
}

@Component({
  selector: 'app-salvos',
  templateUrl: './salvos.page.html',
  styleUrls: ['./salvos.page.scss']
})
export class SalvosPage implements OnInit, OnDestroy {
  isScrolled = false;
  isDarkMode = false;
  livrosSalvos: Livro[] = [];
  livrosFiltrados: Livro[] = [];
  termoBusca = '';
  private livrosSubscription!: Subscription;
  private ultimoTermoBusca = '';

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private livrosService: LivrosService,
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.initTheme();
    this.carregarLivros();
  }

  ngOnDestroy(): void {
    this.livrosSubscription?.unsubscribe();
  }

  private initTheme(): void {
    this.themeService.isDarkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });
  }

  private carregarLivros(): void {
    this.livrosSubscription = this.livrosService.livrosSalvos$.subscribe({
      next: (livros) => {
        this.livrosSalvos = livros;
        this.filtrarLivros();
      },
      error: (err) => console.error('Erro ao carregar livros:', err)
    });
  }

  async abrirModal(livro: Livro): Promise<void> {
  const modal = await this.modalController.create({
    component: BookDetailsModalComponent,
    componentProps: {
      book: livro  // Certifique-se que 'livro' tem os dados corretos
    }
  });
  await modal.present();
}

  async showToast(message: string, color: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color
    });
    await toast.present();
  }

  // Método atualizado para o scroll
  onScroll(event: ScrollCustomEvent): void {
    this.isScrolled = event.detail.scrollTop > 100;
  }

  // Método atualizado para a busca
  buscarLivroSalvo(event: SearchBarCustomEvent): void {
    const searchTerm = (event.detail.value || '').trim();
    
    if (searchTerm === this.ultimoTermoBusca) return;

    this.termoBusca = searchTerm;
    this.ultimoTermoBusca = searchTerm;
    this.filtrarLivros();
  }

  limparBusca(): void {
    this.termoBusca = '';
    this.ultimoTermoBusca = '';
    this.filtrarLivros();
  }

  private filtrarLivros(): void {
    if (!this.termoBusca) {
      this.livrosFiltrados = [...this.livrosSalvos];
      return;
    }

    const normalizedTerm = this.normalizeText(this.termoBusca);
    
    this.livrosFiltrados = this.livrosSalvos.filter(livro => 
      this.matchSearchTerm(livro, normalizedTerm)
    );
  }

  private matchSearchTerm(livro: Livro, term: string): boolean {
    const normalizedTitle = this.normalizeText(livro.titulo);
    const normalizedAuthor = livro.autor ? this.normalizeText(livro.autor) : '';
    
    return (
      normalizedTitle.includes(term) ||
      normalizedAuthor.includes(term) ||
      this.matchInitials(normalizedTitle, term)
    );
  }

  private normalizeText(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private matchInitials(title: string, term: string): boolean {
    if (term.length > 3) return false;
    const initials = title.split(' ').map(p => p.charAt(0)).join('');
    return initials.includes(term);
  }

  async removerLivro(livro: Livro, event?: Event): Promise<void> {
    event?.stopPropagation();
    
    try {
      this.livrosService.removerLivro(livro.id);
      this.showToast(`"${livro.titulo}" removido`, 'danger');
    } catch (error) {
      console.error('Erro ao remover livro:', error);
      this.showToast('Erro ao remover livro', 'danger');
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  trackByLivro(index: number, livro: Livro): string {
    return livro.id;
  }
}