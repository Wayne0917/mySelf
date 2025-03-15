    // 圖片輪播
{
    let headerInSide = document.getElementById('headerInSide');
    let headerImg = document.querySelectorAll('#headerImg');
    let index = 0;
    
    headerInSide.style.width = 1200 * headerImg.length + 'px';
    
    setInterval(() =>{
        
        headerInSide.style.opacity = 0;
        headerInSide.style.transition = 'left 0.5 s'
        
        setTimeout(()=>{
            index++;
            
            if (index >= headerImg.length) {
                index = 0;
            }
    
            headerInSide.style.left = -1200 * index + 'px';
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


    //API 請求
{
let box = document.querySelector('#box')
let btn = document.querySelector('#btn')

btn.addEventListener('click', async function weather() {
    try {
        let get = await axios.get('https://openweathermap.org/city/1668284')
        let data = get.data;
        console.log(data);
        
        box.innerHTML = JSON.stringify(data)
    } catch (error) {
        console.error('載入失敗');
        box.innerHTML = '無法獲取天氣資料';
    }
})

}