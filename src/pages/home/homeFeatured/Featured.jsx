import React from "react";
import { Link } from "react-router-dom";
import { FaBolt } from 'react-icons/fa6'
const Featured = () => {
  return (
    <div className="my-container py-6 md:px-0 px-2">
      <h2 className="text-2xl text-gray-800 flex items-center gap-2">
        <FaBolt className="text-red-500 animate-bounce" />
        Top Files
        </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-3 my-3">
        <div className="text-center bg-slate-200 rounded-lg p-2">
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
              Open Alliance Shield Galaxy Store 2022
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            Windows 10 Pro (2021) 64Bit Latest Iso File (GdsRom.Com)
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            MTK DRIVER BY GDSROM
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            Mi Model / Mi Product / Mi Version - Check Solution By GDS TM PUBLIC GROUP (FREE)
            </Link>
          </h3>
        </div>
        <div className="text-center bg-slate-200 rounded-lg p-2">
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            SAMSUNG A146B U2 A14 5G FRP UNLOCK FIRMWARE BY GDS TM PRO.rar
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            আপনি রিমুভ হলে পুনরায় কিভাবে একটিভ হবেন বিস্তারিত দেখুন - Remove GDS TM Members 2024
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            Samsung A125F U3 Root After Reboot Fix No Need DFT Pro File
            </Link>
          </h3>
          <h3 className="py-2 border-b border-dotted border-sky-600">
            <Link className="hover:underline" to="/blogs">
            Tecno infinix All Model MDM Remove Full Class
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
