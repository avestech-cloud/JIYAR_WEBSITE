document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenuContainer = document.getElementById('nav-menu-container');

    if (mobileMenuBtn && navMenuContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenuContainer.classList.toggle('active');
        });

        // Close menu when clicking links
        const navLinks = navMenuContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenuContainer.classList.remove('active');
            });
        });
    }

    // 2. Form Submission Logic
    const rfqForm = document.querySelector('.rfq-form');
    if (rfqForm) {
        rfqForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Inquiry Received. Our Engineering team will contact you shortly.');
            rfqForm.reset(); // Clear form after submission
        });
    }

    // 3. Dynamic Navigation Highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("#desktop-nav .nav-link");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        
        if (linkHref === currentPath) {
            // Active link styles (keep font-bold)
            link.classList.remove("text-gray-600");
            link.classList.add("text-[var(--primary)]");
            
            // Lock underline
            const underline = link.querySelector(".nav-underline");
            if (underline) {
                underline.classList.remove("w-0");
                underline.classList.add("w-full");
            }
        } else {
             // Inactive link styles (keep font-bold)
             link.classList.remove("text-[var(--primary)]");
             link.classList.add("text-gray-600");
             
             // Remove hardcoded active underline classes if they exist from a copy/paste
             link.classList.remove("after:content-['']", "after:absolute", "after:w-full", "after:h-0.5", "after:bg-[var(--secondary)]", "after:left-0", "after:bottom-0");
        }
    });
});