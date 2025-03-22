from flask import Blueprint, jsonify,request
from service import JewelryService

class JewelryController:
    def __init__(self):
        self.jewelry_service = JewelryService()

    def upload_file(self):
        #check if there's a file
        if 'file' not in request.files:
            return jsonify({'error': 'No file'}),400
        
        file = request.files['file']
        
        #check if a file is selected
        if file.filename == '':
            return jsonify({'error': 'No selected file'}),400
        
        #validation
        if self.jewelry_service.upload_file(file):
            return jsonify({'message': 'File successsfully uploaded', 'filename': file.filename}),200
        return jsonify({'error': 'File not allowed'}),400
    
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

    def pagination_search(self,key: int, limit: int, searchText:str):
         
          if key is not None and limit is not None and searchText is not None:
              try:
                  data = self.jewelry_service.pagination_search(key,limit,searchText)
                  return jsonify(data)
              except Exception as e:
                  return jsonify([]),404
    def count(self):
        return self.jewelry_service.countTotal()
    
  