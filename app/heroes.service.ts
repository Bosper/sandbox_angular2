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
                //console.log(response.json().data);
                return response.json().data;

            } )
            .catch( this.handleError );
    }

    getHeroTask( id: number[], heroTasks: Task[] ) {
        return this.getTasks()
            .then( function( tasks ) {
                console.log(tasks);
                console.log(id);
                
                for (let z = 0; z < id.length; z++) {
                    console.log(id[z]);
                        for (let i = 0; i < tasks.length; i++) {
                        console.log( tasks[i] );
                        if ( id && id[z] == tasks[i].id ) {
                            console.log( 'task: ' + tasks[i] );
                            heroTasks.push( tasks[i] )
                        } else {
                            console.log( '!: ' + tasks[i] );
                            
                        }
                    }
                }    
                console.log(heroTasks);
                return tasks, heroTasks;
            } )
    }

    getInnTasks( preTasks: Task[] = [] ) {
        return this.getTasks()
            .then( function( tasks ) {
                for (let index = 0; index <= 2; index++) {
                var random = Math.floor(( Math.random() * 4 ) + 1);
                //console.log( random, preTasks );
                preTasks.push( tasks[random] );
                console.log( preTasks );
                }   
            return preTasks;
        } )
    }

    getHero( id: number ) {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.id === id ) )
            .catch( this.handleError );
    }

    activeHero() {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.active === true )
             );
    }

    handleError( error: any ) {
        console.log( 'An error has occured: ', error );
        return Promise.reject( error.message || error )
    }
}