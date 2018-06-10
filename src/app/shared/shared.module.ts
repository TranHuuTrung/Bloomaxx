import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './component/header/header.component';
import { FramesComponent } from './component/frames/frames.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginHeaderComponent } from './component/login-header/login-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FramesComponent,
    FooterComponent,
    LoginHeaderComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HeaderComponent,
    FramesComponent,
    FooterComponent,
    LoginHeaderComponent
  ]
})
export class SharedModule { }