// Multi-Tools Hub - Main JavaScript File

// Tools database
const toolsDatabase = [
    // Image Tools
    { id: 1, name: "Image to PNG Converter", description: "Convert any image format to PNG", category: "image-tools", icon: "fas fa-image", file: "tools/image-tools/image-to-png.html" },
    { id: 2, name: "Image to JPG Converter", description: "Convert any image format to JPG", category: "image-tools", icon: "fas fa-file-image", file: "tools/image-tools/image-to-jpg.html" },
    { id: 3, name: "Image Resizer", description: "Resize images while maintaining quality", category: "image-tools", icon: "fas fa-expand-arrows-alt", file: "tools/image-tools/image-resizer.html" },
    { id: 4, name: "Image Compressor", description: "Compress images to reduce file size", category: "image-tools", icon: "fas fa-compress", file: "tools/image-tools/image-compressor.html" },
    { id: 5, name: "Image Cropper", description: "Crop images to desired dimensions", category: "image-tools", icon: "fas fa-crop", file: "tools/image-tools/image-cropper.html" },
    { id: 6, name: "Convert Image to Base64", description: "Convert images to Base64 string", category: "image-tools", icon: "fas fa-code", file: "tools/image-tools/image-to-base64.html" },
    { id: 7, name: "Convert WebP to PNG", description: "Convert WebP images to PNG format", category: "image-tools", icon: "fas fa-exchange-alt", file: "tools/image-tools/webp-to-png.html" },
    { id: 8, name: "GIF Maker", description: "Create animated GIFs from images", category: "image-tools", icon: "fas fa-play-circle", file: "tools/image-tools/gif-maker.html" },
    { id: 9, name: "QR Code Generator", description: "Generate QR codes for any text or URL", category: "image-tools", icon: "fas fa-qrcode", file: "tools/image-tools/qr-code-generator.html" },
    { id: 10, name: "Screenshot to PDF Converter", description: "Convert screenshots to PDF documents", category: "image-tools", icon: "fas fa-file-pdf", file: "tools/image-tools/screenshot-to-pdf.html" },

    // SEO Tools
    { id: 11, name: "Meta Tag Generator", description: "Generate meta tags for your website", category: "seo-tools", icon: "fas fa-tags", file: "tools/seo-tools/meta-tag-generator.html" },
    { id: 12, name: "Keyword Density Checker", description: "Analyze keyword density in your content", category: "seo-tools", icon: "fas fa-search", file: "tools/seo-tools/keyword-density-checker.html" },
    { id: 13, name: "Sitemap Generator", description: "Generate XML sitemaps for your website", category: "seo-tools", icon: "fas fa-sitemap", file: "tools/seo-tools/sitemap-generator.html" },
    { id: 14, name: "Robots.txt Generator", description: "Generate robots.txt file for your site", category: "seo-tools", icon: "fas fa-robot", file: "tools/seo-tools/robots-txt-generator.html" },
    { id: 15, name: "Google Index Checker", description: "Check if your page is indexed by Google", category: "seo-tools", icon: "fab fa-google", file: "tools/seo-tools/google-index-checker.html" },
    { id: 16, name: "Domain Authority Checker", description: "Check domain authority and backlinks", category: "seo-tools", icon: "fas fa-chart-line", file: "tools/seo-tools/domain-authority-checker.html" },
    { id: 17, name: "Backlink Checker", description: "Check backlinks for any website", category: "seo-tools", icon: "fas fa-link", file: "tools/seo-tools/backlink-checker.html" },
    { id: 18, name: "Page Speed Checker", description: "Check website loading speed", category: "seo-tools", icon: "fas fa-tachometer-alt", file: "tools/seo-tools/page-speed-checker.html" },
    { id: 19, name: "XML Sitemap Validator", description: "Validate your XML sitemap", category: "seo-tools", icon: "fas fa-check-circle", file: "tools/seo-tools/xml-sitemap-validator.html" },
    { id: 20, name: "Mobile-Friendly Test", description: "Test if your site is mobile-friendly", category: "seo-tools", icon: "fas fa-mobile-alt", file: "tools/seo-tools/mobile-friendly-test.html" },

    // Text Tools
    { id: 21, name: "Word Counter", description: "Count words, characters, and paragraphs", category: "text-tools", icon: "fas fa-font", file: "tools/text-tools/word-counter.html" },
    { id: 22, name: "Character Counter", description: "Count characters with and without spaces", category: "text-tools", icon: "fas fa-text-width", file: "tools/text-tools/character-counter.html" },
    { id: 23, name: "Case Converter", description: "Convert text between different cases", category: "text-tools", icon: "fas fa-text-height", file: "tools/text-tools/case-converter.html" },
    { id: 24, name: "Plagiarism Checker", description: "Check text for plagiarism", category: "text-tools", icon: "fas fa-search", file: "tools/text-tools/plagiarism-checker.html" },
    { id: 25, name: "Grammar Checker", description: "Check and correct grammar errors", category: "text-tools", icon: "fas fa-spell-check", file: "tools/text-tools/grammar-checker.html" },
    { id: 26, name: "Text-to-Speech", description: "Convert text to speech audio", category: "text-tools", icon: "fas fa-volume-up", file: "tools/text-tools/text-to-speech.html" },
    { id: 27, name: "Speech-to-Text", description: "Convert speech to text", category: "text-tools", icon: "fas fa-microphone", file: "tools/text-tools/speech-to-text.html" },
    { id: 28, name: "URL Encoder & Decoder", description: "Encode and decode URLs", category: "text-tools", icon: "fas fa-link", file: "tools/text-tools/url-encoder-decoder.html" },
    { id: 29, name: "Fancy Text Generator", description: "Generate fancy and stylized text", category: "text-tools", icon: "fas fa-magic", file: "tools/text-tools/fancy-text-generator.html" },
    { id: 30, name: "Random Text Generator", description: "Generate random text and Lorem Ipsum", category: "text-tools", icon: "fas fa-random", file: "tools/text-tools/random-text-generator.html" },

    // Developer Tools
    { id: 31, name: "JSON Formatter", description: "Format and validate JSON data", category: "developer-tools", icon: "fas fa-code", file: "tools/developer-tools/json-formatter.html" },
    { id: 32, name: "HTML to Markdown Converter", description: "Convert HTML to Markdown format", category: "developer-tools", icon: "fab fa-markdown", file: "tools/developer-tools/html-to-markdown.html" },
    { id: 33, name: "CSS Minifier", description: "Minify CSS code to reduce file size", category: "developer-tools", icon: "fab fa-css3-alt", file: "tools/developer-tools/css-minifier.html" },
    { id: 34, name: "JavaScript Minifier", description: "Minify JavaScript code", category: "developer-tools", icon: "fab fa-js-square", file: "tools/developer-tools/javascript-minifier.html" },
    { id: 35, name: "SQL Formatter", description: "Format and beautify SQL queries", category: "developer-tools", icon: "fas fa-database", file: "tools/developer-tools/sql-formatter.html" },
    { id: 36, name: "HTACCESS Redirect Generator", description: "Generate .htaccess redirect rules", category: "developer-tools", icon: "fas fa-redo", file: "tools/developer-tools/htaccess-redirect-generator.html" },
    { id: 37, name: "Markdown to HTML Converter", description: "Convert Markdown to HTML", category: "developer-tools", icon: "fab fa-html5", file: "tools/developer-tools/markdown-to-html.html" },
    { id: 38, name: "Color Code Picker", description: "Pick and convert color codes", category: "developer-tools", icon: "fas fa-palette", file: "tools/developer-tools/color-code-picker.html" },
    { id: 39, name: "Base64 Encoder & Decoder", description: "Encode and decode Base64 strings", category: "developer-tools", icon: "fas fa-key", file: "tools/developer-tools/base64-encoder-decoder.html" },
    { id: 40, name: "IP Address Lookup", description: "Lookup IP address information", category: "developer-tools", icon: "fas fa-globe", file: "tools/developer-tools/ip-address-lookup.html" },

    // Math & Calculators
    { id: 41, name: "Percentage Calculator", description: "Calculate percentages easily", category: "math-calculators", icon: "fas fa-percentage", file: "tools/math-calculators/percentage-calculator.html" },
    { id: 42, name: "Age Calculator", description: "Calculate age from birth date", category: "math-calculators", icon: "fas fa-birthday-cake", file: "tools/math-calculators/age-calculator.html" },
    { id: 43, name: "BMI Calculator", description: "Calculate Body Mass Index", category: "math-calculators", icon: "fas fa-weight", file: "tools/math-calculators/bmi-calculator.html" },
    { id: 44, name: "Loan EMI Calculator", description: "Calculate loan EMI payments", category: "math-calculators", icon: "fas fa-calculator", file: "tools/math-calculators/loan-emi-calculator.html" },
    { id: 45, name: "Scientific Calculator", description: "Advanced scientific calculator", category: "math-calculators", icon: "fas fa-square-root-alt", file: "tools/math-calculators/scientific-calculator.html" },
    { id: 46, name: "Discount Calculator", description: "Calculate discounts and savings", category: "math-calculators", icon: "fas fa-tag", file: "tools/math-calculators/discount-calculator.html" },
    { id: 47, name: "Currency Converter", description: "Convert between different currencies", category: "math-calculators", icon: "fas fa-dollar-sign", file: "tools/math-calculators/currency-converter.html" },
    { id: 48, name: "Time Zone Converter", description: "Convert time between time zones", category: "math-calculators", icon: "fas fa-clock", file: "tools/math-calculators/time-zone-converter.html" },
    { id: 49, name: "Binary to Decimal Converter", description: "Convert binary to decimal numbers", category: "math-calculators", icon: "fas fa-binary", file: "tools/math-calculators/binary-to-decimal-converter.html" },
    { id: 50, name: "Tip Calculator", description: "Calculate tips for restaurants", category: "math-calculators", icon: "fas fa-utensils", file: "tools/math-calculators/tip-calculator.html" },

    // Unit Converters
    { id: 51, name: "Length Converter", description: "Convert between length units", category: "unit-converters", icon: "fas fa-ruler", file: "tools/unit-converters/length-converter.html" },
    { id: 52, name: "Weight Converter", description: "Convert between weight units", category: "unit-converters", icon: "fas fa-weight-hanging", file: "tools/unit-converters/weight-converter.html" },
    { id: 53, name: "Speed Converter", description: "Convert between speed units", category: "unit-converters", icon: "fas fa-tachometer-alt", file: "tools/unit-converters/speed-converter.html" },
    { id: 54, name: "Temperature Converter", description: "Convert between temperature units", category: "unit-converters", icon: "fas fa-thermometer-half", file: "tools/unit-converters/temperature-converter.html" },
    { id: 55, name: "Volume Converter", description: "Convert between volume units", category: "unit-converters", icon: "fas fa-cube", file: "tools/unit-converters/volume-converter.html" },
    { id: 56, name: "Data Storage Converter", description: "Convert between data storage units", category: "unit-converters", icon: "fas fa-hdd", file: "tools/unit-converters/data-storage-converter.html" },
    { id: 57, name: "Energy Converter", description: "Convert between energy units", category: "unit-converters", icon: "fas fa-bolt", file: "tools/unit-converters/energy-converter.html" },
    { id: 58, name: "Pressure Converter", description: "Convert between pressure units", category: "unit-converters", icon: "fas fa-compress-arrows-alt", file: "tools/unit-converters/pressure-converter.html" },
    { id: 59, name: "Fuel Efficiency Converter", description: "Convert fuel efficiency units", category: "unit-converters", icon: "fas fa-car", file: "tools/unit-converters/fuel-efficiency-converter.html" },
    { id: 60, name: "Angle Converter", description: "Convert between angle units", category: "unit-converters", icon: "fas fa-angle-double-right", file: "tools/unit-converters/angle-converter.html" },

    // Security & Encryption Tools
    { id: 61, name: "MD5 Hash Generator", description: "Generate MD5 hash for any text", category: "security-tools", icon: "fas fa-shield-alt", file: "tools/security-tools/md5-hash-generator.html" },
    { id: 62, name: "SHA256 Hash Generator", description: "Generate SHA256 hash for any text", category: "security-tools", icon: "fas fa-lock", file: "tools/security-tools/sha256-hash-generator.html" },
    { id: 63, name: "Password Generator", description: "Generate secure passwords", category: "security-tools", icon: "fas fa-key", file: "tools/security-tools/password-generator.html" },
    { id: 64, name: "Random String Generator", description: "Generate random strings", category: "security-tools", icon: "fas fa-random", file: "tools/security-tools/random-string-generator.html" },
    { id: 65, name: "URL Shortener", description: "Shorten long URLs", category: "security-tools", icon: "fas fa-link", file: "tools/security-tools/url-shortener.html" },
    { id: 66, name: "IP Geolocation Finder", description: "Find location from IP address", category: "security-tools", icon: "fas fa-map-marker-alt", file: "tools/security-tools/ip-geolocation-finder.html" },
    { id: 67, name: "SSL Certificate Checker", description: "Check SSL certificate validity", category: "security-tools", icon: "fas fa-certificate", file: "tools/security-tools/ssl-certificate-checker.html" },
    { id: 68, name: "Whois Lookup", description: "Lookup domain information", category: "security-tools", icon: "fas fa-search", file: "tools/security-tools/whois-lookup.html" },
    { id: 69, name: "HTTP Headers Checker", description: "Check HTTP headers", category: "security-tools", icon: "fas fa-list", file: "tools/security-tools/http-headers-checker.html" },
    { id: 70, name: "Privacy Policy Generator", description: "Generate privacy policy", category: "security-tools", icon: "fas fa-file-contract", file: "tools/security-tools/privacy-policy-generator.html" },

    // Social Media Tools
    { id: 71, name: "YouTube Thumbnail Downloader", description: "Download YouTube video thumbnails", category: "social-media-tools", icon: "fab fa-youtube", file: "tools/social-media-tools/youtube-thumbnail-downloader.html" },
    { id: 72, name: "Instagram Photo Downloader", description: "Download Instagram photos", category: "social-media-tools", icon: "fab fa-instagram", file: "tools/social-media-tools/instagram-photo-downloader.html" },
    { id: 73, name: "Twitter Video Downloader", description: "Download Twitter videos", category: "social-media-tools", icon: "fab fa-twitter", file: "tools/social-media-tools/twitter-video-downloader.html" },
    { id: 74, name: "Facebook Video Downloader", description: "Download Facebook videos", category: "social-media-tools", icon: "fab fa-facebook", file: "tools/social-media-tools/facebook-video-downloader.html" },
    { id: 75, name: "TikTok Video Downloader", description: "Download TikTok videos", category: "social-media-tools", icon: "fab fa-tiktok", file: "tools/social-media-tools/tiktok-video-downloader.html" },
    { id: 76, name: "YouTube Tags Extractor", description: "Extract tags from YouTube videos", category: "social-media-tools", icon: "fas fa-tags", file: "tools/social-media-tools/youtube-tags-extractor.html" },
    { id: 77, name: "Hashtag Generator", description: "Generate hashtags for social media", category: "social-media-tools", icon: "fas fa-hashtag", file: "tools/social-media-tools/hashtag-generator.html" },
    { id: 78, name: "Social Media Post Generator", description: "Generate social media posts", category: "social-media-tools", icon: "fas fa-edit", file: "tools/social-media-tools/social-media-post-generator.html" },
    { id: 79, name: "Emoji Keyboard", description: "Copy and use emojis", category: "social-media-tools", icon: "fas fa-smile", file: "tools/social-media-tools/emoji-keyboard.html" },
    { id: 80, name: "Twitter Character Counter", description: "Count characters for Twitter posts", category: "social-media-tools", icon: "fas fa-twitter", file: "tools/social-media-tools/twitter-character-counter.html" },

    // Miscellaneous Tools
    { id: 81, name: "Barcode Generator", description: "Generate barcodes for products", category: "misc-tools", icon: "fas fa-barcode", file: "tools/misc-tools/barcode-generator.html" },
    { id: 82, name: "Meme Generator", description: "Create memes with custom text", category: "misc-tools", icon: "fas fa-laugh", file: "tools/misc-tools/meme-generator.html" },
    { id: 83, name: "Resume Builder", description: "Build professional resumes", category: "misc-tools", icon: "fas fa-file-alt", file: "tools/misc-tools/resume-builder.html" },
    { id: 84, name: "Invoice Generator", description: "Generate professional invoices", category: "misc-tools", icon: "fas fa-receipt", file: "tools/misc-tools/invoice-generator.html" },
    { id: 85, name: "Business Name Generator", description: "Generate business names", category: "misc-tools", icon: "fas fa-building", file: "tools/misc-tools/business-name-generator.html" },
    { id: 86, name: "Lottery Number Generator", description: "Generate lottery numbers", category: "misc-tools", icon: "fas fa-dice", file: "tools/misc-tools/lottery-number-generator.html" },
    { id: 87, name: "Flip a Coin Simulator", description: "Simulate coin flipping", category: "misc-tools", icon: "fas fa-coins", file: "tools/misc-tools/flip-coin-simulator.html" },
    { id: 88, name: "Random Number Generator", description: "Generate random numbers", category: "misc-tools", icon: "fas fa-random", file: "tools/misc-tools/random-number-generator.html" },
    { id: 89, name: "Dice Roller Simulator", description: "Simulate dice rolling", category: "misc-tools", icon: "fas fa-dice-d6", file: "tools/misc-tools/dice-roller-simulator.html" },
    { id: 90, name: "Internet Speed Test", description: "Test your internet speed", category: "misc-tools", icon: "fas fa-wifi", file: "tools/misc-tools/internet-speed-test.html" },
    { id: 91, name: "Daily Planner Creator", description: "Create daily planners", category: "misc-tools", icon: "fas fa-calendar-day", file: "tools/misc-tools/daily-planner-creator.html" },
    { id: 92, name: "Wedding Invitation Generator", description: "Generate wedding invitations", category: "misc-tools", icon: "fas fa-heart", file: "tools/misc-tools/wedding-invitation-generator.html" },
    { id: 93, name: "Story Plot Generator", description: "Generate story plots", category: "misc-tools", icon: "fas fa-book", file: "tools/misc-tools/story-plot-generator.html" },
    { id: 94, name: "E-book Creator", description: "Create e-books", category: "misc-tools", icon: "fas fa-book-open", file: "tools/misc-tools/ebook-creator.html" },
    { id: 95, name: "AI Chatbot Demo", description: "Demo AI chatbot", category: "misc-tools", icon: "fas fa-robot", file: "tools/misc-tools/ai-chatbot-demo.html" },
    { id: 96, name: "IP Address Tracker", description: "Track IP addresses", category: "misc-tools", icon: "fas fa-map", file: "tools/misc-tools/ip-address-tracker.html" },
    { id: 97, name: "Fake Address Generator", description: "Generate fake addresses", category: "misc-tools", icon: "fas fa-map-marker-alt", file: "tools/misc-tools/fake-address-generator.html" },
    { id: 98, name: "Calculator for Electric Bills", description: "Calculate electric bills", category: "misc-tools", icon: "fas fa-bolt", file: "tools/misc-tools/electric-bill-calculator.html" },
    { id: 99, name: "Leap Year Checker", description: "Check if a year is a leap year", category: "misc-tools", icon: "fas fa-calendar-check", file: "tools/misc-tools/leap-year-checker.html" },
    { id: 100, name: "Name to Numerology Calculator", description: "Calculate numerology from names", category: "misc-tools", icon: "fas fa-star", file: "tools/misc-tools/name-numerology-calculator.html" }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    initializeSearch();
    loadTools();
    initializeToolCards();
});

