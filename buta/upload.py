import sqlite3
import json

conn = sqlite3.connect('db.sqlite3')

with open('./data.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)
    
for item in data:
    conn.execute("INSERT INTO members_membermodel (name, surname, age, sex, university) VALUES (?, ?, ?, ?, ?)",
                 (item["Ad"], item["Soyad"], item["Yaş"], item["Cins"], item["Universitet"]))
    
conn.commit()
conn.close()
