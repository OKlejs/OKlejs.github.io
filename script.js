// Sample Data - Replace with your actual projects and photos
const architectureProjects = [
    {
        id: 1,
        title: "Designing with Scarcity",
        location: "Denmark",
        year: "2025",
        type: "Workflow",
        description: "Algorithmic Workflows for Structural Optimization Using Reclaimed Timber",
        images: [
            "assets/architecture/project1-1.gif",
            "assets/architecture/project1-2.png",
            "assets/architecture/project1-3.png",
            "assets/architecture/project1-4.png"
        ]
    },
    {
        id: 2,
        title: "Writers Retreat",
        location: "Denmark",
        year: "2023",
        type: "Selfsuficient cabin",
        area: "2,300 m²",
        description: "The retreat, designed as a sustainable haven for writers, offers a compact cabin with a spacious work area and terrace, powered by photovoltaics for year-round comfort. It prioritizes minimal energy consumption. Designed to engage the senses and integrate with the landscape, it embodies sustainability and functionality, offering a serene retreat for creative inspiration.",
        images: [
            "assets/architecture/project2-1.jpg",
            "assets/architecture/project2-2.jpg",
            "assets/architecture/project2-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Museum Jorn",
        location: "Silkeborg, Denmark",
        year: "2023",
        type: "Large Hybrid Building",
        area: "1,100 m²",
        description: "The architectural concept, influenced by Jorn’s experimental art philosophy, challenges the conventional narrative of museum typology. This is achieved through a dynamic arrangement of walls within a static column grid, reinforced by monoliths to ensure structural stability.",
        images: [
            "assets/architecture/project3-1.jpg",
            "assets/architecture/project3-2.jpg",
            "assets/architecture/project3-3.jpg"
        ]
    },
    {
        id: 4,
        title: "Drivhusene",
        location: "Denmark",
        year: "2022",
        type: "Residential and Urban planing",
        area: "280 m²",
        description: "The aim of the project is to develop a sustainable residential settlement on a roughly two-hectare plot located in Sorthøj, south of Aalborg, referred to as “Drivhusene.” This co-housing settlement, at a BP of 75%, seeks to fosters a sense of community among participants through low-density typologies and the integration of three common houses with varied functions. The settlement follows a 35-degree southwest tilted grid, providing a clear structure despite various displacements and height variations.",
        images: [
            "assets/architecture/project4-1.png",
            "assets/architecture/project4-2.png",
            "assets/architecture/project4-3.png"
        ]
    },
    {
        id: 5,
        title: "Reuse Pavilion",
        location: "Denmark",
        year: "2024",
        type: "Public",
        area: "70 m²",
        description: "A lightweight structure along the harbor that serves as both a reading nook and cultural venue in front of the main library.",
        images: [
            "assets/architecture/project5-1.png",
            "assets/architecture/project5-2.gif",
            "assets/architecture/project5-3.png",
            "assets/architecture/project5-4.png",
            "assets/architecture/project5-5.png"
        ]
    },
    {
        id: 6,
        title: "Clay pavilion",
        location: "Denmark",
        year: "2021",
        type: "Element experiments",
        area: "50m²",
        description: "Testing G-code creation and workflows with the manufacturing technique that is clay printing",
        images: [
            "assets/architecture/project6-1.jpg",
            "assets/architecture/project6-2.jpg",
            "assets/architecture/project6-3.png"
        ]
    }
];

const photographyImages = [
    {
        id: 1,
        src: "assets/photography/photo1.jpg",
        category: "landscape",
    },
    {
        id: 2,
        src: "assets/photography/photo2.jpg",
        category: "landscape",
    },
    {
        id: 3,
        src: "assets/photography/photo3.jpg",
        category: "landscape",
    },
    {
        id: 4,
        src: "assets/photography/photo4.png",
        category: "lifestyle",
    },
    {
        id: 5,
        src: "assets/photography/photo5.png",
        category: "lifestyle",
    },
    {
        id: 6,
        src: "assets/photography/photo6.png",
        category: "landscape",
    },
    {
        id: 7,
        src: "assets/photography/photo7.png",
        category: "architectural",
    },
    {
        id: 8,
        src: "assets/photography/photo8.png",
        category: "lifestyle",
    },
    {
        id: 9,
        src: "assets/photography/photo9.jpg",
        category: "architectural",
    },
    {
        id: 10,
        src: "assets/photography/photo10.jpg",
        category: "landscape",
    },
    {
        id: 11,
        src: "assets/photography/photo11.jpg",
        category: "landscape",
    },
    {
        id: 12,
        src: "assets/photography/photo12.jpg",
        category: "landscape",
    },
    {
        id: 13,
        src: "assets/photography/photo13.jpg",
        category: "landscape",
    },
    {
        id: 14,
        src: "assets/photography/photo14.jpg",
        category: "landscape",
    },
    {
        id: 15,
        src: "assets/photography/photo15.jpg",
        category: "landscape",
    },
    {
        id: 16,
        src: "assets/photography/photo16.jpg",
        category: "landscape",
    },
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

// === FIX PORTFOLIO LINK ===
(function() {
    const portfolioLinks = document.querySelectorAll('a[href$=".pdf"]');
    
    portfolioLinks.forEach(link => {
        // Remove any other click listeners
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        
        // Add fresh handler that allows default behavior
        newLink.addEventListener('click', function(e) {
            e.stopImmediatePropagation();
            // Browser will handle the link normally
        }, true);
    });
})();