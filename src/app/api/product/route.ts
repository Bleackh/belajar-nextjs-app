import { NextResponse } from "next/server";
const data = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 100000,
        images: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1b3cc0b-373f-41e5-a228-11b1e5dc550b/court-vision-low-shoes-bv8p57.png'
    },
    {
        id: 2,
        title: 'Sepatu Lama',
        price: 50000,
        images: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/air-jordan-1-low-shoes-6Q1tFM.png'
    }
];

export async function GET(request: NextResponse) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json(
                {
                    status: 200,
                    message: "Success",
                    data: detailProduct
                });
        }
        return NextResponse.json(
            {
                status: 404,
                message: "Not Found",
                data: {}
            });
    }

    return NextResponse.json({ status: 200, message: "Success", data });
}

