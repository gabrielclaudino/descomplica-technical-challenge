FROM mongo

COPY db.json /db.json
CMD mongoimport --host mongodb --db descomplica-challenge --collection student --type json --file /db.json --jsonArray