
// Open certificate modal

function openCertificate() {
    const modal = document.getElementById(
        "certificateModal"
    );

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


// Close certificate modal

function closeCertificate(event) {
    const modal = document.getElementById(
        "certificateModal"
    );

    if (
        event.target === modal ||
        event.target.classList.contains("modal-close")
    ) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// Close modal using Escape key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        const modal = document.getElementById(
            "certificateModal"
        );

        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

});
