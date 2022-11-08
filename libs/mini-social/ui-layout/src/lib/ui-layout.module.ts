import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header';

@NgModule({
  imports: [CommonModule, HeaderModule],
  exports: [HeaderModule],
})
export class UiLayoutModule {}
