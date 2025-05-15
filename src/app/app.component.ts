// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  nome: string | null = null;
  email: string | null = null;
  avatarUrl: string | null = null;
  isDarkMode: boolean = false;
  user$: Observable<any> = this.authService.user;

  constructor(private platform: Platform, private authService: AuthService) {
    this.initializeApp();
  }

  ngOnInit() {
    this.user$.subscribe((user) => {
      if (user) {
        this.nome = this.capitalizeName(user.displayName);
        this.email = user.email;
        this.avatarUrl = user.photoURL || 'assets/avatar.jpg';
      } else {
        this.nome = null;
        this.email = null;
        this.avatarUrl = 'assets/avatar.jpg';  // Imagem padrão se não houver avatar
      }
    });
  }

  // Função para deixar a primeira letra do nome maiúscula
  capitalizeName(name: string | null): string | null {
    if (name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return null;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const darkMode = localStorage.getItem('darkMode');
      this.isDarkMode = darkMode === 'true';
      if (this.isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
