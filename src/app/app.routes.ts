import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SsLvAutoWebscraperComponent } from './projects/projectsComponents/ss-lv-auto-webscraper/ss-lv-auto-webscraper.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects/ss-lv-car-webscraper', component: SsLvAutoWebscraperComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
