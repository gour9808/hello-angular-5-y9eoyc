import { Component, ElementRef, ViewChild } from '@angular/core';
import HtmlDiff from 'htmldiff-js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('oldHtml') oldHtml: ElementRef;
  @ViewChild('newHtml') newHtml: ElementRef;
  @ViewChild('diffHtml') diffHtml: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.diffHtml.nativeElement.innerHTML = HtmlDiff.execute(
      this.oldHtml.nativeElement.innerHTML,
      this.newHtml.nativeElement.innerHTML
    );
  }
}
