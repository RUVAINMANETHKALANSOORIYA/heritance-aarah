document.addEventListener("alpine:init", () => {
    Alpine.store("accommodation", {
        rooms: [
          {
            type: 'BEACH VILLA',
            price: 25000,
          },
          {
            type: 'OCEAN VILLAS',
            price: 50000,
          },
          {
            type: 'POOL BEACH VILLAS',
            price: 75000,
          },
          {
            type: 'TWO BED ROOM FAMILY BEACH',
            price: 100000,
          }, 
          {
            type: 'TWO BED ROOM FAMILY POOL BEACH VILLAS',
            price: 125000,
          }, 
          {
            type: 'OCEAN SUITES',
            price: 200000,
          },  
          {
            type: 'OCEAN RESIDENCE',
            price: 250000,
          },  
        
        ],
        conditions: [        
          {
            type: 'Children',
            age: '0-4',
            price: 0,
          },
          {
            type: 'Children',
            age: '5-12',
            price: 5000,
          },
          {
            type: 'Extra Bed',
            price: 8000,
          },
        ],
      promo_codes : [
        {
          code : 'Promo123',
          discount : 5,
        },
        {
          code : 'Promo456',
          discount : 10,
        },
        {
          code : 'Promo789',
          discount : 15,
        },
      ]
    });
  });
  