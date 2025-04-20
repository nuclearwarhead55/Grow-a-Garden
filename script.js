document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed. Initializing background script.");

    const backgroundImages = [
        'Images/Background.png',
        'Images/Background1.png',
        'Images/Background2.png',
        'Images/Background3.png'
    ];
    console.log("Available background images:", backgroundImages);

    if (backgroundImages.length === 0) {
        console.error("No background images listed in the script!");
        return; // Stop execution if no images are available
    }

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    console.log(`Random index selected: ${randomIndex}, Image: ${selectedImage}`);

    // Add a random query string for cache busting
    const cacheBustingUrl = `${selectedImage}?t=${new Date().getTime()}`;
    console.log(`Applying background URL (with cache busting): ${cacheBustingUrl}`);

    const container = document.querySelector('.container');
    
    if (container) {
        try {
            container.style.backgroundImage = `url('${cacheBustingUrl}')`;
            console.log("Successfully applied background image style to .container element.");
        } catch (error) {
            console.error("Error applying background image style:", error);
        }
    } else {
        console.error('CRITICAL: Could not find the .container element in the HTML!');
    }
}); 