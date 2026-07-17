document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Hero Slideshow
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000); // Change slide every 3 seconds
    }

    // Phone Number Input
    const phoneInputField = document.getElementById("contactNo");
    if (phoneInputField) {
        window.intlTelInput(phoneInputField, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            initialCountry: "lk", // Sri Lanka by default
            preferredCountries: ["lk", "us", "gb", "au", "in"]
        });
    }

    // Form Submission and Popup Handling
    const bookingForm = document.getElementById('bookingForm');
    const successPopup = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent normal redirect
            
            const formData = new FormData(bookingForm);
            
            try {
                // Submit via fetch
                const response = await fetch(bookingForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Show popup
                    successPopup.classList.add('show');
                    bookingForm.reset();
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            } catch (error) {
                alert('Oops! There was a problem submitting your form');
            }
        });
    }
    
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            successPopup.classList.remove('show');
        });
    }
});

// Gallery Popup Functions
function openGallery() {
    const popup = document.getElementById('galleryPopup');
    if (popup) popup.classList.add('show');
}

function changeGalleryImage(src, element) {
    const mainImg = document.getElementById('galleryMainImage');
    if (mainImg) mainImg.src = src;
    
    // Remove active class from all thumbs
    document.querySelectorAll('.gallery-thumbnails .thumb').forEach(thumb => {
        thumb.classList.remove('active-thumb');
    });
    
    // Add active class to clicked thumb
    if (element) element.classList.add('active-thumb');
}

// Attach event listener directly without relying on global const if possible
document.addEventListener('DOMContentLoaded', () => {
    const closeGalleryBtn = document.getElementById('closeGalleryBtn');
    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', () => {
            document.getElementById('galleryPopup').classList.remove('show');
        });
    }
});
