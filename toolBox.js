// 圖片輪播
{
    let headerInSide = document.getElementById('headerInSide');
    let headerImg = document.querySelectorAll('#headerImg');
    let index = 0;
    
    headerInSide.style.width = 700 * headerImg.length + 'px';


    setInterval(() =>{
        
        headerInSide.style.opacity = 0;
        headerInSide.style.transition = 'left 0.5 s'

        
        setTimeout(()=>{
            index++;
            
            if (index >= headerImg.length) {
                index = 0;
            }
    
            headerInSide.style.left = -700 * index + 'px';
            headerInSide.style.transition = 'opacity 1s'
            headerInSide.style.opacity = 1;
    
        }, 600)
    
    },2000);
}


    //漢堡選單
{
    let navigatorUl = document.querySelector('.navigatorUl');
    let hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('openMenu');
        navigatorUl.classList.toggle('openMenu');
    }
)    
    //按完即刪除
    let navigatorUlA = document.querySelectorAll('.navigatorLi a').forEach( link => {
            link.addEventListener('click', ()=>{
                document.querySelector('.navigatorUl').classList.remove('openMenu')}
            )       //綁定刪除openMenu
        }       //ForEach遍歷所有a
    )
}


    // 主內容
{               
let topPhoto = document.querySelector('.topPhoto');
let headerOutSide = document.querySelector('.headerOutSide');
let navigatorLi = document.getElementsByClassName('navigatorLi')

function show(index, sectionId, imgSrc, h2Text, pText) {        //封裝函式
    navigatorLi[index].onclick = () => {
        
        let clearSections = document.querySelectorAll('section');
        clearSections.forEach(section => section.remove());

        let removeTools = document.querySelectorAll('#toolInside');
        removeTools.forEach(tools => tools.remove());

            let section = document.createElement('section');  // 增加標籤section
            section.id = sectionId;    // 為標籤增加ID
            
            document.body.appendChild(section);

            section.innerHTML = 
            `
            <img src='${imgSrc}' alt="">
            <div>
                <h2>${h2Text}</h2><hr>
                <p>${pText}</p>
            </div>`;

                topPhoto.style.display = 'none';
                headerOutSide.style.display = 'none';
                section.style.position = 'absolute';
                    
                // 設定初始位置（從下方滑上來頁面）
            section.style.top = '50%';
            section.style.transform = 'translateY(40%)';
            section.style.transition = 'all 1.7s ease'; 
            
                // 延遲一點時間再移動到中間
                setTimeout(() => {
                    section.style.top = '4%';
                    section.style.transform = 'translate(6%,18%)';
                }, 100);
    }
}
        // 關於我
show(0, 'mySelf', './圖片素材/article-myself.jpg', '關於我',
'您好！我是張偉倫，來自台中，從高中開始就對商業與科技領域充滿興趣，並探索科技如何推動各產業發展。為了提升自身技能，我利用下班時間自學 HTML5、CSS3、JavaScript、jQuery、Bootstrap 和 API 串接，並透過 Git 進行版本控制以方便打造互動性高且響應式的網頁。'
+ '除了專注於前端開發，我也積極學習後端技術，目前正深入研究 Node.js。同時，我正在探索更進階的前端框架如 React 和 Vue，希望精進全端開發能力，讓自己具備更全面的技術實力。')

  
        //經歷
show(1, 'experience', './圖片素材/article-experience.jpeg', '經歷',
'在國、高中時期，因家業需要人手協助，經常晚上需要去幫忙，讓我無法全心投入課業，這段經歷也讓我培養出責任感與解決問題的能力。即使在忙碌的環境中，我始終對電腦領域抱有熱忱，並且堅持挑戰自己，成功考取了 電腦軟體乙級證照，這張證照不僅代表我的努力有收穫，也讓我對軟體技術建立起初步的認識，成為我踏入前端開發領域的基礎。<br>'
 + '大學畢業後，也曾挑戰創業，經營自創品牌飲料店。雖然最終因為經營不善而結束營業，但這段經歷讓我學習到如何面對壓力、解決問題，並在挫折中找到成長的機會。在經營過程中，我也深刻體會到專業能力的重要性，有句俗話說【工欲善其事，必先利其器】，因此更加嚴格要求自己持續精進技術。')


        //未來期許
show(2, 'future', './圖片素材/article-future .jpg', '未來期許',
'未來，我希望成為專業的全端工程師，並持續精進技術，特別是在金融科技領域，如數位支付、智慧投資、自動化金融服務，並運用技術提升UX與系統效能。'
+ '如今金融科技正在改變傳統金融，例如透過 API 串接即時匯率、優化數位支付。這正是我希望投入的領域。我期許自己能夠快速融入團隊，與夥伴們打造創新金融科技，讓技術真正為金融服務創造價值！')
        // 小工具


    navigatorLi[3].onclick = () =>{
        let removeSection = document.querySelectorAll('section');  //刪除按過的section
        removeSection.forEach(section => section.remove())

        let removeTools = document.querySelectorAll('#toolInside');  //刪除按過的tools
        removeTools.forEach(tools => tools.remove())

        let tools = document.createElement('div');
        tools.id = 'toolInside';
        document.body.appendChild(tools);
        
        tools.innerHTML = 
        `
        <div class="outSide">

            <h1>即時換匯</h1>
            <input id="text" type="text" placeholder="請輸入金額">
                <select name="" id="from">
                    <option value="TWD">新台幣(TWD)</option>
                    <option value="USD">美元(USD)</option>
                    <option value="JPY">日幣(JPY)</option>
                    <option value="KRW">韓幣(KRW)</option>
                    <option value="CNY">人民幣(CNY)</option>
                    <option value="EUR">歐元(EUR)</option>
                </select>

        <div>兌換成</div>

                <select name="" id="to">
                    <option value="USD">美元(USD)</option>
                    <option value="JPY">日幣(JPY)</option>
                    <option value="KRW">韓幣(KRW)</option>
                    <option value="CNY">人民幣(CNY)</option>
                    <option value="EUR">歐元(EUR)</option>
                    <option value="TWD">新台幣(TWD)</option>

                </select>

                <button id="changeBtn">換匯</button>
        </div>
            <h2 id="show"></h2>
        `
        topPhoto.style.display = 'none';
        headerOutSide.style.display = 'none';
        tools.style.position = 'absolute';

        tools.style.opacity = '0';
        
        setInterval(() =>{
            tools.style.opacity = '1';
            tools.style.transition = 'opacity 1s'
        }, 200);
            // 及時換匯系統
            let changeBtn = document.getElementById('changeBtn');
            
            changeBtn.onclick = () =>{
                async function change() {
                    let text = document.getElementById('text').value;
                    let from = document.getElementById('from').value;
                    let to = document.getElementById('to').value;
                
                if (!text || isNaN(text)) {
                    alert('請輸入有效的數字');
                    return
                }
                    let apiKey = 'fe681d521e4cc1ab7831da41';
                    let apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${text}`;
                
                    try {
                        let response = await fetch(apiUrl);
                        let data = await response.json();
                                                
                        if (data.result === 'success') {
                                let conversion = data.conversion_result;
                                let conversionFloat = conversion.toFixed(1);
                           
                            alert(`${from} ${text} = ${to} ${conversionFloat}`);    
                            document.getElementById('show').innerText = `${from} ${text} = ${to} ${conversionFloat}`;
                        }
                        
                    } catch (error) {
                        alert('換匯失敗');
                        console.error(error);
                    }
                }
                change()
            }
        }
};