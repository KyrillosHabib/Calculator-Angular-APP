import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = '';
  res = '';

  getAction(item:any){
    this.result += item;
  }

  equal(){
    this.res = eval(this.result).toFixed(2);
  }

  reset(){
    this.result = '';
    this.res = '';
  }

}
