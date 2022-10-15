from flask import Flask,render_template,request
from pymongo import MongoClient
client=MongoClient('localhost',27017)
db=client['kits']
coll=db['fullstack']

app=Flask(__name__)
skills=[]

@app.route('/form')
def formPage():
    return render_template('index.html')

@app.route('/formdata',methods=['post'])
def formdata():
    name=request.form['name']
    rollno=request.form['rollno']
    if 'python' in request.form:
        skills.append('python')
    if 'java' in request.form:
        skills.append('java')
    if 'aws' in request.form:
        skills.append('aws')
    print(name,rollno,skills)
    k={}
    k['name']=name
    k['rollno']=rollno
    k['skills']=skills
    coll.insert_one(k)
    return ('data collected')

if __name__=="__main__":
    app.run(debug=True)