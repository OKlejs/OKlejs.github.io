// Sample Data - Replace with your actual projects and photos
const architectureProjects = [
    {
        id: 1,
        title: "Residential Villa",
        location: "Copenhagen, Denmark",
        year: "2024",
        type: "Residential",
        area: "450 m²",
        description: "A modern villa designed with sustainable materials and integrated solar solutions. The design focuses on connecting indoor and outdoor spaces through large glass surfaces.",
        images: [
            "assets/architecture/project1-1.jpg",
            "assets/architecture/project1-2.jpg",
            "assets/architecture/project1-3.jpg"
        ]
    },
    {
        id: 2,
        title: "Urban Office Complex",
        location: "Stockholm, Sweden",
        year: "2023",
        type: "Commercial",
        area: "2,300 m²",
        description: "An adaptive reuse project transforming an industrial warehouse into a contemporary office space while preserving historical elements.",
        images: [
            "assets/architecture/project2-1.jpg",
            "assets/architecture/project2-2.jpg",
            "assets/architecture/project2-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Community Center",
        location: "Oslo, Norway",
        year: "2023",
        type: "Public",
        area: "1,100 m²",
        description: "A flexible community space designed to foster social interaction through transparent facades and multifunctional areas.",
        images: [
            "assets/architecture/project3-1.jpg",
            "assets/architecture/project3-2.jpg",
            "assets/architecture/project3-3.jpg"
        ]
    },
    {
        id: 4,
        title: "Minimalist House",
        location: "Helsinki, Finland",
        year: "2022",
        type: "Residential",
        area: "280 m²",
        description: "A compact residence emphasizing simplicity and connection to nature through carefully framed views and natural materials.",
        images: [
            "assets/architecture/project4-1.jpg",
            "assets/architecture/project4-2.jpg",
            "assets/architecture/project4-3.jpg"
        ]
    },
    {
        id: 5,
        title: "Waterfront Pavilion",
        location: "Aarhus, Denmark",
        year: "2022",
        type: "Public",
        area: "180 m²",
        description: "A lightweight structure along the harbor that serves as both a viewing platform and cultural venue.",
        images: [
            "assets/architecture/project5-1.jpg",
            "assets/architecture/project5-2.jpg",
            "assets/architecture/project5-3.jpg"
        ]
    },
    {
        id: 6,
        title: "Mixed-Use Development",
        location: "Gothenburg, Sweden",
        year: "2021",
        type: "Mixed-Use",
        area: "4,500 m²",
        description: "A sustainable urban development combining residential, retail, and public spaces with green roofs and rainwater harvesting systems.",
        images: [
            "assets/architecture/project6-1.jpg",
            "assets/architecture/project6-2.jpg",
            "assets/architecture/project6-3.jpg"
        ]
    }
];

const photographyImages = [
    {
        id: 1,
        src: "assets/photography/photo1.jpg",
        category: "architectural",
        title: "Concrete Poetry"
    },
    {
        id: 2,
        src: "assets/photography/photo2.jpg",
        category: "landscape",
        title: "Nordic Light"
    },
    {
        id: 3,
        src: "assets/photography/photo3.jpg",
        category: "urban",
        title: "City Rhythm"
    },
    {
        id: 4,
        src: "assets/photography/photo4.jpg",
        category: "interior",
        title: "Soft Spaces"
    },
    {
        id: 5,
        src: "assets/photography/photo5.jpg",
        category: "architectural",
        title: "Geometric Forms"
    },
    {
        id: 6,
        src: "assets/photography/photo6.jpg",
        category: "landscape",
        title: "Horizon Line"
    },
    {
        id: 7,
        src: "assets/photography/photo7.jpg",
        category: "urban",
        title: "Street Perspective"
    },
    {
        id: 8,
        src: "assets/photography/photo8.jpg",
        category: "interior",
        title: "Natural Light"
    },
    {
        id: 9,
        src: "assets/photography/photo9.jpg",
        category: "architectural",
        title: "Modern Lines"
    },
    {
        id: 10,
        src: "assets/photography/photo10.jpg",
        category: "landscape",
        title: "Coastal View"
    },
    {
        id: 11,
        src: "assets/photography/photo11.jpg",
        category: "urban",
        title: "Urban Canvas"
    },
    {
        id: 12,
        src: "assets/photography/photo12.jpg",
        category: "interior",
        title: "Minimal Living"
    }
];

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    loadProjects();
    loadPhotos();
    initPhotoFilters();
    initScrollAnimations();
});

