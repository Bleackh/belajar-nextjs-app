type DetailProductPage = { params: { slug: string[] } }

export default function DetailProductPage(props: DetailProductPage) {
    const { params } = props
    console.log(params);

    return (
        <div>
            <h1>{params.slug ? "Detail Product" : "List Product"}</h1>
            {params.slug && (
                <div>
                    <p>Category : {params.slug[0]}</p>
                    <p>Gender : {params.slug[1]}</p>
                    <p>ID : {params.slug[2]}</p>
                </div>
            )}
        </div>
    )
}