import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import ContactItem from "./ContactItem";

export default function Footer() {
  return (
    <div className="bg-primary w-full  py-14 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-x-14 gap-x-10 gap-y-10">
          <div className="col-span-2 space-y-5">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/icon/x35_logo_light.svg"
                width={36}
                height={34}
              />
              <h2 className="font-bold text-base leading-snug">
                CÔNG TY TNHH THƯƠNG MẠI <br /> DỊCH VỤ PHÚ ĐOÀN
              </h2>
            </div>
            <ContactItem
              href="/"
              icon="/assets/icon/x20_place.svg"
              text="Trụ sở: Tổ 16, KP. Mỹ Thạnh, Phường Mỹ Xuân, Thị Xã Phú Mỹ, Tỉnh Bà Rịa-Vũng tàu."
            />
            <ContactItem
              size="large"
              href="/"
              icon="/assets/icon/x20_call.svg"
              text="Số điện thoại: 0909.191.494"
            />
            <ContactItem
              href="/"
              icon="/assets/icon/x20_mail.svg"
              text="Email: phudoanco@scgroup.com"
            />
            <div>
              <Image
                src="/assets/icon/x150_published.png"
                width={153}
                height={57}
              />
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase text-sm font-bold">GIỚI THIỆU</h5>
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
          </div>
          <div className="space-y-5">
            <h5 className="uppercase text-sm font-bold">GIỚI THIỆU</h5>
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
          </div>
          <div className="space-y-5">
            <h5 className="uppercase text-sm font-bold">GIỚI THIỆU</h5>
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
            <ContactItem href="/" text="Về chúng tôi" />
          </div>
        </div>
        <div className="font-medium text-sm mt-14">
          Copyright: © PHU DOANNO TRADING SERVICES CO., LTD. All rights
          reserved.
        </div>
      </Container>
    </div>
  );
}
