var currentPage = 1;
var eventsPerPage = 4;

// Function to validate login credentials
function validateLogin(event) {
    event.preventDefault(); // Prevent form submissionl̥
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match the predefined values
    if (username === "admin" && password === "admin123") {
        // Redirect to dashboard or perform any other action on successful login
        window.location.href = "home.html";
    } else {
        // Display error message
        document.getElementById("error-msg").innerText = "Invalid username or password!";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var eventList = document.getElementById("eventList");
    var eventDetails = document.getElementById("eventDetails");

    // Sample event data (Replace with your actual data)
    var eventData = [
        {
            "eventTitle": "Basic Android",
            "date": "06 March, 2024 10AM",
            "place": "Trivandrum",
            "address": "O By Thamara, Trivandrum",
            "Speaker": [
                {
                    "speakerName": "Sam",
                    "designation": "Lead Software Engineer"
                },
                {
                    "speakerName": "Peter",
                    "designation": "Software Engineer"
                }
            ]
        },
        {
            "eventTitle": "Basic iOS",
            "date": "07 March, 2024 10AM",
            "place": "Trivandrum",
            "address": "O By Thamara, Trivandrum",
            "Speaker": [
                {
                    "speakerName": "John",
                    "designation": "Senior Software Engineer"
                }
            ]
        },
        {
            "eventTitle": "Basic AWS",
            "date": "09 March, 2024 10AM",
            "place": "Trivandrum",
            "address": "O By Thamara, Trivandrum",
            "Speaker": [
                {
                    "speakerName": "Abin",
                    "designation": "Senior Architect"
                }
            ]
        },
        {
            "eventTitle": "Web Development Workshop",
            "date": "10 March, 2024 2PM",
            "place": "Bangalore",
            "address": "TechHub, Bangalore",
            "Speaker": [
                {
                    "speakerName": "Alice",
                    "designation": "Frontend Developer"
                },
                {
                    "speakerName": "Bob",
                    "designation": "Backend Developer"
                }
            ]
        },
        {
            "eventTitle": "Machine Learning Seminar",
            "date": "12 March, 2024 11AM",
            "place": "Mumbai",
            "address": "DataCenter, Mumbai",
            "Speaker": [
                {
                    "speakerName": "Eva",
                    "designation": "Data Scientist"
                },
                {
                    "speakerName": "Frank",
                    "designation": "AI Engineer"
                }
            ]
        },
        {
            "eventTitle": "Cybersecurity Conference",
            "date": "15 March, 2024 9AM",
            "place": "Delhi",
            "address": "Security Institute, Delhi",
            "Speaker": [
                {
                    "speakerName": "Grace",
                    "designation": "Cybersecurity Analyst"
                }
            ]
        },
        {
            "eventTitle": "Blockchain Summit",
            "date": "18 March, 2024 10AM",
            "place": "Hyderabad",
            "address": "CryptoSpace, Hyderabad",
            "Speaker": [
                {
                    "speakerName": "Henry",
                    "designation": "Blockchain Developer"
                }
            ]
        },
        {
            "eventTitle": "UI/UX Design Workshop",
            "date": "20 March, 2024 3PM",
            "place": "Chennai",
            "address": "Design Studio, Chennai",
            "Speaker": [
                {
                    "speakerName": "Ivy",
                    "designation": "UI/UX Designer"
                }
            ]
        },
        {
            "eventTitle": "Data Science Bootcamp",
            "date": "22 March, 2024 10AM",
            "place": "Pune",
            "address": "DataHub, Pune",
            "Speaker": [
                {
                    "speakerName": "Jack",
                    "designation": "Data Analyst"
                },
                {
                    "speakerName": "Kelly",
                    "designation": "Data Engineer"
                }
            ]
        },
        {
            "eventTitle": "Cloud Computing Conference",
            "date": "25 March, 2024 9AM",
            "place": "Kolkata",
            "address": "CloudCenter, Kolkata",
            "Speaker": [
                {
                    "speakerName": "Luke",
                    "designation": "Cloud Architect"
                },
                {
                    "speakerName": "Mia",
                    "designation": "DevOps Engineer"
                }
            ]
        },
        {
            "eventTitle": "IoT Workshop",
            "date": "28 March, 2024 1PM",
            "place": "Ahmedabad",
            "address": "IoT Lab, Ahmedabad",
            "Speaker": [
                {
                    "speakerName": "Noah",
                    "designation": "IoT Developer"
                }
            ]
        },
        {
            "eventTitle": "Big Data Summit",
            "date": "30 March, 2024 11AM",
            "place": "Jaipur",
            "address": "BigData Center, Jaipur",
            "Speaker": [
                {
                    "speakerName": "Olivia",
                    "designation": "Big Data Analyst"
                },
                {
                    "speakerName": "Peter",
                    "designation": "Data Architect"
                }
            ]
        },
        {
            "eventTitle": "Software Testing Seminar",
            "date": "02 April, 2024 2PM",
            "place": "Lucknow",
            "address": "TestingLab, Lucknow",
            "Speaker": [
                {
                    "speakerName": "Quinn",
                    "designation": "QA Engineer"
                }
            ]
        }
    ];


    function populateEventList() {
        var startIndex = (currentPage - 1) * eventsPerPage;
        var endIndex = startIndex + eventsPerPage;
        var displayedEvents = eventData.slice(startIndex, endIndex);

        eventList.innerHTML = ""; // Clear existing content
        displayedEvents.forEach(function (event, index) {
            // Create event item
            var eventItem = document.createElement("div");
            eventItem.classList.add("event");
            eventItem.innerHTML = `
                <h3>${event.eventTitle}</h3>
                <div class="event-info">
                    <p>Date: ${event.date}</p>
                    <p>Place: ${event.place}</p>
                </div>
            `;
            eventItem.addEventListener("click", function () {
                displayEventDetails(event);
            });
            eventList.appendChild(eventItem);
        });

        // Update page info
        var totalPages = Math.ceil(eventData.length / eventsPerPage);
        document.getElementById("pageInfo").innerText = "Page " + currentPage + " of " + totalPages;
        document.getElementById("prevPageBtn").disabled = currentPage === 1;
        document.getElementById("nextPageBtn").disabled = currentPage === totalPages;
    }


    function nextPage() {
        currentPage++;
        populateEventList();
        console.log(currentPage)
    }

    function prevPage() {
        currentPage--;
        populateEventList();
    }


    // Function to display event details
    function displayEventDetails(event) {
        eventDetails.innerHTML = `
        <h2>${event.eventTitle}</h2>
        <div class="event-info">
            <strong><p>Speakers:</p></strong>
            <ul>
                ${event.Speaker.map((speaker, index) => `<li>${speaker.speakerName} | ${speaker.designation}</li>`).join('')}
            </ul>
            <p>Date: ${event.date}</p>
            <p>Place: ${event.place}</p>
            <p>Address: ${event.address}</p>
        </div>
        <button id="bookNowBtn">Book Now</button>
    `;

        // Add event listener to the button
        var bookNowBtn = document.getElementById("bookNowBtn");
        bookNowBtn.addEventListener("click", function () {
            // Call a function to open the modal
            openModal(event);
        });
    }

    // Populate the event list initially
    populateEventList();
    // Display details of the first event by default
    displayEventDetails(eventData[0]);


    document.getElementById("prevPageBtn").addEventListener("click", prevPage);
    document.getElementById("nextPageBtn").addEventListener("click", nextPage);
});





