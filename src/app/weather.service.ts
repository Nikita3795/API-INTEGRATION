import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'your_openweathermap_api_key'; // Replace with your API Key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  ;
   private apiUrl1 = 'https://www.indiatoday.in/livetv'
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  getNews(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl1}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
