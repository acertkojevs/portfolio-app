import { Component } from '@angular/core';
import { NavLink } from './navLinks';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navLinks: NavLink[] = [
    { name: 'Home', route: "/home" },
    { name: 'Projects', route: "/projects" },
    { name: 'About', route: "/about" }
  ];
}
