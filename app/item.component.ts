import { Component, OnInit, Input } from '@angular/core';
import { Items } from './item.class';
import { Hero } from './hero.class';

import { HeroesService } from './heroes.service';

@Component({
    selector: 'items',
    template : '<span>item, </span><span>item II, </span><span>item III.</span>' 
})

export class ItemComponent implements OnInit {

    public selectedHero: Hero;

    constructor( private heroService: HeroesService ) {

    }

    // getItems() {
    //     console.log( this.selectedHero );
        
    // }

    ngOnInit() {
        console.log('ngOnInit \n');
        
    }

    
}