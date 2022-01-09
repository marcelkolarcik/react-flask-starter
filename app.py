import os

from flask import Flask, send_from_directory

import backend.api_b as api_m
from settings import mongo, MONGO_URI

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.register_blueprint(api_m.api_bp, url_prefix='/api/')

mongo.init_app(app, uri=MONGO_URI)


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.errorhandler(Exception)
def not_found():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True)
