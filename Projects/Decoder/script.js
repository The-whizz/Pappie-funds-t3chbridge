const encodedText = document.getElementById('encoded-text');
const shift = document.getElementById('shift');
const decodeBtn = document.getElementById('decode-btn');
const decodedText = document.getElementById('decoded-text');
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


decodeBtn.addEventListener('click', () => {
    const encodedValue = encodedText.value;
    const shiftValue = parseInt(shift.value);
    let decodedValue = '';

    for (let i = 0; i < encodedValue.length; i++) {
        const charCode = encodedValue.charCodeAt(i);
        let decodedCharCode = charCode - shiftValue;

        if (decodedCharCode < 65) {
            decodedCharCode += 26;
        }

        decodedValue += String.fromCharCode(decodedCharCode);
    }

    decodedText.value = decodedValue;
  

  
});
