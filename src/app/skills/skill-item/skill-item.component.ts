import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() itemTitle: String = "";
  @Input() itemDescription: String = "";
  @Input() itemImage: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
