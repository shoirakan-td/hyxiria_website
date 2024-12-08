document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xRotate = (y / rect.height - 0.5) * 15; 
            const yRotate = (x / rect.width - 0.5) * 15; 
            section.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
            section.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.5)`;
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
            section.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';
        });
    });
});
