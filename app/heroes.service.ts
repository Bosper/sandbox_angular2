import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero } from './hero.class';
import { Items } from './item.class';
import { Task } from './task.class';
import { Rumor } from './rumor.class';

@Injectable()

export class HeroesService {

private heroesURL = 'app/heroes';
private taskURL = 'app/tasks';
private itemURL = 'app/sweetshop';
private rumorURL = 'app/rumors';

    constructor( private http: Http ) {

    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get( this.heroesURL )
            .toPromise()
            .then( response => response.json().data )
            .catch( this.handleError ); 
    }

    getRumors(): Promise<Rumor[]> {
        return this.http.get( this.rumorURL )
            .toPromise()
            .then( response => response.json().data )
            .catch( this.handleError );
    }

    getRandomRumor() {
        return this.getRumors()
            .then(
                function(rumors) {
                    let randomRumor:Rumor = rumors[Math.floor(Math.random()*rumors.length)]
                    return randomRumor;
                }
            ) 
    }

    getTasks(): Promise<Task[]> {
        return this.http.get( this.taskURL )
            .toPromise()
            .then( response => response.json().data )
            .catch( this.handleError );
    }

    getHeroTask( id: number[], heroTasks: Task[] ) {
        return this.getTasks()
            .then( function( tasks ) {
                for (let z = 0; z < id.length; z++) {
                        for (let i = 0; i < tasks.length; i++) {
                        if ( id && id[z] == tasks[i].id ) {
                            heroTasks.push( tasks[i] )
                        } 
                    }
                }    
                return heroTasks;
            } )
    }

    getRandomTask( preTask:number[], usableTask = [] ) {
        return this.getTasks()
            .then( function( tasks ) {
                let freeTasks = tasks.filter( task => preTask.indexOf(task.id) === -1 )

                for (let i = 0; i < 1; i++) {
                let random = Math.floor(( Math.random() * freeTasks.length ));
                usableTask.push( freeTasks[random] );
                }

            return usableTask;
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

    getShopItems():Promise<Items[]> {
        return this.http.get( this.itemURL )
            .toPromise()
            .then( response => response.json().data )
            .catch( this.handleError );
    }

    handleError( error: any ) {
        console.log( 'An error has occured: ', error );
        return Promise.reject( error.message || error )
    }
}