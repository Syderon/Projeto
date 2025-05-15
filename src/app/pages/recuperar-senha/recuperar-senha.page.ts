import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { initPaperCanvas } from '../../../paper-shapes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})


export class RecuperarSenhaPage {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router

  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {
  setTimeout(() => initPaperCanvas(), 300);
  }
  voltarParaLogin() {
  this.router.navigate(['/login']);
}


  async enviarLink() {
    const email = this.form.value.email;
    try {
      await this.authService.resetPassword(email);
      const alert = await this.alertCtrl.create({
        header: 'Sucesso!',
        message: 'Um link de redefinição de senha foi enviado para seu email.',
        buttons: ['OK']
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Não foi possível enviar o email. Verifique se está correto.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
