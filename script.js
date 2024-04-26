document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement
    addOrder();
});

function addOrder() {
    let productName = document.getElementById('productname').value;
    let quantity = document.getElementById('quantity').value;
    let unitPrice = document.getElementById('unitprice').value;

    if (productName === '' || quantity === '' || unitPrice === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    let amount = quantity * unitPrice;

    let table = document.getElementById('orderbody');
    let newRow = table.insertRow();

    let productCell = newRow.insertCell(0);
    let quantityCell = newRow.insertCell(1);
    let unitPriceCell = newRow.insertCell(2);
    let amountCell = newRow.insertCell(3);

    productCell.innerHTML = productName;
    quantityCell.innerHTML = quantity;
    unitPriceCell.innerHTML = unitPrice;
    amountCell.innerHTML = amount;

    updateTotal(amount);
}

function updateTotal(amount) {
    var totalAmount = parseFloat(document.getElementById('totalAmount').innerHTML);
    totalAmount += amount;
    document.getElementById('totalAmount').innerHTML = totalAmount.toFixed(2);
}