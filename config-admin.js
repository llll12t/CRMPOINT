// config.js (for Admin HTML)
const CONFIG = {
  // Google Apps Script (GAS) Web App URL
  // IMPORTANT: Replace with YOUR deployed GAS Web App URL
  // This is the URL you get after deploying your Apps Script as a Web App.
  // For Admin: "Execute as: Me", "Who has access: Only myself" (recommended for security)
  // For LIFF User App: "Execute as: Me", "Who has access: Anyone, even anonymous"
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwwrFy3cy0_zEzRUfddGXwt2mD-pvv8C65UyjkhB7raOVi3cHPVuFOcStoQNecVBfLW/exec',

  // For Admin HTML, we use the same GAS_URL for both GET and POST requests
  CLOUD_FUNCTION_GET_URL: 'https://script.google.com/macros/s/AKfycbwwrFy3cy0_zEzRUfddGXwt2mD-pvv8C65UyjkhB7raOVi3cHPVuFOcStoQNecVBfLW/exec',
  CLOUD_FUNCTION_POST_URL: 'https://script.google.com/macros/s/AKfycbwwrFy3cy0_zEzRUfddGXwt2mD-pvv8C65UyjkhB7raOVi3cHPVuFOcStoQNecVBfLW/exec',
};
