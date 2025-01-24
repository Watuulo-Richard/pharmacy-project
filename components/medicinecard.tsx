import Image from "next/image";

export function MedicineCard({medicineImage, medicineTitle, medicinePrice, medicineDescription}:{medicineImage:string, medicineTitle:string, medicinePrice:number, medicineDescription:string}) {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-xl border border-blue-200 rounded-lg w-full">
        <div className="relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border">
          <Image
            src={medicineImage}
            className="h-full w-full object-cover rounded-md"
            width={500}
            height={300}
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-slate-800 text-lg font-semibold">
              {medicineTitle}
            </p>
            <p className="text-blue-600 text-sm font-semibold">
                Regular price ${medicinePrice}
            </p>
          </div>
          <p className="text-slate-600 leading-normal font-light">
            {medicineDescription}
          </p>
          <button className="rounded-md w-full mt-6 bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }