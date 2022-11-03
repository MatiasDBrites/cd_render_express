# cd_render_express

# Configurando CD express RENDER

primer paso, registrarse en render, ir a la dashboard/ new+/ Web Services /conectar con github / el repositorio

```bash
name: Express-services (el nombre que quieran)
enviroment: Node
Branch: main
Build Command: npm i && npx sequelize-cli db:migrate && npm build
Start Command: node index.js (donde les corra el node)
hacer click en create web service

```

en settings modificar el auto-deploy a no

```bash
auto-deploy: no
deploy hook: (esa url la tenemos que llamar para que se gatille nuestro despliegue)
```

new+/ postrgres SQL

```bash
name: express-db (el nombre que quieran)
database: express
user: larnu (el suyo)
region: oregon
posgres version: 14
datadog api key: dejar vacio)
click en create data base
```

dentro de lo que creamos vamos a connections y vamos a utilizar algunos datos para el Environmen y sus variables de entorno

en Environment:

```bash
Environment variables: todas las variables de entorno 
(la key es el mismo nombre de las variables del codigo, 
value cambia segun los datos obtenidos en new+/ postrgres SQL)
Group name: express-demo (el nombre que quieran)
DB_USER: username
DB_PASSWORD: password
DB_name: database
DB_HOST: hostname
ENV: development

```

```bash
Linked Environment group: modificar por el nombre que une a todo el proyecto y hacer click en link

```

Hacer click  arriba a la derecha en **manual deploy:** y luego **deploy latest commit**

creamos la carpeta .github/workflows

```bash
//CD
name: Express.js CD
on:
  push:
    branches: [ main ]

jobs:
  test: 
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_USER: larnu
          POSTGRES_PASSWORD: larnuisgold
          POSTGRES_DB: larnu_demo_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
            - 5432:5432
  steps:
    - name: Checkout  
      uses: actions/checkout@v3

    - name: Setup Node
      uses: actions/setups-node@v1
      with:
        node-version: "18.10"

    - name: Installing Dependencies  
      run: npm i

    - name: testing our app #correr el test
      run: npm test

  deploy:
    needs: [test]
    name: Wait for Deploy
    runs-on: ubuntu-18.04
    steps:  
      - name: call render webhook 
        uses: fjogeleit/http-request-action@v1 
        with:
          url: ${{ secrets.RENDER_HOOK }}
          method: 'GET'
```

en github creamos el token. Settings/Secretes/actions/

[![rendercorriendo.png](https://i.postimg.cc/Zqmvx5cQ/rendercorriendo.png)](https://postimg.cc/sMn2VybP)

[![rendercorriendo2.png](https://i.postimg.cc/15Pzdj6g/rendercorriendo2.png)](https://postimg.cc/3WS749t7)
