import sys
from pathlib import Path

# Vercel 函数入口：把 backend 目录加入模块路径，复用同一份 FastAPI 代码
BACKEND_DIR = Path(__file__).resolve().parent.parent / "backend"
sys.path.insert(0, str(BACKEND_DIR))

from main import app  # noqa: E402
