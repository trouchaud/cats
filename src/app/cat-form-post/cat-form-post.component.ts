import { Component, OnInit } from '@angular/core';
import { createCard } from '../../data-service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-form-post',
  templateUrl: './cat-form-post.component.html',
  styleUrls: ['./cat-form-post.component.scss']
})
export class CatFormPostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  arr: any[]=[];

  onSubmit(form: NgForm) {
    this.arr = form.value;

    var content = {
      title: this.arr.title,
      imageUrl: this.arr.url,
      description: this.arr.description
    };

    createCard(content).then(this.router.navigateByUrl('/'));
  }

}
