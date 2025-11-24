export const mockStudent = {
  id: "2025-0001",
  name: "Alex Cruz",
  email: "alex.cruz@university.edu",
  program: "BS Computer Science",
  year: 2,
  semester: "Spring 2025",
  avatar: "AC"
};

export const mockSubjects = [
  {
    code: "CS201",
    title: "Data Structures",
    units: 3,
    dept: "CS",
    time: "Mon/Wed 10:00-11:30",
    instructor: "Dr. Johnson",
    seats: 5,
    totalSeats: 30,
    preReq: "CS101",
    description: "Study of data structures including arrays, linked lists, stacks, queues, trees, and graphs."
  },
  {
    code: "MATH101",
    title: "Calculus I",
    units: 4,
    dept: "Math",
    time: "Tue/Thu 08:00-09:30",
    instructor: "Prof. Smith",
    seats: 0,
    totalSeats: 40,
    preReq: "",
    description: "Introduction to differential and integral calculus."
  },
  {
    code: "CS202",
    title: "Algorithms",
    units: 3,
    dept: "CS",
    time: "Mon/Wed 14:00-15:30",
    instructor: "Dr. Brown",
    seats: 12,
    totalSeats: 30,
    preReq: "CS201",
    description: "Design and analysis of computer algorithms."
  },
  {
    code: "ENG101",
    title: "Technical Writing",
    units: 3,
    dept: "English",
    time: "Tue/Thu 10:00-11:30",
    instructor: "Prof. Davis",
    seats: 8,
    totalSeats: 25,
    preReq: "",
    description: "Professional and technical communication skills."
  },
  {
    code: "CS301",
    title: "Database Systems",
    units: 3,
    dept: "CS",
    time: "Wed/Fri 13:00-14:30",
    instructor: "Dr. Wilson",
    seats: 15,
    totalSeats: 35,
    preReq: "CS201",
    description: "Database design, SQL, and database management systems."
  },
  {
    code: "PHYS101",
    title: "Physics I",
    units: 4,
    dept: "Physics",
    time: "Mon/Wed 09:00-10:30",
    instructor: "Prof. Lee",
    seats: 10,
    totalSeats: 30,
    preReq: "",
    description: "Mechanics, heat, and sound."
  },
  {
    code: "CS205",
    title: "Web Development",
    units: 3,
    dept: "CS",
    time: "Tue/Thu 15:00-16:30",
    instructor: "Dr. Martinez",
    seats: 6,
    totalSeats: 25,
    preReq: "CS101",
    description: "Modern web technologies including HTML, CSS, JavaScript, and frameworks."
  },
  {
    code: "MATH201",
    title: "Linear Algebra",
    units: 3,
    dept: "Math",
    time: "Mon/Wed 11:00-12:30",
    instructor: "Prof. Anderson",
    seats: 14,
    totalSeats: 35,
    preReq: "MATH101",
    description: "Vector spaces, matrices, and linear transformations."
  },
  {
    code: "CS303",
    title: "Operating Systems",
    units: 3,
    dept: "CS",
    time: "Tue/Thu 13:00-14:30",
    instructor: "Dr. Taylor",
    seats: 9,
    totalSeats: 30,
    preReq: "CS201",
    description: "Process management, memory management, and file systems."
  },
  {
    code: "HUM101",
    title: "Ethics & Society",
    units: 3,
    dept: "Humanities",
    time: "Wed 16:00-18:30",
    instructor: "Prof. Garcia",
    seats: 20,
    totalSeats: 40,
    preReq: "",
    description: "Ethical theories and their application to contemporary issues."
  }
];

export const mockFees = [
  {
    invoiceId: "INV-1001",
    amount: 12000,
    status: "Due",
    dueDate: "2025-02-15",
    description: "Spring 2025 Tuition",
    items: [
      { name: "Tuition (12 units)", amount: 10000 },
      { name: "Laboratory Fee", amount: 1500 },
      { name: "Library Fee", amount: 500 }
    ]
  },
  {
    invoiceId: "INV-1002",
    amount: 8000,
    status: "Paid",
    dueDate: "2024-12-15",
    paidDate: "2024-12-10",
    description: "Fall 2024 Tuition",
    items: [
      { name: "Tuition (9 units)", amount: 7500 },
      { name: "Library Fee", amount: 500 }
    ]
  },
  {
    invoiceId: "INV-1003",
    amount: 3500,
    status: "Overdue",
    dueDate: "2024-11-30",
    description: "Summer 2024 Lab Fee",
    items: [
      { name: "Computer Lab Fee", amount: 2000 },
      { name: "Science Lab Fee", amount: 1500 }
    ]
  }
];

export const mockSchedule = [
  { day: "Monday", time: "09:00-10:30", subject: "PHYS101", room: "Room 201" },
  { day: "Monday", time: "10:00-11:30", subject: "CS201", room: "Lab 105" },
  { day: "Monday", time: "11:00-12:30", subject: "MATH201", room: "Room 304" },
  { day: "Monday", time: "14:00-15:30", subject: "CS202", room: "Lab 106" },
  { day: "Tuesday", time: "08:00-09:30", subject: "MATH101", room: "Room 302" },
  { day: "Tuesday", time: "10:00-11:30", subject: "ENG101", room: "Room 205" },
  { day: "Tuesday", time: "13:00-14:30", subject: "CS303", room: "Lab 107" },
  { day: "Tuesday", time: "15:00-16:30", subject: "CS205", room: "Lab 108" },
  { day: "Wednesday", time: "09:00-10:30", subject: "PHYS101", room: "Room 201" },
  { day: "Wednesday", time: "10:00-11:30", subject: "CS201", room: "Lab 105" },
  { day: "Wednesday", time: "11:00-12:30", subject: "MATH201", room: "Room 304" },
  { day: "Wednesday", time: "13:00-14:30", subject: "CS301", room: "Lab 109" },
  { day: "Wednesday", time: "16:00-18:30", subject: "HUM101", room: "Room 401" },
  { day: "Thursday", time: "08:00-09:30", subject: "MATH101", room: "Room 302" },
  { day: "Thursday", time: "10:00-11:30", subject: "ENG101", room: "Room 205" },
  { day: "Thursday", time: "13:00-14:30", subject: "CS303", room: "Lab 107" },
  { day: "Thursday", time: "15:00-16:30", subject: "CS205", room: "Lab 108" },
  { day: "Friday", time: "13:00-14:30", subject: "CS301", room: "Lab 109" }
];

export const mockDashboardStats = {
  totalCredits: 15,
  currentGPA: 3.45,
  balanceDue: 12000,
  nextClass: {
    subject: "CS201",
    title: "Data Structures",
    time: "Mon 10:00 AM",
    room: "Lab 105"
  }
};
