// Your profile content. Edit this file and re-upload it to update the site.
window.PROFILE = {
    name: "Christian Puerin",
    lead: "BSIT student at Cebu Eastern College. I build web applications with Django and I'm learning system administration and networking. I'm looking for an internship where I can learn and contribute.",
    intro: "BSIT student at Cebu Eastern College. I build web applications with Django and I'm learning system administration and networking. I'm looking for an internship where I can learn and contribute.",
    interests: [
        "Web applications",
        "Django",
        "Networking",
        "System administration"
    ],
    email: "puerinchristian606@gmail.com",
    facebook: "https://www.facebook.com/cyanfinch.puerin",
    phone: "+639951028490"
};

// Keep project cards equal-height within each grid row.
var projectCardStyles = document.createElement("style");
projectCardStyles.textContent = ".project-grid { align-items: stretch; } .project-grid > .project { display: flex; flex-direction: column; } .project-grid > .project > .project-body { flex: 1; }";
document.head.appendChild(projectCardStyles);

// Point the resume button to the PDF stored in the repository.
var resumeLink = document.querySelector('.hero-actions a[download]');
if (resumeLink) {
    resumeLink.href = "ChristianPuerin%20Resume.pdf";
    resumeLink.download = "ChristianPuerin Resume.pdf";
}

// Show the portfolio website in the contact list's GitHub row.
var contactLinks = document.querySelectorAll('.contact-list a');
contactLinks.forEach(function (link) {
    if (link.textContent.trim() === "GitHub") {
        link.href = "https://puerinchristian.github.io/MyPortfolio/";
        link.textContent = "Portfolio";
        link.setAttribute("aria-label", "Portfolio website");
        var icon = link.parentElement.querySelector('span[aria-hidden="true"]');
        if (icon) icon.textContent = "↗";
    }
});
