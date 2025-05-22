import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abovefooter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abovefooter.component.html',
  styleUrl: './abovefooter.component.css'
})
export class AbovefooterComponent {

  ShowPersonalDetails = false;

  hobbies = ['Coding', 'Reading', 'Gaming', 'Travelling'];
  skills = ['Ph.No: 9981239875', 'Email: Mani1233@gmail.com', 'linkedIn: https://www.linkedin.com/in/moneytest-loco-381365307/', 'gitbub:'];
}