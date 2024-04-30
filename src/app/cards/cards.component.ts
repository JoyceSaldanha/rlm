import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(private route: Router) {

  }

  navigateToAbbegate() {
    this.route.navigate(['abbegate']);
  }

  navigateToTrackAndTrace() {
    this.route.navigate(['trackandtrace']);
  }
}
