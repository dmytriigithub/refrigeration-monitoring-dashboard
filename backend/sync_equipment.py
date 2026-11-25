from datetime import datetime

from app import create_app
from app.extensions import db
from app.models.equipment import Equipment


app = create_app()

with app.app_context():

    # Update existing Cold Room B ID
    cold_room_b = Equipment.query.filter_by(id="EQ-005").first()

    if cold_room_b:
        cold_room_b.id = "ROOM-002"
        print("Updated Cold Room B ID to ROOM-002.")

    # Add missing cold rooms
    cold_rooms = [
        {
            "id": "ROOM-001",
            "name": "Cold Room A",
            "temperature": -18.5,
            "status": "online",
        },
        {
            "id": "ROOM-003",
            "name": "Cold Room C",
            "temperature": -10.2,
            "status": "critical",
        },
        {
            "id": "ROOM-004",
            "name": "Cold Room D",
            "temperature": -18.7,
            "status": "online",
        },
    ]

    for room in cold_rooms:
        existing_room = Equipment.query.filter_by(
            id=room["id"]
        ).first()

        if existing_room:
            print(f"{room['name']} already exists. Skipping.")
            continue

        new_equipment = Equipment(
            id=room["id"],
            name=room["name"],
            type="cold-room",
            location="Storage Area",
            status=room["status"],
            temperature=room["temperature"],
            last_updated=datetime.now(),
        )

        db.session.add(new_equipment)
        print(f"Added {room['name']}.")

    db.session.commit()

    print("Equipment synchronization completed.")