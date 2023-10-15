import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScrollComponent } from './scroll/scroll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    FooterComponent,
    ScrollComponent,
    ScrollServiceComponent,
    DiscussComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { trigger, transition, style, animate } from '@angular/animations';

import { ScrollServiceComponent } from './scroll.service/scroll.service.component';
import { DiscussComponent } from './discuss/discuss.component';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
