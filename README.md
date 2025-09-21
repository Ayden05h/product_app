# product_app

Product App — minimal, well-structured example web project demonstrating a small Flask backend and a lightweight reactive front-end using Alpine.js.

This repository includes two ways to run and explore the project:

- Full Flask app: a minimal Flask backend that serves the home page and provides simple JSON APIs (products and comments). Use this to explore a server-backed workflow.
- Live demo: a standalone static build under `live/` that runs entirely in the browser and uses localStorage for comments — ideal for previewing with VS Code Live Server or any static server.

Features

- Home page with a reactive component (Alpine.js) that shows a counter and displays product data.
- Comment UI with a small form and a comment list. The Flask app stores comments in-memory; the Live demo stores comments in browser localStorage.
- Clean project layout with templates and static assets.

Contents

- `APP.py/app` — Flask application module with routes:
  - `/` — renders `templates/index.html`
  - `/api/products` — returns sample product JSON
  - `/api/comments` — GET/POST comments (in-memory)
- `server.py` — small runner that imports the Flask app and starts the server. Run `python server.py` to start.
- `templates/` — server-side templates for the Flask app.
- `static/` — static assets used by the Flask app.
- `live/` — self-contained static demo (open `live/index.html` with Live Server).
- `requirements.txt` — Python dependencies (Flask).

Installation (Flask server)

1. Clone the repository and change to the project folder.

2. Create and activate a virtual environment:

   python3 -m venv .venv
   source .venv/bin/activate

3. Install Python dependencies:

   pip install -r requirements.txt

Running the Flask server

Start the server from the project root:

   python server.py

By default the server listens on port 5000 and binds to `0.0.0.0`. Open:

   http://127.0.0.1:5000

or, from another device on your LAN, use:

   http://<your-machine-ip>:5000

Notes

- Comments in the Flask app are stored in memory and are lost when the server restarts. If you need persistence, consider a small SQLite-backed implementation — I can add that.
- For development, `debug=True` is set in the runner for convenience. Remove or set via environment variables for production.

Using the Live demo (no Python required)

If you prefer a quick browser preview without running Flask, use the static demo in `live/`:

1. In VS Code, open `live/index.html` and use the Live Server extension (or any static server) to preview.
2. The demo provides the same UI and stores comments in `localStorage` in your browser.

How to interact

- "Load products" — populates the product list.
- Counter — click the "+1" button to increment the counter.
- Comments — toggle the comment form, submit comments. In the Flask app comments are posted to the server; in the Live demo they are stored locally.

Suggested next steps

- Persist comments using SQLite or a JSON file.
- Add client-side validation and nicer UI for errors and success messages.
- Add tests for the backend API endpoints.

If you want any of these, tell me which one and I’ll implement it and validate the result.
