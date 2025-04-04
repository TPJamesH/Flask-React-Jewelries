from flask import Flask,jsonify,request
from jewelry.generator import generator
from flask_sqlalchemy import SQLAlchemy
from jewelry.route_config import setup_routes as jewelery_setup_routes
from contact_info.route_config import setup_routes as contact_setup_routes

from flask_cors import CORS
import os
from file import UPLOAD_FOLDER
# create the app
app = Flask(__name__)
#CORS(app)
# Configure CORS
CORS(app, resources={
    r"/*": {
        "origins": "*",  # Allow all origins; replace '*' with specific domains in production
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Configure (temp) images folder
# UPLOAD_FOLDER = "uploads"
# EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# database configuration
db = SQLAlchemy()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://flask_user:flask_user_password@localhost:5432/flask_app_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#database initialize
db.init_app(app)

#Handle preflight
@app.before_request
def handle_preflight():
    if request.method == 'OPTIONS':
            response = jsonify({"message": "CORS preflight handled"})
            response.headers.add("Access-Control-Allow-Origin", "*")  # Adjust origins in production
            response.headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
            response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
            return response, 200
        
#Create the database tables
with app.app_context():
    generator(db)
    jewelery_setup_routes(app)
    contact_setup_routes(app)

if __name__ == "__main__":
    app.run(debug=True)