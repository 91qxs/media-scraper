#!/bin/bash
# entrypoint.sh

set -e  # 出错即停止

echo "🚀 启动影视刮削服务..."

# 检查必要环境变量
if [ -z "$TMDB_API_KEY" ]; then
  echo "❌ 错误：未设置 TMDB_API_KEY 环境变量！"
  echo "请使用：-e TMDB_API_KEY=your_api_key_here"
  exit 1
fi

# 替换代码中的占位符（或写入配置文件）
sed -i "s|TMDB_API_KEY_PLACEHOLDER|$TMDB_API_KEY|g" /app/scraper_core.py

# 可选：创建默认目录
mkdir -p /app/scraped_data /app/logs

# 后台启动 watchdog 监听器
echo "👀 启动文件夹监听器..."
python /app/watcher.py &

# 主服务（前台运行，保证容器不退出）
echo "🌐 启动 Web API 服务 (http://0.0.0.0:5000)"
exec gunicorn --bind 0.0.0.0:5000 --workers 1 --log-level info app:app