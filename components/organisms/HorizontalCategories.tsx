import { FlatList } from "react-native"
import { CategoryBadge } from "../molecules/CategoryBadge"

interface HorizontalCategoriesProps{}

export const HorizontalCategories = (props: HorizontalCategoriesProps) => {

    const categoriesMock = [
        {
            illustration:"https://apps-draftbit-com.s3.amazonaws.com/apps/7EUtylEe/assets/5qlvgHkC9uwpfGb7VA_es",
            name:'Vegan',
        },
        {
            illustration:"https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/Meat.png",
            name:'Meat'
        },
        {
            illustration:"https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/Dessert.png",
            name:"Dessert"
        },
        {
            illustration:"https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/FastFood.png",
            name:"FastFood"
        }
    ];

    return (
        <>
            <FlatList
                data={categoriesMock}
                renderItem={({item}) => (
                    <CategoryBadge 
                        illustrationUri={item.illustration}
                        label={item.name}
                        onPress={() => {}}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}