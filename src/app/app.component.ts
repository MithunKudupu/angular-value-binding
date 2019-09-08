import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning value-binding';

  //  Fields for built-in pipe demonstration
  pi = 3.14159265359;
  today = new Date();
  amount = 12.5236;
  rate = 0.87;
  car = {
    make: 'BMW',
    model: '530d',
    owner: {
      name: 'Rajesh',
      city: 'Bengaluru'
    }
  };
}
