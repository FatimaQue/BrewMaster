import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-espresso-coffee',
  imports: [RouterOutlet,CommonModule, RouterLink],
  templateUrl: './espresso-coffee.html',
  styleUrl: './espresso-coffee.css',
})
export class EspressoCoffee {}
