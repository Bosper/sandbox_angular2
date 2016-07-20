import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.class';
import { Task } from './task.class';
import { HeroesService } from './heroes.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    constructor( private heroesService: HeroesService ) {  }

    title = 'dashboard.component';
    public inn: boolean = false;

    hero: Hero;
    tasks: Task[];
    preTasks: Task[] = [];

    getTasks() {
        this.heroesService.getTasks()
            .then( tasks => this.tasks = tasks );
    }

    getRandom( tasks ) {
            for (let index = 0; index < 2; index++) {
            var random = Math.floor(( Math.random() * 2 ) + 1);
            console.log( random, this.preTasks );
            this.preTasks.push( this.tasks[random] );
            console.log( this.preTasks );
        }       
        return this.preTasks;
    }

    gotoInn() {
        this.inn = !this.inn;
        this.getRandom( this.tasks ); 
    }

    closeInn() {
        this.inn = !this.inn;
    }

    ngOnInit() {
        let active: boolean = true;

        this.getTasks();

        this.heroesService.activeHero( active )
            .then( hero => this.hero = hero  )

    }
}