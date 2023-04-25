import { Component } from '@angular/core';
import { Store } from '@ngrx/store' 
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {
  constructor(private store :Store<{ counter: CounterState   }> ){}
  
  value : any ;
  onAdd(){
    this.store.dispatch(customIncrement({value:+this.value}))
  }

}
