const DBM = DatabaseMngr;
const doc = document;

const topbar = doc.getElementById('topbar');
topbar.insertAdjacentHTML('beforeend', `<p id="coinText">UCTS币余额: <span id="showCoin">加载中...</span></p>`);
const showCoin = doc.getElementById('showCoin');
setInterval(()=>{
    showCoin.innerHTML = `<b>${DBM.getItem('coin')}</b>`
},200)