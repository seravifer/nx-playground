import { ComponentsModule } from '@nx-playground/components';
import { CoreModule } from '@nx-playground/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [CommonModule, CoreModule, ComponentsModule],
  declarations: [
    LoginPageComponent
  ],
})
export class CoreUiModule {}
