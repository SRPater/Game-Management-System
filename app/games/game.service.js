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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var GameService = (function () {
    function GameService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._gameUrl = 'http://145.24.222.187:8000/api/games/';
    }
    GameService.prototype.getGames = function () {
        return this._http.get(this._gameUrl)
            .map(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    GameService.prototype.getGame = function (id) {
        return this.getGames()
            .map(function (games) { return games.find(function (g) { return g._id === id; }); });
    };
    GameService.prototype.saveGame = function (id, data) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this._http.put(this._gameUrl + id, data, headers)
            .subscribe(function (res) {
            if (res) {
                _this._router.navigate(['/games']);
            }
        });
    };
    GameService.prototype.removeGame = function (id) {
        var _this = this;
        this._http.delete(this._gameUrl + id)
            .subscribe(function (res) {
            if (res) {
                _this._router.navigate(['/games']);
            }
        });
    };
    GameService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map