import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { AbovefooterComponent } from '../abovefooter/abovefooter.component';
import { FooterComponent } from '../footer/footer.component';
import { TwowaybindingComponent } from '../twowaybinding/twowaybinding.component';

@Component({
  selector: 'app-canvo',
  standalone: true,
    imports: [RouterOutlet,AboutComponent,HomeComponent,FooterComponent,AbovefooterComponent,TwowaybindingComponent, RouterModule,CanvoComponent],
  templateUrl: './canvo.component.html',
  styleUrl: './canvo.component.css'
})
export class CanvoComponent {

}
