// Pexxels API to call for pictures 
const apiKey = '563492ad6f917000010000012267cfab9210494795b49e30ef07c8bd';

class photoImages {
    constructor() {
        this.apiKey = "563492ad6f917000010000012267cfab9210494795b49e30ef07c8bd";
        this.imagesDiv = document.querySelector('.images');
        this.Search = document.querySelector('.header form');
        this.Load = document.querySelector('.Load');
        this.eventHandle();
    }
    eventHandle() {
        document.addEventListener('DOMContentLoaded',()=> {
            this.getImg();
        });
        this.Search.addEventListener('submit', (e)=>{
            this.getSearch(e);

        });
    }
    async getImg() {
        const URL = 'https://api.pexels.com/v1/curated?per_page=12';
        const data = await this.fetchImages(URL);
        this.GenerateHTML(data.photos);
        console.log(data)
    }
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
    async getSearch(e) {
        e.preventDefault();
        this.imagesDiv.innerHTML = ''
        const searchValue = e.target.querySelector('input').value;
        const URL = await `https://api.pexels.com/v1/search?query=${searchValue}&per_page=12`
        const data = await this.fetchImages(URL);
        this.GenerateHTML(data.photos)
        e.target.reset();
    }
}

const images = new photoImages;

// Added Calander API Here