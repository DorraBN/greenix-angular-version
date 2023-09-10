import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  imagePath: string = 'assets/gr.jpg';
  imagePath1: string = 'assets/d.jpg';
  imagePath2: string = 'assets/c.jpg';
  imagePath3: string = 'assets/b.jpg';
  imagePath4: string = 'assets/k.jpg';
 }
