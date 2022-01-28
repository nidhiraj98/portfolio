import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { SkillItemComponent } from './skills/skill-item/skill-item.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    IntroductionComponent,
    ProjectsComponent,
    SkillsComponent,
    TypewriterComponent,
    SkillItemComponent,
    ExperienceComponent,
    ExperienceItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
