import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUsersComponent } from './pages/search-github-users/search-users.component'; 
import { githubRepositoryImp } from './service/users.service';
import githubRepository  from './repository/githubRepository';
import { MaterialModule } from 'src/app/ui/material/material.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { githubUsersRoutingModule } from './github-users-routing.module';
import { SearchReposByUserComponent } from './pages/search-repos-by-user/search-repos-by-user.component'; 
import { NgOptimizedImage } from '@angular/common'

 
@NgModule({
  declarations: [
    SearchUsersComponent,
    SearchReposByUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    githubUsersRoutingModule, 
    NgOptimizedImage
  ],
  exports:[SearchUsersComponent],
  providers:[
    {provide: githubRepository , useClass: githubRepositoryImp}
  ]
})
export class SearchGithubUsersModule { }
