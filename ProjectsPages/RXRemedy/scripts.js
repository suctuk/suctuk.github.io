// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggling
    initThemeToggle();
    
    // Create compartments for the wheel animation
    createWheelCompartments();
    
    // Tab switching functionality
    initTabSwitching();
    
    // Back to top button functionality
    initBackToTopButton();
    
    // Initialize state machine animation when the element is in view
    initStateMachineAnimation();
});

// Theme Toggle Implementation
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }
    
    // Toggle theme when switch is clicked
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Create wheel compartments for animation
function createWheelCompartments() {
    const wheel = document.getElementById('wheel');
    if (!wheel) return;
    
    // Clear any existing compartments
    wheel.innerHTML = '';
    
    // Create 14 compartments
    for (let i = 0; i < 14; i++) {
        const compartment = document.createElement('div');
        compartment.className = 'compartment';
        
        // Position compartments around the wheel
        const angle = i * (360 / 14);
        compartment.style.transform = `rotate(${angle}deg) translateY(-120px)`;
        
        wheel.appendChild(compartment);
    }
}

// Tab switching for code sections
function initTabSwitching() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            
            const contentElement = document.getElementById(tabId);
            if (contentElement) {
                contentElement.classList.add('active');
            }
        });
    });
}

// Back to top button functionality
function initBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// State machine animation
function initStateMachineAnimation() {
    const stateDiagram = document.getElementById('stateDiagram');
    if (!stateDiagram) return;
    
    // Use Intersection Observer to detect when diagram is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animation when in viewport
                startStateMachineAnimation();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(stateDiagram);
}

function startStateMachineAnimation() {
    const states = document.querySelectorAll('.state');
    if (states.length === 0) return;
    
    const stateCycle = [
        'stateIdle',
        'statePillsPresent',
        'statePillsReminder',
        'stateNoPillsWarning',
        'stateNoPillsIdle',
        'stateIdle'
    ];
    
    let currentStateIndex = 0;
    
    function animateNextState() {
        // Remove active class from all states
        states.forEach(state => state.classList.remove('active'));
        
        // Add active class to current state
        const currentStateId = stateCycle[currentStateIndex];
        const currentStateElement = document.getElementById(currentStateId);
        
        if (currentStateElement) {
            currentStateElement.classList.add('active');
        }
        
        // Increment state index
        currentStateIndex = (currentStateIndex + 1) % stateCycle.length;
        
        // Continue animation
        setTimeout(animateNextState, 2000);
    }
    
    // Start the animation
    animateNextState();
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Code highlighting enhancement
function enhanceCodeHighlighting() {
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// Call after DOM load and after any dynamic content changes
enhanceCodeHighlighting();