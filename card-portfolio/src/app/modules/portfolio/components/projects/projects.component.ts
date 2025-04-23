import { Component, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
//interface: 
import { IProjects } from '../../interface/IProjects';
//material: 
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
//enum: 
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog); 

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/images/projects/project1_b.jpg',
      alt: 'Modern Café Menu',
      title: 'Modern Café Menu',
      width: '80px',
      height: '80px',
      description:
        '<p>This project is a responsive and interactive digital coffee menu, designed to simulate the user experience of browsing drinks at a modern café.</p> <p>Users can view a list of coffee drinks, each with a name, description, price, and image. Items are grouped into categories (e.g., Espresso, Cold Brew, Specialties), with the ability to filter by category in real-time. The menu layout is fully responsive, adapting to mobile, tablet, and desktop screens.</p>',
      links: [
        {
          name: 'Visit Project',
          href: '',
        },
      ],
    },{
      src: 'assets/images/projects/project2_b.jpg',
      alt: 'Aldeia & Mar: Produtos Portugueses',
      title: 'Aldeia & Mar: Produtos Portugueses',
      width: '80px',
      height: '80px',
      description:
        '<p>This project is a e-commerce website inspired by traditional Portuguese goods, designed to showcase both user-facing and admin-facing functionality.</p> <p>Users can browse a curated list of Portuguese products (such as wine, olive oil, and sweets), view product details, and add items to a shopping cart. The cart updates dynamically and persists during the session, allowing users to review or remove items before checkout.</p>',
      links: [
        {
          name: 'Visit Project',
          href: '',
        },
      ],
    },{
      src: 'assets/images/projects/project3_b.jpg',
      alt: '3D Portfolio',
      title: '3D Portfolio',
      width: '80px',
      height: '80px',
      description:
        '<p>This is a visual showcase of my past 3D work, featuring projects developed for games, interactive experiences, and personal studies. It includes a mix of modeling, texturing, optimization — often created for real-time applications like Unity or VR. The goal of this portfolio is to present both technical execution and artistic direction across different styles and workflows.</p>',
      links: [
        {
          name: 'Visit Portfolio',
          href: 'https://www.artstation.com/fernandogherini',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent 
      , {
      data, 
      panelClass: EDialogPanelClass.PROJECTS
    });
  }

  
}
