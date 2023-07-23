var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-14-128gb-mau-tim-1-didongviet.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        raiting: 4
    },
    {
        id: 2,
        name: 'Oppo A37',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-14-128gb-mau-tim-1-didongviet.jpg',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 500,
        inventory: 10,
        raiting: 3
    },
    {
        id: 3,
        name: 'MI',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-14-128gb-mau-tim-1-didongviet.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        raiting: 5
    }
]
const product = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}
export default product;