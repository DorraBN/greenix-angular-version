import { Component } from '@angular/core';

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent {
  questions = [
    { name: 'John Doe', message: 'This is an example message.' },
    // Add more questions as needed
  ];

  showQuestionDetails(name: string, message: string): void {
    alert(`Name: ${name}\nMessage: ${message}`);
  }
}
