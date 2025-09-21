"""Run the Flask app with a simple entrypoint.

Usage: python server.py
Optionally set HOST and PORT env vars.
"""
import os
import importlib.util
import sys

# Import the app module from APP.py/app
spec = importlib.util.spec_from_file_location('app_module', os.path.join(os.path.dirname(__file__), 'APP.py', 'app'))
app_module = importlib.util.module_from_spec(spec)
sys.modules['app_module'] = app_module
spec.loader.exec_module(app_module)

app = getattr(app_module, 'app')

if __name__ == '__main__':
    host = os.environ.get('HOST', '0.0.0.0')
    port = int(os.environ.get('PORT', 5000))
    print(f"Starting server at http://{host}:{port}/")
    app.run(host=host, port=port, debug=True)
