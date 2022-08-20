module.exports = {
    owner: [
        {
            identification: '0951690148',
            name: 'Carlos',
            lastName: 'Loja',
            age: 34
        },
        {
            identification: '0951690140',
            name: 'Camila',
            lastName: 'Loja',
            age: 45
        },
        {
            identification: '0951690118',
            name: 'Andres',
            lastName: 'Quintero',
            age: 19
        }
    ],
    petOwner: [
        {
            identification: '0951390148',
            name: 'Akimi',
            lastName: 'Guerrero',
            age: 34
        },
        {
            identification: '0151690140',
            name: 'Nohelia',
            lastName: 'Intriago',
            age: 45
        },
        {
            identification: '0951690318',
            name: 'Andres',
            lastName: 'Quintero',
            age: 19
        }
    ],
    product: [
        {
            id: 1,
            name: 'DogChow',
            price: 50.33
        },
        {
            id: 2,
            name: 'Procan',
            price: 40.33
        },
        {
            id: 3,
            name: 'Gatito',
            price: 20.33
        },
    ],
    pet: [
        {
            id: 1,
            breed: 'Pitbull',
            name: 'Oreo',
            age: 5,
            ownerIdentification: '0951390148'
        },
        {
            id: 2,
            breed: 'Pitbull',
            name: 'Hela',
            age: 3,
            ownerIdentification: '0951390148'
        },
        {
            id: 3,
            breed: 'Chiguagua',
            name: 'Pancracio',
            age: 5,
            ownerIdentification: '0151690140'
        }
    ],
    local:[
        {
            id: 1,
            name: 'Carlitos Vet',
            latitude: -79.833120,
            longitude: -2.171288,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            smallDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            isVeterinary: true,
            ownerIdentification: '0951690148'
        },
        {
            id: 2,
            name: 'Akimi Shop',
            latitude: -79.833120,
            longitude: -2.171288,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            smallDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
            isVeterinary: false,
            ownerIdentification: '0951690118'
        }
    ],
    inventory: [
        {
            quantity: 100,
            productId: 1,
            localId: 1
        },
        {
            quantity: 10,
            productId: 2,
            localId: 1
        },
        {
            quantity: 40,
            productId: 2,
            localId: 2
        }
    ],
    service: [
        {
            id:1,
            name: "Peinar perro",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 40.22,
            localId: 1
        },
        {
            id:2,
            name: "Pasear perro",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 4.22,
            localId: 1
        }
    ],
    sale: [
        {
            id: 1,
            value: 4,
            petId: 1,
            serviceId: 1
        },
        {
            id: 1,
            value: 4,
            petId: 1,
            serviceId: 2
        }
    ]
};