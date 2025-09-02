export const styleOptions = async () => {
    const response = await fetch( "http://localhost:8088/styles")
    const styles = await response.json()

    let html = `
        <div class="customer-input">
        <h3> What style would you like</h3>
    `
    for (const style of styles) {
        html += `
            <input type="radio" name="style" value="${style.id}"/> ${style.style}
        `
    }
    html += `
                </div>
            `
    return html
}