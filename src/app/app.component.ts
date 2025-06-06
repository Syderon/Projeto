import { Component, OnInit, Renderer2 } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { slideInAnimation, fadeAnimation, zoomAnimation, flipAnimation, slideUpAnimation, blurAnimation,
  rotateAnimation, scaleBounceAnimation, slideRightAnimation, skewAnimation, flipHorizontalAnimation, 
zoomOutAnimation } from './animations';


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
  customAnimation = blurAnimation;
  

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private renderer: Renderer2,
    private loadingController: LoadingController
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

  async initializeApp() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      spinner: 'crescent'
    });

    await loading.present();

    this.platform.ready().then(() => {
      const darkMode = localStorage.getItem('darkMode');
      this.isDarkMode = darkMode === 'true';
      this.setDarkMode(this.isDarkMode);

      loading.dismiss();
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.setDarkMode(this.isDarkMode);

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
import { createAnimation } from '@ionic/angular';

export const slideLeftAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(400)
    .easing('ease-in-out')
    .fromTo('transform', 'translateX(100%)', 'translateX(0)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(400)
    .easing('ease-in-out')
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
