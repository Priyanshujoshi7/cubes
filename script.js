document.addEventListener('DOMContentLoaded', () => {
    const imageCards = Array.from(document.querySelectorAll('.image-card'));
    const totalImages = imageCards.length;

    // Function to shuffle an array
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle
        while (currentIndex !== 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Swap it with the current element
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    // Function to update image display
    const updateImages = () => {
        // Shuffle the images
        const shuffledImages = shuffleArray(imageCards.slice());

        // Display the shuffled images
        shuffledImages.forEach((card, index) => {
            card.style.display = 'block';
            card.style.order = index; // Use order to keep the shuffle effect
        });

        // Hide images after 10 seconds
        setTimeout(() => {
            imageCards.forEach(card => card.style.display = 'none');
        }, 10000); // 10000 milliseconds = 10 seconds
    };

    // Initial setup
    updateImages();

    // Change images every 10 seconds
    setInterval(updateImages, 10000); // 10000 milliseconds = 10 seconds
});
