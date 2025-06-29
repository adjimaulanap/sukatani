document.addEventListener('DOMContentLoaded', function() {
    
    const filterButtons = document.querySelectorAll('.order-filter-btn');
    const orderCards = document.querySelectorAll('.order-card');
    const noOrdersMessage = document.getElementById('no-orders-message');

    // Fungsi untuk menampilkan pesan jika tidak ada pesanan sama sekali
    function checkInitialOrders() {
        if (orderCards.length === 0) {
            noOrdersMessage.style.display = 'block';
            document.getElementById('pills-tab').style.display = 'none'; // Sembunyikan filter jika tak ada pesanan
        }
    }
    
    // Tambahkan event listener untuk setiap tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas 'active' ke tombol yang diklik
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            
            // Loop setiap kartu pesanan
            orderCards.forEach(card => {
                const status = card.getAttribute('data-status');
                
                // Tampilkan atau sembunyikan kartu berdasarkan filter
                if (filter === 'semua' || filter === status) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Panggil fungsi pengecekan awal saat halaman dimuat
    checkInitialOrders();
});