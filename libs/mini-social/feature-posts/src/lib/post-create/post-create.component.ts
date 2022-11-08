import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../interfaces';

@Component({
  selector: 'mini-social-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  @Output() createPost: EventEmitter<Post> = new EventEmitter<Post>();

  addPost(form: NgForm): void {
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.createPost.emit(post);
    form.resetForm();
  }
}
