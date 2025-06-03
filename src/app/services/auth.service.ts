import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user: Observable<any> = this.userSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private afStorage: AngularFireStorage
  ) {}

  // Método para registrar o usuário
  async register(email: string, password: string, nome: string, avatarImage: any) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
      await userCredential.user?.updateProfile({
        displayName: nome,
      });

      if (avatarImage) {
        const avatarRef = this.afStorage.ref(`avatars/${userCredential.user?.uid}`);
        const task = avatarRef.put(avatarImage);
        await task.snapshotChanges().toPromise();
        
        const avatarUrl = await avatarRef.getDownloadURL().toPromise();
        await userCredential.user?.updateProfile({
          photoURL: avatarUrl,
        });
      }

      // Atualiza o BehaviorSubject com as informações do usuário
      this.userSubject.next(userCredential.user);
      
      return userCredential;
    } catch (error) {
      console.error('Erro ao registrar usuário', error);
      throw error;
    }
  }

  // Método para login
  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.userSubject.next(userCredential.user);  // Atualiza as informações do usuário logado
      return userCredential.user;
    } catch (error) {
      console.error('Erro ao realizar login', error);
      throw error;
    }
  }

  // Método para logout
  async logout() {
    await this.afAuth.signOut();
    this.userSubject.next(null);  // Limpa as informações do usuário ao fazer logout
  }

  // Método para obter o estado de autenticação
  getAuthState() {
    return this.afAuth.authState;
  }
  async resetPassword(email: string): Promise<void> {
  try {
    await this.afAuth.sendPasswordResetEmail(email);
  } catch (error) {
    throw error;
  }
}

}
