'use client'

import React from 'react'
import { MessageCircle, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <div className="static bottom-0 w-full bg-[#F4F4F4] flex items-center">
      <div className="w-full px-[20px] py-[20px] flex flex-col items-center gap-[40px]">
        <div className="w-full flex flex-col gap-[32px]">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center">
              <svg fill="none" height="24" viewBox="0 0 131 37" width="47" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0470588 32.2647L17.1294 8.26471H0V2.42941H25.9765V6.66471L8.94118 30.6647H26.0235V36.5H0.0470588V32.2647Z" fill="#0D1322" />
                <path d="M30.3774 2.42941H53.248V8.26471H37.4362V16.5471H52.0715V22.3824H37.4362V30.6647H53.2951V36.5H30.3774V2.42941Z" fill="#0D1322" />
                <path d="M86.2136 36.5H80.096L65.1313 14.8529H64.8489V36.5H57.7901V2.42941H64.0019L78.8725 24.0765H79.2019V2.42941H86.2136V36.5Z" fill="#0D1322" />
                <path d="M90.9911 36.5V2.42941H103.132C106.536 2.42941 109.477 3.11176 111.956 4.47647C114.45 5.82549 116.356 7.77843 117.673 10.3353C118.991 12.8765 119.65 15.9039 119.65 19.4176C119.65 22.9471 118.983 25.998 117.65 28.5706C116.332 31.1275 114.418 33.0882 111.909 34.4529C109.415 35.8176 106.442 36.5 102.991 36.5H90.9911ZM102.709 30.4294C106.003 30.4294 108.473 29.5353 110.12 27.7471C111.768 25.9588 112.591 23.1824 112.591 19.4176C112.591 15.6843 111.768 12.9314 110.12 11.1588C108.489 9.38627 106.034 8.5 102.756 8.5H98.0499V30.4294H102.709Z" fill="#0D1322" />
                <path d="M123.674 10.9471H130.639V36.5H123.674V10.9471ZM127.157 7.60588C126.466 7.60588 125.831 7.44902 125.251 7.13529C124.67 6.80588 124.208 6.37451 123.863 5.84118C123.517 5.29216 123.345 4.70392 123.345 4.07647C123.345 3.43333 123.517 2.83726 123.863 2.28824C124.208 1.73922 124.67 1.30784 125.251 0.994118C125.831 0.664706 126.466 0.5 127.157 0.5C127.831 0.5 128.459 0.664706 129.039 0.994118C129.619 1.30784 130.074 1.73922 130.404 2.28824C130.749 2.83726 130.921 3.43333 130.921 4.07647C130.921 4.70392 130.749 5.29216 130.404 5.84118C130.074 6.37451 129.619 6.80588 129.039 7.13529C128.459 7.44902 127.831 7.60588 127.157 7.60588Z" fill="#0D1322" />
              </svg>
            </div>
            <div className="flex gap-[12px]">
              <div className="w-[36px] h-[36px] bg-[#E0E0E0] rounded-full flex justify-center items-center cursor-pointer text-[#1F1F1F]">
                <MessageCircle size={18} />
              </div>
              <div className="w-[36px] h-[36px] bg-[#E0E0E0] rounded-full flex justify-center items-center cursor-pointer text-[#1F1F1F]">
                <Instagram size={18} />
              </div>
            </div>
          </div>
          <div className="text-[#737373] flex flex-col gap-[6px]">
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">(주)어보브테크</div>
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">사업자 등록번호 : 865-88-02913</div>
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">대표자 : 최주원, 정성원</div>
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">이메일 : biz@abovetech.io</div>
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">연락처 : 010-9898-6913</div>
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">통신판매업 신고 번호 : 제2024‒서울마포‒1604호</div>
            <div className="font-pretendard text-[14px] font-normal leading-[125%]">주소 : 04034 서울시 마포구 양화로 81 H스퀘어</div>
          </div>
        </div>
        <div className="w-full h-fit flex justify-between items-center text-[#F4F4F4]">
          <div className="h-fit flex whitespace-nowrap items-end justify-center text-right font-pretendard text-[14px] font-normal leading-[105%] gap-[4px] text-[#1F1F1F]">
            <div className="relative w-[18px] h-[18px]">
              <div className="w-[18px] h-[18px]"></div>
            </div>
            2023 AboveTech Inc.
          </div>
          <div className="flex whitespace-nowrap items-end justify-center gap-[8px] font-pretendard text-[14px] font-normal leading-[105%] cursor-pointer text-[#1F1F1F]">
            Privacy & Terms of Use
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

