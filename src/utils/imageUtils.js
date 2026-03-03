/**
 * Normalizes image URLs from external APIs
 * Converts relative paths to full URLs based on the dashboard domain
 * @param {string} imagePath - The image path from the API
 * @returns {string|null} - The normalized full URL or null if invalid
 */
export function normalizeImageUrl(imagePath) {
  if (!imagePath) return null;

  // If already a full URL, return it as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // If it's a relative path starting with /uploads/, convert to full URL
  if (imagePath.startsWith('/uploads/')) {
    // Try multiple possible dashboard URLs
    const dashboardUrls = [
      process.env.NEXT_PUBLIC_DASHBOARD_API_URL,
      process.env.DASHBOARD_API_URL,
      "https://dashboard.tymortech.com",
      "https://tymordashboard-bxbwe5dbedaccmdt.eastus-01.azurewebsites.net"
    ].filter(Boolean); // Remove undefined/null values
    
    // Use the first available URL, or default to dashboard.tymortech.com
    const DASHBOARD_API = dashboardUrls[0] || "https://dashboard.tymortech.com";
    
    // Remove trailing slash from DASHBOARD_API if present
    const baseUrl = DASHBOARD_API.replace(/\/$/, '');
    
    return `${baseUrl}${imagePath}`;
  }

  // If it's a local path (starts with /), return as-is for Next.js to handle
  if (imagePath.startsWith('/')) {
    return imagePath;
  }

  // For any other format, try to construct a full URL
  return imagePath;
}

/**
 * Checks if an image URL is from an external source
 * @param {string} imageUrl - The image URL
 * @returns {boolean} - True if external, false if local
 */
export function isExternalImage(imageUrl) {
  if (!imageUrl) return false;
  
  return imageUrl.startsWith('http://') || imageUrl.startsWith('https://');
}

