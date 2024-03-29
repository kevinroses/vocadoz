import MainApi from '../../../api/MainApi'

export const RestaurantsApi = {
    restaurants: ({ type, offset, page_limit, filterType, searchKey,filterByData,priceAndRating }) => {
        return MainApi.get(
            `/api/v1/restaurants/get-restaurants/all?filter_data=${filterType}&name=${searchKey}&offset=${offset}&limit=${page_limit}&veg=${
                filterByData?.veg ? 1 : 0
            }&non_veg=${filterByData?.non_veg ? 1 : 0}&delivery=${filterByData?.delivery?1:0}&takeaway=${filterByData?.take_away?1:0}&avg_rating=${priceAndRating?.rating===null? 0:priceAndRating?.rating}`
        )
    },
    popularRestaurants: () => {
        return MainApi.get('/api/v1/restaurants/popular')
    },
    latestRestaurants: () => {
        return MainApi.get('/api/v1/restaurants/latest')
    },
    restaurantDetails: (id) => {
        if (id) {
            return MainApi.get(`/api/v1/restaurants/details/${id}`)
        }
    },
    typeWiseRestaurantList: ({ restaurantType, type }) => {
        return MainApi.get(`/api/v1/restaurants/${restaurantType}?type=${type}`)
    },
    addFavorite: (restaurant_id) => {
        return MainApi.post(
            `/api/v1/customer/wish-list/add?restaurant_id=${restaurant_id}`
        )
    },
}
