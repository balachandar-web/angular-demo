import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomGridDirective } from './custom-grid.directive';
// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     // Other components, directives, pipes
//   ],
//   imports: [
//     BrowserModule
    
//     // Other modules
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'customer';
}


