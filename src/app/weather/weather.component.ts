import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-weather',
  template: `<p>Weather component works!</p>`, // Use inline template
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    if (!this.city) {
      alert('Please enter a city name');
      return;
    }

    this.weatherService.getWeather(this.city).subscribe(
      data => this.weatherData = data,
      error => this.weatherData = { error: 'City not found!' }
    );
  }
}
