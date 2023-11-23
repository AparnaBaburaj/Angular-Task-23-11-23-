import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverDirectiveDirective } from '../hover-directive.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FormsModule,HoverDirectiveDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public fname='Aparna';
  public lname='TB';
  public designation='Trainee in Front-end Development';
  public email='aparnababuraj121@gmail.com';
  public phone='+91 8606429695';
  public location='Thrissur';
  public date_of_joining='25 sep 2023';
  public degree='B Tech in Information Technology(2023)';
  public college='Goverment Engineering College Idukki';
  public myClass='blue';
  public title='Contact Information';
  public title1='Additional Details';
  public title2='Education';

}
