/**
 * TravelGo Professional Frontend Application Engine
 * Developed for Portfolio Showcase & Advanced UI/UX Experience
 */

// Comprehensive Destination Knowledge Base with Itineraries & Highlights
const DESTINATIONS_DATA = {
    "manali": {
        title: "Kullu Manali",
        category: "mountains",
        price: 50000,
        seats: 60,
        rating: 4.8,
        reviewsCount: 142,
        badge: "Popular Choice",
        img: "https://discoverkullumanali.in/wp-content/uploads/2019/01/Manali-sign-like-hollywood-sign-in-Manali-discover-kullu-manali-www.discoverkullumanali.in_-1-1140x530.jpg",
        desc: "Experience snow-capped Himalayan peaks, enchanting pine forests, and thrilling river rafting adventures in the heart of Himachal Pradesh.",
        inclusions: ["5 Nights / 6 Days", "4-Star Mountain Resort", "Breakfast & Dinner Included", "Private Cab & Transfers", "Rohtang Pass Excursion"],
        itinerary: [
            { day: "Day 1", title: "Arrival in Manali & Welcome Dinner", detail: "Check into your luxury mountain valley resort. Relax and acclimatize with a bonfire evening." },
            { day: "Day 2", title: "Solang Valley & Adventure Sports", detail: "Enjoy paragliding, zorbing, and quad biking amidst breathtaking snow vistas." },
            { day: "Day 3", title: "Rohtang Pass Snow Expedition", detail: "Scenic drive up to 13,058 ft across majestic glacier landscapes." },
            { day: "Day 4", title: "Old Manali & Hadimba Temple", detail: "Explore historic cedar forests, vibrant artisanal cafes, and Tibetan monasteries." },
            { day: "Day 5", title: "Kullu Rafting & Shawl Factory", detail: "Thrilling white water rafting on the Beas river followed by local cultural tour." },
            { day: "Day 6", title: "Departure with Memories", detail: "Breakfast at hotel and seamless drop-off to the airport/bus terminal." }
        ]
    },
    "goa": {
        title: "Goa",
        category: "beaches",
        price: 60000,
        seats: 4,
        rating: 4.9,
        reviewsCount: 284,
        badge: "🔥 Selling Fast (4 left)",
        img: "https://t3.ftcdn.net/jpg/01/40/51/56/360_F_140515612_0MMpqpsIvs6xno5YXmPVy9FUmZ4uLnFB.jpg",
        desc: "Discover pristine sun-kissed beaches, Portuguese colonial architecture, vibrant nightlife, and mouthwatering seafood delicacies.",
        inclusions: ["4 Nights / 5 Days", "Beachfront Boutique Resort", "Daily Breakfast & Cocktail", "Sunset Yacht Cruise", "Water Sports Package"],
        itinerary: [
            { day: "Day 1", title: "North Goa Check-in & Beach Sunset", detail: "Arrive at Baga beachfront resort. Evening leisure at Tito's Lane." },
            { day: "Day 2", title: "Water Adventure at Calangute & Anjuna", detail: "Jet skiing, parasailing, and banana boat rides under the tropical sun." },
            { day: "Day 3", title: "Old Goa Heritage & Spice Plantation", detail: "Visit Basilica of Bom Jesus, Se Cathedral, and savor authentic Goan lunch." },
            { day: "Day 4", title: "Mandovi River Luxury Yacht Party", detail: "Exclusive sunset dinner cruise with live Goan folk music and dancing." },
            { day: "Day 5", title: "Farewell Goa", detail: "Morning beach walk, souvenir shopping at flea market, and airport transfer." }
        ]
    },
    "maldives": {
        title: "Maldives",
        category: "beaches",
        price: 90000,
        seats: 40,
        rating: 5.0,
        reviewsCount: 519,
        badge: "💎 Luxury Escape",
        img: "https://t3.ftcdn.net/jpg/01/11/28/88/360_F_111288833_YIh3Br4p3lzSlFjDutcVIjJMj9EkWlKv.jpg",
        desc: "Indulge in overwater private villas, crystal clear turquoise lagoons, and world-class coral reef scuba diving.",
        inclusions: ["4 Nights / 5 Days", "Overwater Water Villa", "All-Inclusive Dining & Drinks", "Speedboat Airport Transfer", "Guided Snorkeling Safari"],
        itinerary: [
            { day: "Day 1", title: "Speedboat Arrival to Water Villa", detail: "Step onto private island paradise and unwind on your overwater deck sun loungers." },
            { day: "Day 2", title: "Coral Garden Snorkeling & Dolphin Cruise", detail: "Swim alongside sea turtles and manta rays in vibrant house reefs." },
            { day: "Day 3", title: "Sublime Spa Therapy & Candlelight Beach Dinner", detail: "60-minute Balinese massage followed by private beachside gourmet dining." },
            { day: "Day 4", title: "Lagoon Kayaking & Sunset Sandbank Visit", detail: "Explore turquoise waters on crystal kayaks and toast champagne on a private sandbank." },
            { day: "Day 5", title: "Departure", detail: "Seaplane/speedboat transfer back to Male International Airport." }
        ]
    },
    "bali": {
        title: "Bali",
        category: "beaches",
        price: 120000,
        seats: 40,
        rating: 4.9,
        reviewsCount: 388,
        badge: "⭐ Best Value",
        img: "https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=",
        desc: "Immerse yourself in lush Ubud rice terraces, iconic cliffside temples, spiritual retreats, and tropical beach havens.",
        inclusions: ["6 Nights / 7 Days", "Private Pool Villa in Ubud + Seminyak", "Daily Breakfast & 2 Dinners", "Full Day Temple & Waterfall Tour", "Private English Speaking Guide"],
        itinerary: [
            { day: "Day 1", title: "Welcome to Ubud Spiritual Heart", detail: "Check into private pool villa surrounded by tropical jungle sounds." },
            { day: "Day 2", title: "Tegalalang Rice Terraces & Sacred Monkey Forest", detail: "Iconic Bali swing experience followed by ancient temple exploration." },
            { day: "Day 3", title: "Ulun Danu Bratan & Sekumpul Waterfalls", detail: "Journey to misty mountain lakes and majestic hidden waterfalls." },
            { day: "Day 4", title: "Transfer to Seminyak & Sunset at Tanah Lot", detail: "Relocate to trendy coastal resort town and witness dramatic cliffside sunset." },
            { day: "Day 5", title: "Nusa Penida Island Day Trip", detail: "Speedboat ride to Kelingking Beach (T-Rex cliff) and Crystal Bay." },
            { day: "Day 6", title: "Beach Club Leisure & Farewell Seafood Banquet", detail: "Relax at world-renowned oceanfront beach clubs in Jimbaran Bay." },
            { day: "Day 7", title: "Return Flight", detail: "Private chauffeur transfer to Ngurah Rai Airport." }
        ]
    },
    "dubai": {
        title: "Dubai",
        category: "city",
        price: 270000,
        seats: 37,
        rating: 4.9,
        reviewsCount: 610,
        badge: "✨ Ultra Premium",
        img: "https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg",
        desc: "Marvel at futuristic skyscrapers, desert dune bashing safaris, lavish shopping malls, and world-beating luxury marvels.",
        inclusions: ["5 Nights / 6 Days", "5-Star Downtown Luxury Hotel", "Burj Khalifa 124th Floor Tickets", "Desert Safari with BBQ Dinner", "Luxury Yacht Marina Cruise"],
        itinerary: [
            { day: "Day 1", title: "Arrival & Dubai Marina Evening Cruise", detail: "Check into luxury skyscraper hotel and enjoy illuminated skyline dinner cruise." },
            { day: "Day 2", title: "Burj Khalifa & Dubai Mall Aquarium", detail: "Ascend to the top of the world's tallest building and witness fountain show." },
            { day: "Day 3", title: "Red Dune Desert Safari & Tanoura Show", detail: "Thrilling 4x4 dune bashing, camel rides, and traditional Arabic camp feast." },
            { day: "Day 4", title: "Museum of the Future & Palm Jumeirah Monorail", detail: "Explore cutting-edge innovation and relax at Atlantis Aquaventure." },
            { day: "Day 5", title: "Gold Souk Heritage & Abu Dhabi Grand Mosque", detail: "Day excursion to Sheikh Zayed Grand Mosque and traditional spice markets." },
            { day: "Day 6", title: "Departure VIP Transfer", detail: "Private limousine drop-off to Dubai International Airport." }
        ]
    },
    "singapore": {
        title: "Singapore",
        category: "city",
        price: 290000,
        seats: 56,
        rating: 4.8,
        reviewsCount: 310,
        badge: "🌿 Garden Metropolis",
        img: "https://media.istockphoto.com/id/590050726/photo/singapore-glowing-at-night.jpg?s=612x612&w=0&k=20&c=43tSsy1yC0iOAGL3ZVq3-nl84KnmWTnHGI5mwQtp8zo=",
        desc: "Explore futuristic supertrees at Gardens by the Bay, thrilling Universal Studios, and immaculate multicultural street food heavens.",
        inclusions: ["5 Nights / 6 Days", "Marina Bay Skyline Hotel", "Universal Studios VIP Pass", "Gardens by the Bay & Cloud Forest", "Night Safari Adventure"],
        itinerary: [
            { day: "Day 1", title: "Changi Jewel & Marina Bay Sands Check-in", detail: "Marvel at Rain Vortex waterfall and enjoy rooftop infinity pool views." },
            { day: "Day 2", title: "Universal Studios Sentosa Full Day", detail: "Thrilling rides, Hollywood movie sets, and S.E.A. Aquarium visit." },
            { day: "Day 3", title: "Gardens by the Bay & Supertree Light Show", detail: "Step inside Flower Dome, Cloud Forest, and witness evening Garden Rhapsody." },
            { day: "Day 4", title: "Singapore Zoo & World Famous Night Safari", detail: "Encounter nocturnal wildlife in naturalistic open habitats." },
            { day: "Day 5", title: "Chinatown, Little India & Clarke Quay Cruise", detail: "Historic temple walks and riverside dining." },
            { day: "Day 6", title: "Homeward Bound", detail: "Airport transfers and duty-free shopping." }
        ]
    },
    "disneyland": {
        title: "Disneyland Hong Kong",
        category: "family",
        price: 160000,
        seats: 56,
        rating: 4.9,
        reviewsCount: 445,
        badge: "🏰 Family Favorite",
        img: "https://www.discoverhongkong.com/content/dam/dhk/intl/explore/attractions/the-ultimate-guide-to-hong-kong-disneyland/ultimate-guide-to-hong-kong-disneyland-1920x1080.jpg",
        desc: "Step into magical fairy tales, exhilarating Disney attractions, spectacular fireworks, and unforgettable character encounters.",
        inclusions: ["4 Nights / 5 Days", "Disney Resort Theme Hotel", "2-Day Park Access Passes", "VIP Character Breakfast", "Victoria Peak Tram Excursion"],
        itinerary: [
            { day: "Day 1", title: "Check-in at Disney Resort Hotel", detail: "Arrive in style and meet beloved Disney characters at evening reception." },
            { day: "Day 2", title: "Disneyland Kingdom Adventure Day 1", detail: "Explore Tomorrowland, Fantasyland, and Toy Story Land rides." },
            { day: "Day 3", title: "Disneyland Day 2 & Momentous Fireworks Show", detail: "Experience Frozen World and magical nighttime illumination spectacular." },
            { day: "Day 4", title: "Hong Kong Victoria Peak & Star Ferry", detail: "Panoramic city harbor views and bustling street markets." },
            { day: "Day 5", title: "Departure", detail: "Final character breakfast and airport shuttle." }
        ]
    },
    "london": {
        title: "London",
        category: "city",
        price: 164000,
        seats: 45,
        rating: 4.8,
        reviewsCount: 290,
        badge: "👑 Royal Heritage",
        img: "https://static.wanderon.in/wp-content/uploads/2024/05/travel-tips-london.jpg",
        desc: "Discover majestic royal palaces, iconic Big Ben, West End theater shows, and rich historic museums across the River Thames.",
        inclusions: ["5 Nights / 6 Days", "Central London Historic Hotel", "London Eye & Tower of London Pass", "Thames River Cruise", "Oxford & Windsor Castle Day Tour"],
        itinerary: [
            { day: "Day 1", title: "Arrival & Thames River Sunset Cruise", detail: "Check into Covent Garden hotel and glide past illuminated Houses of Parliament." },
            { day: "Day 2", title: "Tower of London & Crown Jewels", detail: "Historic fortress guided tour followed by walk across Tower Bridge." },
            { day: "Day 3", title: "Buckingham Palace & British Museum", detail: "Witness Changing of the Guard and world-class archaeological treasures." },
            { day: "Day 4", title: "Windsor Castle & Stonehenge Excursion", detail: "Royal weekend residence tour and mysterious prehistoric monument walk." },
            { day: "Day 5", title: "West End Theater & Soho Dining", detail: "Enjoy a world-famous musical show and vibrant Soho culinary scene." },
            { day: "Day 6", title: "Heathrow Departure", detail: "Morning tea at Harrods and Heathrow Express transfer." }
        ]
    }
};

