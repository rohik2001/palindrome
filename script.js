document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("input-text").value;
    checkpalindrome(txt);
});

functioncheckpalindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g,'').tolowercase();
    let len = txt_new.length;
    let haflen = math.floor( len/2);
    let result = document.getElementById("result");
    let i;


    for( i = 0; i <haflen; i++){
        if(txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "nope! not a pelindrome";
            return;
        }
        result.textContent = "Yes! It's a palindrome"
    }

}