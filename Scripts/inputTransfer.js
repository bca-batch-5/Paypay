const nominal = document.getElementById(`nominal`);
const notes = document.getElementById(`notes`);
const pen = document.getElementById("pen");
const inputNotes = document.getElementById("inputNotes");
let tempHasil;

nominal.addEventListener("click", () => {
  //   nominal.value = "Rp ";
  nominal.style.color = `#6379F4`;
//   if (nominal.value[3] != "") {
//     angka = "";
//   }
});

nominal.addEventListener("focusout", () => {
  nominal.value = "";
});

nominal.addEventListener("input", () => {
  if (nominal.value !== "") {
    nominal.style.color = `#6379F4`;
    console.log(nominal.value);
    nominal.value = formatRupiah(nominal.value, 'Rp. ');
  }
});

function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka satuan ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}

notes.addEventListener("input", () => {
  if (notes.value !== "") {
    inputNotes.style.borderColor = `#6379F4`;
    pen.style.color = "#6379F4";
  }
});
