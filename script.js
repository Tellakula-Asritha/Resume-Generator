document.addEventListener("DOMContentLoaded", function () {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));
    if (resumeData) {
        const resumeContent = `
            <h2>${resumeData.name}</h2>
            <p><strong>Email:</strong> ${resumeData.email}</p>
            <p><strong>Phone:</strong> ${resumeData.phone}</p>
            <h3>Education</h3>
            <p>${resumeData.education}</p>
            <h3>Experience</h3>
            <p>${resumeData.experience}</p>
            <h3>Certificates</h3>
            <p>${resumeData.certificates}</p>
            <h3>LinkedIn</h3>
            <p>${resumeData.linkedin}</p>
            <h3>Languages</h3>
            <p>${resumeData.languages}</p>
            <h3>Projects</h3>
            <p>${resumeData.projects}</p>
            <h3>Skills</h3>
            <p>${resumeData.skills}</p>
        `;
        
        document.getElementById("resume-content").innerHTML = resumeContent;
    }
});

function downloadPDF() {
    const element = document.getElementById("resume-content");
    html2pdf().from(element).save("Resume.pdf");
}

function goBack() {
    window.location.href = "index.html";
}
function redirectToResume(){
    window.location.href="resume.html"
}
