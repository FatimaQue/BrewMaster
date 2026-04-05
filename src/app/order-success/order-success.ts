import { Component , OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-success',
  imports: [ RouterOutlet, RouterLink, CommonModule ],
  templateUrl: './order-success.html',
  styleUrl: './order-success.css',
})
export class OrderSuccess implements OnInit {
  orderNumber: string = '';
  ngOnInit(): void {
    this.orderNumber = 'ORD-' + Math.floor(Math.random() * 100000);
  }

}
