import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { PostCreateComponent } from './post-create.component';

@NgModule({
  declarations: [PostCreateComponent],
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatButtonModule],
  exports: [PostCreateComponent],
})
export class PostCreateModule {}