let currentTravelers = 2;
let currentModalDest = null;

// Initialize Core App Functionality
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initSearchAndFilter();
    initModals();
    initContactForm();
});

// 1. Theme Controller (Dark / Light Mode)
function initTheme() {
    const savedTheme = localStorage.getItem('travelgo_theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    const themeBtns = document.querySelectorAll('#theme-toggle, .theme-toggle');
    themeBtns.forEach(btn => {
        updateThemeIcon(btn, savedTheme);
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'light';
            if (!currentTheme || currentTheme === 'light') {
                newTheme = 'dark';
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            localStorage.setItem('travelgo_theme', newTheme);
            themeBtns.forEach(b => updateThemeIcon(b, newTheme));
            showToast(`Switched to ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} Mode ✨`);
        });
    });
}

function updateThemeIcon(btn, theme) {
    if (!btn) return;
    btn.innerHTML = theme === 'dark' ? '☀️ <span>Light Mode</span>' : '🌙 <span>Dark Mode</span>';
}

// 2. Responsive Sticky Navbar & Hamburger Menu
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navbar-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Header buttons action
    const getStartedBtn = document.getElementById('get');
    const signBtn = document.getElementById('sign');

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            openBookingModal("Custom Holiday Package", 75000);
        });
    }

    if (signBtn) {
        signBtn.addEventListener('click', () => {
            openAuthModal();
        });
    }

    // Sticky shadow effect on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// 3. Search, Filter & Sort Engine (Homepage)
