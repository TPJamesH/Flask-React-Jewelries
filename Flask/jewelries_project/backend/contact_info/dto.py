from .contact_info_model import Contact
class ContactDTO:
    def __init__(self, name: str, phoneNumber: str):
        self.type = type
        self.name = name
        self.phoneNumber = phoneNumber
    
    
    def map_to_Contact_dto(Contact_model: Contact):
        return ContactDTO(
            name = Contact_model.name,
            phoneNumber = Contact_model.phoneNumber
            
        )
    def to_dict(self):
        return{
            "name": self.name,
            "phoneNumber": self.phoneNumber, 
        }
        
    def __repr__(self) -> str:
        return f" name = {self.name}, phoneNumber = {self.phoneNumber})"
    
        