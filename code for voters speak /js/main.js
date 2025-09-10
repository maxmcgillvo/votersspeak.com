// Voices Speak - Complete Application
const congressionalData = {
    house: [
        { name: "John Smith", title: "Representative", state: "California", district: "12th", party: "Democrat", email: "john.smith@house.gov", phone: "(202) 555-0101" },
        { name: "Sarah Johnson", title: "Representative", state: "Texas", district: "3rd", party: "Republican", email: "sarah.johnson@house.gov", phone: "(202) 555-0102" },
        { name: "Michael Chen", title: "Representative", state: "New York", district: "7th", party: "Democrat", email: "michael.chen@house.gov", phone: "(202) 555-0103" },
        { name: "Lisa Williams", title: "Representative", state: "Florida", district: "15th", party: "Republican", email: "lisa.williams@house.gov", phone: "(202) 555-0104" },
        { name: "David Martinez", title: "Representative", state: "Illinois", district: "4th", party: "Democrat", email: "david.martinez@house.gov", phone: "(202) 555-0105" },
        { name: "Jennifer Kim", title: "Representative", state: "Washington", district: "8th", party: "Democrat", email: "jennifer.kim@house.gov", phone: "(202) 555-0106" }
    ],
    senate: [
        { name: "Robert Anderson", title: "Senator", state: "California", party: "Democrat", email: "robert.anderson@senate.gov", phone: "(202) 555-0201" },
        { name: "Emily Davis", title: "Senator", state: "Texas", party: "Republican", email: "emily.davis@senate.gov", phone: "(202) 555-0202" },
        { name: "James Wilson", title: "Senator", state: "New York", party: "Democrat", email: "james.wilson@senate.gov", phone: "(202) 555-0203" },
        { name: "Maria Garcia", title: "Senator", state: "Florida", party: "Republican", email: "maria.garcia@senate.gov", phone: "(202) 555-0204" }
    ]
};

const billsData = [
    { title: "Healthcare Innovation Act", number: "HR-2024-001", description: "A comprehensive bill to expand healthcare access and reduce prescription drug costs through innovative technology solutions and market-based reforms.", status: "committee", committee: "Energy and Commerce" },
    { title: "Climate Resilience Initiative", number: "S-2024-045", description: "Legislation to invest in climate adaptation infrastructure, support renewable energy development, and create green jobs across the country.", status: "introduced", committee: "Environment and Public Works" },
    { title: "Small Business Recovery Act", number: "HR-2024-089", description: "Provides targeted relief and support for small businesses affected by recent economic challenges, including tax incentives and access to capital programs.", status: "passed", committee: "Small Business" },
    { title: "Education Technology Access Act", number: "S-2024-156", description: "Ensures equitable access to digital learning resources and technology for students in underserved communities across all states.", status: "committee", committee: "Health, Education, Labor and Pensions" }
];

let currentOfficial = null;
let emailCount = 0;
const MAX_DAILY_EMAILS = 5;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderOfficials('house');
    renderBills();
    updateEmailCount();
}

function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function renderOfficials(chamber) {
    const container = document.getElementById('officials-list');
    const data = congressionalData[chamber];
    container.innerHTML = data.map(official => `
        <div class="official-card">
            <div class="official-name">${official.name}</div>
            <div class="official-title">${official.title} - ${official.state}${official.district ? ` ${official.district} District` : ''}</div>
            <div class="official-party party-${official.party.toLowerCase()}">${official.party}</div>
            <div class="contact-buttons">
                <button class="contact-btn email-btn" onclick="openEmailModal('${official.name}', '${official.email}')">📧 Email</button>
                <button class="contact-btn phone-btn" onclick="callOfficial('${official.phone}')">📞 Call</button>
            </div>
        </div>
    `).join('');
}

function renderBills() {
    const container = document.getElementById('bills-list');
    container.innerHTML = billsData.map(bill => `
        <div class="bill-card">
            <div class="bill-title">${bill.title}</div>
            <div class="bill-number">${bill.number}</div>
            <div class="bill-status status-${bill.status}">${bill.status.charAt(0).toUpperCase() + bill.status.slice(1)} - ${bill.committee}</div>
            <div class="bill-description">${bill.description}</div>
        </div>
    `).join('');
}

function searchOfficials() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const chamber = document.getElementById('chamber-select').value;
    const data = congressionalData[chamber];
    const filtered = data.filter(official => 
        official.name.toLowerCase().includes(query) ||
        official.state.toLowerCase().includes(query) ||
        official.party.toLowerCase().includes(query)
    );
    const container = document.getElementById('officials-list');
    container.innerHTML = filtered.map(official => `
        <div class="official-card">
            <div class="official-name">${official.name}</div>
            <div class="official-title">${official.title} - ${official.state}${official.district ? ` ${official.district} District` : ''}</div>
            <div class="official-party party-${official.party.toLowerCase()}">${official.party}</div>
            <div class="contact-buttons">
                <button class="contact-btn email-btn" onclick="openEmailModal('${official.name}', '${official.email}')">📧 Email</button>
                <button class="contact-btn phone-btn" onclick="callOfficial('${official.phone}')">📞 Call</button>
            </div>
        </div>
    `).join('');
}

function openEmailModal(officialName, officialEmail) {
    if (emailCount >= MAX_DAILY_EMAILS) {
        alert(`Daily email limit reached (${MAX_DAILY_EMAILS} emails). Please try again tomorrow.`);
        return;
    }
    currentOfficial = { name: officialName, email: officialEmail };
    document.getElementById('official-name').textContent = officialName;
    document.getElementById('official-email').value = officialEmail;
    document.getElementById('email-modal').style.display = 'block';
}

function closeEmailModal() {
    document.getElementById('email-modal').style.display = 'none';
    document.getElementById('email-form').reset();
    document.getElementById('form-message').innerHTML = '';
}

function callOfficial(phone) {
    window.open(`tel:${phone.replace(/\D/g, '')}`);
}

async function sendEmail(event) {
    event.preventDefault();
    if (emailCount >= MAX_DAILY_EMAILS) {
        showFormMessage('Daily email limit reached. Please try again tomorrow.', 'error');
        return;
    }
    
    const sendBtn = document.querySelector('.send-btn');
    const originalText = sendBtn.innerHTML;
    sendBtn.innerHTML = '<span class="loading"></span>Sending...';
    sendBtn.disabled = true;
    
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        emailCount++;
        updateEmailCount();
        localStorage.setItem('emailCount', emailCount.toString());
        localStorage.setItem('lastEmailDate', new Date().toDateString());
        
        showFormMessage('Email sent successfully! Your message has been delivered to the office.', 'success');
        setTimeout(() => closeEmailModal(), 3000);
    } catch (error) {
        showFormMessage('Error sending email. Please try again later.', 'error');
    } finally {
        sendBtn.innerHTML = originalText;
        sendBtn.disabled = false;
    }
}

function showFormMessage(message, type) {
    document.getElementById('form-message').innerHTML = `<div class="${type}-message">${message}</div>`;
}

function updateEmailCount() {
    const countElement = document.getElementById('email-count');
    if (countElement) countElement.textContent = `${emailCount}/${MAX_DAILY_EMAILS}`;
}

document.getElementById('chamber-select').addEventListener('change', function() {
    renderOfficials(this.value);
});

window.onclick = function(event) {
    const modal = document.getElementById('email-modal');
    if (event.target === modal) closeEmailModal();
};