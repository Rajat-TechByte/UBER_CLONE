# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

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

`POST /users/login`

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

# User Profile Endpoint Documentation

## GET `/users/profile`

**Description:**  
Returns the authenticated user's profile information.

**Authentication:**

- Required.
- Send JWT token in the `token` cookie or as an `Authorization: Bearer <token>` header.

**Request Example:**

- No body required.
- Headers:
  - `Cookie: token=<JWT>`
  - or `Authorization: Bearer <JWT>`

**Response:**

- **200 OK**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": "..."
  }
  ```
- **401 Unauthorized**
  ```json
  { "message": "Unauthorized" }
  ```

---

## GET `/users/logout`

**Description:**  
Logs out the authenticated user by blacklisting the token and clearing the cookie.

**Authentication:**

- Required.
- Send JWT token in the `token` cookie or as an `Authorization: Bearer <token>` header.

**Request Example:**

- No body required.
- Headers:
  - `Cookie: token=<JWT>`
  - or `Authorization: Bearer <JWT>`

**Response:**

- **200 OK**
  ```json
  { "message": "Logged Out." }
  ```
- **401 Unauthorized**
  ```json
  { "message": "Unauthorized" }
  ```

---

# Captain Endpoints Documentation

---

## Register Captain

### `POST /captains/register`

**Description:**  
Registers a new captain in the system. On success, returns a JWT authentication token and the created captain object.

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123",
  "vehicle": {
    "color": "red",
    "plate": "MP 09 UT 1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Field Requirements:**
- `fullname` (object, required)
  - `firstname` (string, required, min 3 characters)
  - `lastname` (string, optional, min 3 characters if provided)
- `email` (string, required, must be a valid email, unique)
- `password` (string, required, min 6 characters)
- `vehicle` (object, required)
  - `color` (string, required, min 3 characters)
  - `plate` (string, required, min 3 characters)
  - `capacity` (integer, required, min 1)
  - `vehicleType` (string, required, one of: `"car"`, `"motorcycle"`, `"auto"`)

**Responses:**

- **201 Created**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "MP 09 UT 1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive",
      "socketId": null,
      "location": {
        "lat": null,
        "lng": null
      }
    }
  }
  ```

- **400 Bad Request** (Validation Error)
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long.",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```

- **400 Bad Request** (Duplicate Email)
  ```json
  {
    "message": "Captain Already Exist."
  }
  ```

---
## Login Captain

### `POST /captains/login`

**Description:**  
Authenticates a captain and returns a JWT token and the captain object.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

**Responses:**

- **200 OK**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "MP 09 UT 1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive",
      "socketId": null,
      "location": {
        "lat": null,
        "lng": null
      }
    }
  }
  ```

- **400 Bad Request** (Validation Error)
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email.",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

- **401 Unauthorized** (Invalid Credentials)
  ```json
  {
    "message": "Invalid email or password."
  }
  ```

---

## Get Captain Profile

### `GET /captains/profile`

**Description:**  
Returns the authenticated captain's profile.

**Authentication:**  
- Required.  
- Send JWT token in the `token` cookie or as an `Authorization: Bearer <token>` header.

**Responses:**

- **200 OK**
  ```json
  {
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "MP 09 UT 1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive",
      "socketId": null,
      "location": {
        "lat": null,
        "lng": null
      }
    }
  }
  ```

- **401 Unauthorized**
  ```json
  { "message": "Unauthorized." }
  ```

---

## Logout Captain

### `GET /captains/logout`

**Description:**  
Logs out the authenticated captain by blacklisting the token and clearing the cookie.

**Authentication:**  
- Required.  
- Send JWT token in the `token` cookie or as an `Authorization: Bearer <token>` header.

**Responses:**

- **200 OK**
  ```json
  { "message": "Logout Successfully." }
  ```

- **401 Unauthorized**
  ```json
  { "message": "Unauthorized." }
  ```

---

