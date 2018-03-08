import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, publishReplay, refCount} from 'rxjs/operators';
import { EventAppData } from '../model/event-app-data';

@Injectable()
export class EventDataService {

  private cachedEventData$: Observable<EventAppData>;

  constructor(private http: HttpClient) {
  }

  private getEventAppData(): Observable<EventAppData> {
    return this.http.get('api/event').pipe(
      map((data: any) => <EventAppData>data)
    );
  }

  private getAndCacheEventAppData(): Observable<EventAppData> {
    this.cachedEventData$ = this.getEventAppData().pipe(
      publishReplay(),
      refCount(),
    );
    return this.cachedEventData$;
  }

  getCachedEventAppData(): Observable<EventAppData> {
    if (!this.cachedEventData$) {
      return this.getAndCacheEventAppData();
    }
    return this.cachedEventData$;
  }

}
