import { Injectable }                                   from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router }  from '@angular/router';

@Injectable()

export class GameDetailGuard implements CanActivate {

    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = route.url[1].path;
        if (!id) {
            alert('No game id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/games']);
            // abort current navigation
            return false;
        };
        return true;
    }
}
