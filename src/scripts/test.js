function sendMessage() {
  var userInput = document.getElementById('userInput').value;
  var chatBody = document.getElementById('chatBody');
}
// Добавленный код для отображения кнопок при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  showStartButtons();
});

function showStartButtons() {
  var startButtons = document.getElementById('startButtons');
  startButtons.style.display = 'block';
}

function startBot(buttonId) {
  // Скрываем кнопки после выбора пользователя
  var startButtons = document.getElementById('startButtons');
  startButtons.style.display = 'none';

  var chatContainer = document.getElementById('chatContainer');
  chatContainer.style.display = 'block'; // Отображаем чат после выбора пользователя

  var chatBody = document.getElementById('chatBody');

  // В зависимости от выбранной кнопки, бот отвечает разными сообщениями
  switch (buttonId) {
    case 'button1':
      setTimeout(() => {
        displayMessage('Bot', 'Пример 1, Часть 1: Крепостные предприниматели Крепостные могли заниматься предпринимательством только с разрешения помещика. Помещик мог разрешить крепостному открыть магазин, фабрику или завод. Крепостной предприниматель должен был платить помещику ренту или отдавать ему часть прибыли. Крепостное предпринимательство было распространено в России в XVIII-XIX веках. Крепостные предприниматели занимались различными видами деятельности, включая торговлю, производство, сельское хозяйство и ремесло. Одним из самых известных крепостных предпринимателей был Андрей Болотов. Он владел усадьбой в Тульской губернии и на ней построил несколько фабрик и заводов, в том числе суконную фабрику, мыловаренный завод и фабрику по производству бумаги. Другим известным крепостным предпринимателем был Фёдор Волков. Он основал первый русский театр в Москве в 1756 году. Волков был талантливым актёром и режиссёром, но также он был успешным бизнесменом. Он сумел создать успешный театр, который пользовался большой популярностью. Крепостное предпринимательство сыграло важную роль в развитии экономики России');
      }, 5000);
      setTimeout(() => {
        displayMessage('Bot', 'Пример, Часть 2:  Крепостные предприниматели создавали новые рабочие места, способствовали развитию промышленности и торговли. Однако крепостное предпринимательство было ограничено в своих возможностях. Крепостные предприниматели были полностью зависимы от помещиков. Помещик мог в любой момент отобрать у крепостного предприятие или заставить его работать на других условиях. Крепостные владели крепостными Крепостные могли владеть крепостными в России в XVIII-XIX веках. Это явление называлось «крепостной крепостной». Крепостной крепостной был собственностью своего крепостного владельца, а не помещика, который владел его хозяином. Крепостные могли получить право владеть крепостными различными способами. Например, крепостной мог получить крепостного в подарок от помещика, купить его у другого крепостного или даже у самого помещика. Крепостные крепостные часто использовались в качестве рабочей силы на предприятиях, принадлежащих крепостным владельцам. Они также могли использоваться для выполнения различных домашних работ или для других целей. Крепостные крепостные были полностью зависимы от своих владельцев. Они не имели никаких прав и могли быть проданы, подарены или даже убиты своим владельцем');
      }, 7000);
    case 'button2':
      displayMessage('Bot', 'f');
      break;
    default:
      break;
  }
}

// Остальной код (sendMessage, displayMessage) оставляем без изменений


function displayMessage(sender, message) {
  var chatBody = document.getElementById('chatBody');
  var messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBody.appendChild(messageElement);

  // Scroll to the bottom of the chat body
  chatBody.scrollTop = chatBody.scrollHeight;
}


// Пример, Часть 1: Крепостные предприниматели Крепостные могли заниматься предпринимательством только с разрешения помещика. Помещик мог разрешить крепостному открыть магазин, фабрику или завод. Крепостной предприниматель должен был платить помещику ренту или отдавать ему часть прибыли. Крепостное предпринимательство было распространено в России в XVIII-XIX веках. Крепостные предприниматели занимались различными видами деятельности, включая торговлю, производство, сельское хозяйство и ремесло. Одним из самых известных крепостных предпринимателей был Андрей Болотов. Он владел усадьбой в Тульской губернии и на ней построил несколько фабрик и заводов, в том числе суконную фабрику, мыловаренный завод и фабрику по производству бумаги. Другим известным крепостным предпринимателем был Фёдор Волков. Он основал первый русский театр в Москве в 1756 году. Волков был талантливым актёром и режиссёром, но также он был успешным бизнесменом. Он сумел создать успешный театр, который пользовался большой популярностью. Крепостное предпринимательство сыграло важную роль в развитии экономики России.

// Пример, Часть 2:  Крепостные предприниматели создавали новые рабочие места, способствовали развитию промышленности и торговли. Однако крепостное предпринимательство было ограничено в своих возможностях. Крепостные предприниматели были полностью зависимы от помещиков. Помещик мог в любой момент отобрать у крепостного предприятие или заставить его работать на других условиях. Крепостные владели крепостными Крепостные могли владеть крепостными в России в XVIII-XIX веках. Это явление называлось «крепостной крепостной». Крепостной крепостной был собственностью своего крепостного владельца, а не помещика, который владел его хозяином. Крепостные могли получить право владеть крепостными различными способами. Например, крепостной мог получить крепостного в подарок от помещика, купить его у другого крепостного или даже у самого помещика. Крепостные крепостные часто использовались в качестве рабочей силы на предприятиях, принадлежащих крепостным владельцам. Они также могли использоваться для выполнения различных домашних работ или для других целей. Крепостные крепостные были полностью зависимы от своих владельцев. Они не имели никаких прав и могли быть проданы, подарены или даже убиты своим владельцем