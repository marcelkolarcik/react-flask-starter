from datetime import datetime
from pprint import pprint
from traceback import format_exc

from flask import Blueprint, jsonify

api_bp = Blueprint('api_bp', __name__)


@api_bp.route('test/')
def test():
    try:
        pprint( datetime.utcnow().strftime('%x %X'))
        return jsonify(message='Server says: today\'s date is ' + datetime.utcnow().strftime('%x %X'))
    except:
        pprint(format_exc())
