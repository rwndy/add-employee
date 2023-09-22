import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeerComponent } from './admin/pages/employeer/employeer.component';
import { HomeComponent } from './admin/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'employees', component: EmployeerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
