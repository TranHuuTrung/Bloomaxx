import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './component/header/header.component';
import { FramesComponent } from './component/frames/frames.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginHeaderComponent } from './component/login-header/login-header.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    FramesComponent,
    FooterComponent,
    LoginHeaderComponent
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    FramesComponent,
    FooterComponent,
    LoginHeaderComponent
  ]
})
export class SharedModule { }