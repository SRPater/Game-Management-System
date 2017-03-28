"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_service_1 = require("./game.service");
var GameDetailComponent = (function () {
    function GameDetailComponent(_route, _router, _gameService) {
        this._route = _route;
        this._router = _router;
        this._gameService = _gameService;
        this.pageTitle = 'Game Detail';
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getGame(id);
        });
    };
    GameDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    GameDetailComponent.prototype.getGame = function (id) {
        var _this = this;
        this._gameService.getGame(id).subscribe(function (game) { return _this.game = game; }, function (error) { return _this.errorMessage = error; });
    };
    GameDetailComponent.prototype.editGame = function () {
        var id = this.game._id;
        if (this.game.title != '' && this.game.year != '' && this.game.genre != '') {
            var data = {
                "title": this.game.title,
                "year": this.game.year,
                "genre": this.game.genre
            };
            this._gameService.saveGame(id, data);
        }
        else {
            this.errorMessage = "All fields are required!";
        }
    };
    GameDetailComponent.prototype.deleteGame = function () {
        var id = this.game._id;
        var sure = confirm("Are you sure you want to delete " + this.game.title + "?");
        if (sure) {
            this._gameService.removeGame(id);
        }
    };
    GameDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/games']);
    };
    return GameDetailComponent;
}());
GameDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/games/game-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        game_service_1.GameService])
], GameDetailComponent);
exports.GameDetailComponent = GameDetailComponent;
//# sourceMappingURL=game-detail.component.js.map