import { Routes } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'test', component:TestPageComponent},
    {path: 'home', component:HomeComponent}
];
