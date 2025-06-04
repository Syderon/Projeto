import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LivrosService } from '../../services/livros.service'; 
import { NavController } from '@ionic/angular';


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
    private livrosService: LivrosService,
    private navCtrl: NavController
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }
  
  async lerLivro() {
  if (this.book?.pdfUrl) {
    await this.navCtrl.navigateForward(`/pdf-viewer?file=${encodeURIComponent(this.book.pdfUrl)}`);
    this.dismiss();
  } else {
    alert('PDF do livro não disponível.');
  }
  
}
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
