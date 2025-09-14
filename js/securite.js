document.addEventListener('contextmenu', event => event.preventDefault());


document.addEventListener('keydown', function(e) {
    // F12 ou Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
    if(e.key === "F12" || 
       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
       (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
        alert("Cette action est désactivée !");
    }
});
