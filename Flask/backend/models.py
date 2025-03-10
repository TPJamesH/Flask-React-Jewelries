import enum
from typing import Optional
from database import Database
from sqlalchemy import String, Enum,Computed
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
database = Database()
class GoldType_enum(enum.Enum):
    earrings = "Earrings"
    neck_bangle = "Neck Bangle"
    bracelet = "Bracelet"
    pendant = "Pendant"
    ring = "Ring"
    bangle = "Bangle"
    semaine = "Semaine"
    necklace = "Necklace"
    
#Note: the calling variables here are earring, neck_bangle, etc... If you want to use the literal values instead, use this:
"""
def get_enum_values(GoldType_enum):
    return [member.value for member in enum_class]

type = Column(SqlEnum(GoldType_enum, values_callable=get_enum_values), nullable=True)
"""
# Base class for declarative mappings
class Base(DeclarativeBase):
    pass

# Jewelry Model (mapped to the "jewelry" table)
class Jewelry(Base):
    __tablename__ = 'jewelry' # Table name in PostgreSQL
    
    id: Mapped[int] = mapped_column(primary_key=True) #integer
    type: Mapped[GoldType_enum] = mapped_column(Enum(GoldType_enum),nullable = False) #enum
    name: Mapped[str] = mapped_column(String(50),nullable=False) #string
    provider:  Mapped[str] = mapped_column(String(100),nullable=False)
    totalWeight: Mapped[float]  = mapped_column(nullable=False) #float 
    stoneWeight: Mapped[float] = mapped_column(nullable=False)
    goldWeight: Mapped[float] = mapped_column(Computed(totalWeight - stoneWeight),nullable=False)
    picture: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    #Reference for string concatenation:
    #name_and_provider: Mapped[str] = mapped_column(Computed(name+ " " + provider),nullable=False)
    
        
    def __repr__(self) -> str:
        return (f"Jewelry(id={self.id!r}, name = {self.name!r}), type = {self.type!r}," 
                f"provider = {self.provider!r}, totalWeight = {self.totalWeight!r}," 
                f"stoneWeight = {self.stoneWeight!r},goldWeight = {self.goldWeight!r}"
        )

#Initialize database
Base.metadata.drop_all(database.engine)
Base.metadata.create_all(database.engine)
    