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
        return { heroes };
    }
}