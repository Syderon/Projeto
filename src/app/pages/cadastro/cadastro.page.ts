import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';  // Importar o AngularFireAuth para usar a autenticação
import { Router } from '@angular/router';  // Para navegação

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastroForm!: FormGroup;
  avatarImage: any = null;

  @ViewChild('avatarInput') avatarInputRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,  // Injetando o serviço de autenticação
    private router: Router  // Para navegação após cadastro
  ) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      celular: [''],
      avatar: ['']
    });
  }

  abrirSeletorDeImagem() {
    this.avatarInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.avatarImage = file;
      console.log("Imagem selecionada:", this.avatarImage);
    }
  }

  voltar() {
    this.navCtrl.back();
  }

  async onSubmit() {
    if (this.cadastroForm.valid) {
      const { email, senha } = this.cadastroForm.value;
      
      try {
        // Criar um novo usuário no Firebase
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, senha);
        
        // Navegar para a página de login após o cadastro
        this.router.navigate(['/login']); // Altere aqui para ir para a tela de login após o cadastro
        
        console.log('Usuário cadastrado com sucesso:', userCredential.user);
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    } else {
      console.log('Formulário inválido');
    }
  }
  

  isCampoInvalido(campo: string): boolean {
    const control = this.cadastroForm.get(campo);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
