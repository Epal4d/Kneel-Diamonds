//Fetch metals from api
export const metalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

    let html =  `
        <div= class="customer-input">
        <h3>Choice of Metal</h3>
    `
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type ='radio' name='metal' value='${metal.id}' /> ${metal.metal}`
        }
    )
    /*//for loop to create radio buttons for each metal
    for (const metal of metals) {
        html += `<input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}`;        
    }

    html += `
                </div>
            `;
    return html;*/
    //This function needs to return a single string, not an array of strings 
    html += divStringArray.join("")

    return html
}