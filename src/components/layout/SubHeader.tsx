import React from "react";
import Container from "./Container";

import ContactItem from "./ContactItem";

export default function SubHeader() {
  return (
    <div className="bg-primary w-full lg:block hidden">
      <Container>
        <div className="flex items-center justify-between">
          <h6 className="text-xs text-gray-100 font-semibold">
            CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ PHÚ ĐOÀN
          </h6>
          <div className="flex justify-end items-center space-x-3">
            <ContactItem
              size="small"
              href="mailto:phudoanco@scgroup.com"
              icon="/assets/icon/x20_mail.svg"
              text="phudoanco@scgroup.com"
            />
            <ContactItem
              size="small"
              href="https://goo.gl/maps/6L8aaoeMEJ3KzsLh7"
              icon="/assets/icon/x20_place.svg"
              text="Bà Rịa - Vũng Tàu"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
