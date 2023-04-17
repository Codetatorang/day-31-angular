import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day-31'
  value = 10
  historicalvalue:number[] = []

  valueChanged(v:number){
    console.info(">>> value changed", v)
    this.value = v
    this.historicalvalue.push(v)

  }

  deleteValue(i:number){
    this.historicalvalue.splice(i,1)
  }
}
