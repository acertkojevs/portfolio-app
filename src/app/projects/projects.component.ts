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
    { date: '2024-06-12', title: 'SS.LV Auto WebScraper', text: 'A web scraper to automatically extract and update automotive listings from the SS.LV website, capturing details like make, model, year, and price and exports it to CSV.', url: 'ss-lv-auto-webscraper' },
    { date: '2024-05-15', title: 'E-commerce Platform', text: 'Developed a scalable e-commerce platform for an online retail business, featuring user authentication, product catalog, shopping cart, and order management.', url: '/projects/ecommerce-platform' },
    { date: '2024-04-10', title: 'Weather App', text: 'Created a weather application using Angular and the OpenWeatherMap API to provide real-time weather updates, forecasts, and weather alerts for multiple cities.', url: '/projects/weather-app' },
    { date: '2024-03-20', title: 'Chatbot for Customer Service', text: 'Implemented a chatbot using NLP techniques to assist customers with FAQs, order tracking, and support requests on the company website.', url: '/projects/chatbot-customer-service' },
    { date: '2024-02-28', title: 'Real-Time Data Dashboard', text: 'Built a real-time data dashboard using Angular and WebSocket to visualize live data streams from IoT sensors in a manufacturing plant.', url: '/projects/real-time-data-dashboard' },
    { date: '2024-01-18', title: 'Online Learning Platform', text: 'Developed an online learning platform with user registration, course management, interactive lessons, and quizzes.', url: '/projects/online-learning-platform' },
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
