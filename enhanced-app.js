// VoterSpeak Enhanced Application
const governmentData = {
    house: [
        // House Leadership
        { 
            name: "Mike Johnson", 
            title: "Speaker of the House", 
            state: "Louisiana", 
            district: "4th", 
            party: "Republican", 
            email: "speaker@mail.house.gov", 
            phone: "(202) 225-2777",
            office: "1023 Longworth HOB, Washington, DC 20515",
            website: "https://mikejohnson.house.gov",
            twitter: "SpeakerJohnson",
            facebook: "RepMikeJohnson",
            instagram: "speakermikejohnson",
            youtube: "RepMikeJohnson",
            issues: ["economy", "immigration", "foreign-policy"]
        },
        { 
            name: "Hakeem Jeffries", 
            title: "House Minority Leader", 
            state: "New York", 
            district: "8th", 
            party: "Democrat", 
            email: "rep.jeffries@mail.house.gov", 
            phone: "(202) 225-5936",
            office: "2433 Rayburn HOB, Washington, DC 20515",
            website: "https://jeffries.house.gov",
            twitter: "RepJeffries",
            facebook: "RepJeffries",
            instagram: "repjeffries",
            youtube: "RepJeffries",
            issues: ["voting-rights", "healthcare", "education"]
        }
    ],
    senate: [
        { 
            name: "Chuck Schumer", 
            title: "Senate Majority Leader", 
            state: "New York", 
            party: "Democrat", 
            email: "senator@schumer.senate.gov", 
            phone: "(202) 224-6542",
            office: "322 Hart Senate Office Building, Washington, DC 20510",
            website: "https://www.schumer.senate.gov",
            twitter: "SenSchumer",
            facebook: "senschumer",
            instagram: "chuckschumer",
            youtube: "SenatorSchumer",
            issues: ["economy", "healthcare", "immigration"]
        },
        { 
            name: "Mitch McConnell", 
            title: "Senate Minority Leader", 
            state: "Kentucky", 
            party: "Republican", 
            email: "senator@mcconnell.senate.gov", 
            phone: "(202) 224-2541",
            office: "317 Russell Senate Office Building, Washington, DC 20510",
            website: "https://www.mcconnell.senate.gov",
            twitter: "LeaderMcConnell",
            facebook: "mitchmcconnell",
            instagram: "mcconnellpress",
            youtube: "RepublicanLeader",
            issues: ["economy", "foreign-policy", "infrastructure"]
        }
    ],
    executive: [
        { 
            name: "Joe Biden", 
            title: "President", 
            party: "Democrat", 
            email: "president@whitehouse.gov", 
            phone: "(202) 456-1111",
            office: "The White House, 1600 Pennsylvania Avenue NW, Washington, DC 20500",
            website: "https://www.whitehouse.gov",
            twitter: "POTUS",
            facebook: "POTUS",
            instagram: "potus",
            youtube: "whitehouse",
            issues: ["economy", "foreign-policy", "healthcare", "climate"]
        },
        { 
            name: "Kamala Harris", 
            title: "Vice President", 
            party: "Democrat", 
            email: "vicepresident@whitehouse.gov", 
            phone: "(202) 456-1111",
            office: "The White House, 1600 Pennsylvania Avenue NW, Washington, DC 20500",
            website: "https://www.whitehouse.gov/vp",
            twitter: "VP",
            facebook: "VicePresident",
            instagram: "vp",
            youtube: "whitehouse",
            issues: ["immigration", "voting-rights", "healthcare", "education"]
        }
    ],
    cabinet: [
        { 
            name: "Antony Blinken", 
            title: "Secretary of State", 
            email: "secretary@state.gov", 
            phone: "(202) 647-4000",
            office: "U.S. Department of State, 2201 C Street NW, Washington, DC 20520",
            website: "https://www.state.gov",
            twitter: "SecBlinken",
            issues: ["foreign-policy", "diplomacy", "national-security"]
        },
        { 
            name: "Janet Yellen", 
            title: "Secretary of the Treasury", 
            email: "secretary@treasury.gov", 
            phone: "(202) 622-2000",
            office: "Department of the Treasury, 1500 Pennsylvania Avenue NW, Washington, DC 20220",
            website: "https://home.treasury.gov",
            twitter: "SecYellen",
            issues: ["economy", "finance", "tax-policy"]
        },
        { 
            name: "Lloyd Austin", 
            title: "Secretary of Defense", 
            email: "secretary@defense.gov", 
            phone: "(703) 571-3343",
            office: "1000 Defense Pentagon, Washington, DC 20301-1000",
            website: "https://www.defense.gov",
            twitter: "SecDef",
            issues: ["defense", "national-security", "military"]
        }
    ],
    supremeCourt: [
        { 
            name: "John Roberts", 
            title: "Chief Justice", 
            email: "chiefjustice@supremecourt.gov", 
            phone: "(202) 479-3000",
            office: "Supreme Court of the United States, 1 First Street NE, Washington, DC 20543",
            website: "https://www.supremecourt.gov",
            issues: ["constitutional-law", "civil-rights", "federal-jurisdiction"]
        },
        { 
            name: "Clarence Thomas", 
            title: "Associate Justice", 
            email: "justicethomas@supremecourt.gov", 
            phone: "(202) 479-3000",
            office: "Supreme Court of the United States, 1 First Street NE, Washington, DC 20543",
            website: "https://www.supremecourt.gov",
            issues: ["constitutional-law", "civil-rights", "federal-jurisdiction"]
        }
    ],
    agencies: [
        { 
            name: "FBI", 
            title: "Federal Bureau of Investigation", 
            email: "contact@fbi.gov", 
            phone: "(202) 324-3000",
            office: "935 Pennsylvania Avenue NW, Washington, DC 20535",
            website: "https://www.fbi.gov",
            issues: ["law-enforcement", "national-security", "criminal-investigations"]
        },
        { 
            name: "EPA", 
            title: "Environmental Protection Agency", 
            email: "info@epa.gov", 
            phone: "(202) 272-0167",
            office: "1200 Pennsylvania Avenue NW, Washington, DC 20460",
            website: "https://www.epa.gov",
            issues: ["environment", "climate", "public-health"]
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    setupNavigation();
    
    // Initialize dark mode
    setupDarkMode();
    
    // Load initial data
    renderOfficials('house');
    
    // Setup search and filters
    setupSearchAndFilters();
    
    // Initialize engagement tracking
    initializeEngagement();
}

function setupNavigation() {
    // Main tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // Secondary navigation (branch sections)
    document.querySelectorAll('.secondary-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showBranchSection(category);
        });
    });
}

