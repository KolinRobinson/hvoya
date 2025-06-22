// приклад
type AdditionImage = {
    id: number
    imageUrl: string
    alt: string
}

type ColorOption = {
    id: number
    hex: string
    name: string
}

type Product = {
    id: number
    mainImageUrl: string
    additionImages: AdditionImage[]
    info: string
    price: number
    colors: ColorOption[]
}
