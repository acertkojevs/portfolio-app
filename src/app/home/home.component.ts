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
      title: 'SS.LV Auto WebScapper',
      description: 'A web scraper to automatically extract and update automotive listings from the SS.LV website, capturing details like make, model, year, and price and exports it to CSV.',
      imageUrl: 'assets/sslv.png',
      urlName: 'ss-lv-auto-webscraper'
    },
    // {
    //   title: 'Project Title 2',
    //   description: 'Brief description of the project goes here.',
    //   imageUrl: 'path/to/unique-image2.jpg'
    // },
  ];
}
