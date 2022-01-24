import { Component, OnInit } from '@angular/core';
import { ImageSize } from '../models/image-size';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Array<any> = [
    {
      "title": "Java",
      "description": "At Fidelity Investments, I have worked majorly on web applications that used Java, more specifically Spring Boot for the backend services.",
      "image": "assets/images/java.jpg",
      "image-size": ImageSize.SMALL
    }, {
      "title": "Python",
      "description": "My major focus at Fidelity Investments was to develop a conversational chatbot for the employees to get their policy related queries answered. The chatbot brain as well as the API service waa coded using Python.",
      "image": "assets/images/python.png",
      "image-size": ImageSize.MEDIUM
    }, {
      "title": "Angular",
      "description": "I have worked on developing applications using Angular. I have experience using modules like Angular Material and Bootstrap for styling.",
      "image": "assets/images/angular.png",
      "image-size": ImageSize.SMALL
    }, {
      "title": "Javascript",
      "description": "I have worked on applications that use NodeJS as the framework for the backend services. I also have some experience developing applications that use ReactJS for the frontend application.",
      "image": "assets/images/js.png",
      "image-size": ImageSize.MEDIUM
    }, {
      "title": "Docker",
      "description": "I have worked on containerizing applications that use various tech-stacks. I have experience working on multi-stage docker builds and Docker Compose.",
      "image": "assets/images/docker.svg",
      "image-size": ImageSize.MEDIUM
    }, {
      "title": "Jenkins",
      "description": "I have worked on setting up Continuous Integration Pipelines using Jenkins for various applications at Fidelity Investments.",
      "image": "assets/images/jenkins.png",
      "image-size": ImageSize.MEDIUM
    }, {
      "title": "Concourse",
      "description": "I have worked on automating the deployment of applications on AWS using pipelines implemented in Concourse.",
      "image": "assets/images/concourse.png",
      "image-size": ImageSize.MEDIUM
    }, {
      "title": "Amazon Web Services",
      "description": "I have experience using AWS Services like EC2, S3, RDS, Lambda, ECR, Cloud Formation, Cloud Watch, etc. I have extensively worked on AWS Sagemaker to set-up regular training jobs to train ML Models for FidBot.",
      "image": "assets/images/aws.png",
      "image-size": ImageSize.LARGE
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
