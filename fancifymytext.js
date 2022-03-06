// alert("Hello, world!");

window.onload = () => {

    let textArea = document.querySelector("#text")

    // Modify your JS code so that when the user clicks "Bigger", 
    document.querySelector("#bigger").addEventListener('click', e => {
        //the text in the text area will get larger.
        textArea.style.fontSize = '24pt' 
    })

    document.querySelector("#fancyShmancy").addEventListener('change', e => {
        if(e.target.value) {
            textArea.style.fontWeight = 'bold'
            textArea.style.color = 'blue'
        }
    })

    document.querySelector("#boringBetty").addEventListener('change', e => {
        if(e.target.value) {
            textArea.style.fontWeight = ''
        }
    })

    document.querySelector("#moo").addEventListener('click', e => {
        // Add a new button to the HTML with the text "Moo" that, when clicked, uppercases the text in the text area
        textArea.value = textArea.value.toUpperCase()

        // Modify your button so that it also adds a suffix of "-Moo" to the last word of each sentence.
        let textParts = textArea.value.split(".")
        textArea.value = textParts.join("-Moo.")
    
    })
}


