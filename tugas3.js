// Fungsi ditambahDua
console.log("\nFungsi ditambahDua");
function ditambahDua(angka) {
  console.log("Nilai angka sebelum ditambah 2 adalah", angka);
  const pesan = "Nilai angka setelah ditambah 2 adalah ";
  return pesan + (angka + 2);
}

console.log(ditambahDua(1));

// Fungsi dikurangDua
console.log("\nFungsi dikurangDua");

const dikurangDua = function (angka) {
  console.log("Nilai angka sebelum dikurang dua adalah", angka);
  const pesan = "Nilai angka setelah dikurang dua adalah ";
  return pesan + (angka - 2);
};

console.log(dikurangDua(2));

// Fungsi dikaliDua
console.log("\nFungsi dikaliDua");

const dikaliDua = (angka) => {
  console.log("Nilai angka sebelum dikali dua adalah", angka);
  const pesan = "Nilai angka setelah dikali dua adalah ";
  return pesan + angka * 2;
};

console.log(dikaliDua(3));
