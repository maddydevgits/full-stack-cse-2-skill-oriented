from flask import Flask,render_template

app=Flask(__name__)

@app.route('/about')
def about():
    return render_template('index.html')

@app.route('/subjects')
def subjects():
    return render_template('subjects.html')

if __name__=="__main__":
    app.run(debug=True)