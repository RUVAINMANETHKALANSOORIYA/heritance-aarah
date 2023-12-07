document.addEventListener("alpine:init", () => {
    Alpine.store("accommodation", {
        rooms: [
          {
            type: 'BEACH VILLA',
            price: 5000,
          },
          {
            type: 'OCEAN VILLAS',
            price: 10000,
          },
          {
            type: 'POOL BEACH VILLAS',
            price: 15000,
          },
          {
            type: 'TWO BED ROOM FAMILY BEACH',
            price: 20000,
          }, 
          {
            type: 'TWO BED ROOM FAMILY POOL BEACH VILLAS',
            price: 25000,
          }, 
          {
            type: 'OCEAN SUITES',
            price: 30000,
          },  
          {
            type: 'OCEAN RESIDENCE',
            price: 35000,
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
      ]
    });
  });
  