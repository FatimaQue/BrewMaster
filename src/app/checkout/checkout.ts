import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-checkout',
  imports: [RouterOutlet, RouterLink,CommonModule ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  constructor(private router: Router) {}
  confirmPurchase() {
    // Here you would normally call an API to save the order
    this.router.navigate(['/order-success']);
  }
}
