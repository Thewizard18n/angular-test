import { Observable } from "rxjs";
import { IUser } from "../types/user.type";
import { IUserRepos } from "../types/repo.type";

export default abstract class githubRepository {
     abstract getUsers(username:string | null | undefined): Observable<IUser[]> 
     abstract getRepos(username:string): Observable<IUserRepos[]> 
}