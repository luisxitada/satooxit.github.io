document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-now, .primary, .price-card button');
    const navLinks = document.querySelectorAll('nav a');
    
    // Purchase/Action Buttons
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newLocal = 'MSG BY SATOO';
            Swal.fire({
                title: newLocal,
                text: 'If you want to buy this cheat, please contact us on telegram',
                showCancelButton: true,
                confirmButtonText: 'telegram',
                cancelButtonText: 'Cancel',
                imageUrl: 'https://media.tenor.com/Q0lZ_pDCeS4AAAAm/itachi-uchiha.webp', 
                imageWidth: 308,
                imageHeight: 308,
                imageAlt: 'Custom image'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://t.me/satooST';
                }
            });
        });
    });

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Header Background
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.17)';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.59)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            header.style.boxShadow = 'none';
        }
    });
});
