/**
 * Bulk Orders Content Manager
 * Handles loading and rendering bulk orders content from JSON
 */

class BulkOrdersManager {
    constructor() {
        this.bulkOrdersData = null;
        this.container = null;
    }

    /**
     * Initialize the bulk orders system
     */
    async init() {
        try {
            await this.loadBulkOrdersData();
            this.setupContainer();
            this.renderBulkOrders();
        } catch (error) {
            console.error('Failed to initialize bulk orders:', error);
            this.showFallback();
        }
    }

    /**
     * Load bulk orders data from JSON file
     */
    async loadBulkOrdersData() {
        try {
            const response = await fetch('assets/data/bulk-orders.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.bulkOrdersData = data.bulkOrders;
        } catch (error) {
            console.error('Failed to load bulk orders data:', error);
            throw error;
        }
    }

    /**
     * Setup the container in the DOM
     */
    setupContainer() {
        this.container = document.getElementById('bulk-orders-content');
        if (!this.container) {
            console.error('Bulk orders container not found');
            return;
        }
    }

    /**
     * Render the complete bulk orders section
     */
    renderBulkOrders() {
        if (!this.bulkOrdersData || !this.container) {
            console.error('Bulk orders data or container not available');
            return;
        }

        const data = this.bulkOrdersData;
        
        this.container.innerHTML = `
            <div class="bulk-orders-info">
                <div class="bulk-intro">
                    <h3>${data.intro.heading}</h3>
                    <p>${data.intro.description}</p>
                </div>

                <div class="event-types">
                    <h4>${data.eventTypes.heading}</h4>
                    <div class="event-grid">
                        ${data.eventTypes.events.map(event => `
                            <div class="event-item">
                                <i class="${event.icon}"></i>
                                <span>${event.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="bulk-features">
                    ${data.features.map(feature => `
                        <div class="feature-item">
                            <i class="${feature.icon}"></i>
                            <div>
                                <h5>${feature.title}</h5>
                                <p>${feature.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="bulk-contact">
                <div class="bulk-contact-card">
                    <h3>${data.contact.heading}</h3>
                    <p>${data.contact.description}</p>
                    
                    <div class="contact-details">
                        <div class="contact-method">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Call for Bulk Orders</h4>
                                <a href="tel:${data.contact.phone.number}" class="phone-link">${data.contact.phone.display}</a>
                                <p>${data.contact.phone.hours}</p>
                            </div>
                        </div>
                    </div>

                    <div class="order-process">
                        <h4>${data.contact.orderProcess.heading}</h4>
                        <ol>
                            ${data.contact.orderProcess.steps.map(step => `
                                <li>${this.parseMarkdown(step)}</li>
                            `).join('')}
                        </ol>
                    </div>

                    <div class="bulk-note">
                        <p>${this.parseMarkdown(data.contact.note)}</p>
                    </div>
                </div>
            </div>
        `;

        // Add loaded class for animations
        this.container.classList.add('loaded');
    }

    /**
     * Simple markdown parser for **bold** text
     */
    parseMarkdown(text) {
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    /**
     * Show fallback content if loading fails
     */
    showFallback() {
        if (this.container) {
            this.container.innerHTML = `
                <div class="bulk-orders-fallback">
                    <p>For bulk orders, please call us at <a href="tel:+94777468551"><strong>+94 77 746 8551</strong></a></p>
                </div>
            `;
        }
    }
}

// Initialize bulk orders manager when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    const bulkOrdersManager = new BulkOrdersManager();
    await bulkOrdersManager.init();
});