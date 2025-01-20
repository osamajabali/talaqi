import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-terms-and-conditions',
  imports: [FooterComponent , FooterComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss'
})
export class TermsAndConditionsComponent {

  currentYear: number = new Date().getFullYear();

}
