import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export function handleError(o: Observable<ServerResponse>): Observable<ServerResponse> {
  return o.map(data => {
    if (data.error) {
      throw data.error;
    }
    return data;
  });
}

interface ServerResponse {
  error?: string;
}
