import { Items } from './item.class';

export class Hero {
    id: number;
    active: boolean;
    name: string;
    bio: string;
    imageUrl: string;
    items: Items[];
}