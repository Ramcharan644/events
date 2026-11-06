/**
 * G. Pullaiah College of Engineering & Technology - Event Table Logic & CRUD
 */

let currentEvents = [];
let activeFilter = 'All';
let searchQuery = '';
let sortOrder = 'asc';

// Initialize events view
function initEventsPage() {
  currentEvents = window.EventDataManager.getEvents();
  renderEventsTable();
  setupEventListeners();
}

// Setup input listeners
function setupEventListeners() {
  const searchInput = document.getElementById('tableSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderEventsTable();
    });
  }

  const filterSelect = document.getElementById('typeFilterSelect');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      activeFilter = e.target.value;
      renderEventsTable();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortOrder = e.target.value;
      renderEventsTable();
    });
  }
}

// Filter and sort events
function getFilteredEvents() {
  let list = window.EventDataManager.getEvents();

  // Search filter across event_id, event_name, venue, description
  if (searchQuery) {
    list = list.filter(item => 
      (item.event_id && item.event_id.toLowerCase().includes(searchQuery)) ||
      (item.event_name && item.event_name.toLowerCase().includes(searchQuery)) ||
      (item.venue && item.venue.toLowerCase().includes(searchQuery)) ||
      (item.description && item.description.toLowerCase().includes(searchQuery)) ||
      (item.event_type && item.event_type.toLowerCase().includes(searchQuery))
    );
  }

  // Type filter
  if (activeFilter !== 'All') {
    list = list.filter(item => item.event_type.toLowerCase().includes(activeFilter.toLowerCase()));
  }

  // Sort
  list.sort((a, b) => {
    const dateA = new Date(a.event_date || '1970-01-01').getTime();
    const dateB = new Date(b.event_date || '1970-01-01').getTime();
    if (sortOrder === 'asc') return dateA - dateB;
    if (sortOrder === 'desc') return dateB - dateA;
    if (sortOrder === 'name') return (a.event_name || '').localeCompare(b.event_name || '');
    return 0;
  });

  return list;
}

