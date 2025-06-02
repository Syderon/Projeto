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

  public livrosAcaoMaisLidos = [
    {
      titulo: 'O Pequeno Príncipe',
      capa: 'assets/capas/destaque2.jpg',

      autor: 'Antoine de Saint-Exupéry',
      ano: 1943,
      descricao: 'Uma obra poética e filosófica que aborda temas como amor, amizade e o sentido da vida.'
    },
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
      titulo: 'O Pequeno Príncipe',
      capa: 'assets/capas/destaque2.jpg',
      id: 'destaque2',
      autor: 'Antoine de Saint-Exupéry',
      ano: 1943,
      descricao: 'Uma obra poética e filosófica que aborda temas como amor, amizade e o sentido da vida.'
    },
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
