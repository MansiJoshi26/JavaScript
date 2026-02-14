function anStr(){

    let str = document.getElementById("input").value;

    let lowerStr = str.toLowerCase();

    let totalChars = lowerStr.length;
    let vowels = 0;
    let consonants = 0;

    for(let i = 0; i < lowerStr.length; i++){

        let ch = lowerStr[i];

        if(ch >= 'a' && ch <= 'z'){

            if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
                vowels++;
            }
            else{
                consonants++;
            }
        }
    }

    let cleaned = "";

    for(let i=0;i<lowerStr.length;i++){
        let c = lowerStr[i];
        if(c >= 'a' && c <= 'z'){
            cleaned += c;
        }
    }

    let reversed = "";

    for(let i = cleaned.length - 1; i >= 0; i--){
        reversed += cleaned[i];
    }

    let isPalindrome = (cleaned === reversed);

    document.getElementById("result").innerHTML = `
        <p><b>Total Characters:</b> ${totalChars}</p>
        <p><b>Vowels:</b> ${vowels}</p>
        <p><b>Consonants:</b> ${consonants}</p>
        <p><b>Palindrome:</b> ${isPalindrome ? "Yes" : "No"}</p>
    `;
}
