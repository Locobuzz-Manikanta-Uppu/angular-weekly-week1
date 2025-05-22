import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule],
  standalone: true
})
export class AboutComponent {
  ShowProfessionalDetails = false;

  hobbies = ['SRM Univercity [B.Tech]', 'Sri Chaitanya Jr Collage [12]', 'Scolars Public School [10] ', 'Aksharabyasa[KinderGarden]'];
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];
}
