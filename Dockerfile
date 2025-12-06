# Dockerfile
FROM --platform=$TARGETPLATFORM python:3.10-slim

LABEL org.opencontainers.image.authors="91qxs"
LABEL org.opencontainers.image.source="https://github.com/91qxs/media-scraper"
LABEL org.opencontainers.image.description="全自动影视元数据刮削器，支持 x86_64 和 ARM64，适用于群晖、TrueNAS 等 NAS"

WORKDIR /app

# 安装编译依赖（watchdog 需要）
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential gcc && \
    rm -rf /var/lib/apt/lists/*

# 复制依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用
COPY . .

# 权限与启动
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 5000

# 非 root 用户
RUN useradd -m -u 1000 appuser
USER appuser

ENTRYPOINT ["/entrypoint.sh"]