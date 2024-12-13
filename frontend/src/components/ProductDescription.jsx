const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          amet assumenda itaque fugiat dolorum vel magnam mollitia quia,
          voluptate distinctio excepturi. Totam voluptate autem libero, aliquam
          laboriosam quidem at dolor voluptatibus optio, velit, quos quam
          provident. Ad ullam fugiat animi, pariatur nemo nobis veniam at
          possimus, illo porro quod quas.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
