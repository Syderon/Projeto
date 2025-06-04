import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  livroJaSalvo(id: string): boolean {
    const livrosSalvos = this.carregarLivros();
    return livrosSalvos.some(l => l.id === id);
}

  private livrosSalvosSubject = new BehaviorSubject<any[]>(this.carregarLivros());
  livrosSalvos$ = this.livrosSalvosSubject.asObservable();

  constructor() {}

  // Mude de private para public
  carregarLivros(): any[] {
    try {
      return JSON.parse(localStorage.getItem('livrosSalvos') || '[]');
    } catch (error) {
      console.error('Erro ao carregar livros:', error);
      return [];
    }
  }

  // Salva um livro (retorna true se foi salvo, false se já existia)
  salvarLivro(livro: any): boolean {
    const livrosSalvos = this.carregarLivros();
    const jaSalvo = livrosSalvos.some((l: any) => l.id === livro.id);

    if (!jaSalvo) {
      livrosSalvos.push(livro);
      this.atualizarLivros(livrosSalvos);
      return true;
    }
    return false;
  }

  // Remove um livro pelo ID
  removerLivro(id: string): boolean {
    const livrosSalvos = this.carregarLivros().filter(l => l.id !== id);
    this.atualizarLivros(livrosSalvos);
    return livrosSalvos.length < this.livrosSalvosSubject.value.length;
  }

  // Busca livros por termo (título ou autor)
  buscarLivros(termo: string): any[] {
    const termoLower = termo.toLowerCase();
    return this.carregarLivros().filter(livro => 
      livro.titulo.toLowerCase().includes(termoLower) || 
      (livro.autor && livro.autor.toLowerCase().includes(termoLower))
    );
  }

  // Atualiza o localStorage e notifica os observadores
  private atualizarLivros(livros: any[]): void {
    localStorage.setItem('livrosSalvos', JSON.stringify(livros));
    this.livrosSalvosSubject.next(livros);
  }

  // Método adicional para limpar todos os livros (útil para testes)
  limparLivros(): void {
    this.atualizarLivros([]);
  }
}