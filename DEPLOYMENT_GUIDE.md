# Pietrobon & Michel - Static Site Deployment Guide

## 📦 Static Export Complete!

Your static site has been successfully built and packaged for Apache hosting.

### 📁 Files Generated

- **`pietrobon-michel-static-site-complete.tar.gz`** (70MB) - Complete static site package with all Apache files
- **`dist/`** folder - Contains all static files ready for upload

### 📋 Additional Files Included

- **`.htaccess`** - Apache configuration with rewrite rules, compression, caching, and security headers
- **`crossdomain.xml`** - Cross-domain policy for Flash/Adobe applications
- **`security.txt`** - Security contact information for vulnerability reporting
- **`robots.txt`** - SEO robots file
- **`sitemap.xml`** - SEO sitemap
- **`manifest.json`** - PWA manifest
- **Favicon files** - Complete favicon set (ico, svg, apple-touch-icon)

## 🚀 Apache Deployment Instructions

### 1. Upload Files to Apache Server

```bash
# Upload the complete tar.gz file to your Apache server
scp pietrobon-michel-static-site-complete.tar.gz user@your-server.com:/var/www/html/

# Or upload the dist/ folder contents directly
scp -r dist/* user@your-server.com:/var/www/html/
```

### 2. Extract on Server (if using tar.gz)

```bash
# SSH into your server
ssh user@your-server.com

# Navigate to web root
cd /var/www/html/

# Extract the archive
tar -xzf pietrobon-michel-static-site-complete.tar.gz

# Set proper permissions
chmod -R 755 /var/www/html/
chown -R www-data:www-data /var/www/html/
```

### 3. Apache Configuration

**The `.htaccess` file is already included in the package!** It contains:

```apache
# Enable mod_rewrite
RewriteEngine On

# Handle client-side routing (React Router)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType video/webm "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### 4. Verify Deployment

1. **Check main page**: Visit `https://your-domain.com/`
2. **Test routing**: Try `https://your-domain.com/for-dentists`
3. **Check assets**: Verify images and videos load correctly
4. **Test mobile**: Ensure responsive design works

## 📋 Site Features Included

### ✅ **Main Pages**
- **Homepage** - Slide-based entry with video background
- **For Dentists** - Professional resources and forms
- **For Patients** - Location and visiting information
- **About/Credo** - Company values and philosophy
- **Testimonials** - Patient gallery
- **Team Profiles** - Nicola Pietrobon & Reto Michel

### ✅ **Sub-Pages**
- **Hotels** - Recommended accommodations
- **Parking** - Parking garage information
- **Contact** - Contact information
- **Privacy & Terms** - Legal pages

### ✅ **Features**
- **Multi-language** support (EN, DE, IT, RU)
- **Responsive design** for all devices
- **Video backgrounds** (WebM format)
- **Smooth animations** with Framer Motion
- **SEO optimized** with meta tags
- **PWA ready** with manifest

## 🔧 Troubleshooting

### Common Issues

1. **404 on page refresh**: Ensure Apache rewrite rules are configured
2. **Images not loading**: Check file permissions (755 for directories, 644 for files)
3. **Videos not playing**: Verify WebM support in browser
4. **Slow loading**: Enable gzip compression in Apache

### File Structure

```
/var/www/html/
├── index.html              # Main entry point
├── assets/                 # All static assets
│   ├── images/            # Images and videos
│   ├── *.js              # JavaScript bundles
│   └── *.css             # Stylesheets
├── locales/              # Translation files
├── manifest.json         # PWA manifest
├── robots.txt           # SEO robots file
└── sitemap.xml          # SEO sitemap
```

## 📞 Support

If you encounter any issues during deployment, check:
1. Apache error logs: `/var/log/apache2/error.log`
2. File permissions and ownership
3. Apache modules (mod_rewrite, mod_deflate, mod_expires)
4. Browser console for JavaScript errors

---

**Deployment completed successfully!** 🎉

Your Pietrobon & Michel dental laboratory website is now ready for production use.
