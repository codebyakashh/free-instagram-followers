const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const data = {

    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    password: document.getElementById("password").value

  };

  try {

    const response = await fetch(
      "https://backend-1e01.onrender.com/api/auth/register",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

      }
    );

    const result = await response.json();

    alert(result.message);

  } catch (error) {

    console.log(error);

    alert("Server Error");

  }
  async function fetchUsers() {

  try {
    
    const response = await fetch(`http://127.0.0.1:5000/api/auth/check-profile?username=${username}`)
  

    const users = await response.json();

    const usersDiv = document.getElementById("users");

    usersDiv.innerHTML = "";

    users.forEach((user) => {

      usersDiv.innerHTML += `

        <div class="card">

          <h3>${user.name}</h3>

          <p>${user.email}</p>

        </div>

      `;

    });

  } catch (error) {

    console.log(error);

  }

}

fetchUsers();

});
