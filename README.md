# LaunchWave

Ride the wave. Launch your day.

LaunchWave is a powerful, browser-based productivity tool that helps you instantly launch your workflow by opening groups of websites in one click. Organize bookmarks into smart folders, sync them with Google Drive, and start your day productively — anywhere, anytime.

---

FEATURES

- One-Click Launch: Start your entire workflow with a single click.
- Organized Workflows: Group websites by tasks, routines, or projects.
- Google Drive Sync: Sync your data across devices securely.
- Offline-First: Uses localStorage when offline; syncs when online.
- Privacy-Respecting: All user data stays in their own Google Drive.
- Desktop-Optimized: Designed for serious browser-based workflows.

---

USE CASES

- Developers launching docs, GitHub, dashboards.
- Designers opening Figma, Notion, Dribbble assets.
- Students loading notes, portals, and learning platforms.
- Remote teams creating shared morning routines.

---

TECH STACK

- Frontend: React, TailwindCSS
- State Management: useState, useEffect, Context API
- Storage: localStorage + Google Drive API (OAuth 2.0)
- Build Tools: Vite (or your preferred setup)

---

GETTING STARTED

1. Clone the repo

   git clone https://github.com/your-username/launchwave.git
   cd launchwave

2. Install dependencies

   npm install

3. Start development server

   npm run dev

4. (Optional) Configure Google Drive API

   Create a .env file and add your OAuth credentials:

   VITE_GOOGLE_CLIENT_ID=your_client_id_here
   VITE_GOOGLE_API_KEY=your_api_key_here

Refer to the Google Drive API setup guide for help.

---

ROADMAP

- [ ] JSON import/export
- [ ] Custom icons per workflow
- [ ] Drag-and-drop reordering
- [ ] Dark mode
- [ ] Browser extension version
- [ ] Mobile warning overlay or limited mobile support

---

CONTRIBUTING

All contributions are welcome!
Please open an issue first for feature requests or major changes.

---

LIVE DEMO

Coming soon...
