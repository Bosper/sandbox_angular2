import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.class';
import { Task } from './task.class';
import { Items } from './item.class';
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

    hero: Hero;
    tasks: Task[];
    usableTask: Task[] = [];
    shopItems: Items[];
    selectedItem: any;
    

    taskId: any;

    getInnTasks() {
        let heroTask = this.hero.task;
        this.heroesService.getRandomTask(heroTask)
            .then( usableTask => this.usableTask = usableTask );
    }  

    itemShopSelected(item) {
        this.selectedItem = item;
    }

    shopAction(selectedItem) {

        let item = this.hero.items.find( item => item.id === selectedItem.id );

        if (selectedItem && selectedItem.amount != 0 && this.hero.wallet >= selectedItem.price) {
            console.log(item);
    
            if (item != undefined ) {
                selectedItem.amount--;
                item.amount++;
                this.hero.wallet = this.hero.wallet - selectedItem.price;
                console.log(this.hero.items); 

            } 
            else if (item === undefined) {

                let newItem = <Items> JSON.parse(JSON.stringify(selectedItem));
                selectedItem.amount--;
                newItem.amount = 1;
                console.log(newItem);
                
                this.hero.wallet = this.hero.wallet - newItem.price;
                this.hero.items.push( newItem )
                console.log(this.hero.items);
            }

        } else {

            alert( "Not enough money for shopping, or goods in shop!" );

        }
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
        setTimeout(function() {
            let income:number = 30;
            hero.wallet = hero.wallet + income;
            console.log( 'Added: ' + income + 'gold.' );    
        }, 5000);
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
                .then( heroTasks => this.tasks = heroTasks )
                
                return this.hero;
            }.bind( this ) );


        this.heroesService.getShopItems()
            .then( shopItems => this.shopItems = shopItems )
    
    }
}