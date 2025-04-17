import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
    // Inicializa o formulário com validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Alterna a visibilidade da senha
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Método para realizar o login
  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      console.log('Email:', email, 'Senha:', password);
      // Redireciona para a página inicial após o login
      this.navCtrl.navigateForward('/home');
    }
  }

  // Método para redirecionar para a página de cadastro
  irParaCadastro() {
    this.navCtrl.navigateForward('/cadastro'); // Altere para a página de cadastro
  }

  // Método para redirecionar para a página de recuperação de senha
  irParaRecuperarSenha() {
    this.navCtrl.navigateForward('/recuperar-senha'); // Altere para a página de recuperação de senha
  }
}
