let selectedRating = 5;  // Default rating

// Function to handle the star click event
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        selectedRating = this.getAttribute('data-value');
        updateStarRating(selectedRating);
    });
});

// Function to update the star display after a selection
function updateStarRating(rating) {
    document.querySelectorAll('.star').forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value;

    // Validate review input
    if (reviewText.trim() === "") {
        alert("Please write a review before submitting.");
        return;
    }

    // Create a new review card
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    // Create stars based on the rating
    const stars = document.createElement('div');
    stars.className = 'review-stars';
    stars.innerHTML = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);

    // Create the review text element
    const reviewContent = document.createElement('p');
    reviewContent.className = 'review-text';
    reviewContent.textContent = reviewText;

    // Append stars and review text to the card
    reviewCard.appendChild(stars);
    reviewCard.appendChild(reviewContent);

    // Append the review card to the reviews container
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.appendChild(reviewCard);

    // Clear the form
    document.getElementById('reviewText').value = '';
    updateStarRating(5);  // Reset star rating to default
}
