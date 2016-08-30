import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { TileModel } from './tile.model';

@Component({
    selector: 'local-area',
    styleUrls : ['app/home.component.css'],
    templateUrl : `app/home.component.html` 
})
export class HomeLocal {

    //My service, haven't use in this component yet.
    constructor( private heroesService: HeroesService ) {}

    //Array of tile obejcts
    tiles:TileModel[] = [
        { id: 1, name: 'stoneRoad', y:4, x:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:5, x:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:6, x:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:7, x:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:6, x:8, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:6, x:9, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:8, x:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 1, name: 'stoneRoad', y:9, x:7, tile: 'assets/world/terrain/stone_road32.png' },
        { id: 100, name: 'tree', y:9, x:1, tile: 'assets/world/terrain/tree128.png' },
        { id: 100, name: 'house', y:1, x:5, tile: 'assets/world/terrain/house160.png' }

    ];
    
    
    
    //Declare Tab
    world = new Array();

    //Method with I test filling one tile with grass. 
    fillGrass() {

        for (var i = 0; i < this.tiles.length; i++) {

            let id = this.tiles[i].id;
            let x = this.tiles[i].x;
            let y = this.tiles[i].y;

            console.log(i, id, x, y);

            this.world[this.tiles[i].y][this.tiles[i].x] = this.tiles[i];
            
            
            
        }

        // let burzum = this.tiles.find( til => til.id === 2 );
        // this.world[burzum.x][burzum.y] = burzum;

        
    }

    //Basic action methos
    doAction(col) {
        console.log(col);    
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
                console.log(i + 'x' + j + ': ', this.world[i][j] );
            }
        }   
        //let burzum = this.tiles.find( til => til.id === 1 );
        //this.tile[burzum.x][burzum.y] = burzum;  
    } 
}