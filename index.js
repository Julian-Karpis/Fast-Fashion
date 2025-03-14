async function checkSustainability() {
    const brand = document.getElementById("brand-name").value.trim();
    if (!brand) {
        document.getElementById("result").innerHTML = "Please enter a brand name.";
        return;
    }
    const apiUrl = 'link${brand}'
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.sustainability) {
            document.getElementById("result").innerHTML = `${brand} is sustainable.`;
        } else {
            document.getElementById("result").innerHTML = `${brand} is not sustainable.`;
        }
    } catch (error) {
        document.getElementById("result").innerHTML = "An error occurred, or the brand is not in our database.";
    }

}