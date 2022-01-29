import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input()
  experience: Experience = new Experience("", []);

  @Input()
  isFirst: boolean = false;

  @Input()
  isLast: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
