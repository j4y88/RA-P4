import { Component } from '@angular/core';
import { BlogViewComponent } from './alien-view/blog-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  						'../../node_modules/font-awesome/css/font-awesome.css']
})
export class AppComponent {
  title = 'app works!';
}
