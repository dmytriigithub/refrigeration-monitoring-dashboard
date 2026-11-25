from flask import Flask, jsonify
from flask_cors import CORS

from app.extensions import db
from app.routes.equipment import equipment_bp
from app.routes.alerts import alerts_bp
from app.routes.temperature import temperature_bp


def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///refrigeration.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    CORS(app)

    app.register_blueprint(equipment_bp, url_prefix="/api")
    app.register_blueprint(alerts_bp, url_prefix="/api")
    app.register_blueprint(temperature_bp, url_prefix="/api")

    @app.route("/api/health", methods=["GET"])
    def health_check():
        return jsonify({
            "status": "ok",
            "message": "Refrigeration Monitoring API is running"
        })

    return app