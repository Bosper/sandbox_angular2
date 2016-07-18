import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero } from './hero.class';
import { Items } from './item.class';

@Injectable()

export class HeroesService {

private heroesURL = 'app/heroes';

    constructor( private http: Http ) {

    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get( this.heroesURL )
            .toPromise()
            .then( response => response.json().data )
            .catch( this.handleError )
    }

    getHero( id: number ) {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.id === id ) )
    }

    getItems( id: number, items: Items[] ) {
        return this.getHero( id )
            .then( hero => hero.items );
    }

    handleError( error: any ) {
        console.log( 'An error has occured: ', error );
        return Promise.reject( error.message || error )
    }
}