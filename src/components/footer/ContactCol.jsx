import React from "react";

export default function ContactCol() {
  return (
    <>
      <h3 className="mb-5">تواصل معنا</h3>
      <ul className="p-0">
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-location-dot"></i>
          <a href="" className="m-0">
            محور السادات - البنفسج 5 - فيلا رقم 74 - التجمع الاول - القاهرة
          </a>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-phone-volume"></i>
          <a href="" className="m-0">
            الخط الساخن: 16543
          </a>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-phone-volume"></i>
          <a href="" className="m-0">
            رقم الهاتف: 02/2307752/3
          </a>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-envelope"></i>
          <a href="" className="m-0">
            البريد الالكتروني: info@bib-eg.com
          </a>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-brands fa-whatsapp"></i>
          <a href="" className="m-0">
            رقم الواتس اب: 01004222287
          </a>
        </li>
      </ul>
    </>
  );
}
