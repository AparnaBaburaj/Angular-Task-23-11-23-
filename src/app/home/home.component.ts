import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeDirectiveDirective } from '../custome-directive.directive';
import { FormsModule } from '@angular/forms';
import { HoverDirectiveDirective } from '../hover-directive.directive';
import { ButtonDirectiveDirective } from '../button-directive.directive';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CustomeDirectiveDirective,FormsModule,HoverDirectiveDirective,ButtonDirectiveDirective,RouterModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
