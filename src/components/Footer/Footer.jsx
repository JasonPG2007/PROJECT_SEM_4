import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/LOGO2.png";

// Import icon react
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-darkGray text-white border-t border-primary py-12 px-8">
      <div className="flex flex-wrap items-center justify-between text-start mb-8">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Link to={"/"} className="block">
            <img className="max-w-[120px]" src={Logo} alt="Logo" />
          </Link>
          <p className="font-bold mt-4">
            Nơi chia sẻ sách điện tử dành riêng cho bạn
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="*" className="text-xl text-gray-400 hover:text-primary">
            <BsFacebook />
          </a>
          <a href="*" className="text-xl text-gray-400 hover:text-primary">
            <AiFillInstagram />
          </a>
          <a href="*" className="text-xl text-gray-400 hover:text-primary">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
      <div className="pt-8 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">Chúng tôi</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            GIỚI THIỆU
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Khoản
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Chính sách bảo mật
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">Thêm thông tin</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Cơ hội đầu tư
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Tuyển dụng
          </a>
          <a href="/contact" className="text-gray-400 hover:text-primary pb-2">
            Liên hệ
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Dịch vụ xuất bản sách
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">Thông tin hữu ích</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Thỏa thuận sử dụng dịch vụ
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Quan tâm
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Quy định về quyền riêng tư
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">Tin tức</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Tin tức dịch vụ
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Đánh giá sách
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Lịch phát hành
          </a>
        </div>
      </div>
    </div>
  );
}
