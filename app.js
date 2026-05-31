let coins = 0;
let level = 1;

const A = [
  { name: "Dino", lat: 53.1412, lng: 17.9871 },
  { name: "Żabka", lat: 53.1408, lng: 17.9882 },
  { name: "Plac zabaw", lat: 53.1420, lng: 17.9865 }
];

const B = [
  { name: "Sokoła 62", lat: 53.1430, lng: 17.9850 },
  { name: "Ptasia 23", lat: 53.1415, lng: 17.9890 }
];

let currentOrder = null;

function login() {
  document.getElementById("status").innerText = "Online";
}

function distance(lat1, lon1, lat2, lon2) {
  return Math.sqrt((lat1 - lat2)**2 + (lon1 - lon2)**2);
}

function start() {
  const a = A[Math.floor(Math.random() * A.length)];
  const b = B[Math.floor(Math.random() * B.length)];

  currentOrder = { a, b };

  alert("Zlecenie: " + a.name + " → " + b.name);

  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const dist = distance(lat, lng, b.lat, b.lng);

    if (dist < 0.01) {
      coins += level;
      level++;

      document.getElementById("coins").innerText = "Monety: " + coins;
      alert("Dostarczone! +" + level + " monet");

      setTimeout(start, 60000);
    } else {
      alert("Nie jesteś w punkcie B");
    }
  });
}
