import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.class';
import { Task } from './task.class';
import { HeroesService } from './heroes.service';

import 'rxjs/add/operator/toPromise';

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
    }

    ngOnInit() {
        let active: boolean = true;

        this.heroesService.activeHero( active )
            .then( hero => this.hero = hero  );
    }
}