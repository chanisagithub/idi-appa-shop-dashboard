# Idi Appa Shop Website

A modern, responsive website for your local food business with Uber Eats integration.

## 🚀 Features

- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Modern Design** - Clean, professional, and eye-catching
- **Fast Loading** - Optimized for performance
- **SEO Friendly** - Structured for search engines
- **Interactive** - Smooth animations and hover effects
- **Contact Form** - Customer inquiries made easy
- **Uber Eats Integration** - Direct link to your delivery platform

## 📁 File Structure

```
Idi Appa Shop/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Update Business Information

**In `index.html`, update these sections:**

- **Business Name**: Change "Idi Appa Shop" throughout the file
- **Phone Number**: Update "(555) 123-4567" to your actual number
- **Email**: Change "hello@idiappashop.com" to your email
- **Address**: Update "123 Food Street, Your City, ST 12345"
- **Hours**: Modify "Mon-Sun: 11:00 AM - 10:00 PM"

### 2. Update Your Menu Items

Replace the 7 sample menu items with your actual dishes:

```html
<div class="menu-item">
    <div class="menu-image">
        <img src="YOUR_FOOD_IMAGE_URL" alt="Your Dish Name" />
    </div>
    <div class="menu-content">
        <h3>Your Dish Name</h3>
        <p>Description of your dish</p>
        <span class="price">$XX.XX</span>
    </div>
</div>
```

### 3. Add Your Uber Eats Link

**In `script.js`, update line 87:**
```javascript
uberEatsLink.href = 'YOUR_ACTUAL_UBER_EATS_URL';
```

### 4. Add Your Own Images

Replace the placeholder images with your own food photos:
- Upload your images to a hosting service (like Cloudinary, Imgur, or your server)
- Replace the `src` URLs in the HTML file

### 5. Customize Colors

**In `styles.css`, the main brand color is defined as `#e74c3c` (red). To change it:**
1. Find and replace `#e74c3c` with your preferred color
2. Also update `#c0392b` (darker variant) with a darker shade of your color

### 6. Update Social Media Links

**In `index.html`, update the footer social links:**
```html
<div class="social-links">
    <a href="YOUR_FACEBOOK_URL"><i class="fab fa-facebook"></i></a>
    <a href="YOUR_INSTAGRAM_URL"><i class="fab fa-instagram"></i></a>
    <a href="YOUR_TWITTER_URL"><i class="fab fa-twitter"></i></a>
</div>
```

## 🌐 How to Launch Your Website

### Option 1: Simple File Hosting
1. Upload all files to a web hosting service (like Netlify, Vercel, or GitHub Pages)
2. Your website will be live!

### Option 2: Local Testing
1. Open `index.html` in your web browser
2. Test all functionality locally

### Option 3: Professional Hosting
1. Purchase a domain name
2. Get web hosting (shared hosting is fine for this site)
3. Upload files via FTP or hosting panel

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly hamburger menu
- Touch-optimized buttons
- Responsive image sizing
- Mobile-first design approach

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for search engines
- Optimized images with alt text
- Fast loading times
- Mobile-responsive design

## 🔧 Technical Features

- **CSS Grid & Flexbox** for modern layouts
- **Intersection Observer** for scroll animations
- **CSS Custom Properties** for easy theming
- **Modern JavaScript** (ES6+)
- **Progressive Enhancement** approach

## 📞 Support

If you need help customizing your website:
1. Update the content in the HTML file
2. Modify colors in the CSS file
3. Test everything in a web browser
4. Upload to your web hosting service

## 🚀 Going Live Checklist

- [ ] Update all business information
- [ ] Replace menu items with your actual dishes
- [ ] Add your real food photos
- [ ] Update Uber Eats link
- [ ] Add your social media links
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Upload to web hosting
- [ ] Set up custom domain (optional)

## 💡 Pro Tips

1. **High-Quality Images**: Use professional food photos for best results
2. **Regular Updates**: Keep your menu and prices current
3. **SEO**: Add your business to Google My Business
4. **Analytics**: Consider adding Google Analytics to track visitors
5. **Speed**: Compress images for faster loading

---

**Your website is ready to go! Just customize the content and launch it online.** 🎉