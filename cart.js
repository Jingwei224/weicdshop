let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: '安静',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM79wXoKjAFMyOmxOI6dQFm_VrvSYqxtzOw&s',
        price: 35
    },
    {
        id: 2,
        name: '退后',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlgYZYUW5xVZzvmUc5W-qAVdjxYfyBPuJ3w&s',
        price: 35
    },
    {
        id: 3,
        name: '半岛铁盒',
        image:'https://i.kfs.io/album/tw/19003,1v3/fit/500x500.jpg',
        price: 35
    },
    {
        id: 4,
        name: '想见你想见你想见你',
        image:'https://upload.wikimedia.org/wikipedia/zh/c/c0/Missyou3000.jpg',
        price: 28
    },
    {
        id: 5,
        name: '看见你的声音',
        image:'https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/77410981_1424540834370911_5281140148493352960_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJFv_xFfJmXPjaF-1HOUrIgRTuVj6hYWiBFO5WPqFhaCYLYk2LHJocEVpLBlDysBrYkbEbqykXO9G93f_3dSg3&_nc_ohc=LIeGle0mW6YQ7kNvgEt1_R8&_nc_zt=23&_nc_ht=scontent.fpen1-1.fna&_nc_gid=A-9SaIAhemLuHHcUfTa_TcH&oh=00_AYDub1qLVVwApbFjVJS_fFj63VT_qF3DAeRPWFBL6FSbAg&oe=676F912D',
        price: 30
    },
    {
        id: 6,
        name: '眼泪记得你',
        image:'https://upload.wikimedia.org/wikipedia/zh/7/78/Shi_Shi_Remembered.jpeg',
        price: 28
    },
    {
        id: 7,
        name: '星晴',
        image:'https://i.scdn.co/image/ab67616d0000b273ada4a1b5e704df71e9eed0d2',
        price: 34
    },
    {
        id: 8,
        name: '飘流教室',
        image:'https://mycdshop.com/cdn/shop/files/123ku_medium.jpg?v=1690440389',
        price: 25
    },
    {
        id: 9,
        name: '必杀技',
        image:'https://i.kfs.io/album/global/41439403,4v1/fit/500x500.jpg',
        price: 30
    },
    {
        id: 10,
        name: '紧急联络人',
        image:'https://i.kfs.io/album/global/264400523,0v1/fit/500x500.jpg',
        price: 29
    },
    {
        id: 11,
        name: '触碰不到的你',
        image:'https://i.kfs.io/album/global/148327401,0v1/fit/500x500.jpg',
        price: 26
    },
    {
        id: 12,
        name: '晴天',
        image:'https://i.kfs.io/album/global/23212,1v1/fit/500x500.jpg',
        price: 34
    },
    {
        id: 13,
        name: '有我呢',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6-QmwXiGh3hkfIH1s_hYaZddeRak8Ptc1A&s',
        price: 29
    },
    {
        id: 14,
        name: '藉口',
        image:'https://i.kfs.io/album/global/265477163,0v1/fit/500x500.jpg',
        price: 29
    },
    {
        id: 15,
        name: '太聪明',
        image:'https://i.kfs.io/album/global/44195,0v1/fit/500x500.jpg',
        price: 27
    },
    {
        id: 16,
        name: '如果可以',
        image:'https://i.kfs.io/album/global/142042170,2v1/fit/500x500.jpg',
        price: 26
    },
    {
        id: 17,
        name: '最初的记忆',
        image:'https://i.kfs.io/album/my/262938508,0v1/fit/500x500.jpg',
        price: 28
    },
    {
        id: 18,
        name: '拉过勾的',
        image:'https://i.scdn.co/image/ab67616d0000b27367c9524352aaae8a5eec7541',
        price: 25
    },
    {
        id: 19,
        name: '天若有情',
        image:'https://i.kfs.io/album/global/19620776,4v1/fit/500x500.jpg',
        price: 28
    },
    {
        id: 20,
        name: '普通朋友',
        image:'https://i.kfs.io/album/global/12459951,1v1/fit/500x500.jpg',
        price: 30
    },
    {
        id: 21,
        name: '天天',
        image:'https://i.kfs.io/album/global/34001787,5v1/fit/500x500.jpg',
        price: 30
    },
    {
        id: 22,
        name: 'My Only Girl',
        image:'https://cdns-images.dzcdn.net/images/cover/6fa342f8d5046239ba482090f949088d/1900x1900-000000-80-0-0.jpg',
        price: 30
    },
    {
        id: 23,
        name: '就是爱你',
        image:'https://i.kfs.io/album/global/12460210,0v1/fit/500x500.jpg',
        price: 30
    },
    {
        id: 24,
        name: '为你写的歌',
        image:'https://i.kfs.io/album/global/117840,1v1/fit/500x500.jpg',
        price: 35
    },
    {
        id: 25,
        name: '开不了口',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgV_1I6yZ02O8GE0R7GlyVO6VlYxr-5CKKsA&s',
        price: 35
    },
    {
        id: 26,
        name: '24K Magic',
        image:'https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5',
        price: 28
    },
    {
        id: 27,
        name: 'Uptown Funk',
        image:'https://i1.sndcdn.com/artworks-000500637585-bkne8w-t500x500.jpg',
        price: 33
    },
    {
        id: 28,
        name: 'Treasure',
        image:'https://i1.sndcdn.com/artworks-cnH0XFWI67ZFBZuU-Zob8WA-t500x500.jpg',
        price: 30
    },
    {
        id: 29,
        name: 'That`s What I Like',
        image:'https://upload.wikimedia.org/wikipedia/en/f/f4/That%27s_What_I_Like_Remixes.jpg',
        price: 32
    },
    {
        id: 30,
        name: 'Versace On The Floor',
        image:'https://images.genius.com/280396bda65db7a491f8bf8126e9bed2.1000x1000x1.jpg',
        price: 30
    },
    {
        id: 31,
        name: '黑白',
        image:'https://i.kfs.io/album/global/6653128,0v1/fit/500x500.jpg',
        price: 33
    },
    {
        id: 32,
        name: '慢慢',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaqCJuIuTYTjUBGcpIuC9BPOSwFujZIC7dw&s',
        price: 29
    },
    {
        id: 33,
        name: '爱如潮水',
        image:'https://c-fa.cdn.smule.com/rs-s23/arr/b1/34/9fd178d2-6cfd-460c-8eed-85009f6bd2f9.jpg',
        price: 27
    },
    {
        id: 34,
        name: 'Come Around Me',
        image:'https://images.genius.com/da347147c8602f48b15d3832115f172a.1000x1000x1.png',
        price: 35
    },
    {
        id: 35,
        name: '说好的幸福呢',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFRI2ih7zPnc8aRZ-gN9Yv5aoXpYGUonwlQ&s',
        price: 38
    },
    {
        id: 36,
        name: 'If You',
        image:'https://i1.sndcdn.com/artworks-000125052198-t40gs7-t500x500.jpg',
        price: 29
    },
    {
        id: 37,
        name: '爱在西元前',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2UkyTKfkUxD26peyMFuk9wdPbNXeMo2g_Q&s',
        price: 36
    },
    {
        id: 38,
        name: '你听得到',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnmYSxXPGFFa9tXQcSnYPyL86Kev_yvzSeg&s',
        price: 24
    },
    {
        id: 39,
        name: '才二十三',
        image:'https://i.kfs.io/album/global/273399348,2v1/fit/500x500.jpg',
        price: 36
    },
    {
        id: 40,
        name: '青春要用几行诗来写',
        image:'https://i.kfs.io/album/global/270550943,1v1/fit/500x500.jpg',
        price: 29
    },
    {
        id: 41,
        name: '不能说的秘密',
        image:'https://i.scdn.co/image/ab67616d0000b2737df1203d998ff3b40a139a6c',
        price: 39
    },
    {
        id: 42,
        name: '罗生门',
        image:'https://i.kfs.io/album/global/263116582,0v1/fit/500x500.jpg',
        price: 32
    },
    {
        id: 43,
        name: '最长的电影',
        image:'https://i.kfs.io/album/global/265477088,0v1/fit/500x500.jpg',
        price: 36
    },
    {
        id: 44,
        name: '人生起起落落落落落',
        image:'https://i.kfs.io/album/global/197262939,4v1/fit/500x500.jpg',
        price: 36
    },
    {
        id: 45,
        name: 'WMXGHZYSQN',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/51/1f/c2/511fc202-6d86-25cb-82b0-4f3e900271fa/cover.jpg/600x600bf-60.jpg',
        price: 35
    },
    {
        id: 46,
        name: '友谊长存',
        image:'https://i.kfs.io/album/global/268506756,1v1/fit/500x500.jpg',
        price: 36
    },
    {
        id: 47,
        name: '能遇见就很不错了',
        image:'https://i.kfs.io/album/global/271774832,1v1/fit/500x500.jpg',
        price: 36
    },
    {
        id: 48,
        name: '越难越爱',
        image:'https://i.kfs.io/album/global/5206958,0v1/fit/500x500.jpg',
        price: 37
    },
    {
        id: 49,
        name: '有天会再相见',
        image:'https://i.scdn.co/image/ab67616d0000b2735d5f922eee310f30c01687d4',
        price: 38
    },
    {
        id: 50,
        name: '凡人不懂爱',
        image:'https://i.kfs.io/album/global/72926962,0v1/fit/500x500.jpg',
        price: 40
    },
    {
        id: 51,
        name: 'Ever-Forever',
        image:'https://i.scdn.co/image/ab67616d0000b273f40113d5be5900c481981041',
        price: 45
    },
    {
        id: 52,
        name: 'I Like You The Most',
        image:'https://images.genius.com/1c575a8d63a57b3d1a91877fb82d88aa.1000x1000x1.jpg',
        price: 39
    },
    {
        id: 53,
        name: '恋爱ing',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWNa4pZQtgJLbDoEi0bICZeIO_AR8LLPjDg&s',
        price: 43
    },
    {
        id: 54,
        name: '私奔到月球',
        image:'https://i.kfs.io/album/global/90346,0v1/fit/500x500.jpg',
        price: 46
    },
    {
        id: 55,
        name: '离开地球表面',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhwp3tFEE23XWwv5ycKN-Urdw0VUpHrP7vw&s',
        price: 48
    },
    {
        id: 56,
        name: '过季短袖',
        image:'https://m.media-amazon.com/images/I/51YsEX6ryjL._UXNaN_FMjpg_QL85_.jpg',
        price: 29
    },
    {
        id: 57,
        name: '爱爱爱',
        image:'https://upload.wikimedia.org/wikipedia/zh/2/26/%E6%96%B9%E5%A4%A7%E5%90%8C_%E6%9C%AA%E4%BE%86_Wonderland.jpg',
        price: 39
    },
    {
        id: 58,
        name: '简单爱',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOpXy1hzeTelpAolAg0vsxdb2JjMwIWis3Q&s',
        price: 50
    },
    {
        id: 59,
        name: '干杯',
        image:'https://i.kfs.io/album/global/310226,0v1/fit/500x500.jpg',
        price: 46
    },
    {
        id: 60,
        name: '搁浅',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD2qnySiZQkXrj8Kz-tSNg0JiDc_kntUNDQ&s',
        price: 50
    },
];


let listCarts = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="${value.image}"/>
           <div class="title">${value.name}</div>
           <div class="price">RM ${value.price.toLocaleString()}</div>
           <button onclick="addtoCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
}
reloadCart();

function addtoCart(key) {
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }else{
        listCarts[key].quantity++;
    }
    reloadCart();
}

function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price * value.quantity;
        count = count + value.quantity;

        if(value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                 <img src="${value.image}"/>
                 <div>${value.name}</div>
                 <div>RM ${value.price.toLocaleString()}</div>
             <div>
                     <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                     <div class="count">${value.quantity}</div>
                     <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
                 </div>
            `;
            listCart.appendChild(newDiv)
        }
    })
    total.innerText = `RM ${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}




function changeQuantity(key, quantity) {
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        }
    reloadCart();
}

function updateImage(productId,newImageUrl){
    const product = products.find(p => p.id === productId);
    if(product){
        product.image = newImageUrl;
        initApp();
    }
}




updateImage(1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM79wXoKjAFMyOmxOI6dQFm_VrvSYqxtzOw&s')