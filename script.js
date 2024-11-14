document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    let tg = window.Telegram.WebApp;  
    document.getElementById("butt1").onclick = function() {
        console.log(tg.initDataUnsafe);
        document.getElementById("text").innerText = tg.initDataUnsafe;
        //tg.showAlert(`Добро пожаловать, @${tg.initData}.`);
        //tg.openTelegramLink("https://t.me/BybitCoinsweeper_Bot?startapp");
    }
});

function fetchData() {
    const apiUrl = "https://f7f8-146-120-15-57.ngrok-free.app/webapps?user_id=1344042437";

    fetch(apiUrl, {
            method: 'GET',
            headers: {
                'token': 'qwe123'
            }
        }
    )
        .then(response => response.json())
        .then(data => {
            displayCards(data);
        })
        .catch(error => console.error("Ошибка при загрузке данных:", error));
}

function displayCards(data) {
    const container = document.getElementById("menu");
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <a onclick="tg.openTelegramLink('${item.bot_url}?startapp');" class="card-link"><img src="${item.photo_url}" alt="${item.title}"></a>
            <div class="card-title">${item.title}</div>
        `;

        container.appendChild(card);
    });
}