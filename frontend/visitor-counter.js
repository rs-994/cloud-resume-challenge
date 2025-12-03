// visitor-counter.js

// Configuration
const API_URL = 'https://pn1dnt0h4j.execute-api.us-east-1.amazonaws.com/prod/visitor';

// Function to fetch and update visitor count
async function updateVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    
    try {
        // Show loading state
        countElement.textContent = 'Loading...';
        
        // Fetch count from API
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update the display with formatting (adds commas for large numbers)
        countElement.textContent = data.count.toLocaleString();
        
        // Optional: Log for debugging
        console.log('Visitor count updated:', data.count);
        
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        countElement.textContent = 'Unavailable';
        countElement.style.color = '#dc3545'; // Red color for error
    }
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateVisitorCount);
} else {
    // DOM is already loaded
    updateVisitorCount();
}