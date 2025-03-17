const express=require('express');
const router=express.Router();

router.get('/', (req,res)=>{
    res.send('<h1>Coffe Shop API</h1>')
    console.log(JSON.stringify({
        "file": {
            "type": "-",
            "name": "tfbg-dropship_25-03-17_1742191474.csv",
            "size": 1028,
            "modifyTime": 1742210284000,
            "accessTime": 1742210284000,
            "rights": {
                "user": "rw",
                "group": "***",
                "other": "***"
            },
            "owner": 0,
            "group": 0,
            "longname": "-rw-******    1 -        -            1028 Mar 17 22:18 tfbg-dropship_25-03-17_1742191474.csv"
        },
        "rows": [
            {
                "delivery_region": "Sunshine Coast",
                "customer": "Paige Creedon",
                "street": "12 Gerald Ct",
                "postcode": "4510",
                "city": "Caboolture",
                "delivery_comment": "Front door",
                "delivery_date": "2025-03-21",
                "delivery_time": "08:00 - 18:00",
                "id_subscription": "5136806",
                "box_id": "AU59047387",
                "country": "AU",
                "region_handle": "sunshine-coast",
                "week": "2025-W12",
                "partner_sku_id": "SA2",
                "filename": "tfbg-dropship_25-03-17_1742191474.csv"
            },
            {
                "delivery_region": "Brisbane 1",
                "customer": "Jayde Gray",
                "street": "Unit 205 15 Chapel Street Lutwyche",
                "postcode": "4030",
                "city": "Brisbane",
                "delivery_comment": "Buzz moniter",
                "delivery_date": "2025-03-20",
                "delivery_time": "08:00 - 18:00",
                "id_subscription": "5136326",
                "box_id": "AU59047499",
                "country": "AU",
                "region_handle": "brisbane-1",
                "week": "2025-W12",
                "partner_sku_id": "SA2",
                "filename": "tfbg-dropship_25-03-17_1742191474.csv"
            },
            {
                "delivery_region": "Sydney 4",
                "customer": "Pamela Reynolds",
                "street": "10 Dalbertis St",
                "postcode": "2176",
                "city": "Abbotsbury",
                "delivery_comment": "Front door",
                "delivery_date": "2025-03-19",
                "delivery_time": "08:00 - 18:00",
                "id_subscription": "5135656",
                "box_id": "AU59047469",
                "country": "AU",
                "region_handle": "sydney-4",
                "week": "2025-W12",
                "partner_sku_id": "SA2",
                "filename": "tfbg-dropship_25-03-17_1742191474.csv"
            },
            {
                "delivery_region": "Melbourne 2",
                "customer": "Hayley Yousif",
                "street": "Unit 30, 20 Hyde Park Ave",
                "postcode": "3064",
                "city": "Craigieburn",
                "delivery_comment": "Front door",
                "delivery_date": "2025-03-20",
                "delivery_time": "08:00 - 18:00",
                "id_subscription": "5136579",
                "box_id": "AU59047600",
                "country": "AU",
                "region_handle": "melbourne-2",
                "week": "2025-W12",
                "partner_sku_id": "SA2",
                "filename": "tfbg-dropship_25-03-17_1742191474.csv"
            },
            {
                "delivery_region": "Toowoomba",
                "customer": "Brittany Carpenter",
                "street": "178 Baker St",
                "postcode": "4350",
                "city": "Darling Heights",
                "delivery_comment": "Front door",
                "delivery_date": "2025-03-21",
                "delivery_time": "08:00 - 18:00",
                "id_subscription": "5137285",
                "box_id": "AU59047456",
                "country": "AU",
                "region_handle": "toowoomba",
                "week": "2025-W12",
                "partner_sku_id": "SA2",
                "filename": "tfbg-dropship_25-03-17_1742191474.csv"
            },
            {
                "delivery_region": "Melbourne 2",
                "customer": "Matt Kidd",
                "street": "8 Mapleton Bvd",
                "postcode": "3338",
                "city": "Melton South",
                "delivery_comment": "Front door",
                "delivery_date": "2025-03-20",
                "delivery_time": "08:00 - 18:00",
                "id_subscription": "5136739",
                "box_id": "AU59047478",
                "country": "AU",
                "region_handle": "melbourne-2",
                "week": "2025-W12",
                "partner_sku_id": "SA4",
                "filename": "tfbg-dropship_25-03-17_1742191474.csv"
            }
        ],
        "list": [
            {
                "type": "-",
                "name": "tfbg-dropship_25-03-17_1742191474.csv",
                "size": 1028,
                "modifyTime": 1742210284000,
                "accessTime": 1742210284000,
                "rights": {
                    "user": "rw",
                    "group": "***",
                    "other": "***"
                },
                "owner": 0,
                "group": 0,
                "longname": "-rw-******    1 -        -            1028 Mar 17 22:18 tfbg-dropship_25-03-17_1742191474.csv"
            }
        ]
    }))
})

module.exports=router;