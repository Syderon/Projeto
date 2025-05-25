import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
  avatarImage: string | ArrayBuffer | null = null;
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
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      celular: ['', [Validators.pattern(/^[0-9]{10,11}$/)]],
      avatar: ['']
    });

    this.triggerAnimation();
  }

  ngAfterViewInit() {
    initPaperCanvas();
  }

  private triggerAnimation() {
    setTimeout(() => {
      this.animationDone = true;
    }, 100);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  abrirSeletorDeImagem() {
    this.avatarInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const files = event.target?.files;
    if (files && files.length > 0) {
      const file = files[0];

      if (!file.type.startsWith('image/')) {
        console.warn('Arquivo inválido. Apenas imagens são permitidas.');
        this.presentToast('Arquivo inválido. Apenas imagens são permitidas.', 'danger');
        return;
      }

      this.avatarImage = file;
      this.cadastroForm.patchValue({ avatar: file.name });
    }
  }

  voltar() {
    this.navCtrl.back();
  }

  private resetMessages() {
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.showFireworks = false;
  }

  private async presentToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color
    });
    await toast.present();
  }

  async onSubmit() {
    if (this.cadastroForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    const { nome, email, senha } = this.cadastroForm.value;

    try {
      const userCredential = await this.authService.register(email, senha, nome, this.avatarImage);

      this.resetMessages();
      this.showSuccessMessage = true;
      this.showFireworks = true;

      await this.presentToast(this.successMessage, 'success');

      setTimeout(() => {
        this.router.navigate(['/login'], { state: { registeredEmail: email } });
      }, 2000);

    } catch (error: any) {
      console.error('Erro no cadastro:', error);
      this.resetMessages();
      this.showErrorMessage = true;

      if (error?.message) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'Erro inesperado. Tente novamente.';
      }

      await this.presentToast(this.errorMessage, 'danger');

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
