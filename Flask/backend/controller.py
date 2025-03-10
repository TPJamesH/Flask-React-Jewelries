from flask import Blueprint, jsonify,request
from service import JewelryService

jewelry_controller = Blueprint('jewelry_controller',__name__)
jewelry_service = JewelryService()

@jewelry_controller.route('/jewelry/get_all', methods=['GET'])
def getAll():
    try:
        result = jewelry_service.get_all()
        return jsonify(result)
    except ValueError as e:
        return jsonify({"error": str(e)}),404
    
@jewelry_controller.route('/jewelry', methods=['POST'])
def add_jewelry():
    try:
        j_data = request.json
        jewelry_service.add_jewelry(j_data)
        return jsonify({"message": "Jewelry created successfully"}),201
    except ValueError as e:
        return jsonify({"error": str(e)}),500
    
@jewelry_controller.route('/jewelry/<str:id>', methods=['DELETE'])
def delete_jewelry(id):
    try:
        jewelry_service.delete_jewelry(id)
        return jsonify({"message": "Jewelry deleted successfully"}),200
    except ValueError as e:
        return jsonify({"error": str(e)}),500

@jewelry_controller.route('/jewelry/search/<str:searchText>',methods=['GET'])
def search_jewelry(searchText: str):
    try:
        result = jewelry_service.query_by_searchText(searchText)
        return jsonify(result)
    except ValueError as e:
        return jsonify({"error": str(e)}),500

@jewelry_controller.route('/jewelry/<int:key>/<int:limit>',methods=['GET'])
def pagination(key: int, limit: int):
    try:
        result = jewelry_service.pagination(key,limit)
        return jsonify(result)
    except ValueError as e:
        return jsonify({"error": str(e)}),500

    