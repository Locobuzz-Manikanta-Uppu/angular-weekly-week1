import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CanvoComponent } from './canvo/canvo.component';

export const routes: Routes = [
  { path: '', component: CanvoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Letsmakesomefun', component: TwowaybindingComponent } 
];

