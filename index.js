const brands = {
    "nike": { sustainable: false, reason: "Uses synthetic materials, poor labor conditions" },
    "patagonia": { sustainable: true, reason: "Uses recycled materials, fair labor policies" },
    "h&m": { sustainable: false, reason: "Fast fashion, high waste production" },
    "tentree": { sustainable: true, reason: "Plants trees, ethical manufacturing" },
    "tentree": { sustainable: true, reason: "Plants trees, ethical manufacturing" },
    "adidas": { sustainable: true, reason: "Uses recycled plastics, sustainable materials" },
    "uniqlo": { sustainable: false, reason: "Fast fashion, poor labor standards" },
    "everlane": { sustainable: true, reason: "Transparent pricing, ethical labor practices" },
    "zara": { sustainable: false, reason: "Fast fashion, environmental impact" },
    "levis": { sustainable: true, reason: "Sustainable denim production, recycled materials" },
    "the north face": { sustainable: true, reason: "Uses recycled materials, eco-friendly practices" },
    "luxottica": { sustainable: false, reason: "Labor exploitation, poor environmental practices" },
    "nike": { sustainable: false, reason: "Fast fashion, labor exploitation, high carbon footprint" },
    "mango": { sustainable: false, reason: "Fast fashion, water waste" },
    "cos": { sustainable: true, reason: "Uses sustainable cotton, ethical practices" },
    "puma": { sustainable: true, reason: "Eco-friendly materials, animal welfare standards" },
    "jcrew": { sustainable: false, reason: "Uses synthetic materials, lacks transparency" },
    "burt's bees": { sustainable: true, reason: "Eco-friendly packaging, natural ingredients" },
    "l'oreal": { sustainable: false, reason: "Testing on animals, harmful chemicals in products" },
    "nestle": { sustainable: false, reason: "Child labor issues, environmental harm" }
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchButton").addEventListener("click", checkBrand);
});

function checkBrand() {
    let input = document.getElementById("brandInput").value.trim().toLowerCase();
    let resultElement = document.getElementById("result");

    if (brands[input]) {
        let { sustainable, reason } = brands[input];
        resultElement.innerHTML = sustainable
            ? `✅ <strong>${input}</strong> is <b>sustainable</b>. 🌿 Reason: ${reason}`
            : `❌ <strong>${input}</strong> is <b>not sustainable</b>. ⚠️ Reason: ${reason}`;
    } else {
        resultElement.innerHTML = "⚠️ Brand not found in the database.";
    }
}
