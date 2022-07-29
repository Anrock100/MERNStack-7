URLs
127.0.0.1:8000/persons/
Person => id, name, address

Methods
get - get all
http://127.0.0.1:8000/persons/

get - get individual based on id
http://127.0.0.1:8000/persons/2

post - create new/insert new record
url : http://127.0.0.1:8000/persons/
body: x-www-form-urlencoded
key1: value
key2: value
key3: value

put - full record update/edit record
http://127.0.0.1:8000/persons/2
body: x-www-form-urlencoded
key1: new value
key2: new value
key3: new value

patch - partial recod update/edit record
http://127.0.0.1:8000/persons/2
body: x-www-form-urlencoded
key3: new value

delete - record delet/remove record
http://127.0.0.1:8000/persons/3

Test - Testing Tool (Postman)

Implements - Language (Python, Java, C#, ASP, JSP, PHP, JS)

URLS
GET /                   home page 
GET /persons/           all persons   
GET /persons/:pid       individual person
POST /persons/          new person
PUT /persons/:pid       edit person based on id
PATCH /persons/:pid     edit person partially based on id
DELETE /persons/:pid    delete person based on id

person
pid, name, address

