document.addEventListener("DOMContentLoaded", () => {
  // Define the function to fetch user data
  async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"; // API URL
    const dataContainer = document.getElementById("api-data");

    try {
      const response = await fetch(apiUrl); // Fetch data from the API
      const users = await response.json(); // Parse the response as JSON

      // Clear the loading message
      dataContainer.innerHTML = "";

      // Create and populate a list of user names
      const userList = document.createElement("ul");
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });

      // Append the list to the container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors by displaying an error message
      dataContainer.textContent = "Failed to load user data.";
    }
  }

  // Call the fetchUserData function
  fetchUserData();
});
