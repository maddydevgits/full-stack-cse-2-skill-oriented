from flask import Flask,render_template,request
import mysql.connector as mysql

db=mysql.connect(
    host="localhost",
    user="root",
    password="2022Root",
    database="maddy"
)
cur=db.cursor()

app=Flask(__name__)

@app.route('/')
def indexPage():
    return render_template('index.html')

@app.route('/formdata',methods=['post'])
def formPage():
    name=request.form['name']
    rollno=request.form['rollno']
    print(name,rollno)
    sql="INSERT INTO fullstack (name,rollno) VALUES (%s,%s)"
    values=(name,rollno)
    cur.execute(sql,values)
    db.commit()
    return 'data stored'

if __name__=="__main__":
    app.run(debug=True)