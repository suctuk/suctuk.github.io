// Search functionality
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Sample search content - replace with your actual content
const searchableContent = [
  { title: "About CSEL", url: "/about" },
  { title: "Faculty Directory", url: "/faculty" },
  { title: "Room Reservations", url: "/reservations" },
  // Add more searchable content here
];

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  if (query.length < 2) {
    searchResults.style.display = "none";
    return;
  }

  const matches = searchableContent.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  if (matches.length > 0) {
    searchResults.innerHTML = matches
      .map(
        (item) =>
          `<div class="p-2 border-bottom">
                <a href="${item.url}" class="text-decoration-none text-dark">
                    ${item.title}
                </a>
            </div>`
      )
      .join("");
    searchResults.style.display = "block";
  } else {
    searchResults.innerHTML = '<div class="p-2">No results found</div>';
    searchResults.style.display = "block";
  }
});

// Hide search results when clicking outside
document.addEventListener("click", function (e) {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.style.display = "none";
  }
});

// Carousel auto-play configuration
const carousel = new bootstrap.Carousel(
  document.getElementById("mainCarousel"),
  {
    interval: 5000,
    wrap: true,
  }
);

// Template for adding new carousel slides
/*
To add a new slide:
1. Add a new indicator button:
<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="4"></button>

2. Add a new carousel item:
<div class="carousel-item">
    <div class="carousel-content">
        <h2>New Slide Title</h2>
        <p>New slide description goes here.</p>
    </div>
</div>
*/
