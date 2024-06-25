import { Component } from '@angular/core'; 
import  githubRepository  from '../../repository/githubRepository';
import { FormBuilder,Validators } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { IUser } from '../../types/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent {

  public data$!: Observable<IUser[]>
  public isLoading: boolean = false
 
  public formdata = this.fb.group({
    username: ["", { validators: [Validators.required] }], 
  });

  public cols: string[] = [
    'name',
    'username',
    'description',
    'followers',
    'following',
    'stars',
    'location',
    'profileImage'
  ]
    
  constructor(private readonly githubRepositoryImp: githubRepository , private readonly fb: FormBuilder ,private  readonly router: Router){ }

  submit() { 
    const usernameValue = this.formdata.value.username

    this.isLoading = true 
    
    this.data$ = this.githubRepositoryImp.getUsers(usernameValue).pipe(
      finalize(() => this.isLoading = false),
    )
  }

  teste({username}:IUser) {
    this.router.navigate(["/repos" , username])
  }

}
