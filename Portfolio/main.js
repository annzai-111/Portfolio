let data= [{
    img: 'aaa.jpg',
    des: '説明文'
},
{
    img: 'bbb.jpg',
    des: '説明文'
},
{
    img: 'ccc.jpg',
    des: '説明文'
}]
const works = document.getElementById('works');

date.forEach(el=>{
    let img = document.createElement('img');
    img.src = el.img;
    
    let p = document.createElement('p');
    p.textContent = el.das;
    let div = document.createRlement('div');
    div.append(img,p);
    works.append(div);
});