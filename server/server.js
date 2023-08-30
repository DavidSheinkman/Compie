const express = require("express");

const app = express();

const Pictures = [
  {
    id: 1,
    url: "https://pixabay.com/get/g6542eed32ac7e4553b78cad50cc68e8794c09ce450911dbaa070b65495f4c3cab269b120ba898a1a428e44a61f358a2e_640.jpg",
    artist: "Larisa-K",
    title: "Yellow Flowers",
    resolution: "640x426",
    weight: "230 KB"
  },
  {
    id: 2,
    url: "https://pixabay.com/get/gafbd59fab3138a3180fab36f76ff84e7a217dc72d5b5a29e1bd17d35d6fb39acc84654f61999bf75ce123d8045d83324_640.jpg",
    artist: "realworkhard",
    title: "Red flower",
    resolution: "640x426",
    weight: "240 KB"
  },
  {
    id: 3,
    url: "https://pixabay.com/get/gc588569e5dc6be6cf8d05013484903fc84808381357abdf3e2cd13b6693e45ba4defbc0574b7f2e2ea91e7839dd09a36_640.jpg",
    artist: "ArtTower",
    title: "flowers",
    resolution: "640x426",
    weight: "215 KB"
  },
  {
    id: 4,
    url: "https://pixabay.com/get/g5807f824221577caa83076a92c12303eb9525ddc96dcaf18919f0cf52514671255aa0b4bee7fb20e0891be0f18cc0ca8_640.jpg",
    artist: "GLady",
    title: "flower",
    resolution: "640x426",
    weight: "225 KB"
  },
  {
    id: 5,
    url: "https://pixabay.com/get/ga06f81f0fdf2730426bf9291b4ac9c8f57507451411f5445b0dd29427c1dd8278708e078c7d5a1d960e037534dba0b35_640.jpg",
    artist: "danigeza",
    title: "field",
    resolution: "640x426",
    weight: "205 KB"
  },
  {
    id: 6,
    url: "https://pixabay.com/get/gbf805ab3ab094a434d4a6e0264df17d0b92104fe78c4c30ada86e8995cda1ea75b68c4ec366cd8025592193de6aff4ef_640.jpg",
    artist: "DeltaWorks",
    title: "flower",
    resolution: "640x426",
    weight: "220 KB"
  },
  {
    id: 7,
    url: "https://pixabay.com/get/gda578ef61e0b068ece5845b190d60ae0b3593719996a082abc3057b9f1e2485456f75e081ace43d845956f3555284b23_640.jpg",
    artist: "Larisa-K",
    title: "flowers",
    resolution: "640x426",
    weight: "235 KB"
  },
  {
    id: 8,
    url: "https://pixabay.com/get/g67ee0fbaf3db5fe57cb4614240487f88f3f310d64c20e516caab1f6d58a50a73f6fc736ba2f0644d8eb000d3283875c9_640.jpg",
    artist: "Josch13",
    title: "rose, flower, flower wallpaper",
    resolution: "640x426",
    weight: "250 KB"
  }
];


app.get("/api", (req, res) => {
  res.json(Pictures);
});

app.get("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const picture = Pictures.find(picture => picture.id === id);

  if (picture) {
    res.json(picture);
  } else {
    res.status(404).json({ message: "Image not found" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
