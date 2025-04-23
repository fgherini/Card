import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Front-end Developer",
        p: "Flaneuse Studio | 2023-2025"
      },
      text: `Delivered front-end solutions for web projects, using Angular and TypeScript to build responsive, high-performance interfaces with interactive features.`,
      text2: `Angular TypeScript JavaScript HTML5 CSS3`
    },
    {
      summary: {
        strong: "3D Artist",
        p: "CatBot Creative Studio | 2021-2024"
      },
      text: `Worked with clients in the gaming industry, responsibilities included 3D modeling, model optimization and developing tools to optmize modeling workflow in Python.`, 
      text2: `Unity Blender SubstancePainter Cinema4D Pixyz`
    },
    {
      summary: {
        strong: "Acoustics Engineer and 3D Artist",
        p: "GMF Acoustics | 2011-2023"
      },
      text: `Developed Tools to Calculate and simulate acoustics in Python. Designed and 3D modeled more than 80 recording studios, theaters, and offices in Brazil and China. Managed multidisciplinary teams of up to twenty people, applying different project management methods.`,
      text2: `Blender SubstancePainter Cinema4D AutoCad MathLab`
    },
  ]);

}
