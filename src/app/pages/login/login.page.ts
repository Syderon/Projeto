import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { initPaperCanvas } from '../../../paper-shapes';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  loginError: boolean = false;
  rememberMe: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    setTimeout(() => {
      initPaperCanvas();
    }, 100);
  }

  ngOnDestroy() {
    const canvas = document.getElementById('canvas');
    if (canvas) canvas.remove();
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    this.loginError = false;
    try {
      const user = await this.authService.login(email, password);
      
      if (this.rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      }

      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao fazer login', error);
      this.loginError = true;
    }
  }
  

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  irParaRecuperarSenha() {
    this.router.navigate(['/recuperar-senha']);
  }
}