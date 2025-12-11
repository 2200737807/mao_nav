// 网站分类数据
const categories = [
   {
        name: "我的项目",
        websites: [
            { name: "GitHub主页", url: "github.com/2200737807" },
            { name: "个人博客", url: "b.103000.vip" },
            { name: "工作博客", url: "blog.103000.vip" },
            { name: "个人主页", url: "new.103000.vip" },
            { name: "个人导航", url: "n.103000.vip" },
            { name: "个人影视站", url: "43.133.27.159:3000" },
            { name: "客服工具", url: "tools.103000.vip" }
        ]
    },
    {
        name: "个人常用",
        websites: [
            { name: "腾讯云国际", url: "www.tencentcloud.com" },
            { name: "腾讯云中国", url: "cloud.tencent.com" },
            { name: "bandwagon", url: "bandwagonhost.com" },
            { name: "GitHub", url: "github.com" },
            { name: "Cloudflare", url: "dash.cloudflare.com" }
        ]
    },
    {
        name: "AI工具",
        websites: [
            { name: "ChatGPT", url: "chat.openai.com" },
            { name: "Claude", url: "claude.ai" },
            { name: "Deepseek", url: "www.deepseek.com" },
            { name: "Google Gemini", url: "gemini.google.com" },
            { name: "阿里千问", url: "chat.qwen.ai" },
            { name: "Kimi", url: "www.kimi.com" },
            { name: "问小白", url: "www.wenxiaobai.com" },
            { name: "Perplexity", url: "www.perplexity.ai" },
            { name: "Copilot", url: "copilot.microsoft.com" },
            { name: "豆包", url: "www.doubao.com" },
            { name: "文心一言", url: "yiyan.baidu.com" }
        ]
    },
    {
        name: "开发工具",
        websites: [
            { name: "Huggingface", url: "huggingface.co" },
            { name: "API测试", url: "hoppscotch.io" },
            { name: "V0", url: "v0.dev" },
            { name: "SameAi", url: "same.new" },
            { name: "Openrouter", url: "openrouter.ai" },
            { name: "Cursor", url: "cursor.com" },
            { name: "Kilo Code", url: "www.kilocode.ai" }
        ]
    },
   
    {
        name: "容器服务",
        websites: [
            { name: "Vercel", url: "vercel.com" },
            { name: "Netlify", url: "www.netlify.com" },
            { name: "Railway", url: "railway.com" },
            { name: "Fly", url: "fly.io" },
            { name: "Render", url: "dashboard.render.com" },
            { name: "Heroku", url: "www.heroku.com" }
        ]
    },
    {
        name: "社区论坛",
        websites: [
            { name: "NGA-晴风村", url: "nga.178.com/thread.php?fid=-7955747" },
            { name: "v2ex", url: "www.v2ex.com" },
            { name: "52破解", url: "52pojie.cn" },
            { name: "少数派", url: "sspai.com" },
            { name: "linux-do", url: "linux.do" },
            { name: "NodeSeek", url: "www.nodeseek.com" },
            { name: "Linux do", url: "linux.do" },
            { name: "Nodeloc", url: "www.nodeloc.com" }
        ]
    },
    {
        name: "实用工具",
        websites: [
            { name: "ITDOG - 在线ping", url: "www.itdog.cn" },
            { name: "Ping0", url: "ping0.cc" },
            { name: "订阅转换", url: "submix.103000.vip" },
            { name: "webssh", url: "ssh.eooce.com" },
            { name: "文件快递柜", url: "filebox.nnuu.nyc.mn" },
            { name: "igoutu", url: "igoutu.cn" },
            { name: "uiverse-io", url: "uiverse.io" }
        ]
    }
];

// Matrix背景相关代码已移除

// 生成随机颜色（降低饱和度和提高亮度，使颜色不那么亮和显眼）
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 30 + Math.floor(Math.random() * 30); // 30-60%
    const lightness = 60 + Math.floor(Math.random() * 20); // 60-80%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// 生成黑白灰随机颜色（深色调）
