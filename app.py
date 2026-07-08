from flask import Flask, jsonify, request, render_template
from database import db
from models import Task

app = Flask(__name__)

# Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///tasks.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return render_template("index.html")


# GET ALL TASKS
@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()

    task_list = []

    for task in tasks:
        task_list.append(task.to_dict())

    return jsonify(task_list)
@app.route("/api/tasks", methods=["POST"])
def create_task():
    data = request.get_json()

    # Check if title exists
    if not data.get("title"):
        return jsonify({"error": "Title is required"}), 400

    new_task = Task(
        title=data["title"],
        description=data.get("description", ""),
        status=data.get("status", "Pending"),
        priority=data.get("priority", "Medium")
    )

    db.session.add(new_task)
    db.session.commit()

    return jsonify(new_task.to_dict()), 201

@app.route("/api/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = Task.query.get(id)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    db.session.delete(task)
    db.session.commit()

    return jsonify({"message": "Task deleted successfully"})

@app.route("/api/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    task = Task.query.get(id)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    data = request.get_json()

    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    task.priority = data.get("priority", task.priority)
    task.status = data.get("status", task.status)

    db.session.commit()

    return jsonify(task.to_dict())

if __name__ == "__main__":
    app.run(debug=True)