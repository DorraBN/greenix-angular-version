import { Component } from '@angular/core';

@Component({
  selector: 'app-greenix',
  templateUrl: './greenix.component.html',
  styleUrls: ['./greenix.component.css']
})
export class GreenixComponent {
 imagePath: string = 'assets/gr.jpg';
  imagePath1: string = 'assets/d.jpg';
  imagePath2: string = 'assets/c.jpg';
  imagePath3: string = 'assets/b.jpg';
  imagePath4: string = 'assets/k.jpg';
  phoneNumber = '55759343';
  email = 'contact.greenix@gmail.com';
  currentYear = new Date().getFullYear();
}
