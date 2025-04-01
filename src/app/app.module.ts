import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
 
import { WeatherComponent } from './weather/weather.component';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './app.component.html'
})
export class WeatherModule  {}
