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
var http_1 = require("@angular/http");
var AddGameComponent = (function () {
    function AddGameComponent(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.pageTitle = 'Add a Game';
        this.title = '';
        this.year = '';
        this.genre = '';
    }
    AddGameComponent.prototype.addGame = function () {
        var _this = this;
        if (this.title != '' && this.year != '' && this.genre != '') {
            this.game = {
                "title": this.title,
                "year": this.year,
                "genre": this.genre
            };
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            this._http.post('http://145.24.222.187:8000/api/games/', this.game, headers)
                .subscribe(function (res) {
                if (res) {
                    _this._router.navigate(['/games']);
                }
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'All fields are required!';
        }
    };
    AddGameComponent.prototype.onBack = function () {
        this._router.navigate(['/games']);
    };
    return AddGameComponent;
}());
AddGameComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/games/add-game.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], AddGameComponent);
exports.AddGameComponent = AddGameComponent;
//# sourceMappingURL=add-game.component.js.map