import { Component, Input, OnInit } from '@angular/core';
import { ImageSize } from 'src/app/models/image-size';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() itemTitle: String = "";
  @Input() itemDescription: String = "";
  @Input() itemImage: String = "";
  @Input() imageSize: ImageSize = ImageSize.MEDIUM;

  constructor() { }

  ngOnInit(): void {
  }

}
