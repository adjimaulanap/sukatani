document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        // Mencegah form mengirim data secara default
        event.preventDefault();

        // Mengambil nilai dari input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulasi proses login
        // Di aplikasi nyata, ini akan menjadi panggilan AJAX/Fetch ke server
        if (email === 'admin@sukatani.com' && password === '12345') {
            // Jika login berhasil
            Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                text: 'Selamat datang kembali, Admin. Anda akan diarahkan...',
                timer: 2000, // Notifikasi akan hilang setelah 2 detik
                showConfirmButton: false,
                allowOutsideClick: false
            }).then(() => {
                // Arahkan ke halaman dashboard atau halaman utama setelah notifikasi hilang
                // Ganti 'dashboard.html' dengan halaman tujuan Anda
                window.location.href = 'dashboard.html'; 
            });

        } else {
            // Jika login gagal
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal!',
                text: 'Email atau password yang Anda masukkan salah. Silakan coba lagi.',
                confirmButtonColor: '#28a745' // Menyesuaikan warna tombol dengan tema
            });
        }
    });
});