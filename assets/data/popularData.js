const popularData = [
    {
        id: '1',
        image: require('../pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 gr',
        rating: '5.0',
        price: 5.99,
        sizeName: 'Large',
        sizeNumber: 18,
        crust: 'Thin Crust',
        deliveryTime: 30,
        topings: [
            {
                id: '1',
                name: 'tomato',
                image: require('../tomato.png')
            },
            {
                id: '2',
                name: 'cheese',
                image: require('../cheese.png')
            },
            {
                id: '3',
                name: 'ham',
                image: require('../ham.png')
            },
            {
                id: '4',
                name: 'garlic',
                image: require('../garlic.png')
            }
        ]

    },
    {
        id: '2',
        image: require('../pizza2.png'),
        title: 'Vegetarian Pizza',
        weight: '450 gr',
        rating: '4.0',
        price: 6.25,
        sizeName: 'Medium',
        sizeNumber: 17,
        crust: 'Thin Crust',
        deliveryTime: 30,
        topings: [
            {
                id: '1',
                name: 'tomato',
                image: require('../tomato.png')
            },
            {
                id: '2',
                name: 'ham',
                image: require('../ham.png')
            },
            {
                id: '3',
                name: 'garlic',
                image: require('../garlic.png')
            }
        ]
    },
    {
        id: '3',
        image: require('../pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '700 gr',
        rating: '5.0',
        price: 3.57,
        sizeName: 'Small',
        sizeNumber: 14,
        crust: 'Thin Crust',
        deliveryTime: 30,
        topings: [
            {
                id: '1',
                name: 'tomato',
                image: require('../tomato.png')
            },
            {
                id: '2',
                name: 'ham',
                image: require('../ham.png') 
            }
        ]
    },
]

export default popularData;