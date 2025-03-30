from logging import log
import traceback
from flask import Blueprint, jsonify,request
from .service import ContactService
class ContactController:
    def __init__(self):
        self.Contact_service = ContactService()

    def get_by_id(self,id: str):
        try:
            data = self.Contact_service.get_by_id(id)    
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"
    
    
    def getAll(self):
        try:
            data = self.Contact_service.get_all()      
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
    def add_Contact(self):
        try:
            c_data = request.get_json(force=True)
            print(c_data)
            self.Contact_service.add_Contact(c_data)
            return jsonify({"message": "Contact created successfully"}),201
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"
        
    def delete_Contact(self,id: str):
        try:
            self.Contact_service.delete_Contact(id)
            return jsonify({"message": "Contact deleted successfully"}),200
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"

    def search_Contact(self,searchText: str):
        try:
            
            data = self.Contact_service.query_by_searchText(searchText)
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"

    def pagination(self,key: int, limit: int):
        try:
            data= self.Contact_service.pagination(key,limit)
            return jsonify(data)
        except Exception as e:
            log(traceback.format_exc())
            return "An internal error has occurred!"

    def pagination_search(self,key: int, limit: int, searchText:str):
         
          if key is not None and limit is not None and searchText is not None:
              try:
                  data = self.Contact_service.pagination_search(key,limit,searchText)
                  return jsonify(data)
              except Exception as e:
                  log(traceback.format_exc())
                  return "An internal error has occurred!"
              
              
    def count(self):
        return self.Contact_service.countTotal()
    
  