
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
