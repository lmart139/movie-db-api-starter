function getPopularMovies(){
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=4aca2a53ad2324bed8c0cf646a7612ff&language=en-US&page=1"
    let PopularMovies= document.getElementById("popular");
    let imgUrl = "https://image.tmdb.org/t/p/w500/"
    const data = null;

    const xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        //console.log(this.responseText);

        let json = JSON.parse(this.responseText);
        console.log(json);
        let html = "";
        for(let i = 0; i < 4; i++){
            html += `
            <figure>
            <img src="${imgUrl}${json.results[i].poster_path}" alt="">
            <figcaption>${json.results[i].title}</figcaption>
            </figure>
            `;
        }
        PopularMovies.innerHTML = html;
      }
    });
    
    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
   // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWNhMmE1M2FkMjMyNGJlZDhjMGNmNjQ2YTc2MTJmZiIsInN1YiI6IjY1YmMxMjE2MmI4YTQzMDE3YjFjM2UxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JKe2NE2vF6W9v1PyvVVHonxfTi9yZStcnTYGUO-b85E');
    
    xhr.send(data);
}

function getBirthYearMovies(e){
    e.preventDefault();
    let year = encodeURI(document.getElementById("userYear"));

        let url = "https://api.themoviedb.org/3/discover/movie?api_key=4aca2a53ad2324bed8c0cf646a7612ff&primary_release_year=${year}&sort_by=revenue.desc&language=en-US&page=1&include_adult=false"
        let birthMovies= document.getElementById("birthYear");
        let imgUrl = "https://image.tmdb.org/t/p/w500/"
        const data = null;
    
        const xhr = new XMLHttpRequest();
        //xhr.withCredentials = true;
        
        xhr.addEventListener('readystatechange', function () {
          if (this.readyState === this.DONE) {
            //console.log(this.responseText);
    
            let json = JSON.parse(this.responseText);
            console.log(json);
            let html = "";
            for(let i = 0; i < 4; i++){
                html += `
                <figure>
                <img src="${imgUrl}${json.results[i].poster_path}" alt="">
                <figcaption>${json.results[i].title}</figcaption>
                </figure>
                `;
            }
            birthMovies.innerHTML = html;
          }
        });
        
        xhr.open('GET', url);
        xhr.setRequestHeader('accept', 'application/json');
       // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWNhMmE1M2FkMjMyNGJlZDhjMGNmNjQ2YTc2MTJmZiIsInN1YiI6IjY1YmMxMjE2MmI4YTQzMDE3YjFjM2UxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JKe2NE2vF6W9v1PyvVVHonxfTi9yZStcnTYGUO-b85E');
        
        xhr.send(data);
    }

window.addEventListener("load", function(){
	getPopularMovies();
	document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});