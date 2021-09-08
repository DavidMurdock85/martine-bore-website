import {newArrivals} from "./products-newArrivals"
import {fineArts} from "./products-fineArts"
import {decorativeArts} from "./products-decorativeArts"
import {artByPeriod} from "./products-artByPeriod"
import {artByRegion} from "./products-artByRegion"
import {artByMaker} from "./products-artByMaker"
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
    ...artByRegion,
    ...artByMaker,
    ...figurines,
    ...tableware,
    ...silver,
    ...jewelry,
    ...sold

}
