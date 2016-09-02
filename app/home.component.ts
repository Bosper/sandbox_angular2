import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Hero } from './hero.class';
import { TileModel } from './tile.model';
import { Npc } from './npc.class';

@Component({
    selector: 'local-area',
    styleUrls : ['app/home.component.css'],
    templateUrl : `app/home.component.html` 
})
export class HomeLocal implements OnInit {

    //My service, haven't use in this component yet.
    constructor( private heroesService: HeroesService) {}

    hero:Hero;
    createdHero:boolean;

    //Array of tile obejcts
    tiles:TileModel[] = [
        { id: 1, name: 'stoneRoad', x:4, y:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:5, y:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:6, y:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:7, y:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:6, y:8, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:6, y:9, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:8, y:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', x:9, y:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 100, name: 'tree', x:9, y:1, tile: 'assets/world/terrain/tree128.png' },
        { id: 100, name: 'house', x:1, y:5, tile: 'assets/world/terrain/house160.png' },


    ];

    // npcs: Npc[] = [
    //     { id:  }
    // ]
       
    //Declare Tab
    world = new Array();
    moveArea = new Array();
    oldTile:TileModel;
    npc:Npc[];

    //Test filling tiles. 
    fillGrass() {

        for (var i = 0; i < this.tiles.length; i++) {

            let id = this.tiles[i].id;
            let x = this.tiles[i].x;
            let y = this.tiles[i].y;

            console.log(i, id, x, y);

            this.world[this.tiles[i].x][this.tiles[i].y] = this.tiles[i];
      
            
        }    
    }

    createPlayer() {
        let x = this.hero.x;
        let y = this.hero.y;
        this.moveArea[x][y] = this.hero;
        this.createdHero = true;
    }

    //Basic action methos
    doAction(m) {
        console.log(m);
        let tile:TileModel = new TileModel();
        this.moveArea[this.hero.x][this.hero.y] = tile; 
        tile.x = this.hero.x;
        tile.y = this.hero.y;
        this.moveArea[m.x][m.y] = this.hero;
        this.hero.x = m.x;
        this.hero.y = m.y;

    }

    //Generate world from tiles 32x32 with 16 per row.
    ngOnInit() {
        let resolution: number = 16;

        for(let i = 0; i < resolution; i++) {
            this.world[i] = new Array();
	        for(let j = 0; j < resolution; j++) {
                let tile:TileModel = new TileModel();
		        this.world[i][j] = tile;
                tile.id = Math.floor(Math.random() * 10) + 1;
                tile.x = i;
                tile.y = j;
                console.log(i + 'x' + j + ': ', this.world[i][j] );
            }
        }

        //Generate moving area
        for(let i = 0; i < resolution; i++) {
            this.moveArea[i] = new Array();
	        for(let j = 0; j < resolution; j++) {
                let tile:TileModel = new TileModel();
		        this.moveArea[i][j] = tile;
                tile.id = Math.floor(Math.random() * 10) + 1;
                tile.x = i;
                tile.y = j;
                console.log(i + 'x' + j + ': ', this.moveArea[i][j] );
            }
        }

        //Filling world with objects
        for (var i = 0; i < this.tiles.length; i++) {

            let id = this.tiles[i].id;
            let x = this.tiles[i].x;
            let y = this.tiles[i].y;

            console.log(i, id, x, y);

            this.world[this.tiles[i].x][this.tiles[i].y] = this.tiles[i];
        } 

        this.heroesService.getNpcs()
            .then( function (npc:Npc[]) {
                this.npc = npc;
                console.log(this.npc);
                
                for (var i = 0; i < this.npc.length; i++) {
                    var element = this.npc[i];
                    console.log(element);
                    
                    
                }
                
            }.bind(this) )

        // this.heroesService.activeHero()
        //     .then( hero => this.hero = hero );

        this.heroesService.activeHero()
            .then( function(hero) {
                this.hero = hero;
                let x = this.hero.x;
                let y = this.hero.y;

                this.moveArea[x][y] = this.hero;
                this.createdHero = true;
            }.bind(this) );

            

        //let burzum = this.tiles.find( til => til.id === 1 );
        //this.tile[burzum.x][burzum.y] = burzum;  

        
    } 
}