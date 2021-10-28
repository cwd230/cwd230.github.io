let options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

// shows when document was last modified
document.getElementById("lastUpdated").textContent = document.lastModified;

// shows current year for copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();