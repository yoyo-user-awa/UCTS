function encodeAA26(data){
    let str = 'ASDFGHJKLPOIUYTREWQZXCVBNM';
    let ls = [];
    for (ch of data){
        let code = ch.charCodeAt(0);
        const string = str.charAt(Math.floor(code/26))+str.charAt(code%26);
        ls.push(string);
    }
    return ls.join('');
}

function decodeAA26(encoded){
    let str = 'ASDFGHJKLPOIUYTREWQZXCVBNM';
    let ls = [];
    for (let i=0; i<encoded.length; i+=2){
        let fch = encoded.charAt(i);
        let sch = encoded.charAt(i+1);
        let fnum = str.indexOf(fch);
        let snum = str.indexOf(sch);
        let code = fnum*26+snum;
        ls.push(String.fromCharCode(code))
    }
    return ls.join('');
}