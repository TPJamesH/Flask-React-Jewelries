from logging import log
import traceback
from flask import Blueprint, jsonify,request
from service import JewelryService

class JewelryController:
    def __init__(self):
        self.jewelry_service = JewelryService()

    def get_by_id(self,id: str):
        try:
            data = self.jewelry_service.get_by_id(id)    
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
    def upload_file(self):
        #check if there's a file
        if 'file' not in request.files:
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
        file = request.files['file']
        
        #check if a file is selected
        if file.filename == '':
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
        #validation
        if self.jewelry_service.upload_file(file):
            return jsonify({'message': 'File successsfully uploaded', 'filename': file.filename}),200
        
    
    def getAll(self):
        try:
            data = self.jewelry_service.get_all()      
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
    def add_jewelry(self):
        try:
            j_data = request.get_json(force=True)
            print(j_data)
            self.jewelry_service.add_jewelry(j_data)
            return jsonify({"message": "Jewelry created successfully"}),201
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
    def delete_jewelry(self,id: str):
        try:
            self.jewelry_service.delete_jewelry(id)
            return jsonify({"message": "Jewelry deleted successfully"}),200
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"

    def search_jewelry(self,searchText: str):
        try:
            
            data = self.jewelry_service.query_by_searchText(searchText)
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"

    def pagination(self,key: int, limit: int):
        try:
            data= self.jewelry_service.pagination(key,limit)
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"

    def pagination_search(self,key: int, limit: int, searchText:str):
         
          if key is not None and limit is not None and searchText is not None:
              try:
                  data = self.jewelry_service.pagination_search(key,limit,searchText)
                  return jsonify(data)
              except Exception as e:
                  log(traceback.format_exc())
                  return "An internal error has occurred!"
              
              
    def count(self):
        return self.jewelry_service.countTotal()
    
  