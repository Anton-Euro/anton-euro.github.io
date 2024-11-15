let tg = window.Telegram.WebApp;
tg.expand();

const host = "https://eab2-146-120-15-57.ngrok-free.app";


fetch(host+`/webapps?user_id=${tg.initDataUnsafe.user.id}`, {
    method: 'GET',
    headers: {
        'token': tg.initDataUnsafe.query_id
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
    tg.sendData("123");
    // fetch(host+`/event?user_id=${tg.initDataUnsafe.user.id}&data=${data}`, {
    //     method: 'GET',
    //     headers: {
    //         'token': tg.initDataUnsafe.query_id
    //     }
    // }).then(response => response.json()).then(_ => {
    //     tg.close();
    // }).catch(error => console.error("Ошибка при загрузке данных:", error));
}