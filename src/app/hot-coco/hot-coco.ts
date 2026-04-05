import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hot-coco',
  imports: [RouterOutlet,CommonModule, RouterLink],
  templateUrl: './hot-coco.html',
  styleUrl: './hot-coco.css',
})
export class HotCoco {
  constructor(private router: Router) {}

  onBuyNow() {
    this.router.navigate(['/checkout']);
  }
}
