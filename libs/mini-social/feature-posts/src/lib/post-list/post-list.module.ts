import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { PostListComponent } from './post-list.component';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, MatExpansionModule, MatButtonModule],
  exports: [PostListComponent],
})
export class PostListModule {}
