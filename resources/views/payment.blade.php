<!DOCTYPE html>
<html>
<head>
    <title>Midtrans Payment Test</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <h1>Test Pembayaran Midtrans</h1>
    <button id="pay-button">Bayar Sekarang</button>

    <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-fePgYyUhJrw9KuE1"></script>
    <script>
        document.getElementById('pay-button').addEventListener('click', function () {
            fetch('/get-snap-token')
                .then(response => response.json())
                .then(data => {
                    window.snap.pay(data.snap_token, {
                        onSuccess: function(result) {
                            alert("Pembayaran sukses!");
                            console.log(result);
                        },
                        onPending: function(result) {
                            alert("Menunggu pembayaran...");
                            console.log(result);
                        },
                        onError: function(result) {
                            alert("Pembayaran gagal!");
                            console.log(result);
                        },
                        onClose: function() {
                            alert('Anda menutup popup tanpa menyelesaikan pembayaran');
                        }
                    });
                });
        });
    </script>
</body>
</html>
