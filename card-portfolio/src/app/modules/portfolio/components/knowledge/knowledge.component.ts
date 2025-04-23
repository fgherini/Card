import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: "HTML5 icon"
    },
    {
      src: "assets/icons/knowledge/css3.svg",
      alt: "CSS3 icon"
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "JavaScript icon"
    },
    {
      src: "assets/icons/knowledge/nodejs.svg",
      alt: "NodeJS icon"
    },
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: "Angular icon"
    }
  ])
}
