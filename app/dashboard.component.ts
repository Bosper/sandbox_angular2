import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.class';
import { Task } from './task.class';
import { HeroesService } from './heroes.service';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: [ 'app/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

    constructor( private heroesService: HeroesService ) {  }

    title = 'dashboard.component';
    public inn: boolean = false;


    gay: Hero;
    hero: Hero;
    tasks: Task[];
    preTasks: Task[] = [];
    

    taskId: any;

    getInnTasks() {
        this.heroesService.getInnTasks()
            .then( preTasks => this.preTasks = preTasks );
    }

    gotoInn() {
        this.inn = !this.inn;
        this.getInnTasks();
    }

    closeInn() {
        this.inn = !this.inn;
        this.preTasks = [];
    }

    goWork( hero:Hero ) {
        console.log( hero.name );
    }

    ngOnInit() {
        let active: boolean = true;

        // this.heroesService.activeHero()
        //     .then( hero => this.hero = hero  );

        this.heroesService.activeHero()
            .then( function( hero:Hero ) {
                this.hero = hero;

                let id = this.hero.task;
	            let heroTasks: Task[] = [];

                this.hero.class.damage = 1.5*(this.hero.class.strength) + 1.2*(this.hero.class.agility);
                this.hero.class.health = 1.2*(this.hero.class.strength) + 1.5*(this.hero.class.condition);
                this.hero.class.power = 1.5*(this.hero.class.mana) + 1.2*(this.hero.class.wisdom);

                this.heroesService.getHeroTask( id, heroTasks )
                .then( HeroTasks => this.tasks = HeroTasks )
                
                return this.hero;
            }.bind( this ) );

        // this.heroesService.getTasks()
        //     .then( tasks => this.tasks = tasks )
    }
}