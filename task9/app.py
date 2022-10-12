from flask import Flask,render_template,request,session,redirect

app=Flask(__name__)
app.secret_key='madhu'

@app.route('/msg')
def msgPage():
    return render_template('msg.html',m=session['msg'])

@app.route('/form')
def formPage():
    return render_template('index.html')

@app.route('/submitmsg',methods=['post'])
def submitmsg():
    msg=request.form['msg']
    session['msg']=msg
    print(session['msg'])
    # return 'msg stored'
    return redirect('/msg')

if __name__=="__main__":
    app.run(debug=True)