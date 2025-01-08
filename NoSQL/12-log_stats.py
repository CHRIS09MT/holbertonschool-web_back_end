#!/usr/bin/env python3
"""
Module
"""

from pymongo import mongo_client

def main():
    """
    Server
    """
    
    client = mongo_client(host="localhost", port=27017)
    
    db = client['logs']
    
    collection = db['nginx']
    
    total = collection.count_documents({})
    
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    
    method_counts = {method: collection.count_documents({"method": method}) for method in methods}
    
    specific_count = collection.count_documents({"method": "GET", "path": "/status"})
    
    print(f"{total} logs")
    print("Methods:")
    for method in methods:
        print(f"\t{method_counts[method]}")
    print(f"\t{specific_count}")
    

if __name__ == "__main__":
    main()