function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to selected tab
    event.target.classList.add('active');
}

function showBranchSection(category) {
    // Update breadcrumb
    document.getElementById('current-section').textContent = 
        category.charAt(0).toUpperCase() + category.slice(1);
    
    // Hide all branch sections
    document.querySelectorAll('.branch-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all secondary nav items
    document.querySelectorAll('.secondary-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${category}-section`).classList.add('active');
    
    // Add active class to selected item
    event.target.classList.add('active');
    
    // Render data for the selected category
    renderOfficials(category);
}

function renderOfficials(category) {
    const container = document.getElementById(`${category}-officials`);
    if (!container) return;
    
    const data = governmentData[category];
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="empty-state">No officials found for this category.</div>';
        return;
    }
    
    container.innerHTML = data.map(official => `
        <div class="official-card">
            <div class="card-header">
                <div class="official-avatar">
                    ${official.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="official-info">
                    <div class="official-name">${official.name}</div>
                    <div class="official-title">${official.title}</div>
                </div>
            </div>
            <div class="card-body">
                ${official.state ? `<div class="info-item">
                    <span class="info-label">State:</span>
                    <span class="info-value">${official.state}${official.district ? ` ${official.district}` : ''}</span>
                </div>` : ''}
                ${official.party ? `<div class="info-item">
                    <span class="info-label">Party:</span>
                    <span class="info-value">${official.party}</span>
                </div>` : ''}
                ${official.office ? `<div class="info-item">
                    <span class="info-label">Office:</span>
                    <span class="info-value">${official.office}</span>
                </div>` : ''}
                ${official.phone ? `<div class="info-item">
                    <span class="info-label">Phone:</span>
                    <span class="info-value">${official.phone}</span>
                </div>` : ''}
                ${official.email ? `<div class="info-item">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${official.email}</span>
                </div>` : ''}
            </div>
            <div class="card-footer">
                <button class="contact-btn" onclick="openEmailModal('${official.name}', '${official.email || ''}')">
                    📧 Contact
                </button>
                <div class="social-links">
                    ${official.website ? `<a href="${official.website}" class="social-link" target="_blank" title="Website">🌐</a>` : ''}
                    ${official.twitter ? `<a href="https://twitter.com/${official.twitter}" class="social-link" target="_blank" title="Twitter">🐦</a>` : ''}
                    ${official.facebook ? `<a href="https://facebook.com/${official.facebook}" class="social-link" target="_blank" title="Facebook">📘</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function setupSearchAndFilters() {
    // Search functionality for each section
    ['house', 'senate', 'executive', 'cabinet', 'supremeCourt', 'agencies'].forEach(category => {
        const searchInput = document.getElementById(`${category}-search`);
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                filterOfficials(category);
            });
        }
        
        const filterSelects = document.querySelectorAll(`[id$="${category}-filter"]`);
        filterSelects.forEach(select => {
            select.addEventListener('change', function() {
                filterOfficials(category);
            });
        });
    });
}

