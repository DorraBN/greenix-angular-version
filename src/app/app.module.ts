import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenixComponent } from './greenix/greenix.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ServicesComponent } from './services/services.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FooterComponent } from './footer/footer.component';
import 'ionicons';


@NgModule({
  declarations: [
    AppComponent,
    GreenixComponent,
    ChatbotComponent,
    ServicesComponent,
    FormulaireComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
