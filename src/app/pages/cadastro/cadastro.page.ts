import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { initPaperCanvas } from '../../../paper-shapes';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit, AfterViewInit {
  cadastroForm!: FormGroup;
  avatarImage: File | null = null;
  showSuccessMessage = false;
  showErrorMessage = false;
  successMessage = 'Conta criada com sucesso! 🎉';
  errorMessage = 'Erro ao criar conta. Tente novamente.';
  showFireworks = false;
  passwordVisible = false;
  animationDone = false;
  isSubmitting = false;

  @ViewChild('avatarInput') avatarInputRef!: ElementRef;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, this.emailValidator]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      celular: ['', [Validators.pattern(/^[0-9]{10,11}$/)]],
      avatar: ['']
    });

    setTimeout(() => {
      this.animationDone = true;
    }, 100);
  }

  ngAfterViewInit() {
    initPaperCanvas();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  emailValidator(control: any) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(control.value) ? null : { invalidEmail: true };
  }

  abrirSeletorDeImagem() {
    this.avatarInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.avatarImage = file;
      this.cadastroForm.patchValue({ avatar: file.name });
    }
  }

  voltar() {
    this.navCtrl.back();
  }

  async onSubmit() {
    if (this.cadastroForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    const { nome, email, senha } = this.cadastroForm.value;

    try {
      const userCredential = await this.authService.register(email, senha, nome, this.avatarImage);
      
      this.showSuccessMessage = true;
      this.showErrorMessage = false;
      this.showFireworks = true;

      const toast = await this.toastController.create({
        message: this.successMessage,
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      await toast.present();

      setTimeout(() => {
        this.router.navigate(['/login'], { 
          state: { registeredEmail: email } 
        });
      }, 2000);

    } catch (error: any) {
      console.error('Erro no cadastro:', error);
      this.errorMessage = error.message || this.errorMessage;
      this.showSuccessMessage = false;
      this.showErrorMessage = true;
      this.showFireworks = false;

      const toast = await this.toastController.create({
        message: this.errorMessage,
        duration: 3000,
        position: 'top',
        color: 'danger'
      });
      await toast.present();
    } finally {
      this.isSubmitting = false;
    }
  }

  isCampoInvalido(campo: string): boolean {
    const control = this.cadastroForm.get(campo);
    return !!(control?.invalid && (control?.touched || control?.dirty));
  }

  get senhaControl() {
    return this.cadastroForm.get('senha');
  }

  get emailControl() {
    return this.cadastroForm.get('email');
  }
}