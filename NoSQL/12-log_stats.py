#!/usr/bin/env python3
"""
Module
"""

from pymongo import MongoClient

def main():
    """
    Main function to connect to MongoDB, retrieve Nginx log statistics,
    and print the results in a specified format.
    """
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017/')  # Adjust the connection string if needed
    db = client['logs']  # Access the 'logs' database
    collection = db['nginx']  # Access the 'nginx' collection

    # Count total logs
    total_logs = collection.count_documents({})  # Count all documents in the collection

    # Define the HTTP methods to count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    
    # Count the number of documents for each HTTP method
    method_counts = {method: collection.count_documents({"method": method}) for method in methods}

    # Count the number of documents with method=GET and path=/status
    specific_count = collection.count_documents({"method": "GET", "path": "/status"})

    # Display results
    print(f"{total_logs} logs")  # Print total number of logs
    print("Methods:")  # Print header for methods
    for method in methods:
        print(f"\t{method_counts[method]}")  # Print count for each method with tabulation
    print(f"\t{specific_count}")  # Print count for specific method and path

if __name__ == "__main__":
    main()  # Execute the main function