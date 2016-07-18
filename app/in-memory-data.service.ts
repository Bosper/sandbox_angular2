export class InMemoryDataService {
    createDb() {
        let heroes = [
            { id: 1, name: 'Uland', items: [
                    { id: 1, name: 'Towel' },
                    { id: 2, name: 'Candle' },
                    { id: 3, name: 'Torch' }]},
            { id: 2, name: 'Clancy', items: [
                    { id: 11, name: 'Pork' },
                    { id: 22, name: 'Showel' },
                    { id: 33, name: 'Beer' }]},
            { id: 3, name: 'Malcom', items: [
                    { id: 44, name: 'Nail' },
                    { id: 55, name: 'Hammer' },
                    { id: 66, name: 'Bread' }]}
        ];
        return { heroes };
    }
}