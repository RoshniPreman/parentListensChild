import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h2>Should we trust in God? </h2>
              <h3> Agree : {{agreed}} , Disagree  :  {{disAgreed}} </h3>
              <app-child *ngFor="let voter of voters" [name]="voter" (onnVoted)="onVoted($event)"></app-child>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    agreed = 0;
    disAgreed = 0;
    voters = ['Ramya' , 'Arun' , 'Rajeev'];

    onVoted(agreed : boolean){
      agreed ? this.agreed++ : this.disAgreed++;
    }
  
}
