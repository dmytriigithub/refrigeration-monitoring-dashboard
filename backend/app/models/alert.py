from app.extensions import db


class Alert(db.Model):
    __tablename__ = "alerts"

    id = db.Column(db.String(50), primary_key=True)
    equipment_id = db.Column(db.String(50), nullable=False)
    equipment_name = db.Column(db.String(100), nullable=False)
    severity = db.Column(db.String(20), nullable=False)
    title = db.Column(db.String(150), nullable=False)
    message = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f"<Alert {self.title}>"