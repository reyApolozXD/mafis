# importar flask 
from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql

app = Flask (__name__)
CORS(app) # permite que react llame a sin bloqueos
"""conexon al abase de datos"""
def get_conection():
    return pymysql.connect(
        host='localhost',  # host es el servidor
        user='root',
        passwd='1234',
        database='activos',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor     
    )
"""________________________________"""

"""obtener activos"""
# un empyo es una url de tu api que ejecuta una funcion y devuelve una respuesta 
@app.route('/activos')
def get_activos():
    conn = get_conection()
    with conn.cursor() as cursor:
        cursor.execute("SELECT * FROM activos")
        rows = cursor.fetchall() # es metodo dentro de cursor
    conn.close()
    return jsonify(rows)
"""____________________"""

"""crear acvitos con el metodo post"""
@app.route('/activos', methods=['POST']) 
def crear_activos(): # define la funcion de python que se ejecuta cuando se accede a la ruta
    data = request.get_json() # recupera los datos es decir el nuevo activo que el cliente escribio en el cuerpo de la solicitu
    conn = get_conection() # lleva la imformacion para conectarse con la base de datos
    with conn.cursor() as cursor: # crea un cursor apartir de la coneccion el cursor es el objeto que se utilisa para ejecutar comandos sql. el bloque with asegura que el curor se sierre automaticamente despues 
        sql = "INSERT INTO activos (nombreActivo,tipo, ubicacion, estado) VALUES (%s, %s, %s, %s)" # define la consulta para insertar datos %s: son placeholder(marcadores de pocicion) que se renplasaran de forma segura con los valores de las varibles 
        cursor.execute(sql, (data['nombreActivo'], data['tipo'], data['ubicacion'], data['estado'])) # ejecuta la consulta sql, previene ataques de inchesion de sql 
        conn.commit() # permite guardar los cambios de forma permanente en la base de datos si el codigo 
    conn.close()
    return jsonify({'msg': 'creado'}), 201

if __name__ == '__main__':
    app.run(debug=True)