// Render the interactive Event Table
function renderEventsTable() {
  const tbody = document.getElementById('eventTableBody');
  const countBadge = document.getElementById('eventCountBadge');
  if (!tbody) return;

  const events = getFilteredEvents();
  const allEventsCount = window.EventDataManager.getEvents().length;

  if (countBadge) {
    countBadge.innerText = `Showing ${events.length} of ${allEventsCount} events`;
  }

  if (events.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding: 40px 20px; color: #64748b;">
          <i class="fa-solid fa-calendar-xmark" style="font-size: 2.5rem; color:#cbd5e1; margin-bottom:12px; display:block;"></i>
          <strong>No matching events found</strong>
          <p style="font-size: 0.85rem; margin-top: 4px;">Try modifying your search query or clear active filters.</p>
          <button onclick="resetFilters()" class="btn btn-sm btn-outline" style="margin-top:12px;">Reset Filters</button>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = events.map(ev => `
    <tr>
      <td>
        <span class="event-id-cell">${escapeHtml(ev.event_id)}</span>
      </td>
      <td>
        <div class="event-name-cell">
          <span class="event-title">${escapeHtml(ev.event_name)}</span>
          <span class="event-subtext"><i class="fa-solid fa-users" style="font-size:0.75rem;"></i> Organised by: ${escapeHtml(ev.organizer || 'GPCET')}</span>
        </div>
      </td>
      <td>
        <span class="badge ${getBadgeClass(ev.event_type)}">
          ${escapeHtml(ev.event_type)}
        </span>
      </td>
      <td>
        <div class="date-cell">
          ${formatDate(ev.event_date)}
          <span><i class="fa-regular fa-clock" style="font-size:0.7rem;"></i> ${escapeHtml(ev.time || 'All Day')}</span>
        </div>
      </td>
      <td>
        <div class="venue-cell">
          <i class="fa-solid fa-location-dot"></i>
          <span>${escapeHtml(ev.venue)}</span>
        </div>
      </td>
      <td>
        <div class="description-cell" title="${escapeHtml(ev.description)}">
          ${escapeHtml(ev.description)}
        </div>
      </td>
      <td>
        <div class="action-buttons-cell">
          <button onclick="viewEventDetails('${ev.event_id}')" class="btn btn-sm btn-outline" title="View Full Details">
            <i class="fa-solid fa-eye"></i> View
          </button>
          <a href="register.html?event_id=${encodeURIComponent(ev.event_id)}" class="btn btn-sm btn-primary" title="Register Student">
            <i class="fa-solid fa-user-plus"></i> Register
          </a>
          <button onclick="openEditEventModal('${ev.event_id}')" class="btn btn-sm btn-secondary" style="background:#e2e8f0; color:#334155;" title="Edit Event">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onclick="confirmDeleteEvent('${ev.event_id}')" class="btn btn-sm btn-danger" title="Delete Event">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function resetFilters() {
  searchQuery = '';
  activeFilter = 'All';
  sortOrder = 'asc';
  const sInput = document.getElementById('tableSearchInput');
  const fSelect = document.getElementById('typeFilterSelect');
  const soSelect = document.getElementById('sortSelect');
  if (sInput) sInput.value = '';
  if (fSelect) fSelect.value = 'All';
  if (soSelect) soSelect.value = 'asc';
  renderEventsTable();
}

// Modal handling for Add / Edit
function openAddEventModal() {
  const form = document.getElementById('eventForm');
  if (form) form.reset();
  
  document.getElementById('modalFormTitle').innerText = 'Add New College Event';
  document.getElementById('formMode').value = 'add';
  
  // Suggest next ID
  const events = window.EventDataManager.getEvents();
  const nextNum = events.length + 101;
  document.getElementById('inpEventId').value = `GPCET-EVT-${nextNum}`;
  document.getElementById('inpEventId').readOnly = false;

  const modal = document.getElementById('eventFormModal');
  if (modal) modal.classList.add('active');
}

function openEditEventModal(eventId) {
  const ev = window.EventDataManager.getEventById(eventId);
  if (!ev) return;

  document.getElementById('modalFormTitle').innerText = 'Edit College Event';
  document.getElementById('formMode').value = 'edit';
  
  document.getElementById('inpEventId').value = ev.event_id;
  document.getElementById('inpEventId').readOnly = true;
  document.getElementById('inpEventName').value = ev.event_name;
  document.getElementById('inpEventType').value = ev.event_type;
  document.getElementById('inpEventDate').value = ev.event_date;
  document.getElementById('inpEventTime').value = ev.time || '10:00 AM';
  document.getElementById('inpVenue').value = ev.venue;
  document.getElementById('inpOrganizer').value = ev.organizer || 'G. Pullaiah College';
  document.getElementById('inpCapacity').value = ev.capacity || 200;
  document.getElementById('inpDescription').value = ev.description;
  document.getElementById('inpImage').value = ev.image || 'assets/images/campus_main.jpg';

  const modal = document.getElementById('eventFormModal');
  if (modal) modal.classList.add('active');
}

function closeFormModal() {
  const modal = document.getElementById('eventFormModal');
  if (modal) modal.classList.remove('active');
}

// Handle Form Submission (Add or Update)
function handleEventFormSubmit(e) {
  e.preventDefault();
  const mode = document.getElementById('formMode').value;
  
  const eventData = {
    event_id: document.getElementById('inpEventId').value.trim(),
    event_name: document.getElementById('inpEventName').value.trim(),
    event_type: document.getElementById('inpEventType').value.trim(),
    event_date: document.getElementById('inpEventDate').value,
    time: document.getElementById('inpEventTime').value.trim() || '10:00 AM',
    venue: document.getElementById('inpVenue').value.trim(),
    organizer: document.getElementById('inpOrganizer').value.trim() || 'G. Pullaiah College',
    capacity: parseInt(document.getElementById('inpCapacity').value, 10) || 200,
    description: document.getElementById('inpDescription').value.trim(),
    image: document.getElementById('inpImage').value || 'assets/images/campus_main.jpg'
  };

  if (!eventData.event_id || !eventData.event_name || !eventData.event_type || !eventData.event_date || !eventData.venue || !eventData.description) {
    showToast('Please fill all required event fields!', 'danger');
    return;
  }

  try {
    if (mode === 'add') {
      window.EventDataManager.addEvent(eventData);
      showToast(`Event "${eventData.event_name}" added successfully!`);
    } else {
      window.EventDataManager.updateEvent(eventData.event_id, eventData);
      showToast(`Event "${eventData.event_id}" updated successfully!`);
    }

    closeFormModal();
    renderEventsTable();
  } catch (err) {
    showToast(err.message, 'danger');
  }
}

// Delete Event with confirmation
function confirmDeleteEvent(eventId) {
  if (confirm(`Are you sure you want to delete event ${eventId}? This action cannot be undone.`)) {
    window.EventDataManager.deleteEvent(eventId);
    showToast(`Event ${eventId} deleted successfully.`, 'danger');
    renderEventsTable();
  }
}

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Auto-run if table exists on page
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('eventTableBody')) {
    initEventsPage();
  }
});
