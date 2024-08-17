import React from "react";

export default function ContactCol() {
  return (
    <>
      <h3 className="mt-5 mb-4">تواصل معنا</h3>
      <ul className="p-0">
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-location-dot"></i>
          <a href="" className="m-0">
            محور السادات - البنفسج 5 - فيلا رقم 74 - التجمع الاول - القاهرة
          </a>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-phone-volume"></i>
          <p className="m-0">
            الخط الساخن:
            <a href="tel:16543" className="me-1">
              16543
            </a>
          </p>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-phone-volume"></i>
          <p className="m-0">
            رقم الهاتف:
            <a href="tel:0223077523" className="me-1">
              02/2307752/3
            </a>
          </p>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-envelope"></i>
          <p className="m-0">
            البريد الالكتروني:
            <a href="mailto:info@bib-eg" className="me-1">
              info@bib-eg.com
            </a>
          </p>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-brands fa-whatsapp"></i>
          <p className="m-0">
            رقم الواتس اب:
            <a
              href="http://wa.me/01004222287"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              01004222287
            </a>
          </p>
        </li>
      </ul>
    </>
  );
}
