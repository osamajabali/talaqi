import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-talaqi-at-glance',
  imports: [RouterModule , FormsModule],
  templateUrl: './talaqi-at-glance.component.html',
  styleUrl: './talaqi-at-glance.component.scss'
})
export class TalaqiAtGlanceComponent {
  // Define navigation items
  navItems = [
    {
      label: 'About Talaqi',
      text: 'TALAQI is a leading technology company specializing in innovative software development and e-commerce solutions. Our expertise lies in creating intelligent, scalable, and customized software that enhances business operations. We are committed to delivering high-quality, cutting-edge solutions that help businesses thrive in the digital age. At TALAQI,  we believe in driving growth through technology and exceeding our clients expectations.'
    },
    {
      label: 'Vision',
      text: 'To be a global leader in smart business technology, setting the standard for intelligent solutions in software development and e-commerce.'
    },
    {
      label: 'Mission',
      text: 'Empowering businesses with innovative software and e-commerce solutions, driving efficiency and excellence through cutting-edge technology.'
    }
  ];

  selectedText: string = this.navItems[0].text; // Default selected text
  selectedItem = this.navItems[0]; // Default selected item

  // Method to update selected item and text
  selectItem(item: any): void {
    this.selectedItem = item;
    this.selectedText = item.text;
  }
}
