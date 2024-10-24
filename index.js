const fileInput = document.getElementById('fileInput');

let previewImg = document.createElement("img");
previewImg.classList.add('preview-img');

fileInput.addEventListener('change', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const fileUpload = document.getElementById('file-upload');
    const skinFile = fileInput.files[0];

    if (skinFile) {
        previewImg.src = URL.createObjectURL(skinFile);
        fileUpload.innerHTML = ""
        fileUpload.appendChild(previewImg);
    }
});