import React from "react";

export default function ContactCol() {
  return (
    <>
      <h3 className="mt-5 mb-4">تواصل معنا</h3>
      <ul className="p-0">
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-location-dot"></i>
          <a
            href="https://maps.app.goo.gl/bK5zsGHd5RrBx4dR9"
            target="_blank"
            rel="noreferrer"
            className="m-0"
          >
            XXX - القاهرة
          </a>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-phone-volume"></i>
          <p className="m-0">
            الخط الساخن:
            <a href="tel:XXXXX" className="me-1">
              XXXXX
            </a>
          </p>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-phone-volume"></i>
          <p className="m-0">
            رقم الهاتف:
            <a href="tel:XXXXXXXXXX" className="me-1">
              XX/XXXXXXX/X
            </a>
          </p>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-solid fa-envelope"></i>
          <p className="m-0">
            البريد الالكتروني:
            <a href="mailto:info@X" className="me-1">
              info@X.com
            </a>
          </p>
        </li>
        <li className="d-flex gap-2 align-items-center mb-3">
          <i class="fa-brands fa-whatsapp"></i>
          <p className="m-0">
            رقم الواتس اب:
            <a
              href="http://wa.me/XXXXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              XXXXXXXXXXX
            </a>
          </p>
        </li>
      </ul>
    </>
  );
}
