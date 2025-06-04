import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LivrosService } from '../../services/livros.service';

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
    private cdr: ChangeDetectorRef
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
  this.cdr.detectChanges(); // Garante atualização do template
}

  dismiss() {
    this.modalController.dismiss();
  }

  lerLivro() {
    console.log('Iniciando leitura do livro:', this.book.titulo);
    this.dismiss();
  }

  async salvarLivro() {
    if (this.estaSalvo) return;

    try {
      const sucesso = await this.livrosService.salvarLivro(this.book);

      const toast = await this.toastController.create({
        message: sucesso
          ? `"${this.book.titulo}" salvo com sucesso!`
          : `"${this.book.titulo}" já está na sua biblioteca`,
        duration: 2000,
        position: 'bottom',
        color: sucesso ? 'success' : 'warning',
      });

      await toast.present();
      await this.verificarSeEstaSalvo(); // Atualiza o estado
    } catch (error) {
      console.error('Erro ao salvar livro:', error);
      const toast = await this.toastController.create({
        message: `Erro ao salvar "${this.book.titulo}"`,
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }
}
