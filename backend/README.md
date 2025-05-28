# User Registration Endpoint Documentation

## Endpoint

`POST /user/register`

---

## Description

Registers a new user in the system.  
On success, returns a JWT authentication token and the created user object.

---

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Field Requirements

- `fullname` (object, required)
  - `firstname` (string, required, min 3 characters)
  - `lastname` (string, optional, min 3 characters if provided)
- `email` (string, required, unique, min 5 characters)
- `password` (string, required)

---

## Responses

### Success

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required",
        "param": "fullname",
        "location": "body"
      }
    ]
  }
  ```

### Duplicate Email

- **Status:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "message": "E11000 duplicate key error collection: ...",
    ...
  }
  ```

---

## Notes

- The `password` is securely hashed before storage.
- The `email` field must be unique.
- The returned `token` can be used for authenticated requests.

---

# User Login Endpoint Documentation

## Endpoint

`POST /user/login`

---

## Description

Authenticates an existing user.  
On success, returns a JWT authentication token and the user object.

---

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Field Requirements

- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)

---

## Responses

### Success

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

### Invalid Credentials

- **Status:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password."
  }
  ```

---

## Notes

- The `token` can be used for authenticated requests.
- Make sure to provide valid credentials to receive a token.

---