function initSearchAndFilter() {
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const cardsContainer = document.querySelector('.main');

    if (!cardsContainer || !document.querySelector('.main-box')) return; // Not homepage

    // Bind destination cards with IDs and attributes
    const cards = document.querySelectorAll('.main-box');
    cards.forEach((card, idx) => {
        const titleEl = card.querySelector('.tit span');
        if (!titleEl) return;
        const title = titleEl.textContent.trim();
        
        // Find matching key in DESTINATIONS_DATA
        let destKey = Object.keys(DESTINATIONS_DATA).find(key => 
            title.toLowerCase().includes(key) || DESTINATIONS_DATA[key].title.toLowerCase() === title.toLowerCase()
        );

        if (destKey) {
            const data = DESTINATIONS_DATA[destKey];
            card.setAttribute('data-id', destKey);
            card.setAttribute('data-category', data.category);
            card.setAttribute('data-price', data.price);
            card.setAttribute('data-seats', data.seats);

            // Add Badge dynamically if not present
            if (!card.querySelector('.card-badge')) {
                const imgWrap = card.querySelector('.img');
                if (imgWrap && data.badge) {
                    const badgeEl = document.createElement('div');
                    badgeEl.className = 'card-badge';
                    badgeEl.textContent = data.badge;
                    imgWrap.appendChild(badgeEl);
                }
            }

            // Bind card button actions
            const detailsBtn = card.querySelector('#details');
            const purchaseBtn = card.querySelector('#purchase');
            const closeBtn = card.querySelector('#close');

            if (detailsBtn) {
                // Replace old listeners by cloning or direct onclick
                detailsBtn.onclick = (e) => {
                    e.preventDefault();
                    openDetailsModal(destKey);
                };
            }
            if (purchaseBtn) {
                purchaseBtn.onclick = (e) => {
                    e.preventDefault();
                    openBookingModal(data.title, data.price);
                };
            }
            if (closeBtn) {
                closeBtn.onclick = (e) => {
                    e.preventDefault();
                    card.style.transition = 'all 0.4s ease';
                    card.style.opacity = '0.3';
                    card.style.transform = 'scale(0.95)';
                    showToast(`Dismissed ${data.title} from current view`, 'info');
                    setTimeout(() => card.style.display = 'none', 400);
                };
            }
        }
    });

    // Filter execution logic
    function applyFilters() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        const sortValue = sortSelect ? sortSelect.value : 'default';

        let visibleCards = [];

        cards.forEach(card => {
            const title = card.querySelector('.tit span')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.des p')?.textContent.toLowerCase() || '';
            const category = card.getAttribute('data-category') || 'all';

            const matchesSearch = title.includes(query) || desc.includes(query);
            const matchesCategory = activeCategory === 'all' || category === activeCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
                visibleCards.push(card);
            } else {
                card.style.display = 'none';
            }
        });

        // Sorting
        if (sortValue !== 'default') {
            visibleCards.sort((a, b) => {
                const priceA = parseInt(a.getAttribute('data-price')) || 0;
                const priceB = parseInt(b.getAttribute('data-price')) || 0;
                const seatsA = parseInt(a.getAttribute('data-seats')) || 0;
                const seatsB = parseInt(b.getAttribute('data-seats')) || 0;

                if (sortValue === 'price-low') return priceA - priceB;
                if (sortValue === 'price-high') return priceB - priceA;
                if (sortValue === 'seats') return seatsA - seatsB;
                return 0;
            });

            visibleCards.forEach(card => cardsContainer.appendChild(card));
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilters();
            });
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
}

