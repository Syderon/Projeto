import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';  // Importe a página de login
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';  // Usando a versão compatível com a versão 6.1.5
import { AngularFireAuthModule } from '@angular/fire/auth';  // Usando a versão compatível com a versão 6.1.5
import { environment } from '../environments/environment';

// Importando o GenerosModule
import { GenerosModule } from './pages/generos/generos.module';

@NgModule({
  declarations: [AppComponent, LoginPage],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicialização do Firebase
    AngularFireAuthModule,  // Modulo de autenticação
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    GenerosModule,  // Certificando-se de que o GenerosModule está aqui
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
