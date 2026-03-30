console.log("✅ JS Loaded");

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("🚀 Form submitted");

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        const res = await fetch("http://localhost:5000/api/students/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        console.log("✅ Response:", result);

        alert("Registered Successfully");

        // ✅ ADD THIS LINE (IMPORTANT)
        window.location.href = "login.html";

    } catch (error) {
        console.error("❌ Error:", error);
        alert("Registration Failed");
    }
});