import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return of(user);
        } else {
          return of(null);
        }
      })
    );
  }

  // Login com email/senha
  async login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']); // Redireciona após login
      return result;
    } catch (error) {
      this.showAlert('Erro no login', this.getFirebaseErrorMessage(error));
      throw error;
    }
  }

  // Cadastro com email/senha
  async register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail(); // Envia email de verificação
      return result;
    } catch (error) {
      this.showAlert('Erro no cadastro', this.getFirebaseErrorMessage(error));
      throw error;
    }
  }

  // Logout
  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  // Envia email de verificação
  async sendVerificationEmail(): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      await user.sendEmailVerification();
      this.showAlert('Verificação necessária', 'Enviamos um email de verificação. Por favor confirme seu email.');
    }
  }

  // Recuperação de senha
  async resetPassword(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      this.showAlert('Email enviado', 'Verifique seu email para redefinir sua senha.');
    } catch (error) {
      this.showAlert('Erro', this.getFirebaseErrorMessage(error));
    }
  }

  // Mostra alertas
  private async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Traduz erros do Firebase
  private getFirebaseErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Email inválido';
      case 'auth/user-disabled':
        return 'Usuário desativado';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/email-already-in-use':
        return 'Email já está em uso';
      case 'auth/weak-password':
        return 'Senha fraca (mínimo 6 caracteres)';
      case 'auth/operation-not-allowed':
        return 'Operação não permitida';
      default:
        return `Erro desconhecido: ${error.message}`;
    }
  }
}