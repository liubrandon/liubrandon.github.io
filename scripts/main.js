var shareButton = document.getElementById("shareButton");
var postRef = firebase.database().ref("posts/" + shareButton.className);
postRef.on('value', function(snapshot){
  shareButton.querySelector("b").textContent = snapshot.val().shareCount;
});

function incrementShareCount(pagedate) {
  var postRef = firebase.database().ref("posts/" + pagedate);
  postRef.transaction(function(post) {
    if(post == null) {
      return {shareCount: 0};
    } else {
      post.shareCount++;
      return post;
    }
  });
}

// Share function and reading indicator code from Malte Ubl https://www.industrialempathy.com/js/main.js?hash=d0a56587b8
function tweet(url) {
  open(
    "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url),
    "_blank"
  );
}

function share(anchor) {
  var url = anchor.getAttribute("href");
  event.preventDefault();
  if (navigator.share) {
    navigator.share({
      url: url,
    });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
    message("Article URL copied to clipboard.");
  } else {
    tweet(url);
  }
}

function clap(button) {
  button.querySelector("b").textContent =
    parseInt(button.querySelector("b").textContent, 10) + 1;
  incrementShareCount(button.className);
  share(button);
}

function message(msg) {
  var dialog = document.getElementById("message");
  dialog.textContent = msg;
  dialog.setAttribute("open", "");
  setTimeout(function () {
    dialog.removeAttribute("open");
  }, 3000);
}

if (window.ResizeObserver) {
  var progress = document.getElementById("reading-progress");

  var timeOfLastScroll = 0;
  var requestedAniFrame = false;
  function scroll() {
    if (!requestedAniFrame) {
      requestAnimationFrame(updateProgress);
      requestedAniFrame = true;
    }
    timeOfLastScroll = Date.now();
  }
  addEventListener("scroll", scroll);

  var winHeight = 1000;
  var bottom = 10000;
  function updateProgress() {
    requestedAniFrame = false;
    var percent = Math.min(
      (document.scrollingElement.scrollTop / (bottom - winHeight)) * 100,
      100
    );
    progress.style.transform = `translate(-${100 - percent}vw, 0)`;
    if (Date.now() - timeOfLastScroll < 3000) {
      requestAnimationFrame(updateProgress);
      requestedAniFrame = true;
    }
  }

  new ResizeObserver(() => {
    bottom =
      document.scrollingElement.scrollTop +
      document.querySelector("#comments,footer").getBoundingClientRect().top;
    winHeight = window.innerHeight;
    scroll();
  }).observe(document.body);
}