export class InMemoryDataService {
    createDb() {
        let heroes = [
            { 
                id: 1, 
                active: true,
                name: 'Uland',
                class: 
                    {
                        id: 1, title: 'Explorer', health: 0, strength: 10, agility: 10, condition: 12, wisdom: 10, mana: 6, power: 0, damage: 0
                    },
                imageUrl: './public/img/1.png', 
                bio: 'He spent a great deal of his life as a battlefield healer before choosing to follow the path of a Druid, but the lessons he learned serving in the military have made him into an excellent leader today. ', 
                items: [
                    { id: 1, name: 'Towel', amount: 4, price: 8 },
                    { id: 2, name: 'Candle', amount: 2, price: 1 },
                    { id: 3, name: 'Torch', amount: 1, price: 3 }
                ],
                task: [ 1, 2, 5 ],
                wallet: 0,
                tile: 'assets/world/character/hero-small.png',
                x: 1,
                y: 1
            },
            {   id: 2, 
                active: false,
                name: 'Clancy', 
                class: 
                    {
                        id: 1, title: 'Swashbuckler', health: 0, strength: 14, agility: 12, condition: 14, wisdom: 4, mana: 4, power: 0, damage: 0
                    },
                imageUrl: './public/img/2.png', 
                bio: 'It was by pure accident that Clancy discovered he could communicate with Unicorns, but this unique ability has served him well as he worked his way through the ranks of AvLee\'s Military Elite. ', 
                items: [
                    { id: 11, name: 'Pork', amount: 6, price: 5 },
                    { id: 22, name: 'Showel', amount: 1, price: 20 },
                    { id: 33, name: 'Beer', amount: 2, price: 2 }
                ],
                task: [ 3, 4 ],
                wallet: 0,
                tile: '',
                x: 1,
                y: 1
            },
            { 
                id: 3, 
                active: false,
                name: 'Malcom', 
                class: 
                    {
                        id: 1, title: 'Sage', health: 0, strength: 6, agility: 8, condition: 8, wisdom: 14, mana: 12, power: 0, damage: 0
                    },
                imageUrl: './public/img/3.png', 
                bio: 'Because of his eagle eye specialty and starting skill, Malcom is one of the least useful heroes in the game. This is due the fact that the Eagle Eye secondary skill is practically useless. ', 
                items: [
                    { id: 44, name: 'Nail', amount: 39, price: 1 },
                    { id: 55, name: 'Hammer', amount: 1, price: 41 },
                    { id: 66, name: 'Bread', amount: 2, price: 4 }
                ],
                task: [],
                wallet: 0,
                tile: '',
                x: 1,
                y: 1
            }
        ];

        let tasks = [
            { 
                id:1, 
                title: 'Go to Inn', 
                description: 'You have met your old friend Dwalin, you knew him during last Clan Celebration Days. You decide to meet again in a local Inn.', 
                questItem: null,
                itemAmount:null,
                reward: 'Iron Cup x1',
                npc: 0
            },
            { 
                id:2, 
                title: 'Make a Pork', 
                description: 'You see that your grocery is almost empty. Your Hero decided to make own pork from local meat. You have to go to merchant and buy ingredients, and prepare it in your house.', 
                questItem: 11,
                itemAmount:5,
                reward: 'Pork x3',
                npc: 0
            },
            { 
                id:3, 
                title: 'Visit Merchant', 
                description: 'Grumbar, is a old merchant, who always have some interesting rumors to share. Go, visit him, and listen to newest things which happen in your neighbour last time!', 
                questItem: null,
                itemAmount:null,
                reward: 'Coins x200',
                npc: 1000
            },
            { 
                id:4, 
                title: 'Boar Hunt', 
                description: 'In the village, winter is comming. That means, you need to make a bigger supplies, for more difficult times.', 
                questItem: null,
                itemAmount:null,
                reward: 'Boar Meat x20',
                npc: 0
            },
            { 
                id:5, 
                title: 'Find missed glass.', 
                description: 'Your mother,- shes a preety old woman, lost her favorite glass in local forest. Find her cup, and you will recive a family treasure!', 
                questItem: null,
                itemAmount:null,
                reward: 'Old Family ring x1',
                npc: 0
            }
        ];

        let sweetshop = [
            { id: 66, name: "Bread", amount: 37, price: 4 },
            { id: 12, name: "Shirt", amount: 13, price: 12 },
            { id: 14, name: "Collar", amount: 23, price: 6 },
            { id: 33, name: "Beer", amount: 6, price: 2 },
            { id: 3, name: "Torch", amount: 12, price: 3 },
            { id: 11, name: 'Pork', amount: 35, price: 5 }
        ];

        let rumors = [
            { id: 1, rumor: "Lorem ipsum" },
            { id: 2, rumor: "Dolor est" },
            { id: 3, rumor: "Impact dest" },
            { id: 4, rumor: "Curicullum thae" }
        ];

        let npcs = [
            //Friendly
            { 
                id: 1000, 
                model: 0, 
                tile: "assets/world/character/npc.png", 
                name: "Merchand Jora", 
                inventory: 
                [ 
                    { id: 3, name: "Torch", amount: 12, price: 3 },
                    { id: 11, name: 'Pork', amount: 35, price: 5 }
                 ], 
                x: 5, 
                y: 10 
            },
            //Hoslitie
            //{ id:9000, model: 0, name: "Small Boar", inventory: [ 70, 60 ] },
        ];

        let items = [
            { id: 1, name: 'Towel', amount: 1, price: 8 },
            { id: 2, name: 'Candle', amount: 1, price: 1 },
            { id: 3, name: 'Torch', amount: 1, price: 3 },
            { id: 11, name: 'Pork', amount: 1, price: 5 },
            { id: 22, name: 'Showel', amount: 1, price: 20 },
            { id: 33, name: 'Beer', amount: 1, price: 2 },
            { id: 44, name: 'Nail', amount: 1, price: 1 },
            { id: 77, name: 'Short Sword', amount: 1, price: 40 },
            { id: 55, name: 'Hammer', amount: 1, price: 41 },
            { id: 66, name: 'Bread', amount: 1, price: 4 },
            { id: 70, name: 'Boar Hide', amount: 1, price: 14 },
            { id: 60, name: 'Boar Meat', amount: 1, price: 9 }
        ];
        
        return { heroes, tasks, sweetshop, rumors, npcs };
    }
}