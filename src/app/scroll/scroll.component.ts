import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent {
  shouldShow = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Mettre à jour le statut de la visibilité de la flèche
    this.shouldShow = window.scrollY > 20 || document.documentElement.scrollTop > 20;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

