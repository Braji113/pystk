const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
        key: 'pk_live_96586a956710d4fd0e46e17c3407accc0d4b2c97', // Replace with your public key
        email: document.getElementById("email").value,
        //amount: document.getElementById("amount").value * 100, // Convert to kobo
        amount: 200 * 100, // Convert to kobo
        currency:"NGN",
        ref: 'mak' + Math.floor((Math.random() * 1000000000) + 1), // Generates a pseudo-unique reference
        onClose: function() {
            alert('Window closed.');
        },
        callback: function(response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            window.location.href="succss.php";
        }
    });

    handler.openIframe();
}