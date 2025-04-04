
from .controller import JewelryController
from flask import Flask

def setup_routes(app: Flask):
    jwl_controller = JewelryController()
    
    app.add_url_rule(
        rule='/jewelry/get_all',
        endpoint="getAllJewelries",
        view_func=jwl_controller.getAll, 
        methods=['GET'])
    
    app.add_url_rule(
        rule='/jewelry', 
        endpoint="add_jewelry",
        view_func=jwl_controller.add_jewelry,
        methods=['POST'])
    
    app.add_url_rule(
        rule = '/jewelry/<string:id>', 
        endpoint="delete_jewelry",
        view_func=jwl_controller.delete_jewelry,
        methods=['DELETE'])
    
    app.add_url_rule(
        rule ='/jewelry/search/<string:searchText>',
        endpoint="search_jewelry",
        view_func=jwl_controller.search_jewelry,
        methods=['GET','POST','OPTIONS'])
    
    app.add_url_rule(
        rule='/jewelry/<int:key>/<int:limit>',
        endpoint="pagination_jewelry",
        view_func=jwl_controller.pagination,
        methods=['GET'])
    
    app.add_url_rule(
        rule='/jewelry/search/<int:key>/<int:limit>/<string:searchText>',
        endpoint="pagination_search_jewelry",
        view_func=jwl_controller.pagination_search,
        methods=['GET','POST','OPTIONS'])
    
    app.add_url_rule(
        rule='/jewelry/count',
        endpoint="count_jewelry",
        view_func=jwl_controller.count,
        methods=['GET'])
    
    app.add_url_rule(
        rule="/jewelry/uploadImage",
        endpoint="upload_file_jewelry",
        view_func=jwl_controller.upload_file,
        methods=['POST'])
    
    app.add_url_rule(
         rule="/jewelry/<string:id>",
        endpoint="get_by_id_jewelry",
        view_func=jwl_controller.get_by_id,
        methods=['GET']
    )