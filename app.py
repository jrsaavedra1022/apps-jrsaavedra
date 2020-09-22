from flask import Flask, flash, redirect, render_template, request, session, abort
app = Flask(__name__)

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


if __name__ == "__main__":
    # app.run("0.0.0.0",debug=False)
    app.run("127.0.0.1",debug=True)
