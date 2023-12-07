document.addEventListener("alpine:init", () => {
    Alpine.store("adventures", {
      name: "Scuba Diving",
      adult: [
        {
          type: "Local Adult",
          price: 5000,
        },
        {
          type: "Foreign Adult",
          price: 10000,
        }
      ],
      child: [
        {
          type: "Local Child",
          price: 2000,
        },
        
        {
          type: "Foreign Child",
          price: 5000,
        },
      ],
      guide: [
        {
          type: "Adult",
          price: 1000,
        },
        {
          type: "Child",
          price: 500,
        },
      ],
    });
  });