/**
 * G. Pullaiah College of Engineering and Technology (GPCET)
 * Event Management System - Initial Data Store
 */

const DEFAULT_EVENTS = [
  {
    event_id: "GPCET-EVT-101",
    event_name: "IGNITOR 2026 - National Level Technical Fest",
    event_type: "Technical Fest",
    event_date: "2026-11-15",
    time: "09:30 AM - 05:30 PM",
    venue: "Visvesvaraya Central Auditorium & Seminar Halls",
    description: "The flagship annual national-level technical symposium of GPCET featuring coding marathons, paper presentations, bot wars, project expo, and web design challenges across all engineering branches.",
    organizer: "GPCET Student Technical Council & CSI Chapter",
    coordinator: "Dr. K. Srinivasulu (HoD - CSE)",
    capacity: 800,
    registered_count: 540,
    status: "Upcoming",
    image: "assets/images/auditorium.jpg",
    tags: ["Coding", "Robotics", "Paper Presentation", "AI"]
  },
  {
    event_id: "GPCET-EVT-102",
    event_name: "ETECIS 2026: Int. Conference on Smart Systems",
    event_type: "Conference",
    event_date: "2026-12-18",
    time: "10:00 AM - 05:00 PM",
    venue: "Main Block Seminar Hall 1 & Virtual Track",
    description: "International Conference on Emerging Trends in Electronics, Computing, and Intelligent Systems. Peer-reviewed research papers, keynote speeches by IEEE fellows, and publication proceedings in Scopus indexed journals.",
    organizer: "Dept of ECE & AICTE IDEA Lab",
    coordinator: "Dr. C. Venkatesh (Dean R&D)",
    capacity: 350,
    registered_count: 215,
    status: "Upcoming",
    image: "assets/images/campus_main.jpg",
    tags: ["Research", "IEEE", "IoT", "Machine Learning"]
  },
  {
    event_id: "GPCET-EVT-103",
    event_name: "AICTE IDEA Lab Hands-on IoT & 3D Prototyping Workshop",
    event_type: "Workshop",
    event_date: "2026-10-24",
    time: "09:00 AM - 04:30 PM",
    venue: "AICTE IDEA Lab & Innovation Center, GPCET",
    description: "Intensive 2-day practical workshop on embedded systems, ESP32 microcontrollers, 3D printing rapid prototyping, and sensor integration for industrial automation.",
    organizer: "AICTE IDEA Lab & Dept of Mechanical Engineering",
    coordinator: "Prof. S. Ramanjaneyulu (Idea Lab Incharge)",
    capacity: 60,
    registered_count: 58,
    status: "Filling Fast",
    image: "assets/images/idea_lab.jpg",
    tags: ["3D Printing", "IoT", "Arduino", "Hardware"]
  },
  {
    event_id: "GPCET-EVT-104",
    event_name: "VIBRANCE 2026: Annual Cultural & Arts Gala",
    event_type: "Cultural",
    event_date: "2026-11-28",
    time: "05:00 PM - 10:30 PM",
    venue: "GPCET Open Air Campus Sports Grounds",
    description: "Electrifying cultural extravaganza showcasing classical and modern dance competitions, battle of the bands, drama, fashion showcase, singing performances, and celebrity musical night.",
    organizer: "Cultural Club 'Tarang' & NSS Wing",
    coordinator: "Mrs. M. Lakshmi (Student Affairs)",
    capacity: 2500,
    registered_count: 1420,
    status: "Upcoming",
    image: "assets/images/cultural_sports.jpg",
    tags: ["Music", "Dance", "Drama", "Celebrity Night"]
  },
  {
    event_id: "GPCET-EVT-105",
    event_name: "Kurnool Inter-College Cricket & Athletics Trophy",
    event_type: "Sports",
    event_date: "2026-12-05",
    time: "08:00 AM - 06:00 PM",
    venue: "College Sports Arena & Cricket Pavilion",
    description: "Inter-collegiate sports tournament featuring T20 cricket, volleyball, basketball, kabaddi, and athletic track events with trophies and cash awards for winning squads.",
    organizer: "Department of Physical Education",
    coordinator: "Mr. B. Ravindra Reddy (Physical Director)",
    capacity: 400,
    registered_count: 320,
    status: "Upcoming",
    image: "assets/images/cultural_sports.jpg",
    tags: ["Cricket", "Volleyball", "Athletics", "Kabaddi"]
  },
  {
    event_id: "GPCET-EVT-106",
    event_name: "Hack-a-Pull 24Hr AI & Web3 Hackathon",
    event_type: "Hackathon",
    event_date: "2026-11-06",
    time: "10:00 AM (Overnight 24 Hrs)",
    venue: "Advanced Computing Lab 3 & Central Library",
    description: "24-hour continuous innovation sprint for students to prototype solutions addressing Healthcare, Agritech, Smart Cities, and Cyber Security with mentorship from industry tech leads.",
    organizer: "Coding Club & Dept of Artificial Intelligence",
    coordinator: "Dr. P. Mallikarjuna (Dept of AI & DS)",
    capacity: 120,
    registered_count: 110,
    status: "Registration Closing",
    image: "assets/images/idea_lab.jpg",
    tags: ["Hackathon", "AI", "Agritech", "Prizes"]
  },
  {
    event_id: "GPCET-EVT-107",
    event_name: "Red Cross & NSS Mega Blood Donation & Health Camp",
    event_type: "Community / NSS",
    event_date: "2026-10-31",
    time: "09:00 AM - 02:00 PM",
    venue: "College Health Center & Indoor Auditorium",
    description: "Voluntary blood donation drive organized in association with Indian Red Cross Society and Kurnool Govt General Hospital. Free health check-up, eye screening, and dental camp for students and faculty.",
    organizer: "NSS Unit & Youth Red Cross Chapter",
    coordinator: "Mr. T. Naresh (NSS Program Officer)",
    capacity: 500,
    registered_count: 380,
    status: "Upcoming",
    image: "assets/images/campus_main.jpg",
    tags: ["NSS", "Social Service", "Blood Donation"]
  },
  {
    event_id: "GPCET-EVT-108",
    event_name: "Recent Trends in Smart Materials & EV Tech",
    event_type: "Seminar",
    event_date: "2026-11-20",
    time: "10:30 AM - 03:30 PM",
    venue: "Sir C.V. Raman Seminar Hall, ME Block",
    description: "Specialized expert seminar on lightweight composite alloys, electric vehicle battery packaging, and regenerative braking dynamics with guest speakers from ARAI and DRDO.",
    organizer: "Department of Mechanical & Electrical Engineering",
    coordinator: "Dr. N. Govinda Rao (Professor - ME)",
    capacity: 150,
    registered_count: 95,
    status: "Upcoming",
    image: "assets/images/auditorium.jpg",
    tags: ["Electric Vehicles", "Smart Materials", "DRDO"]
  }
];

