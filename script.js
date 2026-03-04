// ================= JOB DATA =================
const jobs = [
  { id: 1, companyName: "Google", position: "Frontend Developer", location: "Remote", type: "Full-Time", salary: "$120k/year", description: "Develop scalable user interfaces for global products.", status: "all" },
  { id: 2, companyName: "Microsoft", position: "Backend Engineer", location: "USA", type: "Full-Time", salary: "$130k/year", description: "Build secure and scalable cloud APIs.", status: "all" },
  { id: 3, companyName: "Tesla", position: "React Developer", location: "California", type: "Contract", salary: "$100k/year", description: "Work on EV dashboard interface systems.", status: "all" },
  { id: 4, companyName: "Amazon", position: "Node.js Developer", location: "Canada", type: "Full-Time", salary: "$115k/year", description: "Develop high-performance backend services.", status: "all" },
  { id: 5, companyName: "Netflix", position: "UI Engineer", location: "Remote", type: "Full-Time", salary: "$125k/year", description: "Improve streaming platform UI experience.", status: "all" },
  { id: 6, companyName: "Meta", position: "Software Engineer", location: "UK", type: "Full-Time", salary: "$140k/year", description: "Build scalable social media systems.", status: "all" },
  { id: 7, companyName: "Spotify", position: "Frontend Engineer", location: "Sweden", type: "Hybrid", salary: "$110k/year", description: "Design music streaming web interface.", status: "all" },
  { id: 8, companyName: "Adobe", position: "Full Stack Developer", location: "Germany", type: "Full-Time", salary: "$135k/year", description: "Develop creative cloud web applications.", status: "all" }
];
let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
function renderJobs() {

  jobContainer.innerHTML = "";

  const filteredJobs = jobs.filter(job => {
    if (currentTab === "all") return true;
    return job.status === currentTab;
  });

  tabCount.innerText = filteredJobs.length;

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredJobs.forEach(job => {

    const card = document.createElement("div");
    card.className = "bg-gray-50 p-6 rounded-xl shadow";

    card.innerHTML = `
      <h3 class="text-xl font-bold">${job.companyName}</h3>
      <p class="font-semibold">${job.position}</p>
      <p>${job.location} • ${job.type}</p>
      <p class="text-green-600 font-semibold">${job.salary}</p>
      <p class="text-gray-600 my-2">${job.description}</p>

      <div class="flex gap-2 mt-4">
        <button class="interviewBtn px-3 py-1 rounded 
        ${job.status === "interview" ? "bg-green-500 text-white" : "bg-gray-200"}"
        data-id="${job.id}">Interview</button>

        <button class="rejectBtn px-3 py-1 rounded 
        ${job.status === "rejected" ? "bg-red-500 text-white" : "bg-gray-200"}"
        data-id="${job.id}">Rejected</button>

        <button class="deleteBtn px-3 py-1 bg-black text-white rounded"
        data-id="${job.id}">Delete</button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  updateDashboard();
}