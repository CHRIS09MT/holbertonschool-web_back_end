#!/usr/bin/env python3
"""
Module
"""

from pymongo import MongoClient


def logs(n: int):
    """
    Logs status
    """

    client = MongoClient("mongodb://localhost:27017/")

    logs = client.logs.nginx

    return logs.count_documents(n)


def main():
    """
    The Main
    """

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print(f"{logs({})} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {logs({'method': method})}")
    print(f"{logs({'method': 'GET', 'path': '/status'})} status check")


if __name__ == "__main__":
    main()
