// API key for accessing Pexels API
const apiKey = '563492ad6f917000010000012267cfab9210494795b49e30ef07c8bd';

class photoImages {
    constructor() {
        // API key for accessing Pexels API
        this.apiKey = "563492ad6f917000010000012267cfab9210494795b49e30ef07c8bd";
        // DOM element to display the images
        this.imagesDiv = document.querySelector('.images');
        // DOM element for the search form
        this.Search = document.querySelector('.header form');
        // Add event listeners
        this.eventHandle();
    }
    eventHandle() {
        // Fetch and display images when the DOM is loaded
        document.addEventListener('DOMContentLoaded',()=> {
            this.getImg();
        });
        // Fetch and display images based on search input
        this.Search.addEventListener('submit', (event)=>{
            this.getSearch(event);

        });
    }
    // Fetch and display curated images from Pexels API
    async getImg() {
        const URL = 'https://api.pexels.com/v1/curated?per_page=12';
        const data = await this.fetchImages(URL);
        this.GenerateHTML(data.photos);
        console.log(data)
    }

    // Fetch images from Pexels API using the API key and authorization header
    async fetchImages(URL) {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.apiKey
            }
        });
        const data = await response.json();
        return data;
    }

    // Generate HTML elements to display the photos and their details
    GenerateHTML(photos) {
        photos.forEach(photo=> {
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
            <a href='#'>
              <img src="${photo.src.medium}">
              <h3>${photo.photographer}</h3>
            </a>
            `;
            this.imagesDiv.appendChild(item)
        });

    }

    // Fetch and display images based on search input
    async getSearch(event) {
        // Prevent the default submit action
        event.preventDefault();
        // Clear the previous search results
        this.imagesDiv.innerHTML = ''
        // Get the search input value
        const searchValue = event.target.querySelector('input').value;
        // Construct the API URL with the search query
        const URL = await `https://api.pexels.com/v1/search?query=${searchValue}&per_page=12`
        // Fetch and display the search results
        const data = await this.fetchImages(URL);
        this.GenerateHTML(data.photos)
        // Reset the search form
        event.target.reset();
    }
}

// Create a new instance of the photoImages class
const images = new photoImages;

// Added Calander API Here