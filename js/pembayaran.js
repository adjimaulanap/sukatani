document.addEventListener('DOMContentLoaded', function() {
    
    // Memberi highlight pada ALAMAT yang dipilih
    document.querySelector('.accordion-body').addEventListener('click', function(event) {
        const targetCard = event.target.closest('.address-option-card');
        if (targetCard) {
            document.querySelectorAll('.address-option-card').forEach(c => c.classList.remove('selected'));
            targetCard.classList.add('selected');
            targetCard.querySelector('input[type="radio"]').checked = true;
        }
    });
    
    // Memberi highlight pada METODE PEMBAYARAN yang dipilih
    document.querySelectorAll('.payment-option-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            this.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Aksi untuk tombol "Bayar Sekarang"
    const payNowButton = document.getElementById('pay-now-button');
    payNowButton.addEventListener('click', function() {
        const selectedAddress = document.querySelector('input[name="shippingAddress"]:checked');
        const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');

        if (!selectedAddress) {
            Swal.fire({
                icon: 'error',
                title: 'Alamat Belum Dipilih',
                text: 'Harap pilih alamat pengiriman atau tambahkan alamat baru.',
                confirmButtonColor: '#28a745',
            });
            return;
        }

        if (!selectedPayment) {
            Swal.fire({
                icon: 'error',
                title: 'Metode Pembayaran Belum Dipilih',
                text: 'Harap pilih metode pembayaran Anda.',
                confirmButtonColor: '#28a745',
            });
             new bootstrap.Collapse(document.getElementById('collapsePembayaran'), {
                toggle: true
            });
            return;
        }

        // Jika semua validasi lolos
        Swal.fire({
            title: 'Konfirmasi Pesanan Anda',
            html: `Total pesanan: <b>Rp 110.000</b><br>Metode pembayaran: <b>${selectedPayment.value}</b>`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Buat Pesanan!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Pesanan Berhasil!',
                    text: 'Terima kasih, pesanan Anda sedang kami proses.',
                    icon: 'success',
                    timer: 3000,
                    showConfirmButton: false,
                    willClose: () => {
                        window.location.href = 'dashboard.html';
                    }
                });
            }
        });
    });
});