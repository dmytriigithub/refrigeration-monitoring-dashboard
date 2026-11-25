from app.extensions import db


class TemperatureReading(db.Model):
    __tablename__ = "temperature_readings"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    temperature = db.Column(db.Float, nullable=False)
    equipment_id = db.Column(db.String(50), nullable=False)
    equipment_name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"<TemperatureReading {self.equipment_name}: {self.temperature}>"