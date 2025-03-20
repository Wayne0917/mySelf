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
        })
    }
    
    
        // 主內容
    {               
    let topPhoto = document.querySelector('.topPhoto');
    let headerOutSide = document.querySelector('.headerOutSide');
    let navigatorLi = document.getElementsByClassName('navigatorLi')
    
    function show(index, sectionId, imgSrc, h2Text, pText) {
        navigatorLi[index].onclick = () => {
            let clearSections = document.querySelectorAll('section');
            clearSections.forEach(section => section.remove());
    
                let section = document.createElement('section');
                section.id = sectionId;
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
                        
                    // 設定初始位置（從下方滑入）
                section.style.top = '100%';
                section.style.transform = 'translateY(40%)';
                section.style.transition = 'all 2s ease'; 
                
                    // 延遲一點時間再移動到置中
                    setTimeout(() => {
                        section.style.top = '30%';
                        section.style.transform = 'translate(6%,18%)';
                    }, 100);
        }
    }
            // 關於我
    show(0, 'mySelf', './圖片素材/article-myself.jpg', '關於我',
    '我是張偉倫，來自台中，從高中開始就對商、科技業類有興趣，至今仍持續關注財經動態，探索科技如何推動各產業發展。'
    + '我特別熱衷於全端技術，並透過自學 HTML5、CSS3、JS、jQuery、Bootstrap 及 API 串接，打造互動性高及響應式的網頁。同時，我也開始熟悉 Git 進行版本控制，並持續學習更進階的前端框架，如 React 與 Vue，目標是拓展全端開發的能力。')
    
      
    //經歷
    show(1, 'experience', './圖片素材/article-experience.jpeg', '經歷',
    '在國、高中時期，因家業需要人手協助，經常晚上需要去幫忙，讓我無法全心投入課業，這段經歷也讓我培養出責任感與解決問題的能力。即使在忙碌的環境中，我始終對電腦領域抱有熱忱，並且堅持挑戰自己，成功考取了 電腦軟體乙級證照，這張證照不僅代表我的努力有收穫，也讓我對軟體技術建立起初步的認識，成為我踏入前端開發領域的基礎。'
     + '大學畢業後，也曾挑戰創業，經營自創品牌飲料店。雖然最終因為經營不善而結束營業，但這段經歷讓我學習到如何面對壓力、解決問題，並在挫折中找到成長的機會。在經營過程中，我也深刻體會到專業能力的重要性，有句俗話說【工欲善其事，必先利其器】，因此更加嚴格要求自己持續精進技術。')
    
    
    //未來期許
    show(2, 'future', './圖片素材/article-future .jpg', '未來期許',
    '未來，我希望成為專業的全端工程師，並持續精進技術，特別是在金融科技領域，如數位支付、智慧投資、自動化金融服務，並運用技術提升UX與系統效能。'
    + '如今金融科技正在改變傳統金融，例如透過 API 串接即時匯率、優化數位支付。這正是我希望投入的領域。我期許自己能夠快速融入團隊，與夥伴們打造創新金融科技，讓技術真正為金融服務創造價值！')
    };