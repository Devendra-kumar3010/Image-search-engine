function searchImages() {
    const query = document.getElementById("searchInput").value;
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=XcAP2T2JKepZWxbHk2IYOs6TVeB_m367PsFnD3y4Uws`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayImages(data.results);
      })
      .catch(error => console.log(error));
  }
  
  function displayImages(images) {
    const gallery = document.getElementById("imageGallery");
    gallery.innerHTML = "";
  
    images.forEach(image => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("imageContainer");
  
      const imgElement = document.createElement("img");
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description;
  
      const downloadButton = document.createElement("a");
      downloadButton.href = image.urls.full;
      downloadButton.download = "image";
      downloadButton.innerText = "Download";
      downloadButton.classList.add("downloadButton");
      
      // Add event listener for download button
      downloadButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up and triggering other event listeners
        event.preventDefault(); // Prevent the default action (navigating to the URL)
        downloadImage(image.urls.full);
      });
  
      imageContainer.appendChild(imgElement);
      imageContainer.appendChild(downloadButton);
  
      gallery.appendChild(imageContainer);
    });
  }
  
  function downloadImage(url) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.jpg');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error(error));
  }
  
