import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.page.html',
  styleUrls: ['./generos.page.scss']
})
export class GenerosPage implements OnInit {

  generos = [
    { nome: 'Fantasia', imagem: 'assets/generos/fantasia.jpeg' },
    { nome: 'Romance', imagem: 'assets/generos/romance.jpeg' },
    { nome: 'Terror', imagem: 'assets/generos/terror.jpeg' },
    { nome: 'Aventura', imagem: 'assets/generos/aventura.jpeg' },
    { nome: 'Suspense', imagem: 'assets/generos/suspense.jpeg' },
    { nome: 'Ficção', imagem: 'assets/generos/ficcao.jpeg' },
    { nome: 'Ação', imagem: 'assets/generos/acao.jpeg' },
    { nome: 'Comédia', imagem: 'assets/generos/comedia.jpeg' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  abrirGenero(genero: any) {
    const nomeGenero = genero.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    this.router.navigate([`/generos/${nomeGenero}`]);
  }
}
