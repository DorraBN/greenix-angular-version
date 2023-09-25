import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  phoneNumber = '55759343';
  email = 'contact.greenix@gmail.com';
  currentYear = new Date().getFullYear();
}
