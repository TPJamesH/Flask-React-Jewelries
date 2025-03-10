from flask import Flask
import generator
from flask_sqlalchemy import SQLAlchemy
# create the app
db = SQLAlchemy()
app = Flask(__name__)
# database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://flask_user:flask_user_password@localhost:5432/flask_app_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#database initialize
db.init_app(app)
#Create the database tables
with app.app_context():
    generator.generator(db)
    
if __name__ == "__main__":
    app.run(debug=True)