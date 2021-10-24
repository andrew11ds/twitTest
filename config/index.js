
/* 
LAS CREDECIALES:
"key": "x-access-token",
"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgyMGYyYWZkNTFiOWFmMDJkNzgwNDkiLCJpYXQiOjE2MTkxMzYzMDR9.cI4LB8Gs5f0lNKKmLN2O0-bpL1wapA8EoSUMM1_hIWs",
"type": "text" 
*/

/* Yo lo hice de esta forma (Victor)
librerias:
twit:  npm install twit
## Defino twit que es una libreria que funciona con nodejs para conectarse a twitter en tiempo real##
const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apikey = 'xxx'
const apiSecretKey = 'xxx'
const accessToken = 'xxx'
const accessTokenSecret = 'xxx'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});
## Aquí ya la conexión se debió establecer correctamente"  ##

*/


/* METODO QUE CREO QUE USA EL PROFESOR: 
const dotenv = require("dotenv");

dotenv.config();

const config = {
  http: {
    host: process.env.HTTP_HOST || "0.0.0.0",
    port: process.env.PORT || process.env.HTTP_PORT,
  },
  log: {
    access: "../logs/" + process.env.LOG_ACCESS,
  },
  jwtKey: process.env.JWTKEY,
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessTokenKey: process.env.TWITTER_TOKEN_KEY,
    accessTokenSecret: process.env.TWITTER_TOKEN_SECRET,
  },
};

module.exports = { config };
*/

 /* ESTO LO TOMÉ DE POSTMAN:
{
	"item": [
		{
			"name": "List Users",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "locale",
						"value": "es-ES",
						"type": "text"
					},
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgyMGYyYWZkNTFiOWFmMDJkNzgwNDkiLCJpYXQiOjE2MTkxMzYzMDR9.cI4LB8Gs5f0lNKKmLN2O0-bpL1wapA8EoSUMM1_hIWs",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:3000/api/users?page=1&limit=4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users"
					],
					"query": [
						{
							"key": "page",
							"value": "1"
						},
						{
							"key": "limit",
							"value": "4"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get User",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/users/victorCuerdo",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"victorCuerdo"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create user",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "",
						"value": "",
						"type": "text",
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"andreac\",\n    \"name\": \"Andrea Cuerdo\",\n    \"email\": \"andreacuerdo08@email.com\",\n    \"password\": \"H456.$.holaA\",\n    \"passwordConfirmation\": \"H456.$.holaA\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"andreac\",\n    \"password\": \"H456.$.holaA\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/users/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create tweet",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgyMGYyYWZkNTFiOWFmMDJkNzgwNDkiLCJpYXQiOjE2MTkxMzYzMDR9.cI4LB8Gs5f0lNKKmLN2O0-bpL1wapA8EoSUMM1_hIWs",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"content\": \"Mi segundo tweet!\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/tweets",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tweets"
					]
				}
			},
			"response": []
		},
		
		{
			"name": "Delete user",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implc3RyYWRlIiwiaWF0IjoxNjE3OTI1OTc1fQ.RryWumzOoC-lvbJQwJ867kWfP0AKZYzcg9Uj8Sp8EnA",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"vcuerdo\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "List Tweets",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/tweets",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tweets"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Comment",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgyMTYxYzQwZGIxMmI1YmZmY2ZiNmMiLCJpYXQiOjE2MTkxMzgwODV9.qdgBj061t4uXo9fKn0fpje1oE4CypX0OBqfLN8Vml_A",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"comment\": \"El segundo comentario!!!!\",\n    \"tweetId\": \"60820f40fd51b9af02d7804a\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/tweets/comments",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tweets",
						"comments"
					]
				}
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}

*/