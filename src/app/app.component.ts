import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Spectro',

  redirectionUrl = 'https://github.com/robertodecurnex/spectro',

  ngOnInit() {
    window.location.replace(this.redirectionUrl);
  }
}
