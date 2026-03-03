# Dashboard Project Updates

## Overview
This document outlines the changes needed in the **Dashboard project** to ensure proper image handling when blogs are uploaded and displayed on the frontend website.

## Current Issue
When images are uploaded through the dashboard, the API returns relative paths like `/uploads/1761943829900-chatbot_01.png`. These paths work within the dashboard context but cause 404 errors when accessed from the frontend website.

## Required Changes

### Option 1: Return Full URLs in API Response (Recommended)

Update the blog API endpoints in the dashboard to return **absolute URLs** instead of relative paths.

#### Files to Update:
- `api/public/blogs` endpoint (list of blogs)
- `api/public/blogs/:slug` endpoint (single blog)

#### Change Required:
Instead of returning:
```json
{
  "featuredImage": "/uploads/1761943829900-chatbot_01.png"
}
```

Return:
```json
{
  "featuredImage": "https://dashboard.tymortech.com/uploads/1761943829900-chatbot_01.png"
}
```

#### Implementation Example:

**Before:**
```javascript
blog.featuredImage = `/uploads/${uploadedFile.filename}`;
```

**After:**
```javascript
const DASHBOARD_URL = process.env.DASHBOARD_URL || 'https://dashboard.tymortech.com';
blog.featuredImage = `${DASHBOARD_URL}/uploads/${uploadedFile.filename}`;
```

### Option 2: Add Image Proxy Endpoint (Alternative)

If you cannot modify the API response format, add an image proxy endpoint that serves images:

```
GET /api/images/uploads/:filename
```

This endpoint should:
1. Read the image file from the uploads directory
2. Serve it with proper content-type headers
3. Handle 404 errors gracefully

## Recommended Approach

**Use Option 1** - Return full URLs in the API response because:
- ✅ Cleaner architecture
- ✅ Works with any frontend
- ✅ No additional proxy overhead
- ✅ Images load faster directly
- ✅ Better caching

## Environment Variables Needed

Add this to your dashboard's `.env` file:
```env
DASHBOARD_URL=https://dashboard.tymortech.com
# or for Azure deployment:
DASHBOARD_URL=https://tymordashboard-bxbwe5dbedaccmdt.eastus-01.azurewebsites.net
```

## Testing

After implementing changes:

1. Upload a new blog post with an image via the dashboard
2. Check the API response - `featuredImage` should be a full URL
3. Verify the image displays correctly on the frontend website
4. Check browser console for any 404 errors

## Additional Notes

- The frontend website has already been updated to handle both relative and absolute URLs
- If images still don't work after this change, check:
  - CORS settings on the dashboard
  - Image file permissions
  - CDN configuration if applicable

## Support

The frontend website will continue to work with relative paths by converting them to full URLs, but having the dashboard return full URLs is the best practice for better performance and reliability.

