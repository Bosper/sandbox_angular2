import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from './heroes.service';

import { Items } from './item.class';
import { Hero } from './hero.class';

import { DetailComponent } from './detail.component';

@Component({
    selector: 'heroes-list',
    templateUrl: 'app/heroes.component.html',
    styleUrls: [ 'app/heroes.component.css' ],
    directives: [DetailComponent] 
})

export class HeroesComponent implements OnInit {
    title = 'heroes.component';
    heroes: Hero[];
    selectedHero: Hero;
    error: any;
    sub: any;

    constructor( 
        private router: Router,
        private heroService: HeroesService 
        ) {

    }

    onSelect( hero: Hero ) {
        this.selectedHero = hero;
        console.log(hero);
        
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then( heroes => this.heroes = heroes )
            .catch( error => this.error = error )
    }

    goDetail( hero: Hero ) {
        this.router.navigate([ '/detail', this.selectedHero.id ])
    }

    onCloseQB() {
        this.selectedHero = null
    }

    ngOnInit() {
        this.getHeroes();
    }

}