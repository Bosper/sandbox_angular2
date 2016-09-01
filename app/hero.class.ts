import { Items } from './item.class';
import { Group } from './group.class';

export class Hero {
    id: number;
    active: boolean;
    name: string;
    class: Group;
    bio: string;
    imageUrl: string;
    items: Items[];
    task: number[];
    wallet: number;
    tile: string;
    x:number;
    y:number;
}