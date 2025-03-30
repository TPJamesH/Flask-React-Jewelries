import enum
from typing import Optional,List
from database import Database
from sqlalchemy import ARRAY, String, Enum,Computed
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
database = Database()
class Base(DeclarativeBase):
    pass

# Contact Info Model (mapped to the "contact" table)
class Contact(Base):
    __tablename__ = 'contact' # Table name in PostgreSQL
    
    id: Mapped[int] = mapped_column(primary_key=True) #integer
    name: Mapped[str] = mapped_column(String(50),nullable=False) #string
    phoneNumber: Mapped[str] = mapped_column(String(50),nullable=False,unique=True) #string

    
        
    def __repr__(self) -> str:
        return (f"name = {self.name!r}, phoneNumber = {self.phoneNumber!r},")
    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "phoneNumber": self.type.value, #get the enum value here
        }

#Initialize database
Base.metadata.drop_all(database.engine)
Base.metadata.create_all(database.engine)
    