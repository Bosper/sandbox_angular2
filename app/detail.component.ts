import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero.class';
import { Items } from './item.class';
import { HeroesService } from './heroes.service'; 

@Component({
    selector: 'detail',
    templateUrl: 'app/detail.component.html',
    styleUrls: [ 'app/detail.component.css' ]
})
    
export class DetailComponent implements OnInit, OnDestroy {

    @Input() hero: Hero;
    @Output() close = new EventEmitter();

    error: any;
    sub: any;

    navigated = false;
    edit = false;

    constructor(
        private heroService: HeroesService,
        private route: ActivatedRoute
    ) {
        
    }

    taskEdit( hero ) {
        this.edit = true;
    }

    cancelEdit() {
        this.edit = false;
    }

    ngOnInit() {
        console.log( 'OnInit' );
        
        this.sub = this.route.params.subscribe( params => {
            if( params[ 'id' ] != undefined ){
                console.log('id... OK');
                
                let id = +params[ 'id' ];
                console.log('+params... OK');
                this.navigated = true;
                console.log('navigated... OK');
                console.log(id);
                
                this.heroService.getHero( id )
                    .then( hero => this.hero = hero )
                    .catch(this.error);
            } else {
                console.log('id... ERR');
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        console.log( 'ngOnDestroy' );
    }
}