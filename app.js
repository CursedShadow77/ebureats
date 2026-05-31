let coins = 0;

const A = ["Dino", "Żabka", "Plac zabaw"];
const B = ["Sokoła 62", "Ptasia 23", "Łochowska 18"];

function login() {
  document.getElementById("status").innerText = "Online";
}

function start() {
  const startPoint = A[Math.floor(Math.random() * A.length)];
  const endPoint = B[Math.floor(Math.random() * B.length)];

  alert("Jedz z: " + startPoint + " do " + endPoint);

  setTimeout(() => {
    coins += 1;
    document.getElementById("coins").innerText = "Monety: " + coins;
    alert("Dostałeś 1 monetę!");
  }, 3000);
}
