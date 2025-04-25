import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';  // Corrigido para o compatível com as versões

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Método para login do usuário
  async login(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Erro ao fazer login', error);
      throw error;
    }
  }

  // Método para registro do usuário
  async register(email: string, password: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Erro ao registrar usuário', error);
      throw error;
    }
  }

  // Método para logout
  async logout() {
    try {
      return await this.afAuth.signOut();
    } catch (error) {
      console.error('Erro ao fazer logout', error);
      throw error;
    }
  }

  // Método para pegar o estado da autenticação
  getAuthState() {
    return this.afAuth.authState;  // Aqui a versão mais antiga usa authState diretamente
  }
}
