import { Component } from '@angular/core';
import 'ionicons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  constructor(private http: HttpClient) {}

  onSubmit(formValue: any) {
    // Envoi de la soumission du formulaire au serveur
    this.http.post('/api/send', formValue).subscribe((response) => {
      console.log('Réponse du serveur :', response);
      // Traitez la réponse du serveur ici
    });
  }
}
