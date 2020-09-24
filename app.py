import os
from flask import Flask, flash, redirect, render_template, request, session, abort
from models import ImagesGet

app = Flask(__name__)

CURRENT_ROUTE = os.path.dirname(__file__)

@app.route("/")
def index():
    return "Index!"

@app.route("/members")
def members():
    return "Members"

@app.route("/members/<string:name>/")
def getMember(name):
    return name

@app.route("/hello/<string:name>/")
def hello(name):
    return render_template(
        'test.html',name=name)

@app.route("/fernando/")
def fernando():
    return render_template(
        'colchones/index.html'
    )

@app.route("/muggly/")
def betterWorld():
    global CURRENT_ROUTE
    # Obtener imagenes
    nature = ImagesGet.ls2(CURRENT_ROUTE + "/static/images/nature/")
    animals = ImagesGet.ls2(CURRENT_ROUTE + "/static/images/animals/")
    counter=1
    return render_template(
        'betterWorld/index.html',
        list_animals=animals,
        list_nature=nature,
        counter=counter
    )


if __name__ == "__main__":
    # app.run("0.0.0.0",debug=False)
    app.run("127.0.0.1",debug=True)
