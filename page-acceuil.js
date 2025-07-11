const checkboxes = document.querySelectorAll('.dropdown input');

// Ferme les autres si un est ouvert
checkboxes.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.checked) {
            checkboxes.forEach((other) => {
                if (other !== input) {
                    other.checked = false;
                }
            });
        }
    });
});

// Ferme tous les dropdowns si on clique en dehors
document.addEventListener('click', (e) => {
    let clickedInsideDropdown = false;

    checkboxes.forEach((input) => {
        if (input.parentElement.contains(e.target)) {
            clickedInsideDropdown = true;
        }
    });

    if (!clickedInsideDropdown) {
        checkboxes.forEach((input) => {
            input.checked = false;
        });
    }
});