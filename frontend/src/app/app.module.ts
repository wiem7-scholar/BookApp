import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { OwlModule } from 'ngx-owl-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgImageSliderModule } from 'ng-image-slider';
import { MdePopoverModule } from '@material-extended/mde';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import { FooterComponent } from './common/footer/footer.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';

import { AddBookComponent } from './book/addbook/addbook.component';
import { ListBooksComponent } from './book/listbooks/list-book.component';
import { DetailsBookComponent } from './book/details-book/details-book.component';
import { EditBookComponent } from './book/updatebook/edit-book.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { SearchPipe } from './search.pipe';



const skltnConfig: SkltnConfig = {
  rectRadius: 10,
  flareWidth: '150px',
  bgFill: '#d8d5d1',
  flareFill: 'rgba(255,255,255, 0.5)',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsBookComponent,
    
   
    FooterComponent,
    AddBookComponent,
   // LoginComponent,
    ListBooksComponent,
    JwPaginationComponent,

    //SignupComponent,
  EditBookComponent,
  SearchPipe,
    


    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
     // Material
     MatAutocompleteModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatCardModule,
     MatCheckboxModule,
     MatChipsModule,
     MatDatepickerModule,
     MatDialogModule,
     MatExpansionModule,
     MatGridListModule,
     MatInputModule,
     MatListModule,
     MatMenuModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatRippleModule,
     MatSelectModule,
     MatSidenavModule,
     MatSlideToggleModule,
     MatSliderModule,
     MatSnackBarModule,
     MatStepperModule,
     MatTableModule,
     MatTabsModule,
     MatToolbarModule,
     MatTooltipModule,
     MatNativeDateModule,
     OwlModule,
     MatTreeModule,
     ReactiveFormsModule,
     NgImageSliderModule,
     NgxSkltnModule.forRoot(skltnConfig),
     HttpClientXsrfModule,
     MdePopoverModule,
     NgxPaginationModule

  ],
  providers: [ ],

  bootstrap: [AppComponent],
})
export class AppModule { }
