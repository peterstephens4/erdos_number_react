#  Inport erdos json format data into mongo database

import json
import pymongo
from pprint import pprint

DB_HOST = "mongodb://localhost:27017/"
DB_NAME = "erdos_db"
DB_COLLECTION = "authors"
INPUT_FILE = "erdos.txt"

myclient = pymongo.MongoClient(DB_HOST)

mydb = myclient[DB_NAME]
erdos_collection = mydb[DB_COLLECTION]

# Purge the data from the database
erdos_collection.delete_many({})

# Loading or Opening the json file 
file_data = []
with open(INPUT_FILE) as f:
    file_data = f.readlines()

# vertex, degree, co-authors, name (* for deceased)
# adjacent vertices 
i = 0
while i <  len(file_data):
    line1 = file_data[i].rstrip()
    l1 = line1.split()
    vertex = l1[0]
    degree = l1[1]
    colaborators = l1[2]
    name = ""
    k = 3
    while k < len(l1):
        name = name + l1[k] + " "
        k = k + 1
    name = name.rstrip()

    line2 = file_data[i+1].rstrip()
    links = line2.split()
    for j in range(0, len(links)): 
        links[j] = int(links[j])
    record = {
        "vertex": int(vertex),
        "degree": int(degree),
        "colaborators": int(colaborators),
        "name": str(name),
        "adj": links
    }
    erdos_collection.insert_one(record) 
    print(record)
    i = i + 2

# Print out the data
cursor = erdos_collection.find({})
for document in cursor:
    pprint(document)
