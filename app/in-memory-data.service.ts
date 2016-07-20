export class InMemoryDataService {
    createDb() {
        let heroes = [
            { 
                id: 1, 
                active: true,
                name: 'Uland',
                imageUrl: './public/img/1.png', 
                bio: 'He spent a great deal of his life as a battlefield healer before choosing to follow the path of a Druid, but the lessons he learned serving in the military have made him into an excellent leader today. ', 
                items: [
                    { id: 1, name: 'Towel', amount: 4 },
                    { id: 2, name: 'Candle', amount: 2 },
                    { id: 3, name: 'Torch', amount: 1 }
                ]
            },
            {   id: 2, 
                active: false,
                name: 'Clancy', 
                imageUrl: './public/img/2.png', 
                bio: 'It was by pure accident that Clancy discovered he could communicate with Unicorns, but this unique ability has served him well as he worked his way through the ranks of AvLee\'s Military Elite. ', 
                items: [
                    { id: 11, name: 'Pork', amount: 6 },
                    { id: 22, name: 'Showel', amount: 1 },
                    { id: 33, name: 'Beer', amount: 2 }
                ]
            },
            { 
                id: 3, 
                active: false,
                name: 'Malcom', 
                imageUrl: './public/img/3.png', 
                bio: 'Because of his eagle eye specialty and starting skill, Malcom is one of the least useful heroes in the game. This is due the fact that the Eagle Eye secondary skill is practically useless. ', 
                items: [
                    { id: 44, name: 'Nail', amount: 39 },
                    { id: 55, name: 'Hammer', amount: 1 },
                    { id: 66, name: 'Bread', amount: 2 }
                ]
            }
        ];

        let tasks = [
            { 
                id:1, 
                title: 'Go to Inn', 
                description: 'You have met your old friend Dwalin, you knew him during last Clan Celebration Days. You decide to meet again in a local Inn.', 
                reward: 'Iron Cup x1'
            },
            { 
                id:2, 
                title: 'Make a Pork', 
                description: 'You see that your grocery is almost empty. Your Hero decided to make own pork from local meat. You have to go to merchant and buy ingredients, and prepare it in your house.', 
                reward: 'Pork x3'
            },
            { 
                id:3, 
                title: 'Visit Merchant', 
                description: 'Grumbar, is a old merchant, who always have some interesting rumors to share. Go, visit him, and listen to newest things which happen in your neighbour last time!', 
                reward: 'Coins x200'
            },
            { 
                id:4, 
                title: 'Boar Hunt', 
                description: 'In the village, winter is comming. That means, you need to make a bigger supplies, for more difficult times.', 
                reward: 'Boar Meat x20'
            },
            { 
                id:5, 
                title: 'Find missed glass.', 
                description: 'Your mother,- shes a preety old woman, lost her favorite glass in local forest. Find her cup, and you will recive a family treasure!', 
                reward: 'Old Family ring x1'
            }
        ];
        
        return { heroes, tasks };
    }
}