import sqlite3
import os
import re


print(os.getcwd())
print('Hello')

def database_path():
    original_path = os.getcwd()
    remove = r"/pb_public/pb_python_db"
    add = "/pb_data"
    path = re.sub(remove, add, original_path)
    data_database_path = path+"/data.db"
    return data_database_path

def create_connection(database=None):
    if database is None:
        database = database_path()

    try:
        conn = sqlite3.connect(database)
        return conn

    except sqlite3.Error as e:
        print("Error:", e)
        return None

def search_database(search_term, column, table, database=None):
    if database is None:
        database = database_path()

    try:
        conn = create_connection(database)
        cursor = conn.cursor()

        query = f"SELECT * FROM {table} WHERE {column} LIKE ?"
        cursor.execute(query, ('%' + search_term + '%',))
        results = cursor.fetchall()

        cursor.close()
        conn.close()

        return results

    except sqlite3.Error as e:
        print("Error:", e)
        return None

def search_database_dict(search_term, column, table, database=None):
    if database is None:
        database = database_path()

    try:
        conn = create_connection(database)
        cursor = conn.cursor()

        query = f"SELECT * FROM {table} WHERE {column} LIKE ?"
        cursor.execute(query, ('%' + search_term + '%',))

        # Fetch the first matching row
        row = cursor.fetchone()

        # Get the column names from the cursor description
        column_names = [col[0] for col in cursor.description]

        # Close the database connection
        cursor.close()
        conn.close()

        # Combine the column names with the row values as a dictionary
        result_dict = dict(zip(column_names, row))

        return result_dict

    except sqlite3.Error as e:
        print("Error:", e)
        return None

def add_record_to_database(record_values, table, database=None):
    if database is None:
        database = database_path()

    try:
        conn = create_connection(database)
        cursor = conn.cursor()

        # Construct the SQL query dynamically to insert the record
        placeholders = ",".join(["?"] * len(record_values))
        query = f"INSERT INTO {table} VALUES ({placeholders})"
        
        # Execute the query to insert the record
        cursor.execute(query, record_values)
        conn.commit()

        cursor.close()
        conn.close()

        print("Record added successfully.")

    except sqlite3.Error as e:
        print("Error:", e)

def add_record_to_database_dict(record_dict, table, database=None):
    if database is None:
        database = database_path()

    try:
        conn = create_connection(database)
        cursor = conn.cursor()

        # Prepare the list of values in the same order as the columns in the database
        record_values = list(record_dict.values())

        # Construct the SQL query dynamically to insert the record
        placeholders = ",".join(["?"] * len(record_values))
        query = f"INSERT INTO {table} VALUES ({placeholders})"
        
        # Execute the query to insert the record
        cursor.execute(query, record_values)
        conn.commit()

        cursor.close()
        conn.close()

        print("Record added successfully.")

    except sqlite3.Error as e:
        print("Error:", e)


# if __name__ == "__main__":
#     search_term = 'jeant'
#     column = 'username'
#     table = 'users'

#     result = search_database_dict(search_term, column, table)
#     print(result)
