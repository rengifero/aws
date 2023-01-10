import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormUploadComponent } from './form-upload.component';
import { UploadFileService } from './services/upload-file-service.service';


@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
