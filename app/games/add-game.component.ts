import { Component }                from '@angular/core';
import { Router }                   from '@angular/router';
import { Http, Headers, Response }  from '@angular/http';

@Component({
    templateUrl:    'app/games/add-game.component.html'
})

export class AddGameComponent {
    pageTitle:      string = 'Add a Game';
    game:           Object;
    errorMessage:   string;

    title:  string = '';
    year:   string = '';
    genre:  string = '';

    constructor(
        private _router: Router,
        private _http: Http
    ) {}

    addGame(): void {
        if(this.title != '' && this.year != '' && this.genre != '') {
            this.game = {
                "title":    this.title,
                "year":     this.year,
                "genre":    this.genre
            };

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this._http.post('http://145.24.222.187:8000/api/games/', this.game, headers)
                .subscribe(
                    (res: Response) => {
                        if(res) {
                            this._router.navigate(['/games']);
                        }
                    },
                    error => this.errorMessage = <string>error
                );
        } else {
            this.errorMessage = 'All fields are required!';
        }
    }

    onBack(): void {
        this._router.navigate(['/games']);
    }
}
