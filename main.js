document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic (Fixed for Tailwind & ID mismatch)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('desktop-nav'); // Targeted correct ID

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle Tailwind utility classes to show/hide the menu as a dropdown
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-[70px]'); // Pushes menu below header
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('w-full');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('p-6');
            navMenu.classList.toggle('shadow-xl');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('absolute', 'top-[70px]', 'left-0', 'w-full', 'bg-white', 'flex-col', 'p-6', 'shadow-xl');
            });
        });
    }

    // 2. Form Submission Logic
    const rfqForm = document.querySelector('.rfq-form');
    if (rfqForm) {
        rfqForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Inquiry Received. Our Engineering team will contact you shortly.');
            rfqForm.reset(); 
        });
    }

    // 3. Dynamic Navigation Highlighting (Fixed for Live Server Clean URLs)
    // Get the current path and remove .html if the live server stripped it
    let currentPath = window.location.pathname.split("/").pop();
    currentPath = currentPath.replace(".html", "") || "index"; 

    const navLinks = document.querySelectorAll("#desktop-nav .nav-link");

    navLinks.forEach(link => {
        // Remove .html from the link's href to ensure a fair, clean comparison
        const linkHref = link.getAttribute("href").replace(".html", "");
        
        if (linkHref === currentPath) {
            // Active link styles
            link.classList.remove("text-gray-600");
            link.classList.add("text-[var(--primary)]");
            
            const underline = link.querySelector(".nav-underline");
            if (underline) {
                underline.classList.remove("w-0");
                underline.classList.add("w-full");
            }
        } else {
             // Inactive link styles
             link.classList.remove("text-[var(--primary)]");
             link.classList.add("text-gray-600");
             link.classList.remove("after:content-['']", "after:absolute", "after:w-full", "after:h-0.5", "after:bg-[var(--secondary)]", "after:left-0", "after:bottom-0");
        }
    });
});