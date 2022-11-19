var arrayOfAccesories = [
    {
        id: 1,
        name: 'FRENCH PRESS',
        price: '$23.99',
        priceCurrent:23,
        image: '/Product-List-main/img/productList-img-21.png',
        link: '/Product-List-main/html/Detail_FrenchPress.html',
        type:2
    },
    {
        id: 2,
        name: 'Coffee Kettle',
        price: '$90.00',
        priceCurrent:90,
        image: '/Product-List-main/img/ProductList-img-6.png',
        link:'/Product-List-main/html/Detail_CoffeeKettle.html',
        type:1
    },
    {
        id: 3,
        name: 'Dispensing Tray',
        price: '$30.00',
        priceCurrent: 30,
        image: '/Product-List-main/img/ProductList-img-DespensingTray.png',
        link: '/Product-List-main/html/Detail_DispensingTray.html',
        type: 3
    }
]
var arrayOfBeanVarieties = [
    {
        id: 1,
        name: 'Brazil Coffee',
        price: '$35.00',
        priceCurrent: 35,
        image: '/Product-List-main/img/product-img-11.png',
        link: '/Product-List-main/html/Detail_BrazilCoffee.html',
        type: 3
    },
    {
        id: 2,
        name: 'Coffee Capsule',
        price: '$12.00',
        priceCurrent: 12,
        image: '/Product-List-main/img/productList-img-CoffeeCapsule.png',
        link: '/Product-List-main/html/Detail_CoffeeCapsule.html',
        type: 3
    }
]
var arrayOfCoffeeCup = [
    {
        id: 1,
        name: 'Mental Cup',
        price: '$23.00',
        priceCurrent: 23,
        image: '/Product-List-main/img/ProductList-img-MetalCup.png',
        link: '/Product-List-main/html/Detai_MeatlCup.html',
        type: 3
    },
    {
        id: 2,
        name: 'Ceramic Cup',
        price: '$37.00',
        priceCurrent: 37,
        image: '/Product-List-main/img/Productlist-img-CeramicCup.png',
        link: '/Product-List-main/html/Detail_CeramicCup.html',
        type: 3
    }
]
var arrayOfEspresso = [
    {
        id: 1,
        name: 'Espresso Machine',
        price: '$600.00',
        priceCurrent:600,
        image: '/Product-List-main/img/ProductList-img-7.png',
        link:'/Product-List-main/html/Detail_EspressoMachine.html',
        type:0
        },
    {
            id: 2,
            name: 'Filter handle',
            price: '$80.00',
            priceCurrent:80,
            image: '/Product-List-main/img/ProductList-img-9.png',
            link:'/Product-List-main/html/Detail_FilterHandle.html',
            type:3
    }
]
var arrayOfFresh = [
    {
        id: 1,
        name: 'ETHIOPIA COFFEE',
        price: '$15.99',
        priceCurrent:15,
        image: '/Product-List-main/img/productList-img-1.png',
        link:'/Product-List-main/html/Detail_ProductList.html',
        type:1
    },
    {
            id: 2,
            name: 'KENYA COFFEE',
            price: '$18.00',
            priceCurrent:18,
            image: '/Product-List-main/img/productList-img-3.png',
            link: '/Product-List-main/html/Detail_KenyaCoffee.html',
            type:3
    },
    {
        id: 3,
        name: 'Columbia Coffee',
        price: '$21.00',
        priceCurrent:21,
        image: '/Product-List-main/img/productList-img-5.png',
        link:'/Product-List-main/html/Detai_ColumbiaCoffee.html',
        type:4
    },
    {
        id: 4,
        name: 'Guatemala Coffee',
        price: '$25.00',
        priceCurrent:25,
        image: '/Product-List-main/img/product-img-8.png',
        link:'/Product-List-main/html/Detail_Guatemala.html',
        type:3
    },
    {
        id: 5,
        name: 'Indonesia Coffee',
        price: '$30.00',
        priceCurrent: 30,
        image: '/Product-List-main/img/product-img-10.png',
        link: '/Product-List-main/html/Detail_IndonesiaCoffee.html',
        type: 3
    }

]
var arrayOfItalian = [
    {
        id: 1,
        name: 'DOLCE GUSTO',
        price: '$12.00',
        priceCurrent:12,
        image: '/Product-List-main/img/backgroundCopy_1.png',
        link: '/Product-List-main/html/Detail_DolceGusto.html',
        type:4
        }
]
function RenderFirstAccessories()
   {
    var firstpage =arrayOfAccesories.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }

   function RenderFirstBeanVarieties()
   {
    var firstpage =arrayOfBeanVarieties.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
   function RenderFirstCoffeeCups()
   {
    var firstpage =arrayOfCoffeeCup.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
   function RenderFirstEspressoMachine()
   {
    var firstpage = arrayOfEspresso.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
   function RenderFirstFreshCoffee()
   {
    var firstpage =arrayOfFresh.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
   function RenderFirstItalianCoffee()
   {
    var firstpage =arrayOfItalian.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product1.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
