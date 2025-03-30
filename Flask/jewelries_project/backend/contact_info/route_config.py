
from .controller import ContactController
from flask import Flask

def setup_routes(app: Flask):
    contact_controller = ContactController()
    
    app.add_url_rule(
        rule='/contact/get_all',
        endpoint="getAllContact",
        view_func=contact_controller.getAll, 
        methods=['GET'])
    
    app.add_url_rule(
        rule='/contact', 
        endpoint="add_contact",
        view_func=contact_controller.add_Contact,
        methods=['POST'])
    
    app.add_url_rule(
        rule = '/contact/<string:id>', 
        endpoint="delete_contact",
        view_func=contact_controller.delete_Contact,
        methods=['DELETE'])
    
    app.add_url_rule(
        rule ='/contact/search/<string:searchText>',
        endpoint="search_contact",
        view_func=contact_controller.search_Contact,
        methods=['GET','POST','OPTIONS'])
    
    app.add_url_rule(
        rule='/contact/<int:key>/<int:limit>',
        endpoint="pagination_contact",
        view_func=contact_controller.pagination,
        methods=['GET'])
    
    app.add_url_rule(
        rule='/contact/search/<int:key>/<int:limit>/<string:searchText>',
        endpoint="pagination_search_contact",
        view_func=contact_controller.pagination_search,
        methods=['GET','POST','OPTIONS'])
    
    app.add_url_rule(
        rule='/contact/count',
        endpoint="count_contact",
        view_func=contact_controller.count,
        methods=['GET'])
    
    
    app.add_url_rule(
         rule="/contact/<string:id>",
        endpoint="get_by_id_contact",
        view_func=contact_controller.get_by_id,
        methods=['GET']
    )