// Function to open the modal
function openModal(event) {
    document.getElementById("modalEventTitle").innerText = event.eventTitle;
    document.getElementById("modalEventDate").innerText = event.date;
    document.getElementById("modalEventPlace").innerText = event.place;
    document.getElementById("customDialog").style.display = "block";
}




function generatePass() {
    // Get input values
    var nameInput = document.getElementById("modalName");
    var emailInput = document.getElementById("modalEmail");
    var mobileInput = document.getElementById("modalMobile");
    var companyInput = document.getElementById("modalCompany");
    var designationInput = document.getElementById("modalDesignation");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var mobile = mobileInput.value.trim();
    var company = companyInput.value.trim();
    var designation = designationInput.value.trim();

    // Validate name, email, and mobile number
    var isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email address";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validate mobile number (assuming 10 digits)
    var mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerText = "Invalid mobile number";
        isValid = false;
    } else {
        document.getElementById("mobileError").innerText = "";
    }

    // If any validation fails, return without generating pass
    if (!isValid) {
        return;
    }

    // Get event details
    var eventTitle = document.getElementById("modalEventTitle").innerText;
    var eventDate = document.getElementById("modalEventDate").innerText;
    var eventPlace = document.getElementById("modalEventPlace").innerText;

    // Construct the content to be printed
    var eventDetails = `
        <h2>Event Details</h2>
        <p><strong>Title:</strong> ${eventTitle}</p>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Place:</strong> ${eventPlace}</p>
    `;
    var passDetails = `
        <h2>Pass Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Designation:</strong> ${designation}</p>
    `;

    // Combine event and pass details
    var content = eventDetails + passDetails;

    // Create a new window to print the content
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Event Pass</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    // Print the content
    printWindow.print();
}

function closeDialog() {
    var modal = document.getElementById("customDialog");
    modal.style.display = "none";
}




