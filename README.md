# Prueba Culqi - AWS Node.js Typescript

Respuestas a documento tecnico

    Punto 2:
    - Patrones de diseño utilizados: Singleton, Constructor
    - Patrones de arquitectura: Arquitectura basada en eventos, FaaS, Arquitectura serverless
    
    Punto 3:
    - Se utilizaron el patron de diseño Singleton para la conexión a la BD, en este caso MongoDB ya que es una forma usual de realizar estas conexiones o       pool de conexiones. El patron constructor para la creación de clases y reutilización de las mismas. Por otra parte, el uso de los lambdas puede derivar     al uso de otros patrones de diseño como el splitter para limpiar la data, registrar en una base de datos y continuar con otro lambda, también se podria     hacer uso del patrón map para transformar la data, entre otro tipo de diseño apropiados para una arquitectura serverless.
    - Entiendo que por el rubro se requiere procesar una gran cantidad de data en simultaneo mediante procedimientos o validaciones especificas para            filtrar aquellas peticiones que cumplen con los requerimientos, esta arquitectura puede confundirse con la de microservicios pero una de las                características por la cual optariamos por una arquitectura serverless es la velocidad de reacción, para estas tareas pequeñas y repetitivas que no        demoran muchos segundos conviene la utilización de esta arquitectura, por otro lado optariamos por microservicios si el tiempo de respuesta es              considerablemente mayor en segundo
    
Para correr el servicio
- npm i
- serverless deploy (para correrlo en AWS)
- serverless offline (para correrlo en local)
- npm test (para correr las pruebas unitarias)

La base de datos está alojada en MongoDB Atlas por lo no que requiere la creación de la misma para probarlo desde cualquier dispositivo
    

