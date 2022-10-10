from flask import Flask,render_template,request

app=Flask(__name__)

@app.route('/form')
def formPage():
    return render_template('index.html')

@app.route('/formdata',methods=['post'])
def formdata():
    name=request.form['name']
    rollno=request.form['rollno']
    print(name,rollno)
    return ('data collected')

if __name__=="__main__":
    app.run(debug=True)