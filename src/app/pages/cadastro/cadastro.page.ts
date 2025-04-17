import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastroForm!: FormGroup;
  avatarImage: any = null;

  @ViewChild('avatarInput') avatarInputRef!: ElementRef;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      celular: [''],
      avatar: ['']
    });
  }

  abrirSeletorDeImagem() {
    this.avatarInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.avatarImage = file;
      console.log("Imagem selecionada:", this.avatarImage);
    }
  }

  voltar() {
    this.navCtrl.back();
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Dados cadastrados:', this.cadastroForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  isCampoInvalido(campo: string): boolean {
    const control = this.cadastroForm.get(campo);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
