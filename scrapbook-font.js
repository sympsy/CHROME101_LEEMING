document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed.');

    const scrapbookTexts = document.getElementsByClassName("scrapbook-text-container");

    for (let i = 0; i < scrapbookTexts.length; i++) {
        const container = scrapbookTexts[i];
        const textItem = container.getElementsByClassName("scrapbook-text")[0];

        if (textItem) {
            const originalText = textItem.textContent;
            textItem.innerHTML = ''; // Clear original text

            for (let j = 0; j < originalText.length; j++) {
                const char = originalText[j];
                const charSpan = document.createElement('span');
                charSpan.textContent = char;

                // Random Styling
                charSpan.style.fontSize = Math.floor(Math.random() * 20) + 70 + 'px';
                charSpan.style.backgroundColor = `rgb(${Math.floor(Math.random() * 156) + 100}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 156) + 100})`;
                charSpan.style.fontFamily = ['Arial', 'Verdana', 'Times New Roman'][Math.floor(Math.random() * 3)];
                charSpan.style.transform = `rotate(${Math.random() * 40 - 25}deg)`;

                // Add Box Shadow (Drop Shadow for the box)
                charSpan.style.boxShadow = `${Math.floor(Math.random() * 8)}px ${Math.floor(Math.random() * 8)}px ${Math.floor(Math.random() * 10) + 5}px rgba(0, 0, 0, 0.7)`;

                // Add display inline-block.
                charSpan.style.display = 'inline-block';

                textItem.appendChild(charSpan);
            }
        }
    }
});