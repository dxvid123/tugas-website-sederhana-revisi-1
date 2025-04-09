// MENGAMBIL DATA NAMA BARANG DAN HARGA BARANG DARI URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");
const namaBarangInput = document.getElementById("namaBarang");
const jumlahInput = document.getElementById("jumlah");
const totalHargaDisplay = document.getElementById("totalHarga");

// MEMASUKKAN NAMA BARANG KE INPUT
if (productName) {
  namaBarangInput.value = productName;
}

// FUNGSI SBGAI HITUNG TOTAL BARANGNYA
function updateTotal() {
  const jumlah = parseInt(jumlahInput.value);
  const price = parseInt(productPrice?.replace(/[^\d]/g, "")) || 0;
  const total = jumlah * price;
  totalHargaDisplay.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  return total; // Return the total for use in other functions
}

// AKAN MENGUPDATE TOTAL SETIAP KALI JUMLAH Y BERUBAH
jumlahInput.addEventListener("input", updateTotal);

// INISIALISASI SAAT HALAMAN PERTAMA KALI DIMUAT
updateTotal();

// FUNGSI UNTUK MERESET FORMNYA
function resetForm() {
  document.getElementById("purchaseForm").reset();
  // MEMASUKKAN KEMBALI NAMA SI BARANG SAAT SI RESET DI TEKAN
  namaBarangInput.value = productName || "";
  updateTotal();
}

// SAAT TOMBOL KIRIM DI TEKAN AKAN MENGIRIM DATA KE STRUK.HTML
document
  .getElementById("purchaseForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const warna = document.getElementById("warna").value;
    const jumlah = document.getElementById("jumlah").value;
    const barang = namaBarangInput.value;
    const total = totalHargaDisplay.textContent;

    // Buat URL dengan parameter untuk halaman struk
    const strukURL = `struk.html?nama=${encodeURIComponent(
      nama
    )}&alamat=${encodeURIComponent(alamat)}&warna=${encodeURIComponent(
      warna
    )}&jumlah=${encodeURIComponent(jumlah)}&barang=${encodeURIComponent(
      barang
    )}&total=${encodeURIComponent(total)}`;

    // Pindah ke halaman struk
    window.location.href = strukURL;
  });
