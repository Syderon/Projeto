import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LivrosService } from '../../services/livros.service'; 
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
})
export class BookDetailsModalComponent implements OnInit {
  @Input() book: any;
  estaSalvo: boolean = false;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private livrosService: LivrosService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.verificarSeEstaSalvo();
    console.log('Livro recebido:', this.book);
  }

  async verificarSeEstaSalvo() {
  try {
    this.estaSalvo = this.livrosService.livroJaSalvo(this.book.id);
    console.log('Está salvo?', this.estaSalvo);
  } catch (error) {
    console.error('Erro ao verificar se livro está salvo:', error);
    this.estaSalvo = false;
  }
}

  dismiss() {
    this.modalController.dismiss();
  }
  
  async lerLivro() {
  if (this.book?.pdfUrl) {
    // Abre o PDF em uma nova aba (funciona no navegador e em apps mobile)
    window.open(this.book.pdfUrl, '_blank');
    this.dismiss();  // Fecha o modal
  } else {
    const toast = await this.toastController.create({
      message: 'PDF não disponível para este livro.',
      duration: 2000,
      position: 'bottom',
      color: 'warning'
    });
    toast.present();
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
