document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk memformat angka menjadi format Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    };

    // Fungsi utama untuk menghitung ulang seluruh keranjang
    function updateCart() {
        let subtotal = 0;
        const cartItems = document.querySelectorAll('.cart-item');
        const shippingCost = 15000; // Contoh ongkos kirim tetap

        // Loop setiap item di keranjang
        cartItems.forEach(item => {
            const priceElement = item.querySelector('.item-price');
            const quantityInput = item.querySelector('.quantity-input');
            const totalElement = item.querySelector('.item-total');

            const price = parseFloat(priceElement.dataset.price);
            const quantity = parseInt(quantityInput.value);

            // Hitung total per item
            const itemTotal = price * quantity;
            totalElement.textContent = formatRupiah(itemTotal);

            // Tambahkan ke subtotal
            subtotal += itemTotal;
        });

        // Update ringkasan pesanan
        document.getElementById('cart-subtotal').textContent = formatRupiah(subtotal);
        document.getElementById('cart-total').textContent = formatRupiah(subtotal + shippingCost);

        // Cek jika keranjang kosong
        handleEmptyCart();
    }

    // Fungsi untuk menangani tampilan jika keranjang kosong
    function handleEmptyCart() {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const summaryContainer = document.getElementById('summary-container');
        const cartItemCount = document.querySelectorAll('.cart-item').length;

        if (cartItemCount === 0) {
            cartItemsContainer.style.display = 'none';
            summaryContainer.style.display = 'none';
            emptyCartMessage.style.display = 'block';
        } else {
            cartItemsContainer.style.display = 'block';
            summaryContainer.style.display = 'block';
            emptyCartMessage.style.display = 'none';
        }
    }

    // Event listener untuk semua interaksi di dalam kontainer keranjang
    const cartContainer = document.getElementById('cart-items-container');
    cartContainer.addEventListener('click', function(event) {
        // Jika tombol hapus diklik
        if (event.target.closest('.remove-item-btn')) {
            const itemToRemove = event.target.closest('.cart-item');
            
            Swal.fire({
                title: 'Hapus Produk?',
                text: "Anda yakin ingin menghapus produk ini dari keranjang?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    itemToRemove.remove();
                    updateCart(); // Hitung ulang setelah menghapus
                }
            });
        }
    });
    
    cartContainer.addEventListener('input', function(event) {
        // Jika input kuantitas berubah
        if (event.target.classList.contains('quantity-input')) {
            updateCart();
        }
    });

    // Panggil updateCart() saat halaman pertama kali dimuat
    updateCart();
});