function filterOfficials(category) {
    const container = document.getElementById(`${category}-officials`);
    if (!container) return;
    
    const searchInput = document.getElementById(`${category}-search`);
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    const data = governmentData[category];
    if (!data) return;
    
    let filtered = data;
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(official => 
            official.name.toLowerCase().includes(searchTerm) ||
            official.title.toLowerCase().includes(searchTerm) ||
            (official.state && official.state.toLowerCase().includes(searchTerm)) ||
            (official.party && official.party.toLowerCase().includes(searchTerm))
        );
    }
    
    // Filter by party (if applicable)
    const partyFilter = document.getElementById(`${category}-party-filter`);
    if (partyFilter && partyFilter.value) {
        filtered = filtered.filter(official => 
            official.party === partyFilter.value
        );
    }
    
    // Filter by department (for cabinet)
    const departmentFilter = document.getElementById(`${category}-department-filter`);
    if (departmentFilter && departmentFilter.value) {
        filtered = filtered.filter(official => 
            official.title && official.title.includes(departmentFilter.value)
        );
    }
    
    container.innerHTML = filtered.map(official => `
        <div class="official-card">
            <div class="card-header">
                <div class="official-avatar">
                    ${official.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="official-info">
                    <div class="official-name">${official.name}</div>
                    <div class="official-title">${official.title}</div>
                </div>
            </div>
            <div class="card-body">
                ${official.state ? `<div class="info-item">
                    <span class="info-label">State:</span>
                    <span class="info-value">${official.state}${official.district ? ` ${official.district}` : ''}</span>
                </div>` : ''}
                ${official.party ? `<div class="info-item">
                    <span class="info-label">Party:</span>
                    <span class="info-value">${official.party}</span>
                </div>` : ''}
                ${official.office ? `<div class="info-item">
                    <span class="info-label">Office:</span>
                    <span class="info-value">${official.office}</span>
                </div>` : ''}
                ${official.phone ? `<div class="info-item">
                    <span class="info-label">Phone:</span>
                    <span class="info-value">${official.phone}</span>
                </div>` : ''}
                ${official.email ? `<div class="info-item">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${official.email}</span>
                </div>` : ''}
            </div>
            <div class="card-footer">
                <button class="contact-btn" onclick="openEmailModal('${official.name}', '${official.email || ''}')">
                    📧 Contact
                </button>
                <div class="social-links">
                    ${official.website ? `<a href="${official.website}" class="social-link" target="_blank" title="Website">🌐</a>` : ''}
                    ${official.twitter ? `<a href="https://twitter.com/${official.twitter}" class="social-link" target="_blank" title="Twitter">🐦</a>` : ''}
                    ${official.facebook ? `<a href="https://facebook.com/${official.facebook}" class="social-link" target="_blank" title="Facebook">📘</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function setupDarkMode() {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        this.textContent = isDarkMode ? '☀️' : '🌙';
    });
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }
}

function openEmailModal(officialName, officialEmail) {
    if (!officialEmail) {
        alert('Email contact not available for this official.');
        return;
    }
    
    const modal = document.getElementById('email-modal');
    if (!modal) return;
    
    document.getElementById('modal-title').textContent = `Contact ${officialName}`;
    document.getElementById('official-name-input').value = officialName;
    document.getElementById('official-email-input').value = officialEmail;
    
    modal.style.display = 'block';
}

function closeEmailModal() {
    const modal = document.getElementById('email-modal');
    if (modal) modal.style.display = 'none';
}

function initializeEngagement() {
    // Initialize engagement tracking
    let emailCount = parseInt(localStorage.getItem('emailCount') || '0');
    let callCount = parseInt(localStorage.getItem('callCount') || '0');
    
    // Update counters
    document.getElementById('emails-sent').textContent = emailCount;
    document.getElementById('calls-made').textContent = callCount;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('email-modal');
    if (event.target === modal) {
        closeEmailModal();
    }
};

// Address finder functionality
document.getElementById('address-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const street = document.getElementById('street-address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    
    // Simulate finding representatives based on address
    const resultsDiv = document.getElementById('address-results');
    resultsDiv.innerHTML = `
        <h3>Your Representatives</h3>
        <p>Based on your address: ${street}, ${city}, ${state} ${zip}</p>
        <div class="officials-grid">
            ${governmentData.house.slice(0, 2).map(official => `
                <div class="official-card">
                    <div class="card-header">
                        <div class="official-avatar">${official.name.split(' ').map(n => n[0]).join('')}</div>
                        <div class="official-info">
                            <div class="official-name">${official.name}</div>
                            <div class="official-title">${official.title}</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="info-item">
                            <span class="info-label">Contact:</span>
                            <span class="info-value">${official.phone} | ${official.email}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
});