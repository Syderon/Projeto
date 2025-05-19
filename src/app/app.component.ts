import { Component, OnInit, Renderer2 } from '@angular/core';
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
  menuOpen = false;

  constructor(
    private platform: Platform, 
    private authService: AuthService,
    private renderer: Renderer2
  ) {
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
        this.avatarUrl = 'assets/avatar.jpg';
      }
    });
  }

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
      this.setDarkMode(this.isDarkMode);
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.setDarkMode(this.isDarkMode);
    
    // Remove a classe de container escuro se existir
    const container = document.querySelector('.menu-container');
    if (container) {
      this.renderer.removeClass(container, 'dark-container');
    }
  }

  openSettings() {
    console.log('Abrir configurações');
    // this.router.navigate(['/settings']);
  }

  private setDarkMode(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  // Novo efeito de abertura do menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const menu = document.querySelector('ion-menu');
    if (menu) {
      if (this.menuOpen) {
        this.renderer.addClass(menu, 'menu-visible');
        this.renderer.removeClass(menu, 'menu-hidden');
      } else {
        this.renderer.addClass(menu, 'menu-hidden');
        this.renderer.removeClass(menu, 'menu-visible');
      }
    }
  }
}