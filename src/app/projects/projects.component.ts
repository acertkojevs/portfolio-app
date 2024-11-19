import { Component } from '@angular/core';
import { Project } from './project.model';
import { PaginationComponent } from '../pagination/pagination.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, PaginationComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      date: '2024-06-12',
      title: 'SS.LV Auto WebScraper',
      text: 'A web scraper to automatically extract and update automotive listings from the SS.LV website, capturing details like make, model, year, and price and exports it to CSV.',
      url: 'ss-lv-car-webscraper'
    },
    {
      date: '2024-11-19',
      title: 'RaveCulture.lv — all about EDM and Rave music.',
      text: 'RaveCulture.lv is a website dedicated for rave and edm fans. It covers s everything from breaking news, highlights upcoming festivals, club nights, and rave events.',
      url: 'rave-culture-lv'
    }
  ];


  totalItems = this.projects.length;
  itemsPerPage = 5;
  currentPage = 1;


  get paginatedProjects(): Project[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.projects.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