// Load header and footer components
async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('components/header.html');
        const headerHTML = await headerResponse.text();
        document.getElementById('header').innerHTML = headerHTML;

        // Load footer
        const footerResponse = await fetch('components/footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer').innerHTML = footerHTML;

        // Initialize header search
        initializeHeaderSearch();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Initialize header search
function initializeHeaderSearch() {
    const headerSearchInput = document.getElementById('headerSearch');
    const headerSearchBtn = document.getElementById('headerSearchBtn');

    if (headerSearchInput && headerSearchBtn) {
        headerSearchBtn.addEventListener('click', function() {
            const query = headerSearchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });

        headerSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = headerSearchInput.value.trim();
                if (query) {
                    performSearch(query);
                }
            }
        });
    }
}

// Perform search
function performSearch(query = null) {
    const searchInput = query ? null : document.getElementById('searchInput');
    const searchTerm = query || (searchInput ? searchInput.value.trim() : '');
    
    if (!searchTerm) return;

    const filteredTools = toolsDatabase.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    displayTools(filteredTools);
    
    // Scroll to tools section
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
}

// Load all tools
function loadTools() {
    displayTools(toolsDatabase);
}

// Display tools in grid
function displayTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;

    toolsGrid.innerHTML = '';

    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No tools found</h4>
                <p class="text-muted">Try searching with different keywords</p>
            </div>
        `;
        return;
    }

    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// Create individual tool card
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';

    col.innerHTML = `
        <div class="tool-card h-100">
            <div class="card-body d-flex flex-column">
                <div class="card-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <span class="category-badge ${tool.category}">${getCategoryName(tool.category)}</span>
                <h5 class="card-title">${tool.name}</h5>
                <p class="card-text">${tool.description}</p>
                <div class="mt-auto">
                    <a href="${tool.file}" class="btn btn-primary w-100">Use Tool</a>
                </div>
            </div>
        </div>
    `;

    return col;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'image-tools': 'Image Tools',
        'seo-tools': 'SEO Tools',
        'text-tools': 'Text Tools',
        'developer-tools': 'Developer Tools',
        'math-calculators': 'Math & Calculators',
        'unit-converters': 'Unit Converters',
        'security-tools': 'Security Tools',
        'social-media-tools': 'Social Media Tools',
        'misc-tools': 'Miscellaneous'
    };
    return categoryNames[category] || category;
}

// Initialize tool cards with animations
function initializeToolCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.tool-card').forEach(card => {
        observer.observe(card);
    });
}

// Utility functions for tool pages
function showResult(elementId, content, isSuccess = true) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
        element.className = `result-box ${isSuccess ? 'success' : 'error'}`;
        element.style.display = 'block';
    }
}

function hideResult(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export functions for use in tool pages
window.MultiToolsHub = {
    showResult,
    hideResult,
    copyToClipboard,
    showNotification
};

// Make functions globally available
window.showNotification = showNotification;
window.showResult = showResult;
window.hideResult = hideResult;
window.copyToClipboard = copyToClipboard;
