const webinarList = [
  {
    title: "Личностные границы",
    videoUrl: "https://www.youtube.com/embed/nE9IU_BEGpQ",
    description:
      "Тема денег волнует независимо от пола, социального статуса или местожительства. Всем хочется больше зарабатывать и более разумно расходовать свой доход. Здесь можно выбирать темы для вебинаров об экономии семейного бюджета, торговли на Forex и т. д.",
    comments: [],
  },
  {
    title: "Маркетинг",
    videoUrl: "https://www.youtube.com/embed/F6b0VFltDAs",
    description:
      "Сейчас бизнес массово переходит в интернет. В связи с этим у владельцев и маркетологов возникает множество вопросов — какие способы продвижения лучше использовать, как работает интернет-реклама, как повысить эффективность сайта и многое другое. Здесь, скорее всего, проблем с контентом не будет. Вот несколько идей для начала: история успеха в онлайн-бизнесе, реклама в Google, поисковая оптимизация, развитие бренда в соцсетях.",
    comments: [],
  },
];

var url = window.location.href;
var filename = url.split("#")[0].split("?")[0].split("/").pop();

if (filename === "webinar1.html") {
  const firstWebinarTitle = document.getElementById("firstWebinarTitle");
  const firstWebinarVideo = document.getElementById("firstWebinarVideo");
  const firstWebinarDescription = document.getElementById(
    "firstWebinarDescription"
  );

  if (webinarList.length > 0) {
    const firstWebinar = webinarList[0];
    firstWebinarTitle.textContent = firstWebinar.title;
    firstWebinarVideo.src = firstWebinar.videoUrl;
    firstWebinarDescription.textContent = firstWebinar.description;
  }
} else if (filename === "webinar2.html") {
  const secondWebinarTitle = document.getElementById("secondWebinarTitle");
  const secondWebinarVideo = document.getElementById("secondWebinarVideo");
  const secondWebinarDescription = document.getElementById(
    "secondWebinarDescription"
  );

  if (webinarList.length > 0) {
    const firstWebinar = webinarList[1];
    secondWebinarTitle.textContent = firstWebinar.title;
    secondWebinarVideo.src = firstWebinar.videoUrl;
    secondWebinarDescription.textContent = firstWebinar.description;
  }
}

// Комментарии
function addComment(commentText, pageKey) {
  const commentList = document.getElementById("commentList");
  const li = document.createElement("li");
  li.textContent = commentText;
  commentList.appendChild(li);

  const commentsKey = `comments_${pageKey}`;
  const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
  comments.push(commentText);
  localStorage.setItem(commentsKey, JSON.stringify(comments));
}

function loadComments(pageKey) {
  const commentsKey = `comments_${pageKey}`;
  const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
  const commentList = document.getElementById("commentList");

  comments.forEach(function (commentText) {
    const li = document.createElement("li");
    li.textContent = commentText;
    commentList.appendChild(li);
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
