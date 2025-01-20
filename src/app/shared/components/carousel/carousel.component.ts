import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit{
  carouselItems = [
    { videoUrl: '/assets/images/carousel/enterprise-solutions.mp4', altText: 'Slide 1', caption: 'Caption for Slide 1' },
    { videoUrl: '/assets/images/carousel/banner-your-digital.mp4', altText: 'Slide 1', caption: 'Caption for Slide 1' },
    { videoUrl: '/assets/images/carousel/generation-infrastructure.mp4', altText: 'Slide 1', caption: 'Caption for Slide 1' },
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {this.playVideos()}

  ngAfterViewInit(): void {
    // Wait for a user interaction (click, scroll, etc.)
    this.el.nativeElement.addEventListener('click', () => {
      this.playVideos();
    });
    
  }

   playVideos(): void {
    const videos = this.el.nativeElement.querySelectorAll('video');

    videos.forEach((video: HTMLVideoElement) => {
        video.play()
    });
  }
}
