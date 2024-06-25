import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUsersComponent } from './pages/search-github-users/search-users.component';
import { SearchReposByUserComponent } from './pages/search-repos-by-user/search-repos-by-user.component';

const routes: Routes = [
  {
    path:"",
    component:SearchUsersComponent, 
  },
  {
    path:"repos/:userId",
    component:SearchReposByUserComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class githubUsersRoutingModule { }