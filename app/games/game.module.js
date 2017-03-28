"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_list_component_1 = require("./game-list.component");
var game_detail_component_1 = require("./game-detail.component");
var game_guard_service_1 = require("./game-guard.service");
var add_game_component_1 = require("./add-game.component");
var game_filter_pipe_1 = require("./game-filter.pipe");
var game_service_1 = require("./game.service");
var shared_module_1 = require("../shared/shared.module");
var GameModule = (function () {
    function GameModule() {
    }
    return GameModule;
}());
GameModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                {
                    path: 'games',
                    component: game_list_component_1.GameListComponent
                },
                {
                    path: 'game/:id',
                    canActivate: [game_guard_service_1.GameDetailGuard],
                    component: game_detail_component_1.GameDetailComponent
                },
                {
                    path: 'games/add',
                    component: add_game_component_1.AddGameComponent
                }
            ])
        ],
        declarations: [
            game_list_component_1.GameListComponent,
            game_detail_component_1.GameDetailComponent,
            game_filter_pipe_1.GameFilterPipe,
            add_game_component_1.AddGameComponent
        ],
        providers: [
            game_service_1.GameService,
            game_guard_service_1.GameDetailGuard
        ]
    })
], GameModule);
exports.GameModule = GameModule;
//# sourceMappingURL=game.module.js.map