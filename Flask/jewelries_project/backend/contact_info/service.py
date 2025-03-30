from .repository import ContactRepository
from .contact_info_model import Contact
from typing import List
import uuid
from .dto import ContactDTO as dto
from werkzeug.utils import secure_filename
from file import allowed_file
class ContactService:
    #Note, the cache is necessary since the original id is still being used internally (e.g., update/delete operation)
    def __init__(self):
        self.repository = ContactRepository()
        self.cache = {}
        self.dto = dto
        
    
    def __dtoconverter_with_uuid_list(self, c_list: List[Contact]):
         self.cache.clear() #
         Contact_list_dto = []
         for Contact in c_list:
            current_c_dict = Contact.to_dict()
            temp_id= uuid.uuid4()
            self.cache[str(temp_id)] = current_c_dict["id"]
            
            Contact_list_dto.append(
                self.dto.ContactDTO(
                current_c_dict["name"],
              current_c_dict["phoneNumber"]
                )
            )
            
            #by default, python obcects are not serializable by cSON, so we have to convert into a dictionary
            return_list = [c_dto.to_dict() for c_dto in Contact_list_dto]
            
            cache_list = []
            for key,value in self.cache.items():
                cache_list.append(
                    f'{key}'
                )
             #return a dictionary (mimicking cSON)
         return {
            "token": cache_list,
            "Contact_list": return_list
            }
    
    def __dtoconverter_with_uuid(self, Contact_input: Contact):
        Contact =  Contact_input.to_dict()
    
        return {"Contact": self.dto.ContactDTO(
                Contact["name"],
                Contact["phoneNumber"],
                ).to_dict()}
    
    def get_all(self):
        #Get the list of the cewelries
        Contact_list = self.repository.get_all()
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(Contact_list)        
       
    def get_by_id(self, id_input:str) -> Contact:
        Contact = self.repository.get_by_id(self.cache[id_input])
        #print(Contact)
        return self.__dtoconverter_with_uuid(Contact)
    
    def pagination_search(self,key:int, limit: int, searchText: str) -> list[Contact]:
           Contact_list = self.repository.pagination_search(key,limit,searchText)
           return self.__dtoconverter_with_uuid_list(Contact_list)
            
    def pagination(self, key: int, limit: int) -> list[Contact]:
        Contact_list = self.repository.pagination(key,limit)
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(Contact_list)        
            
    def add_Contact(self,Contact):
        Contact_add = Contact(
            name = Contact["name"],
            phoneNumber = Contact["phoneNumber"],
        )
        self.repository.add(Contact_add)
        
    def delete_Contact(self, Contact_id: str):
        if Contact_id:
            self.repository.delete(self.cache[Contact_id])

    
    def query_by_name(self, Contact_name:str) -> list[Contact]:
        Contact_list = self.repository.query_by_name(Contact_name)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(Contact_list)

    
    def query_by_phoneNumber(self, Contact_phoneNumber:str) -> Contact:
        Contact_list = self.repository.query_by_phoneNumber(Contact_phoneNumber)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(Contact_list)
    
    
    def query_by_searchText(self,searchText: str) -> list[Contact]:
        Contact_list = self.repository.query_by_searchText(searchText)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(Contact_list)
    
    def countTotal(self):
        return {"totalElement":self.repository.countTotal()}
    
 