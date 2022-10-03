fetch ('https://api.coingecko.com/api/v3/simple/price?ids=Bhnetwork%2CHoloride%2CBitcoin%2CDogecoin%2CElongate%2CEthereum%2CGamium&vs_currencies=USD&include_24hr_change=true')

    .then(res => res.json())
    .then(json => {

        const container = document.querySelector('.container');
        const coins = Object.getOwnPropertyNames(json);

        for (let coin of coins) {

            const coinInfo = json[`${coin}`]; //json.bitcoin,doge,eth, etc //
            const price = coinInfo.usd;
            const change = coinInfo.usd_24h_change.toFixed(5);// 0.12345 zicemale etc//

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
            `;
        }
    });



