from models import Jewelry

class JewelryDTO:
    def __init__(self, type: str, name: str, provider: str, totalWeight: float, stoneWeight: float, goldWeight:float, picture: str):
        self.type = type
        self.name = name
        self.provider = provider
        self.totalWeight = totalWeight
        self.stoneWeight = stoneWeight
        self.goldWeight = goldWeight
        self.picture = picture
    
    
    def map_to_jewelry_dto(jewelry_model: Jewelry):
        return JewelryDTO(
            type = jewelry_model.type,
            name = jewelry_model.name,
            provider= jewelry_model.provider,
            totalWeight= jewelry_model.totalWeight,
            stoneWeight= jewelry_model.stoneWeight,
            goldWeight= jewelry_model.goldWeight,
            picture = jewelry_model.picture
            
        )
    def to_dict(self):
        return{
            "name": self.name,
            "type": self.type, #since the original already have the actual enum value, we only need to call type only
            "provider": self.provider,
            "totalWeight": self.totalWeight,
            "stoneWeight":self.stoneWeight,
            "goldWeight": self.goldWeight,
            "picture": self.picture
            
        }
        
    def __repr__(self) -> str:
        return f"type = {self.type}, name = {self.name}, provider = {self.provider}, totalWeight = {self.totalWeight}, stoneWeight = {self.stoneWeight}, goldWeight = {self.goldWeight})"
    
        