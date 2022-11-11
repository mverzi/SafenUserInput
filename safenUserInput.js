/**
 * This function converts potentially harmful characters in a string on a website to safe characters
 * @param {string} formData 
 * @returns The website safe version of the formData string
 */
function htmlspecialchars(formData) {
    return formData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }