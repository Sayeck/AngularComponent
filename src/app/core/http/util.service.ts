import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

import {LoaderComponent} from '../loader/loader.component';

@Injectable()
export class UtilService {
  loader:LoaderComponent;

  constructor(private httpClient:HttpClient) {
    this.loader = new LoaderComponent;
  }

  post(url:string, data:any, callback:Function, context:any) {
    //console.log('url', url);
    //console.log('data', data);

    /*this.httpClient.request('POST', url, data)
     .pipe(catchError(this.handleError))
     .subscribe(response => {console.log('')});*/

    const loader = this.loader;
    loader.show();

    this.httpClient.get(url)
      .pipe(catchError(this.handleError))
      .subscribe(response => {
        loader.hide();

        callback(response, this.handleResponse(response), context);
      });
  }

  get(url:string, callback:Function, context:any) {
    const loader = this.loader;
    loader.show();

    this.httpClient.get(url)
      .pipe(catchError(this.handleError))
      .subscribe(response => {
        loader.hide();

        callback(response, this.handleResponseGet(response), context);
      });
  }

  private handleError(error:HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  private handleResponse(response):boolean {
    let success = false; //---

    switch (response.code) {
      case 400:
        success = false;
        break;
      default:
        success = true;
    }

    return success;
  }

  private handleResponseGet(response):boolean {
    let success = false;

    if(response !== ''){
      success = true
    }

    return success;
  }
}