// Navigation highlighting
function initNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
}

// Load Architecture Projects
function loadProjects() {
    const grid = document.getElementById('architecture-grid');
    
    architectureProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-card-image">
                <img src="${project.images[0]}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/800x600/f5f5f5/999999?text=${encodeURIComponent(project.title)}'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-meta">${project.location}. (${project.year})</p>
                <a href="#" class="project-link">
                    View Project 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(project);
        });
        grid.appendChild(card);
    });
}

// Project Modal
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDetails = modal.querySelector('.modal-details');
    const modalDescription = modal.querySelector('.modal-description');
    
    let currentImageIndex = 0;
    
    function updateImage() {
        modalImage.src = project.images[currentImageIndex];
        modalImage.onerror = function() {
            this.src = `https://via.placeholder.com/1200x800/f5f5f5/999999?text=${encodeURIComponent(project.title)}`;
        };
    }
    
    modalTitle.textContent = project.title;
    modalDetails.innerHTML = `
        <p><strong>Location:</strong> ${project.location}</p>
        <p><strong>Year:</strong> ${project.year}</p>
        <p><strong>Type:</strong> ${project.type}</p>
        <p><strong>Area:</strong> ${project.area}</p>
    `;
    modalDescription.textContent = project.description;
    updateImage();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Navigation
    const prevBtn = modal.querySelector('.gallery-nav.prev');
    const nextBtn = modal.querySelector('.gallery-nav.next');
    
    prevBtn.onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
        updateImage();
    };
    
    nextBtn.onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % project.images.length;
        updateImage();
    };
    
    // Close
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Click outside
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    // Keyboard navigation
    function handleKeyboard(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyboard);
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    }
    document.addEventListener('keydown', handleKeyboard);
}

// Load Photos
function loadPhotos() {
    const grid = document.getElementById('photo-grid');
    
    photographyImages.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'photo-item';
        item.dataset.category = photo.category;
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" onerror="this.src='https://via.placeholder.com/600x800/f5f5f5/999999?text=${encodeURIComponent(photo.title)}'">
        `;
        
        item.addEventListener('click', () => openLightbox(photo.id));
        grid.appendChild(item);
    });
}

// Photo Filters
function initPhotoFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter photos
            photoItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Lightbox
function openLightbox(photoId) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    
    let currentIndex = photographyImages.findIndex(p => p.id === photoId);
    
    function updateLightbox() {
        const currentPhoto = photographyImages[currentIndex];
        lightboxImage.src = currentPhoto.src;
        lightboxImage.onerror = function() {
            this.src = `https://via.placeholder.com/1200x800/f5f5f5/999999?text=${encodeURIComponent(currentPhoto.title)}`;
        };
        lightboxCaption.textContent = currentPhoto.title;
    }
    
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Navigation
    const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
    const nextBtn = lightbox.querySelector('.lightbox-nav.next');
    
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + photographyImages.length) % photographyImages.length;
        updateLightbox();
    };
    
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % photographyImages.length;
        updateLightbox();
    };
    
    // Close
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.onclick = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Click outside
    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    // Keyboard navigation
    function handleKeyboard(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyboard);
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    }
    document.addEventListener('keydown', handleKeyboard);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animatedElements = document.querySelectorAll('.project-card, .photo-item, .about-content, .contact-form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(2rem)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
