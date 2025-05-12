// JS: Wrap non-empty text nodes inside the .navbar-brand element with a span for styling.
document.addEventListener('DOMContentLoaded', function() {
  // Select the anchor element with the class 'navbar-brand'
  var navbarBrand = document.querySelector('.navbar-brand');
  if (navbarBrand) {
    // Loop through each child node of the navbar-brand element
    Array.from(navbarBrand.childNodes).forEach(function(node) {
      // Check if the node is a text node and contains non-whitespace characters
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
        // Create a span element and set its class for styling
        var span = document.createElement('span');
        span.className = 'navbar-brand-text';
        // Set the span's text content to the trimmed text from the node
        span.textContent = node.textContent.trim();
        // Replace the text node with the new span element
        navbarBrand.replaceChild(span, node);
      }
    });
  }
});
