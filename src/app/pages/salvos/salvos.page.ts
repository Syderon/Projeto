import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { Router } from '@angular/router';
import { LivrosService } from '../../services/livros.service';
import { Subscription } from 'rxjs';

interface Livro {
  id: string;
  titulo: string;
  autor?: string;
  ano?: string;
  genero?: string;
  capa?: string;
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
    private livrosService: LivrosService
  ) {}

  ngOnInit() {
    this.carregarLivros();
    this.themeService.isDarkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    });
  }

  ngOnDestroy() {
    this.livrosSubscription?.unsubscribe();
  }

  private carregarLivros() {
    this.livrosSubscription = this.livrosService.livrosSalvos$.subscribe({
      next: (livros) => {
        this.livrosSalvos = livros;
        this.filtrarLivros();
      },
      error: (err) => console.error('Erro ao carregar livros:', err)
    });
  }

  buscarLivroSalvo(event: any) {
    const novoTermo = event.detail.value?.trim() || '';
    
    if (novoTermo === this.ultimoTermoBusca) {
      return;
    }

    this.termoBusca = novoTermo;
    this.ultimoTermoBusca = novoTermo;
    this.filtrarLivros();
  }

  limparBusca() {
    this.termoBusca = '';
    this.ultimoTermoBusca = '';
    this.filtrarLivros();
  }

  private filtrarLivros() {
    if (!this.termoBusca) {
      this.livrosFiltrados = [...this.livrosSalvos];
      return;
    }

    const termoNormalizado = this.normalizarTexto(this.termoBusca);
    
    this.livrosFiltrados = this.livrosSalvos.filter(livro => {
      const tituloNormalizado = this.normalizarTexto(livro.titulo);
      const autorNormalizado = livro.autor ? this.normalizarTexto(livro.autor) : '';
      
      return (
        tituloNormalizado.includes(termoNormalizado) ||
        autorNormalizado.includes(termoNormalizado) ||
        this.buscaPorIniciais(tituloNormalizado, termoNormalizado));
    });
  }

  private normalizarTexto(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private buscaPorIniciais(titulo: string, termo: string): boolean {
    if (termo.length > 3) return false; // Só busca por iniciais para termos curtos
    
    const palavras = titulo.split(' ');
    const iniciais = palavras.map(p => p.charAt(0)).join('');
    return iniciais.includes(termo);
  }

  removerLivro(livro: Livro) {
    this.livrosService.removerLivro(livro.id);
  }

  onScroll(event: any) {
    this.isScrolled = event.detail.scrollTop > 100;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}