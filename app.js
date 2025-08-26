// Onze productendatabase
const producten = [
    { sku: "SKU001", naam: "Laptop", beschrijving: "Een krachtige laptop voor alledaags gebruik.", img: "https://via.placeholder.com/250x150.png?text=Laptop" },
    { sku: "SKU002", naam: "Toetsenbord", beschrijving: "Ergonomisch toetsenbord met mechanische toetsen.", img: "https://via.placeholder.com/250x150.png?text=Toetsenbord" },
    { sku: "SKU003", naam: "Muis", beschrijving: "Draadloze muis met instelbare DPI.", img: "https://via.placeholder.com/250x150.png?text=Muis" },
    { sku: "SKU004", naam: "Monitor", beschrijving: "27-inch 4K-monitor met dunne bezels.", img: "https://via.placeholder.com/250x150.png?text=Monitor" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productCatalogus = document.getElementById("product-catalogus");
    const productSelect = document.getElementById("product-select");
    const bestelFormulier = document.getElementById("bestel-formulier");
    const bestellingBevestiging = document.getElementById("bestelling-bevestiging");
    const besteldAantal = document.getElementById("besteld-aantal");
    const besteldProduct = document.getElementById("besteld-product");

    // Producten in de catalogus laden
    producten.forEach(product => {
        // Maak een HTML-element voor elk product
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.naam}">
            <h3>${product.naam}</h3>
            <p>${product.beschrijving}</p>
        `;
        productCatalogus.appendChild(productItem);

        // Voeg het product toe aan de dropdownlijst
        const option = document.createElement("option");
        option.value = product.sku;
        option.textContent = product.naam;
        productSelect.appendChild(option);
    });

    // Verwerk het bestelformulier
    bestelFormulier.addEventListener("submit", (e) => {
        e.preventDefault(); // Voorkom dat het formulier de pagina herlaadt

        const naam = document.getElementById("naam").value;
        const selectedSku = productSelect.value;
        const aantal = document.getElementById("aantal").value;

        // Zoek het product op basis van de SKU
        const besteldProductNaam = producten.find(p => p.sku === selectedSku).naam;

        // Update de bevestigingsinformatie
        besteldAantal.textContent = aantal;
        besteldProduct.textContent = besteldProductNaam;

        // Toon de bevestiging en verberg het formulier
        bestellingBevestiging.style.display = "block";
        bestelFormulier.style.display = "none";

        // Hier zou je de bestelling normaal naar een server sturen, maar voor nu is het een eenvoudige bevestiging.
        console.log(`Nieuwe bestelling van ${naam}: ${aantal} x ${besteldProductNaam}`);
    });
});
