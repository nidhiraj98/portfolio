import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {

  @Input()
  staticSentence: String = "";

  @Input()
  words: String[] = [];

  typeSleep = 50;
  clearSleep = 2000;
  cursorBlinkSleep = 400;

  cursor: String = "";

  blinkTimer: number = -1;

  wordOnDisplay: String = "";
  staticTextOnDisplay: String = "";
  currWordIndex = -1;
  currCharIndex = -1;
  currStaticCharIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startBlinking();
    this.updateWord();
  }

  ngOnDestroy() {
    this.stopBlinking();
  }

  startBlinking() {
    this.blinkTimer = window.setInterval(() => {
      this.cursor = this.cursor == "|" ? "" : "|";
    }, this.cursorBlinkSleep);
  }

  stopBlinking() {
    window.clearInterval(this.blinkTimer);
  }

  updateWord() {
    if(this.currWordIndex >= this.words.length - 1) {
      this.currWordIndex = -1;
    }
    this.currWordIndex++;
    this.typeTick();
  }

  typeTick() {
    let typeTimer = window.setInterval(() => {
      this.wordOnDisplay = this.wordOnDisplay.concat(this.words[this.currWordIndex].charAt(++this.currCharIndex));

      if(this.currCharIndex >= this.words[this.currWordIndex].length - 1) {
        window.clearInterval(typeTimer);
        this.pauseTick();
      }
    }, this.typeSleep);
  }

  pauseTick() {
    window.setTimeout(this.backspaceTick.bind(this), this.clearSleep);
  }

  backspaceTick() {
    let backspaceTimer = window.setInterval(() => {
      this.wordOnDisplay = this.wordOnDisplay.slice(0, this.currCharIndex--);

      if(this.currCharIndex == -1) {
        window.clearInterval(backspaceTimer);
        this.updateWord();
      }
    }, this.typeSleep);
  }
}
