import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChange, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called');
    
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngonchanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngoninit called');
    console.log(this.header.nativeElement.textContent);
    console.log('text content of p:' + this.paragraph.nativeElement.textContent);
    
  }

  ngDoCheck() {
    console.log('ngdocheck called');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit called')
    console.log('text content of p:' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngaftercontentchecked called')
  }

  ngAfterViewInit() {
    console.log('ngafterViewinit called')
    console.log(this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('ngafterViewchecked called')
  }

  ngOnDestroy() {
    console.log('ngondestroy called');
    
  }
}
