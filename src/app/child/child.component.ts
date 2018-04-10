import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
              <h3>Mr. {{name}} </h3>
              <button (click)="vote(true)" [disabled]="voted">Agree</button>
              <button (click)="vote(false)" [disabled]="voted">Disagree</button>
            `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    voted = false;

    @Input() name : string; // input  name passed from parent component
    @Output() onnVoted = new EventEmitter<boolean>(); // Eventemitter is using to emit custom events , can be synchronous or asynchronous

    vote(agreed : boolean){
      this.onnVoted.emit(agreed);
      this.voted = true; // disable button on click
    }
}