const GALLERY_PHOTOS = [
  {
    id: "g-1",
    title: "G. Pullaiah College Main Academic Campus",
    category: "Campus",
    image: "assets/images/campus_main.jpg",
    description: "Majestic administrative and main academic building featuring state-of-the-art smart classrooms, dean offices, and landscaped green avenues on Nandyal Road, Kurnool.",
    location: "Main Academic Block, GPCET"
  },
  {
    id: "g-2",
    title: "Visvesvaraya Central Auditorium - Tech Fest & Conventions",
    category: "Auditorium & Events",
    image: "assets/images/auditorium.jpg",
    description: "Acoustically treated high-capacity auditorium during GPCET Tech Fest 2026 with ultra-wide LED stage displays, hosting international conferences and annual ceremonies.",
    location: "Central Block, Level 2"
  },
  {
    id: "g-3",
    title: "AICTE IDEA Lab & Innovation Center",
    category: "Labs & Innovation",
    image: "assets/images/idea_lab.jpg",
    description: "Cutting-edge AICTE sanctioned IDEA Lab and computer engineering workspaces equipped with 3D printers, laser cutters, IoT testbeds, and robotic development stations.",
    location: "Innovatia Building, Ground Floor"
  },
  {
    id: "g-4",
    title: "Annual Sports & Cultural Meet Grounds (Vibrance Gala)",
    category: "Sports & Cultural",
    image: "assets/images/cultural_sports.jpg",
    description: "Grand outdoor festival grounds buzzing with thousands of GPCET students and faculty during the annual sports meet, musical concerts, and cultural celebrations.",
    location: "College Sports Arena & Open Grounds"
  }
];

// Data Service for local persistence
class EventDataManager {
  static STORAGE_KEY = "gpcet_events_v1";
  static REGISTRATIONS_KEY = "gpcet_registrations_v1";

  static getEvents() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("LocalStorage access failed, using defaults", e);
    }
    // initialize
    this.saveEvents(DEFAULT_EVENTS);
    return DEFAULT_EVENTS;
  }

  static saveEvents(events) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }

  static getEventById(id) {
    const events = this.getEvents();
    return events.find(ev => ev.event_id === id);
  }

  static addEvent(newEvent) {
    const events = this.getEvents();
    // Check if ID exists
    if (events.some(e => e.event_id === newEvent.event_id)) {
      throw new Error(`Event ID ${newEvent.event_id} already exists!`);
    }
    events.unshift(newEvent);
    this.saveEvents(events);
    return newEvent;
  }

  static updateEvent(event_id, updatedFields) {
    const events = this.getEvents();
    const index = events.findIndex(e => e.event_id === event_id);
    if (index === -1) {
      throw new Error(`Event ${event_id} not found!`);
    }
    events[index] = { ...events[index], ...updatedFields };
    this.saveEvents(events);
    return events[index];
  }

  static deleteEvent(event_id) {
    let events = this.getEvents();
    events = events.filter(e => e.event_id !== event_id);
    this.saveEvents(events);
    return true;
  }

  static resetToDefaults() {
    this.saveEvents(DEFAULT_EVENTS);
    return DEFAULT_EVENTS;
  }

  static getRegistrations() {
    try {
      const stored = localStorage.getItem(this.REGISTRATIONS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  static registerStudent(registrationData) {
    const registrations = this.getRegistrations();
    const regId = "GPCET-REG-" + Math.floor(100000 + Math.random() * 900000);
    const newReg = {
      reg_id: regId,
      timestamp: new Date().toISOString(),
      ...registrationData
    };
    registrations.unshift(newReg);
    try {
      localStorage.setItem(this.REGISTRATIONS_KEY, JSON.stringify(registrations));
    } catch (e) {}

    // increment event registered_count
    try {
      const ev = this.getEventById(registrationData.event_id);
      if (ev) {
        this.updateEvent(ev.event_id, { registered_count: (ev.registered_count || 0) + 1 });
      }
    } catch (e) {}

    return newReg;
  }
}

// Expose globally
window.EventDataManager = EventDataManager;
window.GALLERY_PHOTOS = GALLERY_PHOTOS;
