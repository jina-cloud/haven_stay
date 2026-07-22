const firebaseConfig = {
  apiKey: "AIzaSyAxSqm84wUvfXiK39YyNtqJTuGNmrqj-fY",
  authDomain: "havenstay-af0e2.firebaseapp.com",
  projectId: "havenstay-af0e2",
  storageBucket: "havenstay-af0e2.firebasestorage.app",
  messagingSenderId: "193131159219",
  appId: "1:193131159219:web:52e5729b061b84bcdfdac6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    const closeGalleryBtn = document.getElementById('closeGalleryBtn');
    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', () => {
            document.getElementById('galleryPopup').classList.remove('show');
        });
    }

    const closeGalleryBtn2 = document.getElementById('closeGalleryBtn2');
    if (closeGalleryBtn2) {
        closeGalleryBtn2.addEventListener('click', () => {
            document.getElementById('galleryPopup2').classList.remove('show');
        });
    }
});

function openGallery2() {
    const popup = document.getElementById('galleryPopup2');
    if (popup) popup.classList.add('show');
}

function changeGalleryImage2(src, element) {
    const mainImg = document.getElementById('galleryMainImage2');
    if (mainImg) mainImg.src = src;
    
    // Remove active class from all thumbs
    document.querySelectorAll('#galleryPopup2 .gallery-thumbnails .thumb').forEach(thumb => {
        thumb.classList.remove('active-thumb');
    });
    
    // Add active class to clicked thumb
    if (element) element.classList.add('active-thumb');
}

function openGallery3() {
    const popup = document.getElementById('galleryPopup3');
    if (popup) popup.classList.add('show');
}

function changeGalleryImage3(src, element) {
    const mainImg = document.getElementById('galleryMainImage3');
    if (mainImg) mainImg.src = src;
    
    // Remove active class from all thumbs
    document.querySelectorAll('#galleryPopup3 .gallery-thumbnails .thumb').forEach(thumb => {
        thumb.classList.remove('active-thumb');
    });
    
    // Add active class to clicked thumb
    if (element) element.classList.add('active-thumb');
}

function openGallery4() {
    const popup = document.getElementById('galleryPopup4');
    if (popup) popup.classList.add('show');
}

function changeGalleryImage4(src, element) {
    const mainImg = document.getElementById('galleryMainImage4');
    if (mainImg) mainImg.src = src;
    
    // Remove active class from all thumbs
    document.querySelectorAll('#galleryPopup4 .gallery-thumbnails .thumb').forEach(thumb => {
        thumb.classList.remove('active-thumb');
    });
    
    // Add active class to clicked thumb
    if (element) element.classList.add('active-thumb');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeGalleryBtn3 = document.getElementById('closeGalleryBtn3');
    if (closeGalleryBtn3) {
        closeGalleryBtn3.addEventListener('click', () => {
            document.getElementById('galleryPopup3').classList.remove('show');
        });
    }

    const closeGalleryBtn4 = document.getElementById('closeGalleryBtn4');
    if (closeGalleryBtn4) {
        closeGalleryBtn4.addEventListener('click', () => {
            document.getElementById('galleryPopup4').classList.remove('show');
        });
    }

    const reviewForm = document.getElementById('reviewForm');
    const grid = document.getElementById('testimoniesGrid');
    
    if (grid) {
        // Listen for new reviews from Firebase
        db.collection("reviews").orderBy("timestamp", "asc").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const data = change.doc.data();
                    
                    const card = document.createElement('div');
                    card.className = 'testimony-card';
                    card.innerHTML = `
                        <div class="card-header">
                            <div class="stars">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p class="quote">"${data.text}"</p>
                        <div class="user-info">
                            <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="User" loading="lazy">
                            <span>${data.name}</span>
                        </div>
                    `;
                    
                    grid.insertBefore(card, grid.firstChild);
                    
                    // Remove the last review to keep the grid size consistent
                    if (grid.children.length > 3) { // keep 3 reviews max
                        grid.removeChild(grid.lastElementChild);
                    }
                }
            });
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('reviewName').value;
            const text = document.getElementById('reviewText').value;
            
            if (name && text) {
                // Add to Firebase
                try {
                    await db.collection("reviews").add({
                        name: name,
                        text: text,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    
                    document.getElementById('reviewPopup').classList.remove('show');
                    reviewForm.reset();
                    
                    // Scroll to the review section
                    grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } catch (error) {
                    console.error("Error adding document: ", error);
                    alert("Failed to add review. Please try again.");
                }
            }
        });
    }
});
