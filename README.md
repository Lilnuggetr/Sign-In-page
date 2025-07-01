# 🔐 Modern Login & Signup UI with Forgot Password

This project is a responsive and interactive authentication user interface with toggling Login/Signup forms and a separate Forgot Password screen. It uses **HTML**, **CSS (custom properties)**, and **Vanilla JavaScript** to provide a smooth UI/UX experience.

---

## 🎯 Features

✅ Toggle between **Login** and **Signup** without page reload  
✅ Show/Hide password functionality (`🙈` → `👁️`)  
✅ Responsive and mobile-friendly design  
✅ Password match validation in Signup  
✅ Inline user feedback and alerts  
✅ Stylish Forgot Password screen with custom styles  
✅ Pure frontend implementation (No backend required for demo)

---

## 📁 Project Structure

```bash
project-folder/
│
├── index.html # Main Login/Signup HTML file
├── ForgotPassword.html # Forgot Password screen
├── Login.css # Styles for index.html
├── ForgotPassword.css # Styles for ForgotPassword.html
├── Login.js # Form logic, validation, toggle, password visibility
└── README.md # This documentation file

```

---

## 💡 How to Use

1. Open `index.html` in your browser.
2. Use the radio buttons or form links to switch between **Login** and **Signup**.
3. Try entering mismatched passwords during Signup to see validation.
4. Click "Forgot Password?" in the login form to open `ForgotPassword.html`.
5. You can simulate login/signup in memory (stored in a temporary JavaScript object).

---

## 🖼 Screenshots

| Login Form | Signup Form | Forgot Password |
|------------|-------------|-----------------|
| ![image](https://github.com/user-attachments/assets/e947ba0d-86ac-4c64-b490-9351d883a0b3) | ![image](https://github.com/user-attachments/assets/d82071ca-a17c-4172-982f-72bdb53d8a62) | ![image](https://github.com/user-attachments/assets/f62a7c62-c330-43b7-89b6-7e350abab18c)
| ![image](https://github.com/user-attachments/assets/ba3cf96a-650e-4583-9aee-3fc4ffb70d70) | ![image](https://github.com/user-attachments/assets/275bf78f-4ce6-4478-bcea-81b3649c314f) | ![image](https://github.com/user-attachments/assets/7dedbe5f-2775-4f31-a7b2-017312f728ca)
| ![image](https://github.com/user-attachments/assets/d8a68d44-ff35-42d2-8ddf-87c34b82a2ac) 

_(You can create and place these screenshots in a `screenshots/` folder.)_

---

## 🧪 Notes

- No real database or server-side logic is included.
- Data is stored temporarily in the `userDB` JavaScript object in `Login.js`.
- Designed with `CSS Variables` and `Flex/Grid` for responsive layout.

---

## 🛠️ Future Enhancements (Optional)

- Integrate with a backend (Node.js, Firebase, etc.)
- Add real password reset email functionality
- Add form validation messages below fields
- Use localStorage to persist sessions

---

## 📄 License

This project is open-source and free to use under the MIT License.

---

### Made with ❤ using HTML, CSS & JavaScript
