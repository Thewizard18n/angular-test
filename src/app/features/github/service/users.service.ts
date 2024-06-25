import { Injectable } from '@angular/core'; 
import { Observable, exhaustMap, map, toArray} from 'rxjs';
import { IUser } from '../types/user.type';
import { RestClientFacadeService } from 'src/app/core/services/rest-client-facade/rest-client-facade.service';
import { IUserRepos } from '../types/repo.type';
import { environment } from 'src/environments/environment.development'; 
import githubRepository from '../repository/githubRepository';

@Injectable({
  providedIn: 'root'
})
export class githubRepositoryImp extends githubRepository {

  private baseUrl: string

  constructor (private readonly httpClient:RestClientFacadeService) {  
    super()
    this.baseUrl = environment.githubBaseUrl
   }

   override getUsers(username:string): Observable<IUser[]> {

    const userUrl = this.baseUrl + "users/" + username

    return this.httpClient.get<any>(userUrl).pipe(
      exhaustMap(
        (userData) => this.getRepos(userData.login).pipe( 
          map((repoData: IUserRepos[]) => { 
            const stars = repoData.reduce((acc2 ,current2) => acc2 + current2.stargazers_count, 0)
            return {
              name: userData.name,
              username:userData.login,
              description:userData.bio,
              followers:userData.followers,
              following:userData.following,
              location:userData.location,
              profileImage:userData.avatar_url,
              stars
            }
          })
        )
      ),
      toArray()
    )
  }

  override getRepos(username:string): Observable<IUserRepos[]> {
    const userUrl = this.baseUrl + "users/" + username + "/repos"
    return this.httpClient.get<IUserRepos[]>(userUrl).pipe(map((data) => {
     return  data.map(item => {
        return {
          stargazers_count: item.stargazers_count,
          name:item.name
        }
      }) 
    })) 
  }
}
