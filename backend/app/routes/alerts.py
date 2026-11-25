from flask import Blueprint, jsonify

from app.models.alert import Alert

alerts_bp = Blueprint("alerts", __name__)


@alerts_bp.route("/alerts", methods=["GET"])
def get_alerts():
    alerts_list = Alert.query.order_by(
        Alert.timestamp.desc()
    ).all()

    return jsonify([
        {
            "id": item.id,
            "equipmentId": item.equipment_id,
            "equipmentName": item.equipment_name,
            "severity": item.severity,
            "title": item.title,
            "message": item.message,
            "timestamp": item.timestamp.isoformat(),
            "status": item.status
        }
        for item in alerts_list
    ])