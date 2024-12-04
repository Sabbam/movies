// Function to change the YouTube link and description when a movie thumbnail is clicked
function playVideo(movieId) {
    let videoUrl = '';
    let description = '';

    // Set video URL and description based on the clicked movie
    switch(movieId) {
        case 'movie1':
            videoUrl = 'https://www.youtube.com/watch?v=MOVIE1_ID'; // Replace with actual YouTube video ID
            description = 'This is Movie 1 description.';
            break;
        case 'movie2':
            videoUrl = 'https://www.youtube.com/watch?v=KsuXHM-R-Bs'; // Replace with actual YouTube video ID
            description = 'This is Movie 2 description.';
            break;
        case 'movie3':
            videoUrl = 'https://www.youtube.com/watch?v=MOVIE3_ID'; // Replace with actual YouTube video ID
            description = 'This is Movie 3 description.';
            break;
        default:
            videoUrl = 'https://www.youtube.com/watch?v=DEFAULT_ID'; // Default video
            description = 'Select a movie to watch.';
    }

    // Update the YouTube link and description dynamically
    const movieLink = document.getElementById('movie-link');
    const movieDescription = document.getElementById('movie-description');

    movieLink.href = videoUrl;
    movieLink.innerText = 'Watch this video on YouTube';
    movieDescription.innerText = description;
}
