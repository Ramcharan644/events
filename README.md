# G. Pullaiah College Event - College Management System

A web-based **College Management & Events System** built for **G. Pullaiah College of Engineering and Technology (GPCET)**, Kurnool, Andhra Pradesh.

---

## 🌟 Key Features

1. **Master Event Table (`event_id`, `event name`, `event type`, `event date`, `venue`, `description`)**:
   - Complete interactive data table with live search, categorization, and sorting.
   - **Add Event**: Form modal to register new events into the system.
   - **Edit & Delete**: Full CRUD functionality persisted in browser storage.
   - **Export CSV**: Download complete tabular records directly to Excel / CSV.
   - **Printable Reports**: Formatted print preview for official records.

2. **Official G. Pullaiah College Campus Photos**:
   - **Main Academic Campus Building**: Multi-storey architectural block with entrance arch & green lawns.
   - **Visvesvaraya Central Auditorium**: 1,200+ capacity auditorium during GPCET Tech Fest 2026.
   - **AICTE IDEA Lab & Innovation Center**: Hands-on IoT, 3D printing & computing workspace.
   - **Annual Sports & Cultural Festival Grounds**: Open-air student gala arena for VIBRANCE meet.
   - Full-screen interactive lightbox zoom for all campus photos.

3. **Student Registration & Admit Pass Generator**:
   - Interactive registration form with branch and year selection.
   - Generates official **GPCET Student Event Entry Admit Pass** with QR code and print support.

4. **Administrative Dashboard**:
   - Real-time event analytics, metrics, registration audit logs, and JSON database backup.

---

## 📂 Project Structure

```
g_pullaiah_college_events/
├── index.html                   # Homepage with hero, flagship events, table preview & photos
├── events.html                  # Full Master Event Table with CRUD, Search & Filters
├── gallery.html                 # College Photo Gallery with 4 high-res campus photos & lightbox
├── register.html                # Student Event Registration & Admit Pass Generator
├── admin.html                   # Faculty & Administrator Management Portal
├── server.py                    # Lightweight Python HTTP server
├── run.bat                      # 1-Click Windows launcher script
├── README.md                    # Project documentation
└── assets/
    ├── css/
    │   └── style.css            # Responsive collegiate styles & print stylesheets
    ├── js/
    │   ├── data.js              # Initial events repository & LocalStorage manager
    │   ├── app.js               # Global UI helpers, toasts, modal controller & CSV exporter
    │   └── events.js            # Table rendering, live search, filters, CRUD logic
    └── images/
        ├── logo.svg             # Official GPCET Crest & Emblem
        ├── campus_main.jpg      # GPCET Main Academic Campus photo
        ├── auditorium.jpg       # Visvesvaraya Central Auditorium during Tech Fest photo
        ├── idea_lab.jpg         # AICTE IDEA Lab & Innovation Center photo
        └── cultural_sports.jpg  # Sports & Cultural Gala Festival Grounds photo
```

---

## 📋 Master Event Table Schema

| Column Field Name | Data Type | Example Value | Description |
|---|---|---|---|
| `event_id` | String | `GPCET-EVT-101` | Unique event identifier |
| `event_name` | String | `IGNITOR 2026 - National Technical Fest` | Full official name of the event |
| `event_type` | String | `Technical Fest` | Category (Technical, Cultural, Sports, Workshop, etc.) |
| `event_date` | Date | `2026-11-15` | Date of the event ("event data") |
| `venue` | String | `Visvesvaraya Central Auditorium` | Campus location or hall |
| `description` | Text | `Flagship symposium with coding marathons...` | Event details, schedule & rules |

---

## 🚀 How to Run

### Method 1: Instant Browser View (No setup required)
Simply double-click `index.html` in your file explorer to open it in Chrome, Edge, Firefox, or any modern web browser.

### Method 2: Windows 1-Click Launcher
Double-click `run.bat` in the project folder. It will detect Python and start the local web server automatically.

### Method 3: Python Local Web Server
Open terminal in the project directory and run:
```bash
python server.py
```
Or:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🏛️ About G. Pullaiah College (GPCET)
- **Institution**: G. Pullaiah College of Engineering and Technology
- **Status**: Autonomous Institution, Approved by AICTE, Affiliated to JNTUA
- **Accreditation**: NAAC 'A' Grade, NBA Accredited
- **Location**: Nandyal Road, Kurnool - 518452, Andhra Pradesh, India
