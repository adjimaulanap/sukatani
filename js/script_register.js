document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Mengambil nilai dari setiap input
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsCheck = document.getElementById('termsCheck').checked;
        
        // Validasi Sederhana
        if (password.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password minimal harus 8 karakter!',
                confirmButtonColor: '#28a745'
            });
            return; // Hentikan eksekusi
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Password Tidak Cocok',
                text: 'Pastikan password dan konfirmasi password Anda sama.',
                confirmButtonColor: '#28a745'
            });
            return; // Hentikan eksekusi
        }
        
        if (!termsCheck) {
             Swal.fire({
                icon: 'warning',
                title: 'Perhatian',
                text: 'Anda harus menyetujui Syarat & Ketentuan untuk mendaftar.',
                confirmButtonColor: '#28a745'
            });
            return; // Hentikan eksekusi
        }


        // Jika semua validasi lolos
        // Di aplikasi nyata, data ini akan dikirim ke server.
        console.log('Data Pendaftaran:', { fullName, email, password });
        
        Swal.fire({
            icon: 'success',
            title: 'Pendaftaran Berhasil!',
            text: 'Akun Anda telah dibuat. Silakan login untuk melanjutkan.',
            confirmButtonColor: '#28a745',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                // Arahkan pengguna ke halaman login setelah pendaftaran berhasil
                window.location.href = 'login.html';
            }
        });
    });
});