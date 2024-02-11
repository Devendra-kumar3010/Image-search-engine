function searchImages() {
    const query = document.getElementById("searchInput").value;
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=XcAP2T2JKepZWxbHk2IYOs6TVeB_m367PsFnD3y4Uws`;;
  
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
      const imgElement = document.createElement("img");
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description;
      gallery.appendChild(imgElement);
    });
  }
  