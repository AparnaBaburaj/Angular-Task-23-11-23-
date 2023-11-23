import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]',
  standalone: true
})
export class HoverDirectiveDirective {

  constructor(private el:ElementRef) { 
    console.log(this.el);
   }
   ngOnInit(){
    
   }
   @HostListener('mouseenter') OnMouseEnter(){
    this.hightlight('skyblue');
    
   }
   private hightlight(color:string){
    this.el.nativeElement.style.color=color;
    this.el.nativeElement.style.backgroundColor='aliceblue';
   }
   @HostListener('mouseleave') OnMouseLeave(){
    this.hightlight('');
    this.el.nativeElement.style.backgroundColor='';
   }
  

}
