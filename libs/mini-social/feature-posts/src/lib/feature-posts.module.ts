import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostCreateModule } from './post-create';
import { PostListModule } from './post-list';

@NgModule({
  imports: [CommonModule, PostCreateModule, PostListModule],
  exports: [PostCreateModule, PostListModule],
})
export class FeaturePostsModule {}
