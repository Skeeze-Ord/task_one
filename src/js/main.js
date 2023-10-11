const webinarList = [
  {
    title: "Личностные границы",
    videoUrl: "https://www.youtube.com/embed/nE9IU_BEGpQ",
    description:
      "Тема денег волнует независимо от пола, социального статуса или местожительства. Всем хочется больше зарабатывать и более разумно расходовать свой доход. Здесь можно выбирать темы для вебинаров об экономии семейного бюджета, торговли на Forex и т. д.",
  },
  {
    title: "Маркетинг",
    videoUrl: "https://www.youtube.com/embed/F6b0VFltDAs",
    description:
      "Сейчас бизнес массово переходит в интернет. В связи с этим у владельцев и маркетологов возникает множество вопросов — какие способы продвижения лучше использовать, как работает интернет-реклама, как повысить эффективность сайта и многое другое. Здесь, скорее всего, проблем с контентом не будет. Вот несколько идей для начала: история успеха в онлайн-бизнесе, реклама в Google, поисковая оптимизация, развитие бренда в соцсетях.",
  },
];

const webinars = document.getElementById("webinars");

// Добавление элементов списка (вебинаров)
const addItem = (webinar, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = webinar.title;

  listItem.addEventListener("click", () => {
    window.location.href = `webinar${index + 1}.html`;
  });

  webinars.appendChild(listItem);
};

webinarList.forEach((webinar, index) => {
  addItem(webinar, index);
});

// Поиск
const webinarSearch = document.getElementById("webinarSearch");

webinarSearch.addEventListener("keyup", function () {
  let search = this.value.toLowerCase();
  let filteredWebinars = Array();

  webinars.innerHTML = "";

  webinarList.forEach((webinar, index) => {
    if (webinar.title.toLocaleLowerCase().match(search)) {
      filteredWebinars.push(webinar.title);
      addItem(webinar, index);
    }
  });

  // Заглушка
  if (filteredWebinars.length === 0) {
    const non_text = document.createElement("span");
    non_text.textContent = "Не найдено вебинаров!";
    webinars.appendChild(non_text);
  }
});
