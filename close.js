document.querySelector('.copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText('npx create-strapi-app@latest');
    alert('Command copied to clipboard!');
});
