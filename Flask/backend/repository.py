from models import Jewelry
from sqlalchemy import String, select, or_,update,cast
from database import Database

class JewelryRepository:
    def __init__(self):
        self.database = Database()
        self.session = self.database.getSessionFactory()
        
    def get_by_id(self,jewelry_id: int)-> Jewelry:
        return self.session.get(Jewelry,jewelry_id)
    
    def get_all(self) -> list[Jewelry]:
        return self.session.query(Jewelry).all()
    
    def add(self,jewelry:Jewelry) -> None:
        self.session.add(jewelry)
        self.session.commit() #always commit after executing modification-related query
    
    def delete(self,jewelry_id: int) -> None:
        jewelry = self.get_by_id(jewelry_id)
        if jewelry:
            self.session.delete(jewelry)
            self.session.commit() #always commit after executing modification-related query
    
    def update(self,jewelry_id:int,update_j:Jewelry) ->None:
        query = update(Jewelry).where(Jewelry.id == jewelry_id).values(
            type = update_j.type,
            name = update_j.name,
            provider = update_j.provider,
            totalWeight = update_j.totalWeight,
            stoneWeight = update_j.stoneWeight
        )
        self.session.execute(query)
        self.session.commit() #always commit after executing modification-related query
    
    def query_by_type(self, jewelry_type:str) -> list[Jewelry]:
        query = select(Jewelry).where(cast(Jewelry.type,String) == jewelry_type)
        return self.session.execute(query).scalars().all()
    
    def query_by_name(self, jewelry_name:str) -> list[Jewelry]:
        query = select(Jewelry).where(Jewelry.name== jewelry_name)
        return self.session.execute(query).scalars().all()
    
    def query_by_provider(self, jewelry_provider:str) -> list[Jewelry]:
        query = select(Jewelry).where(Jewelry.provider == jewelry_provider)
        return self.session.execute(query).scalars().all()
    
    def query_by_totalWeight(self,jewelry_totalWeight:float) -> list[Jewelry]:
        query = select(Jewelry).where(Jewelry.totalWeight == jewelry_totalWeight)
        return self.session.execute(query).scalars().all()
    
    def query_by_stoneWeight(self,jewelry_stoneWeight:float) -> list[Jewelry]:
        query = select(Jewelry).where(Jewelry.stoneWeight == jewelry_stoneWeight)
        return self.session.execute(query).scalars().all()
    
    def query_by_goldWeight(self, jewelry_goldWeight: float) -> list[Jewelry]:
        query = select(Jewelry).where(Jewelry.goldWeight == jewelry_goldWeight)
        return self.session.execute(query).scalars().all()
    
    def query_by_searchText(self,searchText: str) -> list[Jewelry]:
        try:
            search_float = float(searchText)
        except ValueError:
            search_float = None
        
        #build query
        filters = [
            cast(Jewelry.type,String).ilike(f"{searchText}"),
            Jewelry.name.ilike(f"{searchText}"),
            Jewelry.provider.ilike(f"{searchText}")
        ]
        if search_float is not None:
            filters.extend([
                Jewelry.totalWeight == search_float,
                Jewelry.stoneWeight == search_float,
                Jewelry.goldWeight == search_float
            ])
            
        # *filters: unpacks a list of conditions/arguments into individual arguments for the or_ function
        query = select(Jewelry).where(or_(*filters))
        
        return self.session.execute(query).scalars().all()
    
    #keyset-based pagination
    def pagination(self,key: int, limit: int) -> list[Jewelry]:
        query = select(Jewelry).where(Jewelry.id > key).order_by(Jewelry.id).limit(limit)
        return self.session.execute(query).scalars().all()

    def countTotal(self):
        return self.session.query(Jewelry).count()
    #reference: results = pagination(key=0,limit=10)
    #Next Page: 
        #last_id = results[-1].id
        #results = pagination(key=last_id,limit=10)
    
    def upload_image(self, binary_data: str,jewelry_id: int):
        query = update(Jewelry).where(Jewelry.id == jewelry_id).values(
            picture = binary_data
        )
        self.session.execute(query)
        self.session.commit() #always commit after executing modification-related query
    """
    REFERENCE QUERY
    query = select(Customer).where(
        or_(
            Customer.firstName.ilike(f"%{search_text}%"),  # Case-insensitive match
            Customer.lastName.ilike(f"%{search_text}%"),   # Case-insensitive match
            Customer.email.ilike(f"%{search_text}%"),      # Case-insensitive match
            func.concat(Customer.firstName, " ", Customer.lastName).ilike(f"%{search_text}%")  # Full name match
        )
    """