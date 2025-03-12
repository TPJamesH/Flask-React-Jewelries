UPLOAD_FOLDER = "uploads"
EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    # get the extension and check whether it is a part of the allowed extensions
    return '.' in filename and filename.rsplit('.',1)[1].lower() in EXTENSIONS