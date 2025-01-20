import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollFade]'
})
export class ScrollFadeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const elementPos = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPos < windowHeight - 50) {
      this.renderer.addClass(this.el.nativeElement, 'visible');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'visible');
    }
  }
}
