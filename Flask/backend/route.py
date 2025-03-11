
from controller import JewelryController
from flask import Flask

def setup_routes(app: Flask):
    jwl_controller = JewelryController()
    
    app.add_url_rule(
        rule='/jewelry/get_all',
        endpoint="getAll",
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
        methods=['GET'])
    
    app.add_url_rule(
        rule='/jewelry/<int:key>/<int:limit>',
        endpoint="pagination",
        view_func=jwl_controller.pagination,
        methods=['GET'])
    
       
    app.add_url_rule(
        rule='/jewelry/count',
        endpoint="count",
        view_func=jwl_controller.count,
        methods=['GET'])