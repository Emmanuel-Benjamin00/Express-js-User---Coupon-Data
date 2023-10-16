const coupons = [
    {
        name: "October Offer",
        code: "XBQ-FGY",
        startDate: "2023-10-12",
        endDate: "2023-10-20",
        offerValue: 100,
        discount: 10,
        status: true
    },
    {
        name: "World Childrens Day",
        code: "CHILD14",
        startDate: "2023-11-14",
        endDate: "2023-11-14",
        offerValue: 200,
        discount: 20,
        status: true
    }
]


const getAllCoupons = (req, res) => {
    res.send([{
        message: "Data Fetched Successful",
        count: coupons.length,
        coupons
    }])
}

const getCouponsByID = (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    if (id !== NaN && id < coupons.length) {
        res.send([
            {
                message: "Data Fetched Successful",
                count: coupons.length,
                coupons: coupons[id]
            }
        ])
    } else {
        res.send({
            message: "Invalid ID"
        })
    }
}

const createCoupon =  (req, res) => {
    let data = req.body
    let filteredData = coupons.filter((e) => e.code === data.code)
    if (filteredData.length === 0) {
        coupons.push(data)
        res.status(201).send({
            message: "Coupons created successfully"
        })
    }
    else {
        res.status(400).send({
            message: "Coupons Code already exists"
        })
    }
}

const editCoupon =  (req, res) => {
    const id = Number(req.params.id)
    if (id !== NaN && id < coupons.length) {
        coupons.splice(id, 1, req.body)
        res.status(201).send({
            message: "Coupons edited successfully"
        })
    }
    else {
        res.status(400).send({
            message: "Invalid ID"
        })
    }
}

const deleteCoupon = (req, res) => {
    const id = Number(req.params.id)
    if (id !== NaN && id < coupons.length) {
        coupons.splice(id, 1)
        res.status(201).send({
            message: "Coupons deleted successfully"
        })
    }
    else {
        res.status(400).send({
            message: "Invalid ID"
        })
    }
}

module.exports = {
    getAllCoupons,
    getCouponsByID,
    createCoupon,
    editCoupon,
    deleteCoupon
}