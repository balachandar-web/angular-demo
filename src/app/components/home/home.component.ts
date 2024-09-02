import { Component, OnInit } from '@angular/core';
import { TestComponent } from '../../test/test.component';
import { CommonModule } from '@angular/common';
import { CustomGridDirective } from '../../custom-grid.directive';
// import { CustomGridDirective } from '../../custom-grid.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  TestComponent,CommonModule,CustomGridDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  appName = "new app";
  show:boolean=true;
  day = new Date();

  isDivVisible: boolean = false;

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  items = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 },
    { name: 'Item 3', price: 300 },
    { name: 'Item 4', price: 400 },
    { name: 'Item 5', price: 500 },
    { name: 'Item 6', price: 600 }
  ];
}
