import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout/content-layout.component';
import { contentUser } from './shared/routes/content-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/playlist',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: contentUser
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
