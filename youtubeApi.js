fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCyy1fXntMJGVc6GKmup4sgQ&maxResults=4&order=date&q=CommonCelestials&key=AIzaSyCSNFtTeZSLMcy_yTjY6W8EvJMto7yImXs")
.then ((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += 
       ' <img src="${video.snippet.thumbnails.medium.url}"> '
        
    }
})