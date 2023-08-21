fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens")
  .then(response => response.json())
  .then(result => {
    console.log(result);

    const postId = getPagePostId(); 

    if (result[postId - 1]) {
      document.querySelector(`#card-title${postId}`).innerHTML = result[postId - 1].title;
      document.querySelector(`#card-text${postId}`).innerHTML = result[postId - 1].description;
      let imgPost = `https://api-rest-post-diegocandido.herokuapp.com${result[postId - 1].thumbImage}`;
      document.querySelector(`#img-post${postId}`).src = imgPost;
    }

    return result;
  });

function getPagePostId() {

  const pageUrl = window.location.href;
  const postId = pageUrl.match(/post(\d+)\.html/);
  if (postId && postId[1]) {
    return parseInt(postId[1]);
  }
  return 0; 
}
