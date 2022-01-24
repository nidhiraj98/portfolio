import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  languages: String[] = ["C", "Java", "Javascript", "Python", "English", "Hindi", "Kannada"];
  yearsOfExp: string = "";

  constructor() { }

  ngOnInit(): void {
    let yearsInMS = Math.abs(Date.now() - Date.parse("2020-08-13 00:00:00"));
    this.yearsOfExp = (yearsInMS / (1000 * 60 * 60 * 24 * 30 * 12)).toFixed(1);
  }

}
