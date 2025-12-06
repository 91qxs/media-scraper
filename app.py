from flask import Flask, send_from_directory, jsonify, request
import os
import logging

# 设置日志
logging.basicConfig(filename='logs/latest.log', level=logging.INFO, 
                    format='%(asctime)s %(message)s')

app = Flask(__name__, static_folder='static')

scraped_movies = []

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/api/info')
def api_info():
    return jsonify({
        "watch_dir": os.getenv("WATCH_DIR", "/media/movies"),
        "language": os.getenv("LANGUAGE", "zh-CN")
    })

@app.route('/api/movies')
def api_movies():
    return jsonify({ "movies": scraped_movies[-10:] })

@app.route('/api/logs')
def api_logs():
    try:
        with open("logs/latest.log", "r") as f:
            lines = f.readlines()[-20:]
        return jsonify({"logs": [line.strip() for line in lines]})
    except:
        return jsonify({"logs": ["等待日志..."]})

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    filename = data.get("filename", "未知").replace('.mp4', '').replace('.mkv', '')
    
    logging.info(f"刮削任务: {filename}")
    
    movie = {
        "title": filename,
        "year": "2024",
        "rating": "8.5"
    }
    scraped_movies.append(movie)
    
    return jsonify({"status": "success", "data": movie})

if __name__ == '__main__':
    os.makedirs("logs", exist_ok=True)
    app.run(host='0.0.0.0', port=5000)
