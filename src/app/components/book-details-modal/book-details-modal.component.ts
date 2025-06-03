import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LivrosService } from '../../services/livros.service'; // Adicione esta importação

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
})
export class BookDetailsModalComponent {
  @Input() book: any;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private livrosService: LivrosService // Injete o serviço
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  lerLivro() {
    console.log('Iniciando leitura do livro:', this.book.titulo);
    this.dismiss();
  }

  // Substitua o método salvarLivro por:
async salvarLivro() {
  const sucesso = this.livrosService.salvarLivro(this.book);
  
  const toast = await this.toastController.create({
    message: sucesso 
      ? `"${this.book.titulo}" salvo com sucesso!` 
      : `"${this.book.titulo}" já está na sua biblioteca`,
    duration: 2000,
    position: 'bottom',
    color: sucesso ? 'success' : 'warning'
  });
  toast.present();
  this.dismiss();
}
}