import { Component, OnInit } from '@angular/core';
import { getAllCards } from '../../data-service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-card-list',
  templateUrl: './cat-card-list.component.html',
  styleUrls: ['./cat-card-list.component.scss']
})
export class CatCardListComponent implements OnInit {

  cats = [];

  constructor(private router: Router) { }

  ngOnInit() {
    getAllCards().then(this.setCats.bind(this));
  }

  setCats(cards) {
    this.cats = cards;
  }

  btnClick = function() {
    this.router.navigateByUrl('/cat');
  };

}
