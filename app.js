/**
 * G. Pullaiah College of Engineering & Technology - Core JS App
 */

// Global UI helper functions
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}" style="color:${type === 'success' ? '#10b981' : '#ef4444'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Badge color resolver
function getBadgeClass(type) {
  const t = (type || '').toLowerCase();
  if (t.includes('tech') || t.includes('coding')) return 'badge-tech';
  if (t.includes('cultur') || t.includes('arts') || t.includes('gala')) return 'badge-cultural';
  if (t.includes('sport') || t.includes('cricket') || t.includes('tourn')) return 'badge-sports';
  if (t.includes('work') || t.includes('idea')) return 'badge-workshop';
  if (t.includes('hack')) return 'badge-hackathon';
  if (t.includes('conf')) return 'badge-conference';
  if (t.includes('semi')) return 'badge-seminar';
  return 'badge-community';
}

// Format date nicely
function formatDate(dateStr) {
  if (!dateStr) return 'TBA';
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-US', opts);
}

// Export events to CSV
function exportEventsToCSV() {
  const events = window.EventDataManager.getEvents();
  if (!events || events.length === 0) {
    showToast('No events available to export', 'danger');
    return;
  }

  const headers = ['Event ID', 'Event Name', 'Event Type', 'Event Date', 'Venue', 'Description', 'Capacity', 'Registrations'];
  const rows = events.map(e => [
    `"${(e.event_id || '').replace(/"/g, '""')}"`,
    `"${(e.event_name || '').replace(/"/g, '""')}"`,
    `"${(e.event_type || '').replace(/"/g, '""')}"`,
    `"${(e.event_date || '').replace(/"/g, '""')}"`,
    `"${(e.venue || '').replace(/"/g, '""')}"`,
    `"${(e.description || '').replace(/"/g, '""')}"`,
    e.capacity || 0,
    e.registered_count || 0
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `GPCET_Events_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Event table successfully exported to CSV!');
}

// Lightbox Modal for Campus Photos
function openPhotoModal(imgSrc, title, desc, location) {
  let modal = document.getElementById('photoLightboxModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'photoLightboxModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 840px; background:#0f172a; color:white; overflow:hidden;">
        <div style="position:relative; max-height:560px; background:#000;">
          <img id="modalLightboxImg" src="" alt="GPCET Campus" style="width:100%; height:auto; max-height:540px; object-fit:contain; margin:auto;" />
          <button onclick="closePhotoModal()" style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.6); color:white; border:none; width:36px; height:36px; border-radius:50%; font-size:1.2rem; cursor:pointer;">&times;</button>
        </div>
        <div style="padding: 20px 24px;">
          <h3 id="modalLightboxTitle" style="color:#ffb703; font-size:1.3rem; margin-bottom:6px;"></h3>
          <p id="modalLightboxLoc" style="color:#94a3b8; font-size:0.85rem; margin-bottom:10px;"><i class="fa-solid fa-location-dot" style="color:#f77f00; margin-right:6px;"></i><span></span></p>
          <p id="modalLightboxDesc" style="color:#cbd5e1; font-size:0.92rem; line-height:1.5;"></p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePhotoModal();
    });
  }

  document.getElementById('modalLightboxImg').src = imgSrc;
  document.getElementById('modalLightboxTitle').innerText = title;
  document.getElementById('modalLightboxLoc').querySelector('span').innerText = location || 'G. Pullaiah College of Engineering & Technology, Kurnool';
  document.getElementById('modalLightboxDesc').innerText = desc || '';

  modal.classList.add('active');
}

function closePhotoModal() {
  const modal = document.getElementById('photoLightboxModal');
  if (modal) modal.classList.remove('active');
}

// Event Details Modal
function viewEventDetails(eventId) {
  const event = window.EventDataManager.getEventById(eventId);
  if (!event) return;

  let modal = document.getElementById('eventDetailsModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'eventDetailsModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <span id="dtlBadge" class="badge"></span>
            <h3 class="modal-title" id="dtlTitle" style="margin-top:4px;"></h3>
          </div>
          <button class="modal-close-btn" onclick="closeEventModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div style="margin-bottom:16px; border-radius:8px; overflow:hidden; max-height:220px;">
            <img id="dtlImage" src="" style="width:100%; height:220px; object-fit:cover;" />
          </div>
          
          <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:12px; margin-bottom:16px; background:#f8fafc; padding:14px; border-radius:8px; border:1px solid #e2e8f0;">
            <div>
              <small style="color:#64748b; font-weight:600; text-transform:uppercase; font-size:0.75rem;">Event ID</small>
              <p style="font-weight:700; color:#0b2545;" id="dtlId"></p>
            </div>
            <div>
              <small style="color:#64748b; font-weight:600; text-transform:uppercase; font-size:0.75rem;">Event Date & Time</small>
              <p style="font-weight:700; color:#0b2545;" id="dtlDateTime"></p>
            </div>
            <div style="grid-column:span 2;">
              <small style="color:#64748b; font-weight:600; text-transform:uppercase; font-size:0.75rem;">Venue Location</small>
              <p style="font-weight:700; color:#0b2545;" id="dtlVenue"></p>
            </div>
            <div>
              <small style="color:#64748b; font-weight:600; text-transform:uppercase; font-size:0.75rem;">Organizing Body</small>
              <p style="font-weight:600; color:#334155;" id="dtlOrganizer"></p>
            </div>
            <div>
              <small style="color:#64748b; font-weight:600; text-transform:uppercase; font-size:0.75rem;">Total Registrations</small>
              <p style="font-weight:700; color:#f77f00;" id="dtlRegistrations"></p>
            </div>
          </div>

          <div style="margin-bottom:10px;">
            <h4 style="font-size:0.95rem; color:#0b2545; margin-bottom:6px;">Event Description</h4>
            <p id="dtlDesc" style="font-size:0.92rem; color:#475569; line-height:1.6;"></p>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeEventModal()">Close</button>
          <a id="dtlRegisterBtn" href="register.html" class="btn btn-primary"><i class="fa-solid fa-ticket"></i> Register For Event</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeEventModal();
    });
  }

  document.getElementById('dtlBadge').className = `badge ${getBadgeClass(event.event_type)}`;
  document.getElementById('dtlBadge').innerText = event.event_type;
  document.getElementById('dtlTitle').innerText = event.event_name;
  document.getElementById('dtlId').innerText = event.event_id;
  document.getElementById('dtlDateTime').innerText = `${formatDate(event.event_date)} | ${event.time || '10:00 AM'}`;
  document.getElementById('dtlVenue').innerHTML = `<i class="fa-solid fa-location-dot" style="color:#f77f00; margin-right:6px;"></i> ${event.venue}`;
  document.getElementById('dtlOrganizer').innerText = event.organizer || 'GPCET Administration';
  document.getElementById('dtlRegistrations').innerText = `${event.registered_count || 0} / ${event.capacity || 500} seats filled`;
  document.getElementById('dtlDesc').innerText = event.description;
  document.getElementById('dtlImage').src = event.image || 'assets/images/auditorium.jpg';
  document.getElementById('dtlRegisterBtn').href = `register.html?event_id=${encodeURIComponent(event.event_id)}`;

  modal.classList.add('active');
}

function closeEventModal() {
  const modal = document.getElementById('eventDetailsModal');
  if (modal) modal.classList.remove('active');
}

// Mobile Navbar Toggle Setup
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});
