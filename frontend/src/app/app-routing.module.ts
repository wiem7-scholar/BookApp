import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './book/addbook/addbook.component';
import { ListBooksComponent } from './book/listbooks/list-book.component';
import { DetailsBookComponent } from './book/details-book/details-book.component';
import { EditBookComponent } from './book/updatebook/edit-book.component';



const routes: Routes = [
  
 
  
  
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'books',
    component: ListBooksComponent
  },
  {
    path: 'book',
    component: AddBookComponent
  },
  {
    path: 'book/:id',
    component: DetailsBookComponent
  },
  {
    path:'updatebook/:id',
    component: EditBookComponent
  },


  
  
 
  
 


  
    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

