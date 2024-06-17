<div className="bg-gray6 text-shadow font-poppins flex flex-col items-start justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-80 md:w-[388px]">
  <div className="size-80 md:size-[388px]">
    <img className="w-full h-full object-cover" src={Img} />
  </div>
  <div className="flex flex-col items-start gap-3 p-8 pt-4">
    <span className="font-semibold text-2xl">Product</span>
    <span className="font-medium text-base">Luxury big sofa</span>
    <div>
      {item.isInSale ? (
        <p className="my-2">
          <span className="font-semibold text-xl text-shadow">
            Rp 20.000.000
          </span>{" "}
          <span className="ml-6 text-xl text-gray7 line-through">
            Rp 7.000.000
          </span>
        </p>
      ) : (
        <p className="font-semibold text-xl my-2 text-shadow">Rp 7.000.000</p>
      )}
    </div>
  </div>
</div>;
