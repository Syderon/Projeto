import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isDarkMode: boolean = false;  // Variável para controlar o modo escuro

  constructor() {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;  // Alterna o estado do modo escuro
    document.body.classList.toggle('dark', this.isDarkMode);  // Adiciona/remova a classe 'dark'
  }
}
