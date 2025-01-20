import { Component } from '@angular/core';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ScrollFadeDirective } from '../shared/directives/fade-animation.directive';
import { TalaqiAtGlanceComponent } from '../talaqi-at-glance/talaqi-at-glance.component';
import { TalaqiServicesComponent } from '../talaqi-services/talaqi-services.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard',
  imports: [CarouselComponent , TalaqiAtGlanceComponent , TalaqiServicesComponent , ScrollFadeDirective , FooterComponent , TalaqiAtGlanceComponent , NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
