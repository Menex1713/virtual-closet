const fileUpload = document.getElementById("file-upload");
const clearButton = document.getElementById("clear-file");
const imagePreview = document.getElementById("image-preview");

clearButton.addEventListener("click", function() {
  fileUpload.value = "";
  imagePreview.innerHTML = "";
});

fileUpload.addEventListener("change", function() {
  const file = fileUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      imagePreview.innerHTML = '<img src="' + reader.result + '" alt="">';
    };
  } else {
    imagePreview.innerHTML = "";
  }
});
