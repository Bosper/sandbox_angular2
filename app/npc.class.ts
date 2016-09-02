import { Items } from './item.class';

// extends Group
export class Npc {
    id: number;
    model: number;
    tile: string;
    name: string;
    inventory: Items[];
    x: number;
    y: number;
}