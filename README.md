# portafolio_page

Página tarea portafolio - Desafio Latam

# How it works?

##  Construye la imagen

$ docker build -t portafolio_page:v1 .

## Arranca un contenedor de la imagen creada

$ docker run -dp 9080:80 --name portafolio_webserver portafolio_page:v1

## Ahora puedes navegar HTTP a la IP del host donde vive el contenedor

http://servidor-docker:9080/


# Typeform necesita un sitio HTTPS para ser invocado

https://jptamayo76.github.io/portafolio_page/

https://jptamayo.alloxentric.com/   ( * )

* Utilizamos un DOMINIO propio y Certificado SSL/TLS Gratuito de Let's Encrypt instalado en un Proxy Reverso Nginx
