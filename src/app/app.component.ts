import { Component } from '@angular/core';
import { faLightbulb, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lights';
  bulbIco = faLightbulb;
  powerIco = faPowerOff;
  currentClass = 'light-mode';

  onClick(): void {
    this.currentClass = this.currentClass === 'light-mode' ? 'dark-mode' : 'light-mode';
  }
}
