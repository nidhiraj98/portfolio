import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  selectedValue = "about";

  @HostBinding('class') className = 'light-mode';

  @ViewChild('skillsSection') skillsSection: ElementRef | undefined;
  @ViewChild('aboutSection') aboutSection: ElementRef | undefined;
  @ViewChild('projectsSection') projectsSection: ElementRef | undefined;
  @ViewChild('experienceSection') experienceSection: ElementRef | undefined;

  isDarkMode: FormControl = new FormControl(false);

  ngOnInit() {
    this.isDarkMode.valueChanges.subscribe(darkMode => {
      this.className = darkMode ? 'dark-mode' : 'light-mode';
    })
  }

  scrollToSection(section: HTMLElement) {
    section.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll', ['$event'])
  updateNavbar() {
    const aboutDiv = this.aboutSection?.nativeElement.getBoundingClientRect();
    const skillsDiv = this.skillsSection?.nativeElement.getBoundingClientRect();
    const projectsDiv = this.projectsSection?.nativeElement.getBoundingClientRect();
    const experienceDiv = this.experienceSection?.nativeElement.getBoundingClientRect();

    // console.log("About Section: ", aboutDiv.top, aboutDiv.bottom);
    // console.log("Skills Section: ", skillsDiv.top, skillsDiv.bottom);
    // console.log("Experience Section: ", experienceDiv.top, experienceDiv.bottom);
    // console.log("Projects Section: ", projectsDiv.top, projectsDiv.bottom);

    if(aboutDiv.top >= 0 || aboutDiv.bottom > 0) {
      this.selectedValue = "about";
    }
    else if(skillsDiv.top >= 0 || skillsDiv.bottom > 0) {
      this.selectedValue = "skills";
    }
    else if(experienceDiv.top >= 0 || experienceDiv.bottom > 0) {
      this.selectedValue = "experience";
    }
    else if(projectsDiv.top >= 0 || projectsDiv.bottom > 0) {
      this.selectedValue = "projects";
    }
  }
}
