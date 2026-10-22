
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('sparkle-background')) return;

  const container = document.createElement('div');
  container.id = 'sparkle-background';
  container.setAttribute('aria-hidden', 'true');

  const count = 65;

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('span');

    sparkle.className =
      i % 4 === 0 ? 'sparkle star' : 'sparkle';

    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.setProperty(
      '--duration',
      `${2 + Math.random() * 4}s`
    );
    sparkle.style.setProperty(
      '--delay',
      `${-Math.random() * 6}s`
    );

    container.appendChild(sparkle);
  }

  document.body.prepend(container);
});
