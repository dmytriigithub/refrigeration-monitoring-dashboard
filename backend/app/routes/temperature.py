from flask import Blueprint, jsonify

from app.models.temperature import TemperatureReading

temperature_bp = Blueprint("temperature", __name__)


@temperature_bp.route("/temperature-readings", methods=["GET"])
def get_temperature_readings():
    readings = TemperatureReading.query.order_by(
        TemperatureReading.timestamp.asc()
    ).all()

    return jsonify([
        {
            "timestamp": item.timestamp.isoformat(),
            "temperature": item.temperature,
            "equipmentId": item.equipment_id,
            "equipmentName": item.equipment_name
        }
        for item in readings
    ])