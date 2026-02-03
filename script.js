

let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let users = localStorage.getItem("users");

        if (users === null) {
            alert("No account found. Please sign up first.");
            return;
        }

        users = JSON.parse(users);

        let validUser = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                validUser = true;
                break;
            }
        }

        if (validUser) {
            alert("Login successful ✅");
            window.location.href = "index.html";
        } else {
            alert("Wrong email or password ❌");
        }
    });
}







let signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;

        
        let users = localStorage.getItem("users");

        if (users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                alert("Email already exists ");
                return;
            }
        }

       
        users.push({
            email: email,
            password: password
        });

        
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! Please login ");
        window.location.href = "login.html";
    });
}


