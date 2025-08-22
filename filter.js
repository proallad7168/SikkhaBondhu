document.addEventListener("DOMContentLoaded", function () {
  const titleSearch = document.getElementById("title-search");
  const cardContainer = document.getElementById("card-container");

  const staticPosts = [
    {
      id: 1,
      title: "Math Tuition for Class 8",
      class_name: "8",
      subjects: "Math, Algebra",
      location: "Dhanmondi, Dhaka",
      monthly_payment: 3500,
      image: "/images/tutor_placeholder.webp",
      google_map_link: "https://maps.google.com/?q=Dhanmondi"
    },
    {
      id: 2,
      title: "English Coaching for SSC",
      class_name: "SSC",
      subjects: "English, Literature",
      location: "Uttara, Dhaka",
      monthly_payment: 4000,
      image: "/images/tutor_placeholder.webp",
      google_map_link: "https://maps.google.com/?q=Uttara"
    },
    {
      id: 3,
      title: "Science Tuition for Class 10",
      class_name: "10",
      subjects: "Physics, Chemistry, Biology",
      location: "Mirpur, Dhaka",
      monthly_payment: 4500,
      image: "/images/tutor_placeholder.webp",
      google_map_link: "https://maps.google.com/?q=Mirpur"
    },
    {
      id: 4,
      title: "Computer Programming for HSC",
      class_name: "HSC",
      subjects: "C++, Java, Python",
      location: "Gulshan, Dhaka",
      monthly_payment: 5000,
      image: "/images/tutor_placeholder.webp",
      google_map_link: "https://maps.google.com/?q=Gulshan"
    },
    {
      id: 5,
      title: "Math Tuition for Class 9",
      class_name: "9",
      subjects: "Math, Algebra, Geometry",
      location: "Motijheel, Dhaka",
      monthly_payment: 3000,
      image: "/images/tutor_placeholder.webp",
      google_map_link: "https://maps.google.com/?q=Motijheel"
    },
    {
      id: 6,
      title: "English Coaching for IELTS",
      class_name: "IELTS",
      subjects: "English, Reading, Writing",
      location: "Banani, Dhaka",
      monthly_payment: 6000,
      image: "/images/tutor_placeholder.webp",
      google_map_link: "https://maps.google.com/?q=Banani"
    },
  ];

  function createCard(post) {
    const card = document.createElement("div");
    card.className =
      "flex bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105";
    
    card.innerHTML = ` 
      <div class="w-1/3">
        <img 
          src="${post.image}" 
          alt="Tuition Image" 
          class="w-full h-full object-cover" 
          onerror="this.src='/images/tutor_placeholder.webp';">
      </div>
      <div class="w-2/3 p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${post.title}</h3>
        <p class="text-sm text-gray-600 mb-2"><strong>Class:</strong> ${post.class_name}</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Subjects:</strong> ${post.subjects}</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Location:</strong> ${post.location}</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Monthly Payment:</strong> ৳${post.monthly_payment}</p>
        <a href="${post.google_map_link}" target="_blank" class="inline-block text-blue-500 underline text-sm">View on Map</a>
        <a href="details.html?id=${post.id}" class="inline-block mt-4 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">Details</a>
      </div>
    `;    
    return card;
  }

  function renderCards(posts) {
    cardContainer.innerHTML = "";
    if (posts.length === 0) {
      const noDataImage = document.createElement("img");
      noDataImage.src = "/resource/noDataFound.jpg";
      noDataImage.alt = "No Data Found";
      noDataImage.className = "w-1/5 h-auto mx-auto";           
      cardContainer.className = "flex justify-center items-center";
      cardContainer.appendChild(noDataImage);
    } else {
      cardContainer.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
      posts.forEach(post => cardContainer.appendChild(createCard(post)));
    }
  }

  function updateCardsWithTitleSearch() {
    const title = titleSearch.value.trim().toLowerCase();
    if (title) {
      const filteredPosts = staticPosts.filter(post =>
        post.title.toLowerCase().includes(title)
      );
      renderCards(filteredPosts);
    } else {
      renderCards(staticPosts);
    }
  }

  // Event listener for search
  titleSearch.addEventListener("input", updateCardsWithTitleSearch);

  // Initial load: render all static posts
  renderCards(staticPosts);
});
