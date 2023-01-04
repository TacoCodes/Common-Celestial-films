// Our channel API Key
const API_KEY = "AIzaSyCSNFtTeZSLMcy_yTjY6W8EvJMto7yImXs";

// The ID of Our channel 
const CHANNEL_ID = "UCyy1fXntMJGVc6GKmup4sgQ";

// Make a request to the YouTube Data API to get a list of videos from our channel
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Get the list of videos
    let videos = data.items;
    // Select the element with the class "videos"
    let youtubeContainer = document.querySelector(".videos");
    // Iterate over the list of videos
    for (let video of videos) {
      // Get the videoId for this video
      let videoId = video.id.videoId;
      // Create an iframe element for the video player
      let player = document.createElement("iframe");
      // Set the src attribute of the player to the YouTube player URL for this videos
      player.src = `https://www.youtube.com/embed/${videoId}`;
      // Set the width and height of the player
      player.width = "640";
      player.height = "360";
      // Allow the player to be opened in full screen
      player.allowFullscreen = true;
      player.frameborder = 0;
      // Append the player to the container element
      youtubeContainer.appendChild(player);
    }
  });
