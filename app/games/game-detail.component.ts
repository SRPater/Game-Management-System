import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IGame }        from './game';
import { GameService }  from './game.service';

@Component({
    templateUrl: 'app/games/game-detail.component.html'
})

export class GameDetailComponent implements OnInit, OnDestroy {
    pageTitle:      string = 'Game Detail';
    game:           IGame;
    errorMessage:   string;
    private sub:    Subscription;

    constructor(
        private _route:         ActivatedRoute,
        private _router:        Router,
        private _gameService:   GameService
    ) {}

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getGame(id);
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getGame(id: string): void {
        this._gameService.getGame(id).subscribe(
            game => this.game = game,
            error => this.errorMessage = <any>error);
    }

    editGame(): void {
        let id = this.game._id;
        if(this.game.title != '' && this.game.year != '' && this.game.genre != '') {
            let data = {
                "title":    this.game.title,
                "year":     this.game.year,
                "genre":    this.game.genre
            };
            this._gameService.saveGame(id, data);
        } else {
            this.errorMessage = "All fields are required!";
        }
    }

    deleteGame(): void {
        let id      = this.game._id;
        let sure    = confirm("Are you sure you want to delete " + this.game.title + "?");
        if(sure) {
            this._gameService.removeGame(id);
        }
    }

    onBack(): void {
        this._router.navigate(['/games']);
    }
}
