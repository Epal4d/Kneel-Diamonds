//Fetch size data from api
export const sizeOptions = async () => {
const response = await fetch("http://localhost:8088/sizes");
const sizes = await response.json();
    //create HTML
    let html = `
    <div class="customer-input">
    <h3> What size would you like</h3>
    `
    for (const size of sizes) {
        html += `<input type="radio" name="size" value="${size.id}"/> ${size.carets} Carets 
        `;
    }

    html += `
                </div>

            `
    return html
}