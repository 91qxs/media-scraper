# scraper_core.py
import os
import requests

TMDB_API_KEY = os.getenv("TMDB_API_KEY")
BASE_URL = "https://api.themoviedb.org/3"

def search_movie(title):
    if not TMDB_API_KEY:
        return None
    url = f"{BASE_URL}/search/movie"
    params = {'api_key': TMDB_API_KEY, 'query': title, 'language': 'zh-CN'}
    try:
        return requests.get(url, params=params).json()
    except:
        return None
