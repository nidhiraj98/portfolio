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
    new Experience("NIT, Karnataka", [new Designation(2018, "Summer Intern", [
      "I worked on designing a device for controlled heat generation that facilitated the treatment of cancerous tissues."
    ])]),
    new Experience("FluxGen", [new Designation(2019, "Summer Intern", [
      "FluxGen is an industrial water management firm that helps industries monitor their water usage in real-time.",
      "I worked on developing an Automatic Testing Equipment for AquaGen to imitate the output of a water flow meter to enable testing the equipment without wasting water."
    ])]),
    new Experience("Fidelity Investments", [
      new Designation(2020, "Software Engineer", 
      [
        "As a full stack development Software Engineer in the Digital Team under Business Management Group, my major focus was to develop a conversational chatbot that would be used by the employees within Fidelity to get their policy related queries answered.",
        "I worked on Natural Language Processing, Frontend development using Angular and Backend development using Spring Boot.",
        "I have also worked on setting up automated pipelines for generating the build and deployment of the application on Amazon Web Services using Jenkins and Concourse.",
        "I have also worked on containerizing various applications using Docker."
      ])
    ])
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
