import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    EditorModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
