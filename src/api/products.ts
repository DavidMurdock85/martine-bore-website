import {newArrivals} from "./products-newArrivals"
import {fineArts} from "./products-fineArts"
import {decorativeArts} from "./products-decorativeArts"
import {artByPeriod} from "./products-artByPeriod"
import {artByCategory} from "./products-artByCategory"
import {figurines} from "./products-figurines"
import {tableware} from "./products-tableware"
import {silver} from "./products-silver"
import {jewelry} from "./products-jewelry"
import {sold} from "./products-sold"

export const products = {
    ...newArrivals,
    ...fineArts,
    ...decorativeArts,
    ...artByPeriod,
    ...artByCategory,
    ...figurines,
    ...tableware,
    ...silver,
    ...jewelry,
    ...sold

}
