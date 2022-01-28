import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designation';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    new Experience("FluxGen Engineering Technologies", [new Designation(2019, "Intern", [])]),
    new Experience("Fidelity Investments", [
      new Designation(2021, "Executive Graduate Trainee", []),
      new Designation(2022, "Software Engineer", ["As a full stack development Software Engineer in the Digital Team under Business Management Group, my major focus was to develop a conversational chatbot that would be used by the employees within Fidelity to get their policy related queries answered"])
    ])
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
