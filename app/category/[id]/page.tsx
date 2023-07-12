import Image from "next/image";

type Params = {
  id: string;
};

type Products = {
  id: number;
  name: string;
  image: string;
};

const Data = [
  {
    id: 1,
    name: "Macbook",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
  },
  {
    id: 2,
    name: "Iphone",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660689596976",
  },
];

export default function Page({ params }: { params: Params }) {
  return (
    <div>
      visiting : {params.id}
      <div className="mt-5">
        {Data.map((data: Products) => (
          <div key={data.id}>
            <p>{data.name}</p>
            <div>
              <Image
                className="rounded-md"
                width={320}
                height={180}
                src={data.image}
                alt=""
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
