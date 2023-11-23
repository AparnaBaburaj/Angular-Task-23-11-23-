import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:AboutComponent,
        path:'about'
    },
    {
        component:RecipesComponent,
        path:'recipes'
    },
];
