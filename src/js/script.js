// *** ACCORDEON ***

document.addEventListener('DOMContentLoaded', () => {
    const detailsElements = document.querySelectorAll('details');
  
    // Fonction pour fermer toutes les sections sauf celle cliquée
    detailsElements.forEach(detail => {
      detail.addEventListener('click', () => {
        // Fermer toutes les autres sections
        detailsElements.forEach(otherDetail => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute('open');
          }
        });
      });
    });
  });
  
  