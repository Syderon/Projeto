import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  logout() {
    // Aqui você pode limpar o localStorage, session ou token
    // Exemplo:
    localStorage.clear();

    // E redirecionar para a tela de login
    this.router.navigate(['/login']);
  }
}
