import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.page.html',
  styleUrls: ['./generos.page.scss']
})
export class GenerosPage implements OnInit {

  generos = [
    { nome: 'Fantasia', imagem: 'assets/imgs/fantasia.png' },
    { nome: 'Romance', imagem: 'assets/imgs/romance.png' },
    { nome: 'Terror', imagem: 'assets/imgs/terror.png' },
    { nome: 'Aventura', imagem: 'assets/imgs/aventura.png' },
    { nome: 'Suspense', imagem: 'assets/imgs/suspense.png' },
    { nome: 'Ficção', imagem: 'assets/imgs/ficcao.png' },
    { nome: 'Ação', imagem: 'assets/imgs/acao.png' },
    { nome: 'Comédia', imagem: 'assets/imgs/comedia.png' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  abrirGenero(genero: any) {
    const nomeGenero = genero.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    this.router.navigate([`/generos/${nomeGenero}`]);
  }
}
