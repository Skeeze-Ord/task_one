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

var url = window.location.href;
var filename = url.split("#")[0].split("?")[0].split("/").pop();

for (let i = 0; i < webinarList.length; i++) {
  if (filename === `webinar${i + 1}.html`) {
    const webinarTitle = document.getElementById("webinarTitle");
    const webinarVideo = document.getElementById("webinarVideo");
    const webinarDescription = document.getElementById("webinarDescription");

    const webinar = webinarList[i];
    webinarTitle.textContent = webinar.title;
    webinarVideo.src = webinar.videoUrl;
    webinarDescription.textContent = webinar.description;
  }
}

// Комментарии
const addItem = (commentText) => {
  const commentList = document.getElementById("commentList");
  const li = document.createElement("li");
  li.textContent = commentText;
  commentList.appendChild(li);
};

function addComment(commentText, pageKey) {
  addItem(commentText);

  const commentsKey = `comments_${pageKey}`;
  const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
  comments.push(commentText);
  localStorage.setItem(commentsKey, JSON.stringify(comments));
}

function loadComments(pageKey) {
  const commentsKey = `comments_${pageKey}`;
  const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];

  comments.forEach(function (commentText) {
    addItem(commentText);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const pageKey = filename;
  loadComments(pageKey);

  const commentInput = document.getElementById("commentInput");
  const addCommentButton = document.getElementById("addCommentButton");

  addCommentButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      addComment(commentText, pageKey);
      commentInput.value = "";
    }
  });
});
