import { Component, OnInit } from '@angular/core';
import { Items } from './item.class';
import { Hero } from './hero.class';
import { HeroesService } from './heroes.service';

@Component({
    selector: 'heroes-list',
    templateUrl: 'app/heroes.component.html',
    styleUrls: [ 'app/heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
    title = 'heroes.component';
    heroes: Hero[];
    selectedHero: Hero;
    error: any;
    sub: any;

    constructor( private heroService: HeroesService ) {

    }

    onSelect( hero: Hero ) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then( heroes => this.heroes = heroes )
            .catch( error => this.error = error )
    }

    // getItems( items: Items[] ) {
    //     items = this.selectedHero.items;
    //     console.log( items );
    //     return items;
    // }

    onCloseQB() {
        this.selectedHero = null
    }

    ngOnInit() {
        this.getHeroes();
        console.log( 'OnInit' );
        
    }

}