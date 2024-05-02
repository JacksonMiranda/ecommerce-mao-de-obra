document.getElementById('hireButton').addEventListener('click', function() {
    window.location.href = 'contract.html'; // Redireciona para contract.html
});

// Adicionando o SDK do PayPal
const script = document.createElement('script');
script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"; // Substitua YOUR_CLIENT_ID com seu client ID real
script.onload = setupPayPalButton;
document.head.appendChild(script);

function setupPayPalButton() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "Contratação de mão de obra",
                    amount: {
                        currency_code: "BRL",
                        value: "100.00" // Altere conforme o valor do serviço
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
                // Quando o pagamento é completado com sucesso
                console.log('Payment completed successfully', orderData);
                alert('Pagamento realizado com sucesso!');
                // Aqui você pode redirecionar o usuário ou mostrar um recibo
            });
        },
        onError: function(err) {
            console.log(err);
            alert('Ocorreu um erro no pagamento');
        }
    }).render('#paypal-button-container');
}
