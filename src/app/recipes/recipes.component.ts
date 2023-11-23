import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeDirectiveDirective } from '../custome-directive.directive';
import { HoverDirectiveDirective } from '../hover-directive.directive';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule,CustomeDirectiveDirective,HoverDirectiveDirective],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

}
