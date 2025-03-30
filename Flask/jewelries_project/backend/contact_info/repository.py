from .contact_info_model import Contact
from sqlalchemy import String, select, or_,and_,update,cast
from database import Database

class ContactRepository:
    def __init__(self):
        self.database = Database()
        self.session = self.database.getSessionFactory()
        
    def get_by_id(self,contact_id: int)-> Contact:
        return self.session.get(Contact,contact_id)
    
    def get_all(self) -> list[Contact]:
        return self.session.query(Contact).all()
    
    def add(self,contact:Contact) -> None:
        self.session.add(contact)
        self.session.commit() #always commit after executing modification-related query
    
    def delete(self,contact_id: int) -> None:
        Contact = self.get_by_id(contact_id)
        if Contact:
            self.session.delete(Contact)
            self.session.commit() #always commit after executing modification-related query
    
    def update(self,contact_id:int,update_c:Contact) ->None:
        query = update(Contact).where(Contact.id == contact_id).values(
            name = update_c.name,
            phoneNumber = update_c.phoneNumber
        )
        self.session.execute(query)
        self.session.commit() #always commit after executing modification-related query
    
    #Note: the phone number should be unique
    def query_by_phoneNumber(self, contact_phoneNumber:str) -> Contact:
        query = select(Contact).where(cast(Contact.phoneNumber,String) == contact_phoneNumber)
        return self.session.execute(query).scalars().all()
    
    def query_by_name(self, Contact_name:str) -> list[Contact]:
        query = select(Contact).where(Contact.name== Contact_name)
        return self.session.execute(query).scalars().all()

    
    def query_by_searchText(self,searchText: str) -> list[Contact]:
     
        
        #build query
        filters = [
            cast(Contact.type,String).ilike(f"{searchText}"),
            Contact.name.ilike(f"{searchText}"),
            Contact.phoneNumber.ilike(f"{searchText}")
        ]
            
        # *filters: unpacks a list of conditions/arguments into individual arguments for the or_ function
        query = select(Contact).where(or_(*filters))
        
        return self.session.execute(query).scalars().all()
    
    #pagination with search
    def pagination_search(self,key:int, limit:int,searchText:str) -> list[Contact]:
        try:
            search_float = float(searchText)
        except ValueError:
            search_float = None

        #build query for search
        filters = [
            cast(Contact.type,String).ilike(f"{searchText}"),
            Contact.name.ilike(f"{searchText}"),
            Contact.provider.ilike(f"{searchText}")
        ]
        if search_float is not None:
            filters.extend([
                Contact.totalWeight == search_float,
                Contact.stoneWeight == search_float,
                Contact.goldWeight == search_float
            ])
      
        #query: filters + paginations
        query = select(Contact).where(
            and_(
                (Contact.id > key),
                or_(*filters)
                )
            ).order_by(Contact.id).limit(limit)
        
        return self.session.execute(query).scalars().all()
    
    
    #keyset-based pagination
    def pagination(self,key: int, limit: int) -> list[Contact]:
        print(key)
        query = select(Contact).where(Contact.id > key).order_by(Contact.id).limit(limit)
        return self.session.execute(query).scalars().all()

    def countTotal(self):
        return self.session.query(Contact).count()
    #reference: results = pagination(key=0,limit=10)
    #Next Page: 
        #last_id = results[-1].id
        #results = pagination(key=last_id,limit=10)
    
   
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