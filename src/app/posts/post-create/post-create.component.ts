import {
    Component
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
  })

export class PostCreateComponent {

  postsService: PostsService;

    constructor(postsService: PostsService) {
      this.postsService = postsService;

    }

    onAddPost(form: NgForm) {
    /* Checks if the form is valid, if form
    is not valid then no data is added.
    Otherwise, data is added and the form is reset. */
    if (form.invalid) {
        return;
    }
    this.postsService.addPost(form.value.title,
        form.value.content);
    form.resetForm();
    }
}
