import useMenu from "./useMenu";

const useMenuCategory =()=>{
    const {menu, loading} = useMenu()
    const offereds = menu?.filter(item => item.category ==='offered')
    const desserts = menu?.filter(item => item.category ==='dessert')
    const pizza = menu?.filter(item => item.category ==='pizza')
    const salad = menu?.filter(item => item.category ==='salad')
    const soups = menu?.filter(item => item.category ==='soup')
    const drinks = menu?.filter(item => item.category ==='drinks')
    const popular = menu?.filter(item => item.category ==='popular')
    return {offereds, desserts, pizza, salad, soups,drinks,popular, loading}
}

export default useMenuCategory;