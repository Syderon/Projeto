import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SalvosPage } from './salvos.page';  // Importando corretamente o SalvosPage

describe('SalvosPage', () => {
  let component: SalvosPage;
  let fixture: ComponentFixture<SalvosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvosPage ],  // Declarando o SalvosPage corretamente
      imports: [ IonicModule ]  // Importando o IonicModule para testar com Ionic
    })
    .compileComponents();  // Compilando os componentes do teste
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvosPage);  // Criando a instância do componente SalvosPage
    component = fixture.componentInstance;  // Atribuindo a instância do componente
    fixture.detectChanges();  // Detectando mudanças no componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verificando se o componente foi criado com sucesso
  });
});
