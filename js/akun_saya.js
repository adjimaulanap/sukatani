document.addEventListener('DOMContentLoaded', function() {
    
    // Elemen-elemen untuk form profil
    const profileForm = document.getElementById('profile-form');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const saveProfileContainer = document.getElementById('save-profile-container');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const formInputs = profileForm.querySelectorAll('input');

    // Fungsi untuk mengaktifkan/menonaktifkan input form
    const toggleFormInputs = (disabled) => {
        formInputs.forEach(input => input.disabled = disabled);
    };

    // --- Logika untuk Edit Profil ---
    editProfileBtn.addEventListener('click', function() {
        toggleFormInputs(false); // Aktifkan input
        saveProfileContainer.style.display = 'block'; // Tampilkan tombol simpan & batal
        this.style.display = 'none'; // Sembunyikan tombol edit
    });

    cancelEditBtn.addEventListener('click', function() {
        toggleFormInputs(true); // Nonaktifkan lagi input
        saveProfileContainer.style.display = 'none'; // Sembunyikan tombol simpan & batal
        editProfileBtn.style.display = 'block'; // Tampilkan lagi tombol edit
        // Di aplikasi nyata, Anda mungkin perlu me-reset nilai form ke nilai asli
    });

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        toggleFormInputs(true);
        saveProfileContainer.style.display = 'none';
        editProfileBtn.style.display = 'block';
        
        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Profil Anda telah berhasil diperbarui.',
            confirmButtonColor: '#28a745'
        });
    });

    // --- Logika untuk Ubah Password ---
    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Password baru dan konfirmasi password tidak cocok.',
                confirmButtonColor: '#28a745'
            });
            return;
        }

        // Jika valid
        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Password Anda telah berhasil diubah.',
            confirmButtonColor: '#28a745'
        });
        passwordForm.reset(); // Kosongkan form
    });

    // --- Logika untuk Logout ---
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        Swal.fire({
            title: 'Apakah Anda yakin ingin keluar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, keluar!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html';
            }
        });
    });

});