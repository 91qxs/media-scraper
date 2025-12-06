# watcher.py
import time
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class VideoHandler(FileSystemEventHandler):
    def on_created(self, event):
        if event.is_directory: return
        if event.src_path.lower().endswith(('.mp4', '.mkv', '.avi')):
            print(f"🎬 新视频: {event.src_path}")

def start_watcher():
    path = os.getenv("WATCH_DIR", "/media/movies")
    if not os.path.exists(path):
        print(f"⚠️ 目录不存在: {path}")
        return
    event_handler = VideoHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=False)
    observer.start()
    print(f"👀 监听中: {path}")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

if __name__ == "__main__":
    time.sleep(3)
    start_watcher()