function getBrightRandomColor() {
    const saturation = 0; // 0% 饱和度，确保是黑白灰
    const lightness = 30 + Math.floor(Math.random() * 20); // 30-50% 亮度，生成深灰黑色
    return `hsl(0, ${saturation}%, ${lightness}%)`;
}

// 生成黑白灰随机颜色（浅色调）
function getSubtleRandomColor() {
    const saturation = 0; // 0% 饱和度，确保是黑白灰
    const lightness = 60 + Math.floor(Math.random() * 30); // 60-90% 亮度，生成浅灰白颜色
    return `hsl(0, ${saturation}%, ${lightness}%)`;
}

// 将字符串转换为哈希值
function stringToHash(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // 转换为32位整数
    }
    return Math.abs(hash);
}

// 基于URL生成自适应的黑白灰颜色
function getAdaptiveColor(url) {
    const hash = stringToHash(url);
    // 生成40-60%亮度的黑白灰颜色
    const lightness = 40 + (hash % 21); // 40-60%
    return `hsl(0, 0%, ${lightness}%)`;
}

// 生成网站卡片
function createWebsiteCard(website, categoryIndex) {
    const card = document.createElement('a');
    card.className = 'website-card';
    card.href = `http://${website.url}`;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    // 创建按钮结构
    const button = document.createElement('button');
    button.className = 'button colorful'; // 使用新的按钮样式
    
    // 为不同网站分配颜色类别
    const colorClasses = ['success', 'info', 'warning', 'error'];
    const randomClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    button.classList.add(randomClass);
    
    // 添加SVG图标
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('class', 'icon');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-linecap', 'round');
    
    svg.appendChild(path);
    button.appendChild(svg);
    
    // 添加网站名称文本
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    const name = document.createTextNode(website.name);
    textDiv.appendChild(name);
    button.appendChild(textDiv);
    
    // 添加箭头图标
    const arrowSpan = document.createElement('span');
    arrowSpan.className = 'arrow';
    arrowSpan.textContent = '→';
    button.appendChild(arrowSpan);
    
    card.appendChild(button);

    return card;
}

// 渲染分类
function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';

    // 创建标签栏容器
    const radioInputDiv = document.createElement('div');
    radioInputDiv.className = 'radio-input';

    categories.forEach((category, index) => {
        // 创建标签和radio按钮
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'category-radio';
        input.id = `category-${index}`;
        input.value = `category-${index}`;
        
        // 默认选中第一个分类
        if (index === 0) {
            input.checked = true;
            label.classList.add('selected-label');
        }

        // 添加分类名称
        const span = document.createElement('span');
        span.textContent = category.name;

        // 构建标签结构
        label.appendChild(input);
        label.appendChild(span);
        radioInputDiv.appendChild(label);

        // 添加分类内容
        const categoryDiv = document.createElement('div');
        categoryDiv.className = `category ${index === 0 ? 'active' : ''}`;
        categoryDiv.id = `category-content-${index}`;

        const grid = document.createElement('div');
        grid.className = 'website-grid';

        category.websites.forEach(website => {
            const card = createWebsiteCard(website, index);
            grid.appendChild(card);
        });

        categoryDiv.appendChild(grid);
        categoriesContainer.appendChild(categoryDiv);
    });

    // 添加选择指示器
    const selection = document.createElement('span');
    selection.className = 'selection';
    radioInputDiv.appendChild(selection);

    // 将标签栏添加到容器顶部
    categoriesContainer.insertBefore(radioInputDiv, categoriesContainer.firstChild);

    // 设置选择指示器的初始宽度
    updateSelectionWidth();

    // 为radio按钮添加事件监听器
    const radioButtons = document.querySelectorAll('.radio-input input[type="radio"]');
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            handleCategoryChange(radio, index);
        });
    });
    
    // 为标签添加触摸支持
    const labels = document.querySelectorAll('.radio-input label');
    labels.forEach(label => {
        label.addEventListener('touchstart', () => {
            // 模拟点击效果
            label.style.opacity = '0.7';
        });
        
        label.addEventListener('touchend', () => {
            label.style.opacity = '1';
        });
    });
    
    function handleCategoryChange(radio, index) {
        // 隐藏所有分类内容
        const categoryContents = document.querySelectorAll('.category');
        categoryContents.forEach(content => content.classList.remove('active'));
        
        // 显示当前选中的分类内容
        const selectedContent = document.getElementById(`category-content-${index}`);
        selectedContent.classList.add('active');
        
        // 更新选中标签的样式
        const allLabels = document.querySelectorAll('.radio-input label');
        allLabels.forEach(l => l.classList.remove('selected-label'));
        radio.parentElement.classList.add('selected-label');
        
        // 更新选择指示器的位置和宽度
        updateSelectionWidth();
    }

    // 窗口大小改变时更新选择指示器宽度
    window.addEventListener('resize', updateSelectionWidth);
}

