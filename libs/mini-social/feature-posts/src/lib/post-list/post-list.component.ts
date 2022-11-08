import { Component, Input } from '@angular/core';

import { Post } from '../interfaces';

@Component({
  selector: 'mini-social-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input() posts!: Post[];
}
