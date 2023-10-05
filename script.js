function displayFormData(title, content, imageSrc, videoSrc) {
  var dataSection = document.getElementById("dataSection");

  if (dataSection) {
    var newData =
      "<div class='card'>" +
      "<div class='card-header'>" +
      "<h3 class='card-title'><b>Title:</b>" +
      title +
      "</h3>" +
      "</div>" +
      "<div class='card-body'>" +
      "<p><b>Content: </b>" +
      content +
      "</p>";

    if (imageSrc) {
      newData += "<p><b>Image:</b></p>";
      newData +=
        "<div class='card-body-image'>" +
        "<img class='preview' src='" +
        imageSrc +
        "' alt='Selected Image'>" +
        "</div>";
    }

    if (videoSrc) {
      newData += "<p><b>Video:</b></p>";
      newData +=
        "<div class='card-body-video'>" +
        "<video class='video-preview' src='" +
        videoSrc +
        "' controls autoplay></video>" +
        "</div>";
    }

    newData += "</div></div>";

    dataSection.innerHTML += newData;
  }
}

function submitForm() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var imageInput = document.getElementById("image");
  var videoInput = document.getElementById("video");

  var image = imageInput ? imageInput.files[0] : null;
  var video = videoInput ? videoInput.files[0] : null;

  displayFormData(
    title,
    content,
    image ? URL.createObjectURL(image) : null,
    video ? URL.createObjectURL(video) : null
  );

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  if (imageInput) {
    imageInput.value = "";
  }
  if (videoInput) {
    videoInput.value = "";
  }
}
