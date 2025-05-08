// Hover effect for template cards
document.querySelectorAll('.template-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
