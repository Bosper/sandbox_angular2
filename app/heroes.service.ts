import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero } from './hero.class';
import { Items } from './item.class';
import { Task } from './task.class';

@Injectable()

export class HeroesService {

private heroesURL = 'app/heroes';
private taskURL = 'app/tasks';

    constructor( private http: Http ) {

    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get( this.heroesURL )
            .toPromise()
            .then( response => response.json().data )
            .catch( this.handleError );
            
    }

    getTasks(): Promise<Task[]> {
        return this.http.get( this.taskURL )
            .toPromise()
            //.then( response => response.json().data )
            .then( function( response ) {
                console.log(response.json().data);
                return response.json().data;

            } )
            .catch( this.handleError );
    }

    getHero( id: number ) {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.id === id ) )
            .catch( this.handleError );
    }

    activeHero( active: boolean ) {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.active === true )
             );
    }

    handleError( error: any ) {
        console.log( 'An error has occured: ', error );
        return Promise.reject( error.message || error )
    }
}