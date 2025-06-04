import { Component } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage {
  isDarkMode = false;

  slideOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true
  };

  public livrosAcaoDestaque = [


    {
      titulo: 'Agente Oculto',
      autor: 'Mark Greaney',
      capa: "assets/capas/Agente-Oculto.jpg",
      id:'acao1',
      ano: 2023,
      descricao: 'O mais recente thriller de ação com o Agente Gray Man, repleto de perseguições e intrigas internacionais.'
    },
    {
      titulo: 'Inferno',
      autor: 'Dan Brown',
      capa: "assets/capas/inferno.webp",
      id:'acao2',
      ano: 2013,
      descricao: 'Robert Langdon mergulha em um mistério sombrio ligado à Divina Comédia de Dante, com o destino do mundo em jogo.'
    },
    {
      titulo: 'O Sexto Homem',
      autor: 'David Baldacci',
      capa: "assets/capas/O-Sexto-Homem.webp",
      id:'acao3',
      ano: 2012,
      descricao: 'Um ex-agente de elite busca a filha desaparecida de um amigo, desvendando uma teia de corrupção e perigo.'
    },
    {
      titulo: 'Ponto de Impacto',
      capa: 'assets/capas/Ponto-de-Impacto.webp',
      autor: 'Dan Brown',
      id:'acao4',
      ano: 2007,
      descricao: 'Uma arqueóloga é arrastada para uma corrida contra o tempo para evitar uma catástrofe global desencadeada por uma antiga descoberta.'
    }
  ];

  public livrosAcaoMaisLidos = [
    {
      titulo: 'O Senhor dos Anéis',
      capa: "assets/capas/O-Senhor-dos-Aneis.jpg",
      autor: 'John Ronald Reuel Tolkien',
      id:'acao5',
      ano: 1954,
      descricao: 'narra a história da Terra-Média, um mundo povoado por humanos, elfos, hobbits, anões e outras criaturas místicas.'
    },
    {
      titulo: 'Inferno',
      capa: "assets/capas/inferno.webp",
      autor: 'Dan Brown',
      id:'acao2',
      ano: 2013,
      descricao: 'Robert Langdon mergulha em um mistério sombrio ligado à Divina Comédia de Dante, com o destino do mundo em jogo.'
    },
    {
      titulo: 'Os Três Mosqueteiros',
      capa:'assets/capas/Os-Tres-Mosqueteiros.jpeg',
      autor: 'Alexandre Dumas',
      id:'acao6',
      ano: 1844,
      descricao: 'Narra as aventuras de D`Artagnan e os três mosqueteiros na França do século XVII, com muita ação, intriga e lealdade.'
    },
    {
      titulo: 'Ponto de Impacto',
      capa: 'assets/capas/Ponto-de-Impacto.webp',
      autor: 'Matthew Reilly',
      id:'acao4',
      ano: 2007,
      descricao: 'Uma arqueóloga é arrastada para uma corrida contra o tempo para evitar uma catástrofe global desencadeada por uma antiga descoberta.'
    }
  ];

  public livrosAcaoRecemADD = [
    {
      titulo: 'Mundo em Ruínas',
      capa: "assets/capas/A-Arte-da-Guerra.jpg",
      autor: 'Mark Greaney',
      id:'acao8',
      ano: 2023,
      descricao: 'O mais recente thriller de ação com o Agente Gray Man, repleto de perseguições e intrigas internacionais.'
    },
    {
      titulo: 'O Homem de Giz',
      capa: 'assets/capas/O-Homem-de-Giz.jpg',
      autor: 'Caroline Tudor',
      id:'acao9',
      ano: 2018,
      descricao: 'Uma história sobre crescimento. Parcialmente narrado por uma criança de 11 anos, acompanhamos no livro o fim da infância de um grupo de amigos que precisam enfrentar terrores além da sua imaginação.'
    },
    {
      titulo: 'Peaky Blinders',
      capa: 'assets/capas/Peaky-Blinders.jpeg',
      autor: 'Carl Chinn',
      id:'acao10',
      ano: 2022,
      descricao: 'Inclui fotos históricas dos verdadeiros integrantes da gangue e depoimentos históricos sobre eles!'
    },
    {
      titulo: 'Inferno',
      capa:'assets/capas/inferno.webp',
      autor: 'Dan Brown',          
      id:'acao2',
      ano: 2013,
      descricao: 'Robert Langdon mergulha em um mistério sombrio ligado à Divina Comédia de Dante, com o destino do mundo em jogo.'
    },
    {
      titulo: 'Ponto de Impacto',
      capa: 'assets/capas/Ponto-de-Impacto.webp',
      autor: 'Matthew Reilly',
      id:'acao4',
      ano: 2007,
      descricao: 'Uma arqueóloga é arrastada para uma corrida contra o tempo para evitar uma catástrofe global desencadeada por uma antiga descoberta.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
