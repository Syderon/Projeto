import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Certifique-se de que o caminho do seu serviço está correto
import { Router } from '@angular/router'; // Importando Router para navegação

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  passwordVisible: boolean = false;  // Para controlar a visibilidade da senha

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, // Serviço de autenticação
    private router: Router // Injeção do Router
  ) {
    // Inicialize o formulário de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  // Método para login
  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
      console.log('Usuário logado:', user);
      // Redirecionar para a página principal após login
      this.router.navigate(['/home']); // Troque '/home' pela página que deseja acessar após login
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }

  // Método para alternar visibilidade da senha
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Método para redirecionar para a página de cadastro
  irParaCadastro() {
    this.router.navigate(['/cadastro']); // Substitua '/cadastro' pelo caminho da página de cadastro
  }

  // Método para redirecionar para a página de recuperação de senha
  irParaRecuperarSenha() {
    this.router.navigate(['/recuperar-senha']); // Substitua '/recuperar-senha' pelo caminho da página de recuperação de senha
  }
}
