import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appButtonDirective]',
  standalone: true
})
export class ButtonDirectiveDirective {

  constructor(private el:ElementRef) {
    console.log(this.el);
    this.el.nativeElement.style.color='white';
    this.el.nativeElement.style.backgroundColor='black';
    this.el.nativeElement.style.width='180px';
    this.el.nativeElement.style.height='35px';
    this.el.nativeElement.style.border='none';
    this.el.nativeElement.style.borderRadius='8px 8px 8px 8px';
    this.el.nativeElement.style.marginTop='50px';
   
    
   }
   @HostListener('mouseenter') OnMouseEnter(){
    this.hightlight('black');
    
   }
   private hightlight(color:string){
    this.el.nativeElement.style.color=color;
    this.el.nativeElement.style.backgroundColor='grey';
   }
   @HostListener('mouseleave') OnMouseLeave(){
    this.hightlight('white');
    this.el.nativeElement.style.backgroundColor='black';
   }

}
