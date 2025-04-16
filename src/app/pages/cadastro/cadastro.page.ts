import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      celular: [''],
      avatar: ['']
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Dados cadastrados:', this.cadastroForm.value);
      // Aqui você pode enviar os dados para sua API ou salvar no localStorage
    } else {
      console.log('Formulário inválido');
    }
  }
}
