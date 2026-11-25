from flask import Blueprint, jsonify

from app.models.equipment import Equipment

equipment_bp = Blueprint("equipment", __name__)


@equipment_bp.route("/equipment", methods=["GET"])
def get_equipment():
    equipment_list = Equipment.query.all()

    return jsonify([
        {
            "id": item.id,
            "name": item.name,
            "type": item.type,
            "location": item.location,
            "status": item.status,
            "temperature": item.temperature,
            "lastUpdated": item.last_updated.isoformat()
        }
        for item in equipment_list
    ])