console.log("✅ Login JS Loaded");

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("🚀 Login Form Submitted");

    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        const res = await fetch("http://localhost:5000/api/students/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        console.log("✅ Response:", result);

        if (res.ok) {
            alert("Login Successful");

            // Redirect to dashboard (next step)
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials");
        }

    } catch (error) {
        console.error("❌ Error:", error);
        alert("Login Failed");
    }
});