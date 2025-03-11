from flask import Flask
import generator
from flask_sqlalchemy import SQLAlchemy
from route import setup_routes
from flask_cors import CORS

# create the app
db = SQLAlchemy()
app = Flask(__name__)
CORS(app)

# database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://flask_user:flask_user_password@localhost:5432/flask_app_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#database initialize
db.init_app(app)
#Create the database tables
with app.app_context():
    generator.generator(db)
    setup_routes(app)


    
if __name__ == "__main__":
    app.run(debug=True)