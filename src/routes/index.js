const express = require("express")
const router = express.Router()

const CouponRoutes = require("./Coupons")
const UserRoutes = require("./User")

router.use('/coupons',CouponRoutes)
router.use('/user',UserRoutes)

module.exports=router