//Search
var arrayOfProduct = [
    {
        id: 1,
        name: 'Indonesia Coffee',
        price: '$30.00',
        priceCurrent: 30,
        image: '/Product-List-main/img/product-img-10.png',
        link: './Detail_IndonesiaCoffee.html',
        type: 3
    },
    {
        id: 2,
        name: 'Brazil Coffee',
        price: '$35.00',
        priceCurrent: 35,
        image: '/Product-List-main/img/product-img-11.png',
        link: './Detail_BrazilCoffee.html',
        type: 3
    },
    {
        id: 3,
        name: 'Mental Cup',
        price: '$23.00',
        priceCurrent: 23,
        image: '/Product-List-main/img/ProductList-img-MetalCup.png',
        link: './Detai_MeatlCup.html',
        type: 3
    },
    {
        id: 4,
        name: 'Dispensing Tray',
        price: '$30.00',
        priceCurrent: 30,
        image: '/Product-List-main/img/ProductList-img-DespensingTray.png',
        link: './Detail_DispensingTray.html',
        type: 3
    },
    {
        id: 5,
        name: 'Measuring Coffee',
        price: '$16.00',
        priceCurrent: 16,
        image: '/Product-List-main/img/ProductList-img-MeasuringCup.png',
        link: './Detail_MeasuringCup.html',
        type: 3
    },
    {
        id: 6,
        name: 'Ceramic Cup',
        price: '$37.00',
        priceCurrent: 37,
        image: '/Product-List-main/img/Productlist-img-CeramicCup.png',
        link: './Detail_CeramicCup.html',
        type: 3
    },
    {
        id: 7,
        name: 'Coffee Capsule',
        price: '$12.00',
        priceCurrent: 12,
        image: '/Product-List-main/img/productList-img-CoffeeCapsule.png',
        link: './Detail_CoffeeCapsule.html',
        type: 3
    }
    ]
    //Lấy những id của product có tên trùng với tên nhập vào ô input
    var arrId = [];
    var inputvalue = document.querySelector('.search__input');
    var BtnSearch = document.querySelector('.price-filter');
    var productList = document.querySelector('.main-content');
    var valueRadio;
    var valueProduct;
    //Kiểm tra product nào có chữ cái trùng với sản phẩm trong object
    function CheckProduct()
    {
        if(inputvalue.value == '')
        {
            arrId = [1,2,3,4,5,6,7,8,9]
        }
        else
        {
            arrayOfProduct.forEach(function(item)
            {
                if(item.name.toUpperCase().indexOf(inputvalue.value.toUpperCase()) > -1 )
                {
                    arrId.push(item.id)
                }
            })
        }
        checkOptionPrice(arrId,valueRadio,arrayOfProduct);
        checkOptionTypes(arrId,valueProduct,arrayOfProduct);
        console.log(arrId)
    }
    function checkOptionTypes(arr,optionType,object)
    {
    
        var idWrong =[];
        if(optionType == 1)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 1)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 2)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 2)
                {
                    
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 3)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 3)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 4)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != 4)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        else
            return;
        
    }
    function checkOptionPrice(arr,optionType,object)
    {
    
        var idWrong =[];
        if(optionType == 1)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent > 50)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 2)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent <= 50 || object[item-1].priceCurrent > 100)
                {
                    
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        if(optionType == 3)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent  <= 100)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        else
            return;
        
    }
    //dùng để reset lại mảng id
    function clearArr(arrId)
    {
        arrId.splice(0,arrId.length)
    }
   //Nhấp nút filter thì bắt đầu render ra
    BtnSearch.onclick = () => {
       //reset lại vòng lặp mỗi lần click
        clearArr(arrId);
        CheckProduct();
       var htmls=[];
       var value;
       if(arrId.length == 0)
       {
            productList.innerHTML = `<div class="col-lg-12 no-find"> Couldn't find your product </div>`
       }
       else
       {
       arrId.forEach((item)=>
       {
            arrayOfProduct.forEach((product)=>{
               
                if(item == product.id)
                {
                    
                    value =
                    `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a href="${product.link}" class="body__product-img--modal-link">
                                <div class="body__product-button--modal">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product.name}</h2>
                        <h3 class="body__product-price">${product.price}</h3>
                    </div>
                </div>
               
                    `
                    htmls.push(value)
                }
            })
       })
        productList.innerHTML = htmls.join('')
    }

    }

    //hàm để render lại sản phẩm ban đầu
   function RenderFirst()
   {
    var firstpage =arrayOfProduct.map(function(product1)
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
   
    //clear option
    var option = document.querySelectorAll('.checkbox');
    var option_product = document.querySelectorAll('.phanloai');
    ClearOption(option,option_product);
    function ClearOption(option,option_product)
    {
        
        for(let i=0;i<option.length;i++)
            option[i].checked = false;
        for(let i=0;i<option_product.length;i++)
            option_product[i].checked = false;
        inputvalue.value='';
        RenderFirst();
    }
    function getOptionPrice()
    {
        
        for(let i=0;i<option.length;i++)
        {
        option[i].onclick = ()=>
        {
           valueRadio = parseInt(option[i].value);
        }
        }
    }
    function getOptionTypes()
    {
        
        for(let i=0;i<option_product.length;i++)
        {
        option_product[i].onclick = ()=>
        {
            valueProduct = parseInt(option_product[i].value);
        }
        }
    }
    
    
    getOptionPrice();
    getOptionTypes();