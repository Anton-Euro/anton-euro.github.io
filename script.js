let tg = window.Telegram.WebApp;
tg.expand();

const apiUrl = "https://eab2-146-120-15-57.ngrok-free.app/webapps?user_id=1344042437";//+tg.initDataUnsafe.user.id;


fetch(apiUrl, {
    method: 'GET',
    headers: {
        'token': 'qwe123'
    }
}).then(response => response.json()).then(data => {
    const container = document.getElementById("menu");
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <a onclick="go_to_link('${item.bot_url}?startapp');" class="card-link"><img src="data:image/png;base64,${item.photo_base64}" alt="${item.title}"></a>
            <div class="card-title">${item.title}</div>
        `;

        container.appendChild(card);
    });
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <a onclick="send_data_to_bot('add');" class="card-link"><img src="add.png"></a>
        <div class="card-title">Add webapp</div>
    `;
    container.appendChild(card);
    card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <a onclick="send_data_to_bot('delete');" class="card-link"><img src="delete.png"></a>
        <div class="card-title">Delete webapp</div>
    `;
    container.appendChild(card);
}).catch(error => console.error("Ошибка при загрузке данных:", error));


function go_to_link(href) {
    tg.openTelegramLink(href);
}

function send_data_to_bot(data) {
    console.log(data);
    fetch('https://eab2-146-120-15-57.ngrok-free.app/event?user_id=1344042437&data='+data, {
        method: 'POST',
        headers: {
            'token': 'qwe123'
        }
    }).then(response => response.json());
}