# Secure Menu Management System

This document explains how to use the secure menu system for easy maintenance and future additions.

## Overview

The menu system has been designed to be:
- **Secure**: Only editable via JSON file (no client-side modification functions)
- **Simple**: Easy to add/edit items by editing the JSON file
- **Maintainable**: Clean separation of data and presentation
- **Professional**: Consistent formatting and loading

## File Structure

```
assets/
├── data/
│   └── menu.json              # Menu data storage (ONLY way to edit menu)
├── js/
│   ├── menu-manager.js        # Core menu rendering system (read-only)
│   └── script.js              # Website functionality scripts
```

## How It Works

### 1. Data Storage (`menu.json`)
All menu items are stored in a structured JSON file:

```json
{
  "menuCategories": [
    {
      "id": "mains",
      "title": "Mains (ප්‍රධාන ආහාර)",
      "items": [
        {
          "id": "white_red_hoppers_curries",
          "titleSinhala": "සුදු /රතු ඉදි ආප්ප - හොදි වර්ග තෝරා ගන්න",
          "titleEnglish": "White / Red String Hoppers with Curries",
          "description": "Fresh white string hoppers served with your choice of traditional Sri Lankan curries",
          "price": "Priced by add-ons",
          "image": "assets/images/menu/white_string_hoppers_curries.webp",
          "alt": "White String Hoppers with Curries"
        }
      ]
    }
  ]
}
```

### 2. Dynamic Rendering (`menu-manager.js`)
The MenuManager class automatically:
- Loads data from `menu.json`
- Generates HTML for all menu categories and items
- Provides methods for adding, updating, and removing items

### 3. Helper Functions (`menu-helpers.js`)
Simple functions for common operations like `addMainDish()`, `addCurry()`, etc.

## Adding New Menu Items

### **ONLY Method: Edit JSON File (Secure)**

1. Open `assets/data/menu.json`
2. Find the appropriate category (`mains`, `curries`, `desserts`)
3. Add your new item to the `items` array:

```json
{
  "id": "new_item_id",
  "titleSinhala": "සිංහල නම",
  "titleEnglish": "English Name",
  "description": "Item description in English",
  "price": "LKR 200.00",
  "image": "assets/images/menu/your_image.webp",
  "alt": "Alt text for image"
}
```

4. Save the file - changes will appear immediately on page refresh

**Note**: For security reasons, there are no JavaScript functions to modify the menu from the browser. All menu changes must be made by editing the JSON file directly.

## Adding New Menu Categories

### Example: Adding a Beverages Category

Add to the `menuCategories` array in `menu.json`:
```json
{
  "id": "beverages",
  "title": "Beverages (පානීය)",
  "items": [
    {
      "id": "king_coconut",
      "titleSinhala": "තැඹිලි",
      "titleEnglish": "King Coconut",
      "description": "Fresh king coconut water",
      "price": "LKR 150.00",
      "image": "assets/images/menu/king_coconut.webp",
      "alt": "King Coconut"
    }
  ]
}
```

## Managing Existing Items

### Update an Item
Edit the item directly in `menu.json`:
```json
{
  "id": "white_red_hoppers_curries",
  "price": "LKR 250.00",
  "description": "Updated description"
}
```

### Remove an Item
Delete the item object from the `items` array in `menu.json`.

## Image Management

1. **Add new images** to appropriate folder:
   - Menu items: `assets/images/menu/`
   - Hero images: `assets/images/hero/`

2. **Use WebP format** when possible for better performance

3. **Naming convention**: Use descriptive names with underscores
   - ✅ `chicken_kottu_roti.webp`
   - ❌ `img1.jpg`

## Best Practices

### 1. Consistent Data Structure
Always include all required fields:
- `id` (unique identifier)
- `titleSinhala` (Sinhala name)
- `titleEnglish` (English name)
- `description` (English description)
- `price` (formatted with "LKR" prefix)
- `image` (relative path from website root)
- `alt` (accessibility text)

### 2. ID Naming Convention
Use descriptive, snake_case IDs:
- ✅ `fish_curry_large`
- ✅ `coconut_sambol_spicy`
- ❌ `item1`
- ❌ `curry-2`

### 3. Price Formatting
Be consistent with price format:
- ✅ `"LKR 200.00"`
- ✅ `"Priced by add-ons"`
- ❌ `"Rs. 200"`
- ❌ `"200 rupees"`

### 4. Backup Before Major Changes
Always backup `menu.json` before making significant changes.

## Troubleshooting

### Menu Not Loading
1. Check browser console for errors (F12)
2. Verify `menu.json` is valid JSON (use online JSON validator)
3. Ensure all image paths are correct
4. Check that `menu-manager.js` is loaded before other scripts

### Images Not Displaying
1. Verify image file exists at specified path
2. Check image file permissions
3. Ensure image path starts with `assets/images/`

### Items Not Appearing
1. Check JSON syntax (commas, quotes, brackets)
2. Verify item has all required fields
3. Check browser console for JavaScript errors

## Development Tips

### Testing New Items
Use the browser console to test before adding to JSON:
```javascript
// Test adding an item
window.menuHelpers.examples.addNewMainDish();

// Check current menu data
window.menuManager.getMenuData();
```

### Debugging
Enable verbose logging by adding to console:
```javascript
// See what's happening during menu load
window.menuManager.loadMenuData().then(() => {
  console.log('Menu loaded:', window.menuManager.getMenuData());
});
```

This modular system makes your website much more maintainable and allows for easy expansion of your menu without touching HTML or CSS code!