import { Component } from '@angular/core';
import { HomeViewComponent } from './view/home-view/home-view.component'
import { FooterViewComponent } from './view/footer-view/footer-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/font-awesome/css/font-awesome.css']
})
export class AppComponent {
  title = 'app works!';
}
