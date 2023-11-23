import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]',
  standalone: true
})
export class CustomeDirectiveDirective {

  constructor(private el:ElementRef) {
    console.log(this.el);
    this.el.nativeElement.style.color='black';
    this.el.nativeElement.style.fontFamily='Georgia, Times New Roman, Times, serif';
    this.el.nativeElement.style.display='flex';
    this.el.nativeElement.style.flexDirection='row';
    this.el.nativeElement.style.marginBottom='40px';
    this.el.nativeElement.style.textAlign='center';
    

   
   

   
   }
   ngOnInit(){
    
   }

}
