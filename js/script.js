// Membuka sertifikat
function openCertificate() {
    const modal = document.getElementById("certificateModal");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Menutup sertifikat
function closeCertificate(event) {
    const modal = document.getElementById("certificateModal");

    // Modal ditutup jika tombol X atau area luar gambar diklik
    if (
        event.target === modal ||
        event.target.classList.contains("modal-close")
    ) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

// Menutup sertifikat menggunakan tombol Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const modal = document.getElementById("certificateModal");

        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});