import { Component, OnInit } from '@angular/core';

import { IGame }        from './game';
import { GameService }  from './game.service';

@Component({
    templateUrl:    'app/games/game-list.component.html',
    styleUrls:      ['app/games/game-list.component.css']
})

export class GameListComponent implements OnInit {
    pageTitle:      string = 'Game List';
    listFilter:     string;
    errorMessage:   string;
    detail:         string;

    games: IGame[];

    constructor(private _gameService: GameService) {

    }

    ngOnInit(): void {
        this._gameService.getGames()
                .subscribe(games => this.games = games,
                           error => this.errorMessage = <any>error);
    }

    showDetail(id: string): void {
        if(this.detail == id) {
            this.detail = '';
        } else {
            this.detail = id;
        }
    }
}
