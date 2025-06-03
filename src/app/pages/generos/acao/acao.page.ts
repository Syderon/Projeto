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
      ano: 2023,
      descricao: 'O mais recente thriller de ação com o Agente Gray Man, repleto de perseguições e intrigas internacionais.'
    },
    {
      titulo: 'Inferno',
      autor: 'Dan Brown',
      capa: "assets/capas/inferno.webp",
      ano: 2013,
      descricao: 'Robert Langdon mergulha em um mistério sombrio ligado à Divina Comédia de Dante, com o destino do mundo em jogo.'
    },
    {
      titulo: 'O Sexto Homem',
      autor: 'David Baldacci',
      capa: "assets/capas/O-Sexto-Homem.webp",
      ano: 2012,
      descricao: 'Um ex-agente de elite busca a filha desaparecida de um amigo, desvendando uma teia de corrupção e perigo.'
    },
    {
      titulo: 'Ponto de Impacto',
      autor: 'Dan Brown',
      capa: 'assets/capas/Ponto-de-Impacto.webp',
      ano: 2007,
      descricao: 'Uma arqueóloga é arrastada para uma corrida contra o tempo para evitar uma catástrofe global desencadeada por uma antiga descoberta.'
    }
  ];

  public livrosAcaoMaisLidos = [
    {
      titulo: 'Mundo em Ruínas',
      capa: "",
      autor: 'Mark Greaney',
      ano: 2023,
      descricao: 'O mais recente thriller de ação com o Agente Gray Man, repleto de perseguições e intrigas internacionais.'
    },
    {
      titulo: 'Inferno',
      autor: 'Dan Brown',
      ano: 2013,
      descricao: 'Robert Langdon mergulha em um mistério sombrio ligado à Divina Comédia de Dante, com o destino do mundo em jogo.'
    },
    {
      titulo: 'O Resgate',
      autor: 'David Baldacci',
      ano: 2012,
      descricao: 'Um ex-agente de elite busca a filha desaparecida de um amigo, desvendando uma teia de corrupção e perigo.'
    },
    {
      titulo: 'Ponto de Impacto',
      autor: 'Matthew Reilly',
      ano: 2007,
      descricao: 'Uma arqueóloga é arrastada para uma corrida contra o tempo para evitar uma catástrofe global desencadeada por uma antiga descoberta.'
    }
  ];

  public livrosAcaoRecemADD = [
    {
      titulo: 'Mundo em Ruínas',
      capa: "",
      autor: 'Mark Greaney',
      ano: 2023,
      descricao: 'O mais recente thriller de ação com o Agente Gray Man, repleto de perseguições e intrigas internacionais.'
    },
    {
      titulo: 'Inferno',
      autor: 'Dan Brown',
      ano: 2013,
      descricao: 'Robert Langdon mergulha em um mistério sombrio ligado à Divina Comédia de Dante, com o destino do mundo em jogo.'
    },
    {
      titulo: 'Não Há Amanhã',
      autor: 'Lee Child',
      ano: 2020,
      descricao: 'Jack Reacher se vê envolvido em uma conspiração perigosa quando uma simples caminhada o leva a um rastro de violência.'
    },
    {
      titulo: 'O Resgate',
      autor: 'David Baldacci',
      ano: 2012,
      descricao: 'Um ex-agente de elite busca a filha desaparecida de um amigo, desvendando uma teia de corrupção e perigo.'
    },
    {
      titulo: 'Ponto de Impacto',
      autor: 'Matthew Reilly',
      ano: 2007,
      descricao: 'Uma arqueóloga é arrastada para uma corrida contra o tempo para evitar uma catástrofe global desencadeada por uma antiga descoberta.'
    }
  ];

  lerLivro(livro: any) {
    console.log('Abrindo livro:', livro.titulo);
  }
}
