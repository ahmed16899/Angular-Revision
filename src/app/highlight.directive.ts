import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective implements OnInit {

  @Input() Color:string='transparent'
  @Input() BackroundColor:string='transparent'

  constructor(private elementRef: ElementRef,
    private render: Renderer2,
  ) { }
  ngOnInit(): void {
   /* console.log(this.elementRef.nativeElement)
    this.elementRef.nativeElement.style.backgroundColor = 'red'
    //this.elementRef.nativeElement.classList.add('bg-danger')
    console.log(this.render, 'dasasdasdsda')

    this.render.setStyle(this.elementRef.nativeElement, 'color', 'blue')*/
   // this.backgroundColor='green'

  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.render.setStyle(this.elementRef.nativeElement, 'color', 'green')
    this.color=this.BackroundColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.render.setStyle(this.elementRef.nativeElement, 'color', 'blue')
    this.color=this.Color

  }
  @HostBinding('style.backgroundColor') backgroundColor:string=this.BackroundColor
  @HostBinding('style.backgroundColor') color:string=this.Color

  
}
