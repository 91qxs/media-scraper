# utils.py
import re

def parse_filename(filename):
    name = os.path.splitext(filename)[0]
    year = re.search(r'(19|20)\d{2}', name)
    year = year.group(0) if year else "未知"
    title = re.sub(r'[.\[\]_\-].*', '', name)
    return title.strip(), year
