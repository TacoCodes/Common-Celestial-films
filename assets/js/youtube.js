fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCyy1fXntMJGVc6GKmup4sgQ&maxResults=4&order=date&q=CommonCelestials&key=AIzaSyCSNFtTeZSLMcy_yTjY6W8EvJMto7yImXs")
.then((result)=>{
    // Return the result as JSON
    return result.json()
    
}).then((data)=>{
    // Log the JSON data to the console
    console.log(data)
    // Store the list of videos in a variable
    let videos = data.items
     // Select the element with the class "videos"
     let youtubeContainer = document.querySelector(".videos");

     // Iterate over the list of videos

     for(video of videos) {
        // Get the videoId for this video
       let videoId = video.id.videoId;
       // Create an iframe element for the video player
       let player = document.createElement("iframe");
       // Set the src attribute of the player to the YouTube player URL for this videos
       player.src = `https://www.youtube.com/embed/${videoId}`;
       // Append the player to the container element
       youtubeContainer.appendChild(player);
     }

});