// 更新选择指示器的宽度和位置
function updateSelectionWidth() {
    // 使用更兼容的方式获取选中的标签
    const checkedRadio = document.querySelector('.radio-input input[type="radio"]:checked');
    const selectedLabel = checkedRadio ? checkedRadio.parentElement : null;
    const selection = document.querySelector('.radio-input .selection');
    if (selectedLabel && selection) {
        const rect = selectedLabel.getBoundingClientRect();
        const containerRect = selectedLabel.parentElement.getBoundingClientRect();
        
        // 设置选择指示器的宽度和位置
        selection.style.width = `${rect.width}px`;
        selection.style.left = `${rect.left - containerRect.left}px`;
        selection.style.transform = 'translateX(0)';
    }
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const baiduIcon = document.getElementById('baiduIcon');
    const googleIcon = document.getElementById('googleIcon');
    let currentEngine = 'baidu'; // 默认搜索引擎
    
    // 搜索引擎切换
    baiduIcon.addEventListener('click', () => {
        currentEngine = 'baidu';
        baiduIcon.classList.add('active');
        googleIcon.classList.remove('active');
        searchInput.placeholder = '搜索网站...';
    });
    
    googleIcon.addEventListener('click', () => {
        currentEngine = 'google';
        googleIcon.classList.add('active');
        baiduIcon.classList.remove('active');
        searchInput.placeholder = 'Search websites...';
    });
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            searchResults.style.display = 'none';
            return;
        }

        // 搜索所有网站
        const allWebsites = categories.flatMap(category => 
            category.websites.map(website => ({ ...website, category: category.name }))
        );

        const filteredWebsites = allWebsites.filter(website => 
            website.name.toLowerCase().includes(query) || 
            website.url.toLowerCase().includes(query)
        );

        if (filteredWebsites.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // 显示搜索结果
        searchResults.innerHTML = '';
        filteredWebsites.forEach(website => {
            const resultItem = document.createElement('a');
            resultItem.className = 'result-item';
            resultItem.href = `http://${website.url}`;
            resultItem.target = '_blank';
            resultItem.rel = 'noopener noreferrer';

            const favicon = document.createElement('img');
            favicon.src = `https://www.google.com/s2/favicons?domain=${website.url}&sz=16`;
            favicon.alt = `${website.name} favicon`;

            const textDiv = document.createElement('div');
            const nameSpan = document.createElement('div');
            nameSpan.style.fontWeight = '500';
            nameSpan.textContent = website.name;
            const urlSpan = document.createElement('div');
            urlSpan.style.fontSize = '12px';
            urlSpan.style.color = '#aaa';
            urlSpan.textContent = website.url;

            textDiv.appendChild(nameSpan);
            textDiv.appendChild(urlSpan);

            resultItem.appendChild(favicon);
            resultItem.appendChild(textDiv);
            searchResults.appendChild(resultItem);
        });

        searchResults.style.display = 'block';
    });

    // 搜索输入框回车搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                if (currentEngine === 'baidu') {
                    window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`, '_blank');
                } else {
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
                }
            }
        }
    });

    // 点击/触摸外部关闭搜索结果
    document.addEventListener('click', closeSearchResults);
    document.addEventListener('touchstart', closeSearchResults);
    
    function closeSearchResults(e) {
        if (!e.target.closest('.search-box')) {
            searchResults.style.display = 'none';
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    setupSearch();
});

// 窗口大小改变事件已移除（不再需要处理Matrix背景）
