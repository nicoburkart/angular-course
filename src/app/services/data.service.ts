import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
        map(response => response as any[]),
        catchError(this.handleError)
    )
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(response => response as any[]),
        catchError(this.handleError)
    )
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource)).pipe(
        map(response => response as any[]),
        catchError(this.handleError)
    )
  }

  delete(id) {
    const response = this.http.delete(this.url + '/' + id)
    return this.http.delete(this.url + '/' + id).pipe(
        map(response => response as any[]),
        catchError(this.handleError)
    )
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError())
    } else if (error.status === 400) {
      return throwError(new BadInput(error.json))
 }
    return throwError(new AppError(error))
  }
}
