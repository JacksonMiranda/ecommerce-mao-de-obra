document.addEventListener('DOMContentLoaded', function() {
    const serviceType = document.getElementById('serviceType');
    const serviceDescription = document.getElementById('serviceDescription');

    serviceType.addEventListener('change', function() {
        updateServiceDescription();
        updatePayment();
    });

    function updateServiceDescription() {
        const selectedOption = serviceType.options[serviceType.selectedIndex].text;
        serviceDescription.innerHTML = `<p>${selectedOption.split('-')[1]}</p>`;
    }

    function updatePayment() {
        const selectedValue = serviceType.value;
        const amount = selectedValue === 'temporary' ? '200.00' : '5000.00';
        const description = selectedValue === 'temporary' ? 'Mão de Obra Temporária' : 'Mão de Obra Permanente';

        if (window.paypal) {
            paypal.Buttons({
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                            description: description,
                            amount: {
                                currency_code: "BRL",
                                value: amount
                            }
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(orderData) {
                        alert('Pagamento realizado com sucesso!');
                    });
                },
                onError: function(err) {
                    alert('Ocorreu um erro no pagamento');
                }
            }).render('#paypal-button-container');
        }
    }

    updateServiceDescription();
    updatePayment();
});