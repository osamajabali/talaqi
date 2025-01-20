import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-talaqi-services',
  imports: [],
  templateUrl: './talaqi-services.component.html',
  styleUrl: './talaqi-services.component.scss',
  animations: [
    trigger('fadeInOnScroll', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [animate('0.5s ease-out')])
    ])
  ]
})
export class TalaqiServicesComponent {


  constructor(private el: ElementRef) {}
  
  services = [
    {
      title: 'Software Development',
      image: '/assets/images/services/software-development.jpg'
    },
    {
      image: '/assets/images/services/ecommerce.jpg'
    },
    {
      title: 'Business Integration',
      image: '/assets/images/services/business-integration.jpg'
    },
    {
      title: 'Technology Consulting',
      image: '/assets/images/services/technology-consulting.jpg'
    }
  ];
}