// 4. Interactive Modal Engine
function initModals() {
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    const closeBtns = document.querySelectorAll('.modal-close-btn');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
}

function openDetailsModal(destId) {
    const data = DESTINATIONS_DATA[destId];
    if (!data) return;

    currentModalDest = data;
    currentTravelers = 2; // default

    const modal = document.getElementById('details-modal');
    const backdrop = document.getElementById('modal-backdrop');
    if (!modal || !backdrop) return;

    // Populate contents
    const imgEl = document.getElementById('modal-img');
    if (imgEl) imgEl.src = data.img;
    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = data.title;
    const ratingEl = document.getElementById('modal-rating');
    if (ratingEl) ratingEl.textContent = `★ ${data.rating.toFixed(1)} (${data.reviewsCount} verified reviews)`;
    const descEl = document.getElementById('modal-desc');
    if (descEl) descEl.textContent = data.desc;
    const seatsEl = document.getElementById('modal-seats');
    if (seatsEl) seatsEl.textContent = `⚡ Available Seats: ${data.seats}`;

    // Inclusions
    const incContainer = document.getElementById('modal-inclusions');
    if (incContainer) {
        incContainer.innerHTML = data.inclusions.map(inc => `<span class="inclusion-pill">✓ ${inc}</span>`).join('');
    }

    // Itinerary
    const itinContainer = document.getElementById('modal-itinerary');
    if (itinContainer) {
        itinContainer.innerHTML = data.itinerary.map(item => `
            <div class="itin-item">
                <div class="itin-day">${item.day}</div>
                <div class="itin-content">
                    <strong>${item.title}</strong>
                    <p>${item.detail}</p>
                </div>
            </div>
        `).join('');
    }

    updatePriceCalculator();

    // Bind counter buttons
    const minusBtn = document.getElementById('btn-minus');
    const plusBtn = document.getElementById('btn-plus');
    if (minusBtn) {
        minusBtn.onclick = () => {
            if (currentTravelers > 1) {
                currentTravelers--;
                updatePriceCalculator();
            }
        };
    }
    if (plusBtn) {
        plusBtn.onclick = () => {
            if (currentTravelers < 15) {
                currentTravelers++;
                updatePriceCalculator();
            }
        };
    }

    const bookNowBtn = document.getElementById('modal-book-now');
    if (bookNowBtn) {
        bookNowBtn.onclick = () => {
            closeModal();
            setTimeout(() => {
                openBookingModal(data.title, data.price * currentTravelers, currentTravelers);
            }, 150);
        };
    }

    backdrop.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updatePriceCalculator() {
    if (!currentModalDest) return;
    const countEl = document.getElementById('traveler-count');
    if (countEl) countEl.textContent = currentTravelers;
    const total = currentModalDest.price * currentTravelers;
    const priceEl = document.getElementById('modal-total-price');
    if (priceEl) priceEl.textContent = `${total.toLocaleString('en-IN')} ₹`;
}

function openBookingModal(destTitle, totalPrice, travelers = 1) {
    const modal = document.getElementById('booking-modal');
    const backdrop = document.getElementById('modal-backdrop');
    if (!modal || !backdrop) return;

    const destTitleEl = document.getElementById('book-dest-title');
    if (destTitleEl) destTitleEl.textContent = destTitle;
    const priceDisplayEl = document.getElementById('book-price-display');
    if (priceDisplayEl) priceDisplayEl.textContent = `${totalPrice.toLocaleString('en-IN')} ₹ (${travelers} Traveler${travelers > 1 ? 's' : ''})`;

    const form = document.getElementById('quick-booking-form');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const origText = btn.textContent;
            btn.textContent = "Processing Booking...";
            btn.disabled = true;

            setTimeout(() => {
                closeModal();
                btn.textContent = origText;
                btn.disabled = false;
                form.reset();
                showToast(`🎉 Booking Confirmed for ${destTitle}! Check your email for ticket itinerary.`);
            }, 1200);
        };
    }

    backdrop.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openAuthModal() {
    showToast("👋 Welcome to TravelGo! Demo sign-in verified.", "info");
}

function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const modals = document.querySelectorAll('.custom-modal');
    if (backdrop) backdrop.classList.remove('active');
    modals.forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
}

// 5. Toast Notification System
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✨' : 'ℹ️'}</span>
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4500);
}

// 6. Contact Form Real-time Validation
function initContactForm() {
    const contactForm = document.querySelector('.contact-container form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const msgInput = document.getElementById('message');
        const submitBtn = contactForm.querySelector('.submit-btn');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
            showToast("Please fill in all required fields accurately.", "error");
            return;
        }

        submitBtn.innerHTML = 'Sending Message...';
        submitBtn.disabled = true;

        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
            showToast("💌 Your message has been sent! Nidhi Mehta will connect with you soon.");
        }, 1200);
    });
}
