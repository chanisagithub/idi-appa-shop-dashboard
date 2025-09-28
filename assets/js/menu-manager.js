/**
 * Menu Management System for Idi Aappa Website
 * This module handles dynamic menu rendering and management
 */

class MenuManager {
    constructor() {
        this.menuData = null;
        this.menuContainer = null;
    }

    /**
     * Initialize the menu system
     */
    async init() {
        try {
            await this.loadMenuData();
            this.setupMenuContainer();
            this.renderMenu();
        } catch (error) {
            console.error('Failed to initialize menu:', error);
            this.showFallbackMenu();
        }
    }

    /**
     * Load menu data from JSON file
     */
    async loadMenuData() {
        try {
            const response = await fetch('assets/data/menu.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.menuData = await response.json();
        } catch (error) {
            console.error('Failed to load menu data:', error);
            throw error;
        }
    }

    /**
     * Setup the menu container in the DOM
     */
    setupMenuContainer() {
        this.menuContainer = document.getElementById('menu-categories-container');
        if (!this.menuContainer) {
            console.error('Menu container not found');
            return;
        }
    }

    /**
     * Render the complete menu
     */
    renderMenu() {
        if (!this.menuData || !this.menuContainer) {
            console.error('Menu data or container not available');
            return;
        }

        // Clear existing content
        this.menuContainer.innerHTML = '';

        // Render each category
        this.menuData.menuCategories.forEach(category => {
            const categoryElement = this.createCategoryElement(category);
            this.menuContainer.appendChild(categoryElement);
        });
    }

    /**
     * Create a menu category element
     */
    createCategoryElement(category) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category';
        categoryDiv.setAttribute('data-category', category.id);

        const titleElement = document.createElement('h3');
        titleElement.className = 'category-title';
        titleElement.textContent = category.title;

        const gridElement = document.createElement('div');
        gridElement.className = 'menu-grid';

        // Add menu items to the grid
        category.items.forEach(item => {
            const itemElement = this.createMenuItemElement(item);
            gridElement.appendChild(itemElement);
        });

        categoryDiv.appendChild(titleElement);
        categoryDiv.appendChild(gridElement);

        return categoryDiv;
    }

    /**
     * Create a menu item element
     */
    createMenuItemElement(item) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.setAttribute('data-item-id', item.id);

        // Generate spice level indicators
        const spiceLevelHTML = this.generateSpiceLevel(item.spiceLevel);
        
        // Generate ingredients HTML
        const ingredientsHTML = item.specialIngredients ? 
            `<div class="special-ingredients">
                ${item.specialIngredients.map(ingredient => 
                    `<span class="ingredient ingredient-float">${ingredient}</span>`
                ).join('')}
            </div>` : '';

        itemDiv.innerHTML = `
            <div class="menu-image">
                <img src="${item.image}" alt="${item.alt}" loading="lazy" />
                ${spiceLevelHTML}
            </div>
            <div class="menu-content">
                <h4>${item.titleSinhala}</h4>
                <h5>${item.titleEnglish}</h5>
                <p>${item.description}</p>
                ${ingredientsHTML}
                <span class="price">${item.price}</span>
            </div>
        `;

        return itemDiv;
    }

    /**
     * Generate spice level indicators
     */
    generateSpiceLevel(spiceLevel) {
        if (!spiceLevel) return '';
        
        const spiceMap = {
            'mild': 1,
            'medium': 2,
            'hot': 3
        };
        
        const spiceCount = spiceMap[spiceLevel] || 0;
        if (spiceCount === 0) return '';
        
        // Create individual chili spans
        const chiliSpans = [];
        for (let i = 0; i < spiceCount; i++) {
            chiliSpans.push(`<span class="chili">🌶️</span>`);
        }
        
        return `<div class="spice-level ${spiceLevel}">
            ${chiliSpans.join('')}
        </div>`;
    }

    // Dynamic modification methods removed for security
    // Menu can only be updated by editing menu.json file

    /**
     * Get current menu data (useful for debugging or exporting)
     */
    getMenuData() {
        return this.menuData;
    }

    /**
     * Show fallback menu if dynamic loading fails
     */
    showFallbackMenu() {
        console.log('Showing fallback menu - dynamic menu loading failed');
        // The existing HTML menu will remain visible
    }
}

// Initialize menu manager when DOM is loaded (private instance)
document.addEventListener('DOMContentLoaded', async () => {
    const menuManager = new MenuManager();
    await menuManager.init();
});