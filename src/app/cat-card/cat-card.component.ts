import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input() title: string = "default";
  @Input() description: string = "default";
  @Input() imageUrl: string = "default";

  constructor() { }

  ngOnInit() {
  }

}
