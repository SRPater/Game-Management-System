import { Injectable }               from '@angular/core';
import { Http, Headers, Response }  from '@angular/http';
import { Router }                   from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IGame } from './game';

@Injectable()

export class GameService {
    private _gameUrl = 'http://145.24.222.187:8000/api/games/';

    constructor(
        private _http: Http,
        private _router: Router
    ) {}

    getGames(): Observable<IGame[]> {
        return this._http.get(this._gameUrl)
            .map((response: Response) => <IGame[]> response.json().items)
            .catch(this.handleError);
    }

    getGame(id: string): Observable<IGame> {
        return this.getGames()
            .map((games: IGame[]) => games.find(g => g._id === id));
    }

    saveGame(id: string, data: Object): void {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._http.put(this._gameUrl + id, data, headers)
            .subscribe(
                (res: Response) => {
                    if(res) {
                        this._router.navigate(['/games']);
                    }
                }
            );
    }

    removeGame(id: string): void {
        this._http.delete(this._gameUrl + id)
            .subscribe(
                (res: Response) => {
                    if(res) {
                        this._router.navigate(['/games']);
                    }
                }
            );
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
