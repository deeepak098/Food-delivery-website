function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(pageId);
    if (selectedSection) {


        selectedSection.style.display = 'block';
    }
}