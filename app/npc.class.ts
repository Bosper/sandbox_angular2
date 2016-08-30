import { Group } from './group.class';

export class npc extends Group {
    id: number;
    model: number;
    name: string;
    inventory: number[];
}