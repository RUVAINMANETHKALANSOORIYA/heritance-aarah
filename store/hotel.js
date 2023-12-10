document.addEventListener("alpine:init", () => {
    Alpine.store("hotel", {
      name: "Heritance Aarah",
      cover: "https://karusantravels.com/wp-content/uploads/2020/03/Skybar-banner-heritance-aarha.jpg",
      location: "Maldives",
      description: "Catch a wave or dive beneath it, spend lazy days in the pool sipping your favourite cocktail and let the kids enjoy lots of creative playtime; our range of facilities make us the ideal choice amongst luxury 5 star Maldives resorts for an intimate getaway full of romance or a fun-filled family holiday.",
      rating: 5,
      facilities: [
          "Complimentary Wi-Fi", 
          "Main Pool", 
          "Pool bar", 
          "In-room dining", 
          " Water sports facilities", 
          "Table tennis",
          "Beach football",
          "Lovers dhoni ride",
          " Movie under the star",
          " Foreign exchange"       
      ],
    });
  });