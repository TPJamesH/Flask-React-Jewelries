from repository import JewelryRepository
from backend.models import Jewelry
from typing import List,Dict,Any
import uuid
import dto
class JewelryService:
    #Note, the cache is necessary since the original id is still being used internally (e.g., update/delete operation)
    def __init__(self):
        self.repository = JewelryRepository()
        self.cache = Dict[str,int] = {}
        self.dto = dto
    
    def __dtoconverter_with_uuid(self, j_list: List[Jewelry]):
         jewelry_list_dto = List[dto.JewelryDTO] = []
         for jewelry in j_list:
            temp_id = uuid.uuid4()
            self.cache[str(temp_id)] = jewelry.id
            
            jewelry_list_dto.append(
                self.dto.JewelryDTO(
                jewelry.type,
                jewelry.name,
                jewelry.provider,
                jewelry.totalWeight,
                jewelry.stoneWeight,
                jewelry.goldWeight
                )
            )
            
             #return a dictionary (mimicking JSON)
         return {
            "token": self.cache,
            "jewelry_list": jewelry_list_dto
            }
        
    
    def get_all(self) -> Dict[str,Any]:
        #Get the list of the jewelries
        jewelry_list = self.repository.get_all()
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)        
       
        
    def pagination(self, key: int, limit: int) -> list[Jewelry]:
        jewelry_list = self.repository.pagination(key,limit)
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)        
            
    def add_jewelry(self,jewelry):
        if jewelry.totalWeight < jewelry.stoneWeight:
            raise ValueError("Stone weight can't exceed gold weight")
        
        jewelry_add = Jewelry(
            type = jewelry.type,
            name = jewelry.name,
            provider = jewelry.provider,
            totalWeight = jewelry.totalWeight,
            stoneWeight = jewelry.stoneWeight
        )
        self.repository.add(jewelry_add)
        
    def delete_jewelry(self, jewelry_id: str):
        if jewelry_id:
            self.repository.delete(self.cache[jewelry_id])
    
    def query_by_type(self, jewelry_type:str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_type(jewelry_type)
        #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)
    
    def query_by_name(self, jewelry_name:str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_name)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)

    
    def query_by_provider(self, jewelry_provider:str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_provider)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)
    
    def query_by_totalWeight(self,jewelry_totalWeight:float) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_totalWeight)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)

    
    def query_by_stoneWeight(self,jewelry_stoneWeight:float) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_stoneWeight)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)
    
    def query_by_goldWeight(self, jewelry_goldWeight: float) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(jewelry_goldWeight)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)
    
    def query_by_searchText(self,searchText: str) -> list[Jewelry]:
        jewelry_list = self.repository.query_by_name(searchText)
         #execute dto + uuid function
        return self.__dtoconverter_with_uuid(jewelry_list)
    
   