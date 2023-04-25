import { Component, Input , OnInit } from '@angular/core';
import { Store } from  '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent  implements OnInit {
  counter:number = 0;
  counter$:Observable<{ counter: number; }> | undefined | null
  counterSubscription:Subscription = new Subscription()
 

  constructor(private store:Store <{counter:CounterState}>) {}
  ngOnInit(): void {
 
    this.counter$ = this.store.select('counter')
    
  }
 
 
}
