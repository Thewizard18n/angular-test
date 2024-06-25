import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class RestClientFacadeService{ 

  constructor(private readonly httpClient: HttpClient , private toast: ToastService){}

  private buildHeaders(headers: object): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (headers) {
      Object.entries(headers).forEach(h => {
        httpHeaders = httpHeaders.append(h[0], h[1]);
      });

      return httpHeaders;
    }

    return httpHeaders;
  }
 
  public get<T>(url: string):Observable<T>{
    return this._request<T>("GET" , url)
  }
  private _request<T>(requestType:any , url: string):Observable<any> { 
 
    let req: HttpRequest<any> = new HttpRequest(requestType, url, null, {
      headers: this.buildHeaders({
        "X-GitHub-Api-Version": environment.githubApiVersion,
        "Authorization":environment.githubAcessToken,
      }), 
      responseType: 'text',
    });

    const events$: Observable<HttpEvent<string>> = this.httpClient.request<string>(req)

    const res$: Observable<HttpResponse<string>> = <Observable<HttpResponse<string>>>(
      events$.pipe(filter((event: HttpEvent<string>) => event instanceof HttpResponse))
    );

    return res$.pipe(
      map((res: HttpResponse<string>) => JSON.parse(res.body as string )|| '{}'),
      catchError((errorResponse: HttpErrorResponse): Observable<HttpErrorResponse> => {
        this.toast.open(JSON.parse(errorResponse.error).message)
        return throwError(() => errorResponse);
      })
    )
  }
}
