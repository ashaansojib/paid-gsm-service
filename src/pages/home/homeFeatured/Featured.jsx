import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="my-container py-6">
      <h2 className="text-2xl text-gray-800">Top Files</h2>
      <div className="grid grid-cols-3 justify-between gap-3 my-3">
        <div className="text-center bg-slate-200 rounded-lg p-2">
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
              Open Alliance Shield Galaxy Store 2022
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            Windows 10 Pro (2021) 64Bit Latest Iso File (GdsRom.Com)
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            MTK DRIVER BY GDSROM
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            Mi Model / Mi Product / Mi Version - Check Solution By GDS TM PUBLIC GROUP (FREE)
            </Link>
          </h3>
        </div>
        <div className="text-center bg-slate-200 rounded-lg p-2">
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            SAMSUNG A146B U2 A14 5G FRP UNLOCK FIRMWARE BY GDS TM PRO.rar
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            আপনি রিমুভ হলে পুনরায় কিভাবে একটিভ হবেন বিস্তারিত দেখুন - Remove GDS TM Members 2024
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            Samsung A125F U3 Root After Reboot Fix No Need DFT Pro File
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/">
            Tecno infinix All Model MDM Remove Full Class
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
