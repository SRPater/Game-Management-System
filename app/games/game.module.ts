import { NgModule }     from '@angular/core';
import { RouterModule}  from '@angular/router';

import { GameListComponent }    from './game-list.component';
import { GameDetailComponent }  from './game-detail.component';
import { GameDetailGuard }      from './game-guard.service';
import { AddGameComponent }     from './add-game.component';

import { GameFilterPipe } from './game-filter.pipe';
import { GameService }    from './game.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path:       'games',
                component:  GameListComponent
            },
            {
                path: 'game/:id',
                canActivate: [ GameDetailGuard ],
                component: GameDetailComponent
            },
            {
                path: 'games/add',
                component: AddGameComponent
            }
        ])
    ],
    declarations: [
        GameListComponent,
        GameDetailComponent,
        GameFilterPipe,
        AddGameComponent
    ],
    providers: [
        GameService,
        GameDetailGuard
    ]
})

export class GameModule {}
