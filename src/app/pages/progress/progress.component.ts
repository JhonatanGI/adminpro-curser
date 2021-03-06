import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'  ]
})
export class ProgressComponent {

  progreso1: number = 24;
  progreso2: number = 55;

  get getProgreso1(){
    return `${ this.progreso1 }%`
  }

  get getProgreso2(){
    return `${ this.progreso2 }%`
  }
}
