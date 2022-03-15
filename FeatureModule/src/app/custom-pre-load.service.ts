import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { flatMap, map, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay: any) => delay
      ? timer(10000).pipe(map(() => load()))
      : load();
      ///===============================
    return route.data && route.data['preload']
      ? loadRoute(route.data['delay'])
      : of(null);
  }
}
