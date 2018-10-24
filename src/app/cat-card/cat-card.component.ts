import { Component, Input, OnInit } from '@angular/core';
import { deleteCard } from '../../data-service.js';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string = "default";
  @Input() description: string = "default";
  @Input() imageUrl: string = "default";

  constructor() { }

  ngOnInit() {
  }

  btnClickDel = function(id) {
    //alert(id);
    deleteCard(id);
  };

}
