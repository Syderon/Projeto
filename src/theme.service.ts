import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeSubject.asObservable();
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.loadThemePreference();
  }

  private loadThemePreference() {
    const darkMode = localStorage.getItem('darkMode');
    const isDarkMode = darkMode === 'true';
    this.darkModeSubject.next(isDarkMode);
    this.updateBodyClass(isDarkMode);
  }

  toggleDarkMode() {
    const isDarkMode = !this.darkModeSubject.value;
    this.darkModeSubject.next(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
    this.updateBodyClass(isDarkMode);
  }

  get isDarkMode() {
    return this.darkModeSubject.value;
  }

  private updateBodyClass(isDarkMode: boolean) {
    if (isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}