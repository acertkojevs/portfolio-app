import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = [
    {
      title: 'SS.LV Car WebScapper',
      description: 'A web scraper to automatically extract and update automotive listings from the SS.LV website, capturing details like make, model, year, and price and exports it to CSV.',
      imageUrl: 'assets/sslv.png',
      urlName: 'ss-lv-car-webscraper'
    },
    {
      title: 'RaveCulture.lv — all about EDM and Rave music.',
      description: 'RaveCulture.lv is a website dedicated for rave and edm fans. It covers s everything from breaking news, highlights upcoming festivals, club nights, and rave events.',
      imageUrl: 'assets/rave.png',
      urlName: 'rave-culture-lv'
    }
  ];
}
