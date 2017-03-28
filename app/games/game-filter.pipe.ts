import { PipeTransform, Pipe }  from '@angular/core';
import { IGame }                from './game';

@Pipe({
    name: 'gameFilter'
})

export class GameFilterPipe implements PipeTransform {

    transform(value: IGame[], filterBy: string): IGame[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((game: IGame) =>
            game.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
