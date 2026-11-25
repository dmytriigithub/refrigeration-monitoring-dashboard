from datetime import datetime

from app import create_app
from app.extensions import db
from app.models.equipment import Equipment
from app.models.alert import Alert
from app.models.temperature import TemperatureReading

app = create_app()

with app.app_context():
    if Equipment.query.first():
        print("Database already contains equipment. Seeding skipped.")
    else:
        equipment_data = [
            Equipment(
                id="EQ-001",
                name="Compressor 1",
                type="compressor",
                location="Plant Room A",
                status="online",
                temperature=-18.5,
                last_updated=datetime.now()
            ),
            Equipment(
                id="EQ-002",
                name="Compressor 2",
                type="compressor",
                location="Plant Room A",
                status="warning",
                temperature=-15.2,
                last_updated=datetime.now()
            ),
            Equipment(
                id="EQ-003",
                name="Evaporator 1",
                type="evaporator",
                location="Cold Room A",
                status="online",
                temperature=-20.1,
                last_updated=datetime.now()
            ),
            Equipment(
                id="EQ-004",
                name="Condenser 1",
                type="condenser",
                location="Roof",
                status="critical",
                temperature=8.5,
                last_updated=datetime.now()
            ),
            Equipment(
                id="EQ-005",
                name="Cold Room B",
                type="cold-room",
                location="Storage Area",
                status="online",
                temperature=-18.0,
                last_updated=datetime.now()
            )
        ]

        db.session.add_all(equipment_data)
        db.session.commit()

        print("Successfully added 5 equipment records.")

    if Alert.query.first():
        print("Database already contains alerts. Seeding skipped.")
    else:
        alerts_data = [
            Alert(
                id="ALT-001",
                equipment_id="ROOM-003",
                equipment_name="Cold Room C",
                severity="critical",
                title="High temperature detected",
                message="Temperature has exceeded the configured safety threshold.",
                timestamp=datetime.fromisoformat("2026-11-25T14:45:00+00:00"),
                status="active"
            ),
            Alert(
                id="ALT-002",
                equipment_id="EVAP-003",
                equipment_name="Evaporator Unit 03",
                severity="warning",
                title="Temperature deviation",
                message="Evaporator temperature is outside the expected operating range.",
                timestamp=datetime.fromisoformat("2026-11-25T14:30:00+00:00"),
                status="active"
            ),
            Alert(
                id="ALT-003",
                equipment_id="ROOM-001",
                equipment_name="Cold Room A",
                severity="info",
                title="Temperature stabilized",
                message="Temperature returned to the configured operating range.",
                timestamp=datetime.fromisoformat("2026-11-25T13:20:00+00:00"),
                status="resolved"
            ),
            Alert(
                id="ALT-004",
                equipment_id="COND-001",
                equipment_name="Condenser Unit 01",
                severity="warning",
                title="High condenser temperature",
                message="Condenser temperature is above the normal operating range.",
                timestamp=datetime.fromisoformat("2026-11-25T12:10:00+00:00"),
                status="resolved"
            ),
            Alert(
                id="ALT-005",
                equipment_id="ROOM-002",
                equipment_name="Cold Room B",
                severity="info",
                title="System operating normally",
                message="Equipment monitoring check completed successfully.",
                timestamp=datetime.fromisoformat("2026-11-25T11:00:00+00:00"),
                status="resolved"
            )
        ]

        db.session.add_all(alerts_data)
        db.session.commit()

        print("Successfully added 5 alert records.")

    if TemperatureReading.query.first():
        print("Database already contains temperature readings. Seeding skipped.")
    else:
        timestamps = [
            "2026-11-25T08:00:00",
            "2026-11-25T09:00:00",
            "2026-11-25T10:00:00",
            "2026-11-25T11:00:00",
            "2026-11-25T12:00:00",
            "2026-11-25T13:00:00",
        ]

        rooms = [
            {
                "id": "ROOM-001",
                "name": "Cold Room A",
                "temperatures": [-18.2, -18.4, -18.3, -18.5, -18.4, -18.5],
            },
            {
                "id": "ROOM-002",
                "name": "Cold Room B",
                "temperatures": [-19.0, -19.1, -18.9, -19.2, -19.1, -19.0],
            },
            {
                "id": "ROOM-003",
                "name": "Cold Room C",
                "temperatures": [-18.5, -17.8, -16.9, -15.2, -12.8, -10.2],
            },
            {
                "id": "ROOM-004",
                "name": "Cold Room D",
                "temperatures": [-18.6, -18.7, -18.5, -18.8, -18.6, -18.7],
            },
        ]

        readings = []

        for room in rooms:
            for timestamp, temperature in zip(
                timestamps, room["temperatures"]
            ):
                readings.append(
                    TemperatureReading(
                        timestamp=datetime.fromisoformat(timestamp),
                        temperature=temperature,
                        equipment_id=room["id"],
                        equipment_name=room["name"],
                    )
                )

        db.session.add_all(readings)
        db.session.commit()

        print(f"Successfully added {len(readings)} temperature readings.")