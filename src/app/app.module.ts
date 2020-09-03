import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsComponent } from './mat-tabs/mat-tabs.component';
import { MatTabsModule,MatSelectModule,MatCheckboxModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule} from '@angular/material';
import { TableComponent } from './table/table.component';
import { HeaderButtonsComponent } from './header-buttons/header-buttons.component';
import { HeadingScreenComponent } from './heading-screen/heading-screen.component'
@NgModule({
  declarations: [
    AppComponent,
    MatTabsComponent,
    TableComponent,
    HeaderButtonsComponent,
    HeadingScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
