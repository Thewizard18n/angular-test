import { Component } from '@angular/core';
import githubRepository from '../../repository/githubRepository';
import { IUserRepos } from '../../types/repo.type';
import { Observable, finalize } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-repos-by-user',
  templateUrl: './search-repos-by-user.component.html',
  styleUrls: ['./search-repos-by-user.component.scss']
})
export class SearchReposByUserComponent {
  public data$!: Observable<IUserRepos[]>
  public isLoading: boolean = false

  public cols: string[] = [
    'stargazers_count',
    'name', 
  ]


  constructor(private readonly githubRepositoryImp: githubRepository , private activatedRoute: ActivatedRoute){

    this.isLoading = true 

    this.activatedRoute.params.subscribe((data:any) => {
      this.data$ = this.githubRepositoryImp.getRepos(data.userId).pipe(
        finalize(() => this.isLoading = false),)
    })
  }
}
