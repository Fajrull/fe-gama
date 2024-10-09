## Masalah yang Dihadapi

1. **Tidak Ada Endpoint POST untuk Membuat Akun Owner:**

   - Tidak ada endpoint untuk membuat akun owner. Akun owner yang tidak ada karena sudah terhapus semua, sehingga tidak bisa membuat fitur edit dan tidak bisa mengatur hak akses untuk role owner

2. **Tidak Ada Endpoint untuk Detail Artikel:**

   - Tidak ada endpoint yang mengizinkan pengguna untuk melihat detail artikel. Ketika artikel diklik, aplikasi tidak dapat menampilkan informasi detail artikel.
   - Endpoint yang seharusnya digunakan: `{base-url}/api/articles/{id}` saat ini tidak berfungsi.
