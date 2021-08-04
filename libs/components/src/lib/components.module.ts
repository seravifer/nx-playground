import { CoreModule } from '@nx-playground/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  exports: [HeaderComponent],
  declarations: [
    HeaderComponent
  ],
})
export class ComponentsModule {}
