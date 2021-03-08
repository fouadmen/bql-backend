import csv
import requests

def upload():
    with open("./categories.csv", "r") as data_file:
        reader = csv.reader(data_file)
        next(reader, None)
        for r in reader:
            body = {
                    "name": r[0],
                    "description":r[1],
                    "imageUri": r[2]
                }
            res = requests.post("http://localhost:5050/api/categories", json=body)
            if res.status_code == 400:
                break

if __name__ == "__main__":
    upload()