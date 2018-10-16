import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class SubscriptionService {
  private readonly URI = 'api/subscription';

  constructor(private http: HttpClient) {
  }

  doSubscribe(subscription: any): Observable<void> {
    return this.http.post(`${this.URI}`, subscription, {responseType: 'text'})
      .pipe(map(_ => null));
  }

  doUnsubscribe(endpointUrl: string): Observable<void> {
    const endpointUrlElements = endpointUrl && endpointUrl.split('/');
    const endpointKey = endpointUrlElements && endpointUrlElements.length > 0 ? endpointUrlElements[endpointUrlElements.length - 1] : '';

    return this.http.delete(`${this.URI}/${encodeURIComponent(endpointKey)}`, {responseType: 'text'})
      .pipe(map(_ => null));
  }
}
