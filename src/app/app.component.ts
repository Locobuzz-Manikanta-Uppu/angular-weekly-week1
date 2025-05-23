import { Component } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AbovefooterComponent } from './abovefooter/abovefooter.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CanvoComponent } from './canvo/canvo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CanvoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private route: Router){}
  title = 'SelfIntro';
  redirect() {
    this.route.navigate(['/twoway']);
  }
}
