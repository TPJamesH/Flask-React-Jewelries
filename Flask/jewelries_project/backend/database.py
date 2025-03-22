from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
class Database:
    def __init__(self):
        self.engine = create_engine("postgresql://flask_user:flask_user_password@localhost:5432/flask_app_db")
        self.SessionFactory = sessionmaker(bind=self.engine)
        
        
    def getSessionFactory(self):
        return self.SessionFactory()