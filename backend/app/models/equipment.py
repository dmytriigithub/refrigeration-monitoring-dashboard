from app.extensions import db


class Equipment(db.Model):
    __tablename__ = "equipment"

    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), nullable=False)
    temperature = db.Column(db.Float, nullable=True)
    last_updated = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f"<Equipment {self.name}>"