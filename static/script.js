document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const scrapeBtn = document.getElementById('scrapeBtn');
  const loading = document.getElementById('loading');
  const result = document.getElementById('result');
  const empty = document.getElementById('empty');
  const error = document.getElementById('error');

  // 模拟数据库（实际项目中应调用 API）
  const movieDB = {
    "肖申克的救赎": {
      title: "肖申克的救赎",
      year: "1994",
      rating: "9.3",
      genre: "剧情",
      director: "弗兰克·德拉邦特",
      cast: "蒂姆·罗宾斯, 摩根·弗里曼",
      plot: "银行家安迪被冤枉杀害妻子及其情人，被判终身监禁，在肖申克监狱中他凭借智慧和毅力重获自由。",
      poster: "https://via.placeholder.com/250x375?text=肖申克的救赎"
    },
    "阿甘正传": {
      title: "阿甘正传",
      year: "1994",
      rating: "9.0",
      genre: "剧情 / 爱情",
      director: "罗伯特·泽米吉斯",
      cast: "汤姆·汉克斯, 罗宾·怀特",
      plot: "阿甘是一个智商只有75的男孩，但他用真诚和坚持影响了美国几十年的历史。",
      poster: "https://via.placeholder.com/250x375?text=阿甘正传"
    }
  };

  // 刮削按钮点击事件
  scrapeBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    
    // 隐藏所有状态
    result.classList.add('hidden');
    loading.classList.add('hidden');
    empty.classList.add('hidden');
    error.classList.add('hidden');

    if (!query) {
      empty.classList.remove('hidden');
      return;
    }

    // 显示加载中
    loading.classList.remove('hidden');

    // 模拟网络延迟
    setTimeout(() => {
      const movie = movieDB[query];

      if (movie) {
        // 填充数据
        document.getElementById('title').textContent = movie.title;
        document.getElementById('year').textContent = movie.year;
        document.getElementById('rating').textContent = movie.rating;
        document.getElementById('genre').textContent = movie.genre;
        document.getElementById('director').textContent = movie.director;
        document.getElementById('cast').textContent = movie.cast;
        document.getElementById('plot').textContent = movie.plot;
        document.getElementById('poster').src = movie.poster;

        // 显示结果
        result.classList.remove('hidden');
      } else {
        error.classList.remove('hidden');
      }

      loading.classList.add('hidden');
    }, 1000); // 模拟 1 秒延迟
  });
});document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const scrapeBtn = document.getElementById('scrapeBtn');
  const loading = document.getElementById('loading');
  const result = document.getElementById('result');
  const empty = document.getElementById('empty');
  const error = document.getElementById('error');

  // 模拟数据库（实际项目中应调用 API）
  const movieDB = {
    "肖申克的救赎": {
      title: "肖申克的救赎",
      year: "1994",
      rating: "9.3",
      genre: "剧情",
      director: "弗兰克·德拉邦特",
      cast: "蒂姆·罗宾斯, 摩根·弗里曼",
      plot: "银行家安迪被冤枉杀害妻子及其情人，被判终身监禁，在肖申克监狱中他凭借智慧和毅力重获自由。",
      poster: "https://via.placeholder.com/250x375?text=肖申克的救赎"
    },
    "阿甘正传": {
      title: "阿甘正传",
      year: "1994",
      rating: "9.0",
      genre: "剧情 / 爱情",
      director: "罗伯特·泽米吉斯",
      cast: "汤姆·汉克斯, 罗宾·怀特",
      plot: "阿甘是一个智商只有75的男孩，但他用真诚和坚持影响了美国几十年的历史。",
      poster: "https://via.placeholder.com/250x375?text=阿甘正传"
    }
  };

  // 刮削按钮点击事件
  scrapeBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    
    // 隐藏所有状态
    result.classList.add('hidden');
    loading.classList.add('hidden');
    empty.classList.add('hidden');
    error.classList.add('hidden');

    if (!query) {
      empty.classList.remove('hidden');
      return;
    }

    // 显示加载中
    loading.classList.remove('hidden');

    // 模拟网络延迟
    setTimeout(() => {
      const movie = movieDB[query];

      if (movie) {
        // 填充数据
        document.getElementById('title').textContent = movie.title;
        document.getElementById('year').textContent = movie.year;
        document.getElementById('rating').textContent = movie.rating;
        document.getElementById('genre').textContent = movie.genre;
        document.getElementById('director').textContent = movie.director;
        document.getElementById('cast').textContent = movie.cast;
        document.getElementById('plot').textContent = movie.plot;
        document.getElementById('poster').src = movie.poster;

        // 显示结果
        result.classList.remove('hidden');
      } else {
        error.classList.remove('hidden');
      }

      loading.classList.add('hidden');
    }, 1000); // 模拟 1 秒延迟
  });
});