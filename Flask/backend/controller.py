from flask import Blueprint, jsonify,request
from service import JewelryService

class JewelryController:
    def __init__(self):
        self.jewelry_service = JewelryService()

    def getAll(self):
        try:
            data = self.jewelry_service.get_all()       
            return jsonify(data)
        except Exception as e:
            return jsonify({"error": str(e)}),500
        
    def add_jewelry(self):
        try:
            j_data = request.get_json(force=True)
            print(j_data)
            self.jewelry_service.add_jewelry(j_data)
            return jsonify({"message": "Jewelry created successfully"}),201
        except Exception as e:
            return jsonify({"error": str(e)}),500
        
    def delete_jewelry(self,id):
        try:
            self.jewelry_service.delete_jewelry(id)
            return jsonify({"message": "Jewelry deleted successfully"}),200
        except Exception as e:
            return jsonify({"error": str(e)}),500

    def search_jewelry(self,searchText: str):
        try:
            
            data = self.jewelry_service.query_by_searchText(searchText)
            return jsonify(data)
        except Exception as e:
            return jsonify({"error": str(e)}),500

    def pagination(self,key: int, limit: int):
        try:
            data= self.jewelry_service.pagination(key,limit)
            return jsonify(data)
        except Exception as e:
            return jsonify({"error": str(e)}),500

    def count(self):
        return self.jewelry_service.countTotal()