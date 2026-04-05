import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mocha-coffee',
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './mocha-coffee.html',
  styleUrl: './mocha-coffee.css',
})
export class MochaCoffee {}
