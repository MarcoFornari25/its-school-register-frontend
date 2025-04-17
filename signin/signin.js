class User {
  constructor(id, lastname, firstname, phone, email, active, fiscalcode) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.phone = phone;
    this.email = email;
    this.active = active;
    this.fiscalcode = fiscalcode;
  }

  // Helper method to create a User from JSON
  static fromJson(json) {
    return new User(
      json.id,
      json.lastname,
      json.firstname,
      json.phone,
      json.email,
      json.active,
      json.fiscalcode
    );
  }

  // Display user information
  toString() {
    return `User ${this.id}: ${this.firstname} ${this.lastname} (${this.email}) - Active: ${this.active ? 'Yes' : 'No'}`;
  }
}

class ApiClient {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  // Login and get token
  async login(email, password) {
    return new Promise((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.baseUrl}/login`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            if (response.error === false && response.token) {
              this.token = response.token;
              console.log('Login successful!');
              resolve(true);
            } else {
              console.error(`Login failed: ${response.errormessage}`);
              resolve(false);
            }
          } else {
            console.error(`HTTP error: ${xhr.status}`);
            resolve(false);
          }
        };

        xhr.onerror = () => {
          console.error('Login error: Network error');
          resolve(false);
        };

        xhr.send(JSON.stringify({
          email: email,
          pwd: password
        }));
      } catch (error) {
        console.error('Login error:', error.message);
        resolve(false);
      }
    });
  }
}

// togglePassword 
function togglePassword() {
  var passwordField = document.getElementById("password");
  var checkbox = document.getElementById("check-5");

  if (checkbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

// Funzione di login
async function valida(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const apiClient = new ApiClient();

  try {
    const isLoginSuccessful = await apiClient.login(email, password);
    if (isLoginSuccessful) {
      console.log("Giusto");
      window.location.href = "../teacherpage/index.html";
      console.log("Sbagliato");
    }
  } catch (error) {
    console.error("Errore durante il login:", error);
  }
}
//cursor 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
