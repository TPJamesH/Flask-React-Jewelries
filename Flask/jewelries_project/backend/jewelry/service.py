from .repository import JewelryRepository
from .jewelry_model import Jewelry
from typing import List
import uuid
from .dto import JewelryDTO as dto
from werkzeug.utils import secure_filename
from file import allowed_file
class JewelryService:
    #Note, the cache is necessary since the original id is still being used internally (e.g., update/delete operation)
    def __init__(self):
        self.repository = JewelryRepository()
        self.cache = {}
        self.dto = dto
        
    
    def __dtoconverter_with_uuid_list(self, j_list: List[Jewelry]):
         self.cache.clear() #
         jewelry_list_dto = []
         for jewelry in j_list:
            current_j_dict = jewelry.to_dict()
            temp_id= uuid.uuid4()
            self.cache[str(temp_id)] = current_j_dict["id"]
            
            jewelry_list_dto.append(
                self.dto.JewelryDTO(
                current_j_dict["type"],
                current_j_dict["name"],
                current_j_dict["provider"],
                current_j_dict["totalWeight"],
                current_j_dict["stoneWeight"],
                current_j_dict["goldWeight"],
                current_j_dict["picture"]
                )
            )
            
            #by default, python objects are not serializable by JSON, so we have to convert into a dictionary
            return_list = [j_dto.to_dict() for j_dto in jewelry_list_dto]
            
            cache_list = []
            for key,value in self.cache.items():
                cache_list.append(
                    f'{key}'
                )
             #return a dictionary (mimicking JSON)
         return {
            "token": cache_list,
            "jewelry_list": return_list
            }
    
    def __dtoconverter_with_uuid(self, jewelry_input: Jewelry):
        jewelry =  jewelry_input.to_dict()
       
        return {"jewelry": self.dto.JewelryDTO(
                jewelry["type"],
                jewelry["name"],
                jewelry["provider"],
                jewelry["totalWeight"],
                jewelry["stoneWeight"],
                jewelry["goldWeight"],
                jewelry["picture"]
                ).to_dict()}
    
    def get_all(self):
        #Get the list of the jewelries
        jewelry_list = self.repository.get_all()
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)        
       
    def get_by_id(self, id_input:str) -> Jewelry:
        jewelry = self.repository.get_by_id(self.cache[id_input])
        #print(jewelry)
        return self.__dtoconverter_with_uuid(jewelry)
    
    def pagination_search(self,key:int, limit: int, searchText: str) -> list[Jewelry]:
           jewelry_list = self.repository.pagination_search(key,limit,searchText)
           return self.__dtoconverter_with_uuid_list(jewelry_list)
            
    def pagination(self, key: int, limit: int) -> list[Jewelry]:
        jewelry_list = self.repository.pagination(key,limit)
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)        
            
    def add_jewelry(self,jewelry):
        if jewelry["totalWeight"] < jewelry["stoneWeight"]:
            raise ValueError("Stone weight can't exceed gold weight")
        
        jewelry_add = Jewelry(
            type = jewelry["type"],
            name = jewelry["name"],
            provider = jewelry["provider"],
            totalWeight = jewelry["totalWeight"],
            stoneWeight = jewelry["stoneWeight"]
        )
        self.repository.add(jewelry_add)
        
    def delete_jewelry(self, jewelry_id: str):
        if jewelry_id:
            self.repository.delete(self.cache[jewelry_id])
    
    def query_by_type(self, jewelry_type:str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_type(jewelry_type)
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)
    
    def query_by_name(self, jewelry_name:str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_name)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)

    
    def query_by_provider(self, jewelry_provider:str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_provider)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)
    
    def query_by_totalWeight(self,jewelry_totalWeight:float) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_totalWeight)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)

    
    def query_by_stoneWeight(self,jewelry_stoneWeight:float) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_stoneWeight)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)
    
    def query_by_goldWeight(self, jewelry_goldWeight: float) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_goldWeight)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)
    
    def query_by_searchText(self,searchText: str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_searchText(searchText)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid_list(jewelry_list)
    
    def countTotal(self):
        return {"totalElement":self.repository.countTotal()}
    
    def upload_file(self,file,jewelry_id:str):
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            # filepath = os.path.join(app.config['UPLOAD_FOLDER'],filename)
            # file.save(filepath)
            binary_data = file.read()
            self.repository.upload_image(binary_data,self.cache[jewelry_id])
            return True
        return False