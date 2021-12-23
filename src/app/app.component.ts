import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  @HostBinding('class') className = 'light-mode';

  isDarkMode: FormControl = new FormControl(false);

  ngOnInit() {
    this.isDarkMode.valueChanges.subscribe(darkMode => {
      this.className = darkMode ? 'dark-mode' : 'light-mode';
    })
  }
}
