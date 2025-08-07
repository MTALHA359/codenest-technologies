🧠 CODE NEST TECHNOLOGIES
Welcome to CodeNest Technologies, a modern software house website built using Next.js 13+ App Router, tailored for both user-facing pages and an admin dashboard. The platform is designed to showcase your team, collect user messages, and manage content from a secure admin panel.

📌 Project Purpose
The purpose of this project is to:

Showcase a software house's team, services, and branding

Provide a responsive landing page with animations

Enable message collection from users

Manage backend content using an admin dashboard (with login protection)

Display dynamic team sections

Support admin functionalities like user management, messages, and settings

🚀 Features
Animated Hero Section with type-by-character animation

Team Showcase with member cards

Admin Panel (protected using next-auth) featuring:

Dashboard

User management

Messages

Settings

Responsive & clean UI with Tailwind CSS

Font customization using local fonts (Geist)

Deployment ready (e.g., Vercel)

🧰 Technologies Used
Tech	Description
Next.js 13+	React framework with App Router
React	Core UI library
Tailwind CSS	Utility-first CSS framework
next-auth	Authentication for admin routes
Vercel	Deployment platform
Local Fonts	Custom typography via Geist font

🛠️ How to Use
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/code-nest-technologies.git
cd code-nest-technologies
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Setup Environment Variables
Create a .env.local file and add your NextAuth settings:

env
Copy
Edit
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
You can use services like generate-secret.vercel.app to generate your secret key.

4. Run the Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
The app will be running at: http://localhost:3000

🔐 Admin Access
To protect the admin panel:

Admin routes check for a logged-in session (isAdmin)

You can modify user roles in the database or session logic

Default admin path: /admin

🌐 Deployment
The project is ready to deploy on platforms like Vercel or Netlify.

Deploy on Vercel:
Push your project to GitHub

Go to vercel.com

Import your GitHub project

Add your environment variables

Deploy!

📁 Folder Structure
bash
Copy
Edit
src/
├── app/
│   ├── page.jsx              # Home page
│   ├── layout.jsx            # Global layout
│   ├── admin/                # Admin panel
│   └── about/                # About page
├── components/               # Shared UI components
├── styles/                   # Global CSS
👨‍💻 Team Members
MR. SAAD – MERN Stack Developer

MR. TALHA – Senior Developer

MR. NOUMAN – Project Manager

📬 Contact
Feel free to submit issues or feature requests. Contributions are welcome!





