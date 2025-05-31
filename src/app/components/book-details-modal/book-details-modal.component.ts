import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
})
export class BookDetailsModalComponent {
  @Input() book: any; // Recebe todos os dados do livro

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  // Fecha o modal
  dismiss() {
    this.modalController.dismiss();
  }

  // Ação do botão Ler
  lerLivro() {
    console.log('Iniciando leitura do livro:', this.book.titulo);
    this.dismiss();
    // Adicione aqui a navegação para a página de leitura
  }

  // Ação do botão Salvar
  async salvarLivro() {
    const toast = await this.toastController.create({
      message: `"${this.book.titulo}" foi adicionado à sua biblioteca!`,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
    this.dismiss();
  }
}