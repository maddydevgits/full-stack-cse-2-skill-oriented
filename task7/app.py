from flask import Flask,request

app=Flask(__name__)

@app.route('/getdata',methods=['get'])
def getdata():
    name=request.args.get('name')
    rollno=request.args.get('rollno')
    print(name,rollno)
    return 'data collected'
    
if __name__=="__main__":
    app.run(debug=True)