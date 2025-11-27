# importar flask 
from flask import Flask, jsonify
from flask_cors import CORS
import pymysql

app = Flask (__name__)
CORS(app) # permite que react llame a sin bloqueos

def get_conection():
    return pymysql.connect(
        host='localhost',  # host es el servidor
        user='root',
        passwd='1234',
        database='activos',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor     
    )

# un empyo es una url de tu api que ejecuta una funcion y devuelve una respuesta 
@app.route('/activos')
def get_activos():
    conn = get_conection()
    with conn.cursor() as cursor:
        cursor.execute("SELECT * FROM activos")
        rows = cursor.fetchall() # es metodo dentro de cursor
    conn.close()
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)
    
