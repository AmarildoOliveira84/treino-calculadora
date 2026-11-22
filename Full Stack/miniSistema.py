from flask import Flask, render_template, jsonify
app = Flask(__name__)
contador = 0

@app.route("/")
def home():
    return render_template("miniSistema.html", valor_inicial=contador)

@app.route("/clicar",methods=["POST"])
def clicar():
    global contador
    contador +=1
    return jsonify({"contador": contador,"Mensagem":f"O python contou {contador} cliques" })

if __name__ =="__main__":
    app.run(debug=True, port=8080)
        