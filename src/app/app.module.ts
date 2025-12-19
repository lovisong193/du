import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { LayoutModule } from './layout/layout.module';
import { ContentModule } from './content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StuLayoutModule } from './stu/stu-layout/stu-layout.module';
import { BtnLayoutModule } from './btn-layout/btn-layout/btn-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    LayoutModule,
    ContentModule,
    BrowserAnimationsModule,
    StuLayoutModule,
    BtnLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
