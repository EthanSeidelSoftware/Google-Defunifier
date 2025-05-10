(function blockGoogleGames() {
  function replaceGameWithMessage() {
    const gameWindow = document.querySelector('.dG2XIf.EyBRub.Wnoohf.OJXvsb');
    if (gameWindow) {
      const message = document.createElement('div');
      message.style.cssText = `
        padding: 20px;
        font-size: 16px;
        color: #555;
        background-color: #f8f8f8;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
        font-family: Arial, sans-serif;
      `;
      
      // Add message text
      const text = document.createElement('span');
      text.textContent = 'This activity is not allowed by your district administrator.';
      message.appendChild(text);

      // Replace the game with the message
      gameWindow.replaceWith(message);
      console.log('Google game replaced with policy message and Learn More link.');
    }
  }

  // Initial check
  replaceGameWithMessage();

  // Observe DOM for dynamic content
  const observer = new MutationObserver(replaceGameWithMessage);
  observer.observe(document.body, { childList: true, subtree: true });

})();
