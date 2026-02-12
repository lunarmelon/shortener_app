# Link shortener app

This is a small link shortener app I'm doing for learning fullstack development. This project was created using [FastAPI](https://fastapi.tiangolo.com/)

As of the last commit, this backend can:

- Create shortened URLs based on a given URL string
- Forward the shortened URL to the original URL
- Return URL information based on the shorten URL key
- Delete unused shortened URLs

## Installation

To run the project, first create a virtual environment with:

```bash
python3 -m venv venv
```

Activate the virtual environment with:

```bash
source venv/bin/activate
```

Then install dependencies with pip:

```bash
python3 -m pip install -r requirements.txt
```

## Usage

To run the server with [uvicorn](https://uvicorn.dev/) run:

```bash
uvicorn shortener_app.main:app --reload
```

The default address is `http://localhost:8000`

To check the endpoint documentation, please check `http://localhost:8000/docs`
