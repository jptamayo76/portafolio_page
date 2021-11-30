# portafolio_page

Página tarea portafolio - Desafio Latam

# How it works?

##  Construye la imagen

docker build -t portafolio_page:v1 .

## Arranca un contendor de la imagen creada

docker run -dp 9080:80 --network alloxentric.com --name portafolio_webserver portafolio_page:v1

# Typeform necesita un sitio HTTPS para ser invocado
