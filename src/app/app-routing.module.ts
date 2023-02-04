import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: CategoryListComponent }
  ]), 
  CategoryListComponentModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
