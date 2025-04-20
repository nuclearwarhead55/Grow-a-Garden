document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // --- Random Background Logic (Only for Home Page) ---
    if (document.body.classList.contains('home-page')) {
        console.log("Home page detected. Initializing background script.");
        
        const backgroundImages = [
            'Images/Background.png',
            'Images/Background1.png',
            'Images/Background2.png',
            'Images/Background3.png'
        ];
        console.log("Available background images:", backgroundImages);

        if (backgroundImages.length === 0) {
            console.error("No background images listed in the script!");
            return; // Stop background execution if no images are available
        }

        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const selectedImage = backgroundImages[randomIndex];
        console.log(`Random index selected: ${randomIndex}, Image: ${selectedImage}`);

        // Add a random query string for cache busting
        const cacheBustingUrl = `${selectedImage}?t=${new Date().getTime()}`;
        console.log(`Applying background URL (with cache busting): ${cacheBustingUrl}`);

        const container = document.querySelector('.container');
        
        if (container) {
            try {
                container.style.backgroundImage = `url('${cacheBustingUrl}')`;
                console.log("Successfully applied background image style to .container element.");
            } catch (error) {
                console.error("Error applying background image style:", error);
            }
        } else {
            console.error('CRITICAL: Could not find the .container element in the HTML!');
        }
    } else {
        console.log("Not the home page, skipping random background script.");
    }

    // --- Seeds Page Specific Logic ---
    if (document.body.classList.contains('page-seeds')) {
        console.log("Seeds page detected. Initializing seeds interaction.");
        const seedsData = [
            // Data from your table
            { name: 'Carrot', buy: 10, sell: 20, multi: '❌', tier: 'Common', rarity: '100%', shop: '5-25' },
            { name: 'Strawberry', buy: 50, sell: 15, multi: '✅', tier: 'Common', rarity: '100%', shop: '1-5' },
            { name: 'Blueberry', buy: 400, sell: 20, multi: '✅', tier: 'Uncommon', rarity: '100%', shop: '2-5' },
            { name: 'Orange Tulip', buy: 600, sell: 767, multi: '❌', tier: 'Uncommon', rarity: '15%', shop: '5-25' },
            { name: 'Tomato', buy: 800, sell: 30, multi: '✅', tier: 'Rare', rarity: '100%', shop: '1-3' },
            { name: 'Corn', buy: 1300, sell: 40, multi: '✅', tier: 'Rare', rarity: '30%', shop: '1-3' },
            { name: 'Daffodil', buy: 1000, sell: '~1,000', multi: '❌', tier: 'Rare', rarity: '~7%', shop: '?' },
            { name: 'Watermelon', buy: 2500, sell: 3000, multi: '❌', tier: 'Legendary', rarity: '12%', shop: '1-6' },
            { name: 'Pumpkin', buy: 3000, sell: 3500, multi: '❌', tier: 'Legendary', rarity: '8%', shop: '1-4' },
            { name: 'Apple', buy: 3250, sell: 275, multi: '✅', tier: 'Legendary', rarity: '10%', shop: '1-3' },
            { name: 'Bamboo', buy: 4000, sell: 4000, multi: '❌', tier: 'Legendary', rarity: '30%', shop: '10-20' },
            { name: 'Coconut', buy: 6000, sell: 400, multi: '✅', tier: 'Mythical', rarity: '0.35%', shop: '1-2' },
            { name: 'Cactus', buy: 15000, sell: 3400, multi: '✅', tier: 'Mythical', rarity: '0.25%', shop: '2-5' },
            { name: 'Dragon Fruit', buy: 50000, sell: 4750, multi: '✅', tier: 'Mythical', rarity: '0.05%', shop: '1-2' },
            { name: 'Mango', buy: 100000, sell: 6500, multi: '✅', tier: 'Mythical', rarity: '0.005%', shop: '1-2' },
            { name: 'Grape', buy: 850000, sell: 10000, multi: '✅', tier: 'Divine', rarity: '???%', shop: '1' },
            { name: 'Pineapple', buy: 'N/A', sell: 350, multi: '✅', tier: 'Exclusive', rarity: 'SP 5%', shop: '0' },
            { name: 'Peach', buy: 'N/A', sell: 250, multi: '✅', tier: 'Exclusive', rarity: 'SP 5%', shop: '0' },
            { name: 'Raspberry', buy: 'N/A', sell: 60, multi: '✅', tier: 'Exclusive', rarity: 'SP 5%', shop: '0' },
            { name: 'Pear', buy: 'N/A', sell: 80, multi: '✅', tier: 'Exclusive', rarity: 'SP 5%', shop: '0' },
            { name: 'Chocolate Carrot', buy: 10000, sell: 16500, multi: '❌', tier: 'Common Limited', rarity: 'ES 100%', shop: '1-20' },
            { name: 'Red Lollipop', buy: 45000, sell: 70000, multi: '❌', tier: 'Uncommon Limited', rarity: 'ES 50%', shop: '24' },
            { name: 'Candy Sunflower', buy: 75000, sell: 145000, multi: '❌', tier: 'Rare Limited', rarity: 'ES NA%', shop: 'N/A' },
            { name: 'Easter Egg', buy: 500000, sell: '3,000+', multi: '✅', tier: 'Legendary Limited', rarity: 'ES NA%', shop: '5' },
            { name: 'Candy Blossom', buy: 10000000, sell: '100,000+', multi: '✅', tier: 'Divine Limited', rarity: 'ES NA%', shop: '1' },
            { name: 'Papaya', buy: 'N/A', sell: '1,000+', multi: '✅', tier: 'Exclusive', rarity: 'ESP 40%', shop: '0' },
            { name: 'Banana', buy: 'N/A', sell: '3,000+', multi: '✅', tier: 'Exclusive', rarity: 'ESP 38%', shop: '0' },
            { name: 'Passionfruit', buy: 'N/A', sell: '???', multi: '✅', tier: 'Exclusive', rarity: 'ESP 20%', shop: '0' },
            { name: 'Soul Fruit', buy: 'N/A', sell: '???', multi: '?', tier: 'Exclusive', rarity: 'ESP 1.5%', shop: '0' },
            { name: 'Cursed Fruit', buy: 'N/A', sell: '???', multi: '?', tier: 'Exclusive', rarity: 'ESP 0.5%', shop: '0' }
        ];

        const listContainer = document.getElementById('seed-list-container');
        const infoDisplay = document.getElementById('seed-info-display');
        const sortNameAscBtn = document.getElementById('sort-name-asc');
        const sortNameDescBtn = document.getElementById('sort-name-desc');
        const sortTierBtn = document.getElementById('sort-tier');

        let currentSort = 'name-asc'; // Default sort

        function displaySeedInfo(seed) {
            infoDisplay.innerHTML = `
                <h3>${seed.name}</h3>
                <ul>
                    <li><strong>Buy Price:</strong> ${seed.buy} ₵</li>
                    <li><strong>Sell Value:</strong> ${seed.sell} ₵</li>
                    <li><strong>Multi-Use:</strong> ${seed.multi}</li>
                    <li><strong>Tier:</strong> ${seed.tier}</li>
                    <li><strong>Rarity %:</strong> ${seed.rarity}</li>
                    <li><strong>Amount in Shop:</strong> ${seed.shop}</li>
                </ul>
            `;
            infoDisplay.style.display = 'block';
        }

        function renderSeedList(seeds) {
            if (!listContainer) {
                 console.error("Seed list container not found!"); 
                 return; 
            }
            listContainer.innerHTML = ''; // Clear current list
            seeds.forEach(seed => {
                const seedElement = document.createElement('button');
                seedElement.textContent = seed.name;
                seedElement.classList.add('seed-list-item');
                seedElement.addEventListener('click', () => displaySeedInfo(seed));
                listContainer.appendChild(seedElement);
            });
            console.log(`Rendered ${seeds.length} seeds in the list.`);
        }
        
        function sortSeeds(criteria) {
            console.log(`Sorting seeds by: ${criteria}`);
            let sortedSeeds = [...seedsData]; // Create a copy to sort

            switch (criteria) {
                case 'name-asc':
                    sortedSeeds.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sortedSeeds.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'tier':
                    // Basic tier sort (needs refinement for custom order)
                    const tierOrder = { 'Common': 1, 'Uncommon': 2, 'Rare': 3, 'Legendary': 4, 'Mythical': 5, 'Divine': 6, 'Exclusive': 7, 'Common Limited': 8, 'Uncommon Limited': 9, 'Rare Limited': 10, 'Legendary Limited': 11, 'Divine Limited': 12 };
                    sortedSeeds.sort((a, b) => (tierOrder[a.tier] || 99) - (tierOrder[b.tier] || 99));
                    break;
                default:
                    console.warn("Unknown sort criteria:", criteria);
                    return; // Don't re-render if criteria is unknown
            }
            renderSeedList(sortedSeeds);
        }

        // Initial Render
        if (listContainer && infoDisplay && sortNameAscBtn && sortNameDescBtn && sortTierBtn) {
             sortSeeds(currentSort);
             // Add event listeners for sort buttons
            sortNameAscBtn.addEventListener('click', () => sortSeeds('name-asc'));
            sortNameDescBtn.addEventListener('click', () => sortSeeds('name-desc'));
            sortTierBtn.addEventListener('click', () => sortSeeds('tier'));
        } else {
            console.error("One or more seeds page elements (list, info, sort buttons) not found!");
        }
    }

    // --- Other potential global scripts can go here ---
    
    // --- Seeds Page Specific Logic ---
    // (Will be added later)

}); 