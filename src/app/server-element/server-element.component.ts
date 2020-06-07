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
  OnDestroy
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

  constructor() { 
    console.log('constructor called');
    
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngonchanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngoninit called');
  }

  ngDoCheck() {
    console.log('ngdocheck called');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit called')
  }

  ngAfterContentChecked() {
    console.log('ngaftercontentchecked called')
  }

  ngAfterViewInit() {
    console.log('ngafterViewinit called')
  }

  ngAfterViewChecked() {
    console.log('ngafterViewchecked called')
  }

  ngOnDestroy() {
    console.log('ngondestroy called');
    
  }
}
