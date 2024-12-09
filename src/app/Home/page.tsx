import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col justify-start items-start relative overflow-hidden bg-white">
  <div
    className="flex-grow-0 flex-shrink-0 w-[1440px] h-[852px] relative overflow-hidden bg-neutral-50"
  >
    <div className="w-[1440px] h-[747px] absolute left-0 top-0 overflow-hidden">
      <img
        src="hero-cover.2.jpeg"
        className="w-[1440px] h-[747px] absolute left-[-1px] top-[-1px] object-cover"
      />
      <div className="w-[1440px] h-[747px] absolute left-0 top-0 overflow-hidden bg-black/50"></div>
    </div>
    <div className="w-[1439px] h-[136px] absolute left-0 top-0 overflow-hidden bg-white">
      <div className="w-[1439px] h-[58px] absolute left-0 top-0 overflow-hidden bg-[#252b42]">
        <div className="w-[1438px] h-[46px] absolute left-0.5 top-[9px] overflow-hidden">
          <div
            className="flex justify-between items-start w-[1438px] absolute left-0 top-0 overflow-hidden"
          >
            <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1438px] px-6">
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[46px] overflow-hidden gap-2.5"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px] p-2.5 rounded-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_4932)">
                      <path
                        d="M3.65447 1.32829C3.59544 1.25236 3.52092 1.18985 3.43587 1.14492C3.35082 1.09999 3.25719 1.07368 3.16119 1.06772C3.06519 1.06176 2.96902 1.07629 2.87907 1.11036C2.78912 1.14442 2.70744 1.19724 2.63947 1.26529L1.60547 2.30029C1.12247 2.78429 0.944471 3.4693 1.15547 4.0703C2.03121 6.55788 3.45577 8.81639 5.32347 10.6783C7.1854 12.546 9.4439 13.9705 11.9315 14.8463C12.5325 15.0573 13.2175 14.8793 13.7015 14.3963L14.7355 13.3623C14.8035 13.2943 14.8563 13.2127 14.8904 13.1227C14.9245 13.0327 14.939 12.9366 14.933 12.8406C14.9271 12.7446 14.9008 12.6509 14.8558 12.5659C14.8109 12.4808 14.7484 12.4063 14.6725 12.3473L12.3655 10.5533C12.2843 10.4904 12.19 10.4467 12.0895 10.4256C11.989 10.4044 11.8851 10.4064 11.7855 10.4313L9.59547 10.9783C9.30315 11.0514 8.99689 11.0475 8.70652 10.967C8.41614 10.8866 8.15154 10.7324 7.93847 10.5193L5.48247 8.06229C5.26924 7.84933 5.1148 7.58478 5.03418 7.29439C4.95357 7.00401 4.94954 6.6977 5.02247 6.4053L5.57047 4.2153C5.59538 4.11569 5.59734 4.01173 5.57621 3.91126C5.55507 3.81079 5.51139 3.71642 5.44847 3.63529L3.65447 1.32829ZM1.88447 0.511295C2.05947 0.336244 2.2697 0.200425 2.50121 0.112856C2.73272 0.0252871 2.98021 -0.0120282 3.22725 0.00338804C3.47429 0.0188043 3.71522 0.0865995 3.93405 0.202272C4.15288 0.317944 4.3446 0.478846 4.49647 0.674295L6.29047 2.98029C6.61947 3.4033 6.73547 3.9543 6.60547 4.4743L6.05847 6.6643C6.03019 6.77772 6.03172 6.89654 6.06291 7.0092C6.0941 7.12187 6.15388 7.22456 6.23647 7.3073L8.69347 9.76429C8.77631 9.84705 8.87916 9.90694 8.99202 9.93813C9.10488 9.96933 9.22389 9.97076 9.33747 9.9423L11.5265 9.3953C11.7831 9.33113 12.0509 9.32615 12.3098 9.38072C12.5686 9.43529 12.8116 9.54799 13.0205 9.71029L15.3265 11.5043C16.1555 12.1493 16.2315 13.3743 15.4895 14.1153L14.4555 15.1493C13.7155 15.8893 12.6095 16.2143 11.5785 15.8513C8.93965 14.9228 6.54374 13.4121 4.56847 11.4313C2.58776 9.45631 1.07708 7.06075 0.148471 4.4223C-0.213529 3.3923 0.111471 2.2853 0.851471 1.54529L1.88547 0.511295H1.88447Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4932">
                        <rect width="16.0005" height="16.0004" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                    (225) 555-0118
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px] p-2.5 rounded-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_4936)">
                      <path
                        d="M-0.499512 4C-0.499512 3.46957 -0.288798 2.96086 0.0862747 2.58579C0.461347 2.21071 0.970055 2 1.50049 2H13.5005C14.0309 2 14.5396 2.21071 14.9147 2.58579C15.2898 2.96086 15.5005 3.46957 15.5005 4V12C15.5005 12.5304 15.2898 13.0391 14.9147 13.4142C14.5396 13.7893 14.0309 14 13.5005 14H1.50049C0.970055 14 0.461347 13.7893 0.0862747 13.4142C-0.288798 13.0391 -0.499512 12.5304 -0.499512 12V4ZM1.50049 3C1.23527 3 0.980918 3.10536 0.793381 3.29289C0.605845 3.48043 0.500488 3.73478 0.500488 4V4.217L7.50049 8.417L14.5005 4.217V4C14.5005 3.73478 14.3951 3.48043 14.2076 3.29289C14.0201 3.10536 13.7657 3 13.5005 3H1.50049ZM14.5005 5.383L9.74249 8.238L14.5005 11.114V5.384V5.383ZM14.4665 12.261L8.77149 8.82L7.50049 9.583L6.22849 8.82L0.534488 12.26C0.591686 12.4724 0.717337 12.6601 0.891976 12.7938C1.06662 12.9276 1.2805 13.0001 1.50049 13H13.5005C13.7203 13.0001 13.9341 12.9278 14.1088 12.7942C14.2834 12.6607 14.4091 12.4732 14.4665 12.261ZM0.500488 11.114L5.25849 8.238L0.500488 5.383V11.113V11.114Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4936">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000488281)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                    michelle.rivera@example.com
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                  Follow Us and get a chance to win 80% off
                </p>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[46px] relative overflow-hidden gap-2.5 p-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                  Follow Us :
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-[120px] h-[26px] relative overflow-hidden">
                  <div className="flex justify-start items-start absolute left-0 top-0 gap-2.5 p-[5px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="flex justify-start items-start absolute left-[31.5px] top-0 gap-2.5 p-[5px]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clipPath="url(#clip0_1_4948)">
                        <path
                          d="M9.051 1.99902H9.14C9.962 2.00202 14.127 2.03202 15.25 2.33402C15.5895 2.42619 15.8989 2.60585 16.1472 2.85503C16.3955 3.10422 16.574 3.41421 16.665 3.75402C16.766 4.13402 16.837 4.63702 16.885 5.15602L16.895 5.26002L16.917 5.52002L16.925 5.62402C16.99 6.53802 16.998 7.39402 16.999 7.58102V7.65602C16.998 7.85002 16.989 8.76402 16.917 9.71602L16.909 9.82102L16.9 9.92502C16.85 10.497 16.776 11.065 16.665 11.483C16.5743 11.823 16.3958 12.1331 16.1475 12.3823C15.8991 12.6316 15.5896 12.8111 15.25 12.903C14.09 13.215 9.681 13.237 9.07 13.238H8.928C8.619 13.238 7.341 13.232 6.001 13.186L5.831 13.18L5.744 13.176L5.573 13.169L5.402 13.162C4.292 13.113 3.235 13.034 2.748 12.902C2.40849 12.8102 2.09907 12.6308 1.85072 12.3818C1.60238 12.1327 1.42385 11.8228 1.333 11.483C1.222 11.066 1.148 10.497 1.098 9.92502L1.09 9.82002L1.082 9.71602C1.03265 9.03842 1.0053 8.3594 1 7.68002L1 7.55702C1.002 7.34202 1.01 6.59902 1.064 5.77902L1.071 5.67602L1.074 5.62402L1.082 5.52002L1.104 5.26002L1.114 5.15602C1.162 4.63702 1.233 4.13302 1.334 3.75402C1.42469 3.41407 1.60316 3.10393 1.85151 2.85471C2.09986 2.60548 2.40937 2.42592 2.749 2.33402C3.236 2.20402 4.293 2.12402 5.403 2.07402L5.573 2.06702L5.745 2.06102L5.831 2.05802L6.002 2.05102C6.95371 2.0204 7.90581 2.0034 8.858 2.00002H9.051V1.99902ZM7.4 5.20902V10.027L11.557 7.61902L7.4 5.20902Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4948">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="flex justify-start items-start absolute left-[61.5px] top-0 gap-2.5 p-[5px]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clipPath="url(#clip0_1_4951)">
                        <path
                          d="M16.002 8.05C16.002 3.604 12.42 0 8.002 0C3.582 0.001 0 3.604 0 8.051C0 12.068 2.926 15.398 6.75 16.002V10.377H4.72V8.051H6.752V6.276C6.752 4.259 7.947 3.145 9.774 3.145C10.65 3.145 11.565 3.302 11.565 3.302V5.282H10.556C9.563 5.282 9.253 5.903 9.253 6.54V8.05H11.471L11.117 10.376H9.252V16.001C13.076 15.397 16.002 12.067 16.002 8.05Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4951">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="flex justify-start items-start absolute left-[93.5px] top-0 gap-2.5 p-[5px]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clipPath="url(#clip0_1_4954)">
                        <path
                          d="M5.026 14.0007C11.064 14.0007 14.367 8.99769 14.367 4.66669C14.367 4.52669 14.367 4.38469 14.361 4.24469C15.0041 3.77918 15.5591 3.20284 16 2.54269C15.3993 2.80754 14.7628 2.9821 14.111 3.06069C14.7975 2.65033 15.3117 2.00466 15.558 1.24369C14.913 1.62582 14.207 1.89407 13.471 2.03669C12.9762 1.50972 12.3214 1.16061 11.6081 1.04345C10.8948 0.92629 10.1627 1.04761 9.52534 1.38863C8.88796 1.72965 8.38081 2.27132 8.08245 2.92975C7.78409 3.58818 7.71118 4.32663 7.875 5.03069C6.56974 4.96524 5.29282 4.62616 4.12704 4.03544C2.96127 3.44471 1.93268 2.61554 1.108 1.60169C0.68934 2.32478 0.561574 3.18009 0.750646 3.99396C0.939718 4.80782 1.43145 5.51922 2.126 5.98369C1.60554 5.96601 1.09652 5.82625 0.64 5.57569V5.62069C0.640897 6.37817 0.903307 7.11211 1.38287 7.69845C1.86244 8.28479 2.52975 8.68757 3.272 8.83869C2.99026 8.91631 2.69923 8.955 2.407 8.95369C2.20098 8.95432 1.99538 8.93523 1.793 8.89669C2.00279 9.54875 2.41127 10.1189 2.96125 10.5272C3.51122 10.9355 4.17513 11.1615 4.86 11.1737C3.69656 12.0875 2.2594 12.5831 0.78 12.5807C0.519321 12.5818 0.258823 12.5668 0 12.5357C1.50151 13.493 3.2453 14.0012 5.026 14.0007Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4954">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1437px] h-[58px] absolute left-0 top-[70px] overflow-hidden">
        <div className="w-[187px] h-[58px] absolute left-[38px] top-0 overflow-hidden">
          <p className="absolute left-0 top-[13px] text-2xl font-bold text-left text-[#252b42]">
            Bandage
          </p>
        </div>
        <div className="w-[1155px] h-[58px] absolute left-[265px] top-0 overflow-hidden">
          <div
            className="flex justify-start items-start absolute left-0 top-[16.5px] overflow-hidden gap-[15px]"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[43px] h-6 relative overflow-hidden">
              <div className="w-[43px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="Home"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Home
                </p></Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <div className="flex-grow-0 flex-shrink-0 w-[63px] h-[25px] relative overflow-hidden">
                <Link href="ProductList"><p
                  className="absolute left-1.5 top-[-1px] text-sm font-medium text-left text-[#252b42]"
                >
                  Shop
                </p></Link>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[62px] top-[9px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
                    fill="#252B42"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[45px] h-6 relative overflow-hidden">
              <div className="w-[45px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="About"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  About
                </p></Link>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[33px] h-6 relative overflow-hidden">
              <div className="w-[33px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="DesktopPricing"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Prices
                </p></Link>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[58px] h-6 relative overflow-hidden">
              <div className="w-[58px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="DesktopContact"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Contact
                </p></Link>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-11 h-6 relative overflow-hidden">
              <div className="w-11 h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="DesktopTeam"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Pages
                </p></Link>
              </div>
            </div>
          </div>
          <div
            className="flex justify-start items-center absolute left-[832px] top-0.5 overflow-hidden"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[166px] h-[54px] relative overflow-hidden">
              <div className="w-[166px] h-[54px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5027)">
                      <path
                        d="M5.99976 6C6.79541 6 7.55847 5.68393 8.12108 5.12132C8.68369 4.55871 8.99976 3.79565 8.99976 3C8.99976 2.20435 8.68369 1.44129 8.12108 0.87868C7.55847 0.316071 6.79541 0 5.99976 0C5.20411 0 4.44104 0.316071 3.87844 0.87868C3.31583 1.44129 2.99976 2.20435 2.99976 3C2.99976 3.79565 3.31583 4.55871 3.87844 5.12132C4.44104 5.68393 5.20411 6 5.99976 6ZM7.99976 3C7.99976 3.53043 7.78904 4.03914 7.41397 4.41421C7.0389 4.78929 6.53019 5 5.99976 5C5.46932 5 4.96062 4.78929 4.58554 4.41421C4.21047 4.03914 3.99976 3.53043 3.99976 3C3.99976 2.46957 4.21047 1.96086 4.58554 1.58579C4.96062 1.21071 5.46932 1 5.99976 1C6.53019 1 7.0389 1.21071 7.41397 1.58579C7.78904 1.96086 7.99976 2.46957 7.99976 3ZM11.9998 11C11.9998 12 10.9998 12 10.9998 12H0.999756C0.999756 12 -0.000244141 12 -0.000244141 11C-0.000244141 10 0.999756 7 5.99976 7C10.9998 7 11.9998 10 11.9998 11ZM10.9998 10.996C10.9988 10.75 10.8458 10.01 10.1678 9.332C9.51576 8.68 8.28876 8 5.99976 8C3.70976 8 2.48376 8.68 1.83176 9.332C1.15376 10.01 1.00176 10.75 0.999756 10.996H10.9998Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5027">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(-0.000244141)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#23a6f0]">
                    Login / Register
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative overflow-hidden">
              <div className="w-[46px] h-[46px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5033)">
                      <path
                        d="M11.7427 10.3441C12.7109 9.02279 13.1446 7.38459 12.957 5.75725C12.7693 4.12991 11.9741 2.63344 10.7304 1.56723C9.48677 0.501022 7.8864 -0.0562959 6.24949 0.00677721C4.61258 0.0698504 3.05984 0.748663 1.90192 1.90741C0.744005 3.06615 0.0663042 4.61938 0.00440239 6.25633C-0.0574994 7.89329 0.500963 9.49326 1.56806 10.7361C2.63516 11.979 4.1322 12.7732 5.75967 12.9597C7.38715 13.1462 9.02503 12.7113 10.3457 11.7421H10.3447C10.3747 11.7821 10.4067 11.8201 10.4427 11.8571L14.2927 15.7071C14.4802 15.8947 14.7345 16.0002 14.9998 16.0003C15.2651 16.0004 15.5195 15.8951 15.7072 15.7076C15.8948 15.5201 16.0003 15.2657 16.0004 15.0005C16.0005 14.7352 15.8952 14.4807 15.7077 14.2931L11.8577 10.4431C11.8219 10.4069 11.7835 10.3735 11.7427 10.3431V10.3441ZM12.0007 6.5001C12.0007 7.22237 11.8584 7.93757 11.582 8.60486C11.3056 9.27215 10.9005 9.87847 10.3897 10.3892C9.87902 10.8999 9.2727 11.305 8.60541 11.5814C7.93812 11.8578 7.22292 12.0001 6.50065 12.0001C5.77838 12.0001 5.06319 11.8578 4.3959 11.5814C3.7286 11.305 3.12229 10.8999 2.61157 10.3892C2.10084 9.87847 1.69572 9.27215 1.41932 8.60486C1.14292 7.93757 1.00065 7.22237 1.00065 6.5001C1.00065 5.04141 1.58012 3.64246 2.61157 2.61101C3.64302 1.57956 5.04196 1.0001 6.50065 1.0001C7.95934 1.0001 9.35829 1.57956 10.3897 2.61101C11.4212 3.64246 12.0007 5.04141 12.0007 6.5001Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5033">
                        <rect
                          width="16.0006"
                          height="16.0003"
                          fill="white"
                          transform="translate(-0.000244141)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-14 h-[46px] relative overflow-hidden">
              <div className="w-14 h-[46px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5038)">
                      <path
                        d="M0.000366211 1.5C0.000366211 1.36739 0.0530446 1.24021 0.146813 1.14645C0.240581 1.05268 0.367758 1 0.500366 1H2.00037C2.1119 1.00003 2.22022 1.03735 2.3081 1.10602C2.39598 1.1747 2.45838 1.27078 2.48537 1.379L2.89037 3H14.5004C14.5738 3.00007 14.6463 3.0163 14.7127 3.04755C14.7792 3.0788 14.8379 3.12429 14.8848 3.1808C14.9316 3.23731 14.9655 3.30345 14.9839 3.37452C15.0023 3.44558 15.0049 3.51984 14.9914 3.592L13.4914 11.592C13.4699 11.7066 13.4091 11.8101 13.3195 11.8846C13.2298 11.9591 13.1169 11.9999 13.0004 12H4.00037C3.8838 11.9999 3.77093 11.9591 3.68128 11.8846C3.59162 11.8101 3.53081 11.7066 3.50937 11.592L2.01037 3.607L1.61037 2H0.500366C0.367758 2 0.240581 1.94732 0.146813 1.85355C0.0530446 1.75979 0.000366211 1.63261 0.000366211 1.5ZM3.10237 4L4.41537 11H12.5854L13.8984 4H3.10237ZM5.00037 12C4.46993 12 3.96123 12.2107 3.58615 12.5858C3.21108 12.9609 3.00037 13.4696 3.00037 14C3.00037 14.5304 3.21108 15.0391 3.58615 15.4142C3.96123 15.7893 4.46993 16 5.00037 16C5.5308 16 6.03951 15.7893 6.41458 15.4142C6.78965 15.0391 7.00037 14.5304 7.00037 14C7.00037 13.4696 6.78965 12.9609 6.41458 12.5858C6.03951 12.2107 5.5308 12 5.00037 12ZM12.0004 12C11.4699 12 10.9612 12.2107 10.5862 12.5858C10.2111 12.9609 10.0004 13.4696 10.0004 14C10.0004 14.5304 10.2111 15.0391 10.5862 15.4142C10.9612 15.7893 11.4699 16 12.0004 16C12.5308 16 13.0395 15.7893 13.4146 15.4142C13.7897 15.0391 14.0004 14.5304 14.0004 14C14.0004 13.4696 13.7897 12.9609 13.4146 12.5858C13.0395 12.2107 12.5308 12 12.0004 12ZM5.00037 13C5.26558 13 5.51994 13.1054 5.70747 13.2929C5.89501 13.4804 6.00037 13.7348 6.00037 14C6.00037 14.2652 5.89501 14.5196 5.70747 14.7071C5.51994 14.8946 5.26558 15 5.00037 15C4.73515 15 4.4808 14.8946 4.29326 14.7071C4.10572 14.5196 4.00037 14.2652 4.00037 14C4.00037 13.7348 4.10572 13.4804 4.29326 13.2929C4.4808 13.1054 4.73515 13 5.00037 13ZM12.0004 13C12.2656 13 12.5199 13.1054 12.7075 13.2929C12.895 13.4804 13.0004 13.7348 13.0004 14C13.0004 14.2652 12.895 14.5196 12.7075 14.7071C12.5199 14.8946 12.2656 15 12.0004 15C11.7351 15 11.4808 14.8946 11.2933 14.7071C11.1057 14.5196 11.0004 14.2652 11.0004 14C11.0004 13.7348 11.1057 13.4804 11.2933 13.2929C11.4808 13.1054 11.7351 13 12.0004 13Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5038">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000366211)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#23a6f0]">1</p>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-14 h-[46px] relative overflow-hidden">
              <div className="w-14 h-[46px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5044)">
                      <path
                        d="M8.00026 2.74805L7.28326 2.01105C5.60026 0.281049 2.51426 0.878049 1.40026 3.05305C0.877261 4.07605 0.759261 5.55305 1.71426 7.43805C2.63426 9.25305 4.54826 11.427 8.00026 13.795C11.4523 11.427 13.3653 9.25305 14.2863 7.43805C15.2413 5.55205 15.1243 4.07605 14.6003 3.05305C13.4863 0.878049 10.4003 0.280049 8.71726 2.01005L8.00026 2.74805ZM8.00026 15C-7.33274 4.86805 3.27926 -3.03995 7.82426 1.14305C7.88426 1.19805 7.94326 1.25505 8.00026 1.31405C8.05668 1.2551 8.11539 1.19839 8.17626 1.14405C12.7203 -3.04195 23.3333 4.86705 8.00026 15Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5044">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000366211)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#23a6f0]">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="w-[1439px] h-[716px] absolute left-px top-[136px] rounded-[5px] bg-white border border-[#dedede]"
    >
      <div className="w-[1439px] h-[716px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[1440px] h-[716px] absolute left-0 top-0 overflow-hidden">
        <div
  className="w-[1440px] h-[716px] absolute left-0 top-0 overflow-hidden bg-[url('/shop-hero-1-product-slide-1.jpeg')] bg-cover bg-no-repeat bg-center"
></div>
          <div
            className="flex flex-col justify-start items-center absolute left-[197.5px] top-12 overflow-hidden gap-20 py-28"
          >
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[30px] py-12"
            >
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[599px] relative overflow-hidden gap-[35px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">
                  SUMMER 2020
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-[58px] font-bold text-left text-white">
                  NEW COLLECTION
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50">
                  <span className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50"
                    >We know how large objects will act, </span>
                    <br /><span className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50"
                    >but things on a small scale.</span>
                </p>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <div
                    className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]"
                  >
                    <Link href="ProductList"><p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                      SHOP NOW
                    </p></Link>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[415px] h-[280px] overflow-hidden"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6 h-[44.47px] absolute left-[1381px] top-[283px] overflow-hidden"></div>
    </div>
  </div>
  <div
    className="self-stretch flex-grow-0 flex-shrink-0 h-[770px] relative overflow-hidden bg-neutral-50"
  >
    <div
      className="flex flex-col justify-start items-center absolute left-[195px] top-0 overflow-hidden gap-12 py-20"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[607px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[607px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#252b42]">
            EDITOR’S PICK
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </div>
      <div
        className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[30px]"
      >
        <div className="flex-grow-0 flex-shrink-0 w-[510px] h-[500px] relative overflow-hidden">
          <div className="w-[510px] h-[500px] absolute left-0 top-0 overflow-hidden bg-white">
            <svg
              width="510"
              height="500"
              viewBox="0 0 510 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-[510px] h-[500px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5079)">
                <rect width="510" height="500" fill="url(#pattern0_1_5079)"></rect>
                <rect
                  width="509"
                  height="500"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="509"
                  height="500"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5079)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5079"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5079"
                    transform="matrix(0.00130548 0 0 0.00133159 0 -0.179112)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5079"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5079"
                    transform="matrix(0.00277778 0 0 0.00282778 0 -0.144733)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5079">
                  <rect width="510" height="500" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5079"
                  width="766"
                  height="1020"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
                <image
                  id="image1_1_5079"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div className="w-[170px] h-12 absolute left-[31px] top-[426px] overflow-hidden bg-white">
              <p className="absolute left-16 top-3 text-base font-bold text-center text-[#252b42]">
                MEN
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-60 h-[500px] relative overflow-hidden">
          <div className="w-60 h-[500px] absolute left-0 top-0 overflow-hidden bg-white">
            <svg
              width="240"
              height="500"
              viewBox="0 0 240 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-60 h-[500px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5086)">
                <rect width="240" height="500" fill="url(#pattern0_1_5086)"></rect>
                <rect
                  width="239"
                  height="500"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="239"
                  height="500"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5086)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5086"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5086"
                    transform="matrix(0.00208333 0 0 0.001 -0.0864583 0)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5086"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5086"
                    transform="matrix(0.00458783 0 0 0.00219298 -0.325809 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5086">
                  <rect width="240" height="500" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5086"
                  width="563"
                  height="1000"
                  xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMADQkKCwoIDQsKCw4ODQ8TIBUTEhITJxweFyAuKTEwLiktLDM6Sj4zNkY3LC1AV0FGTE5SU1IyPlphWlBgSlFST//bAEMBDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIA+gCMwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEMQAAIBAwIEBQIDBgQEBQQDAAABAgMRIQQxBRJBUQYiYXGBEzJCkaEUI1KxwdEzYuHwByRTchUWNUOCY3OS8SU0ov/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgMAAwEAAwEBAAAAAAABAhEDITESQVETBCIyYRT/2gAMAwEAAhEDEQA/APcAGANIYh4AABMQwDYBdR3AAyAZABoQwGHYQ+oB0GLuCAfQPkA3AYXEPcAQ1sLNxrZgHQA7B0AbD2ACAGIAAYeogGAB3AMiGHQAQBcGAAHQAAQxAAZC4AAMAAL9RDACPwMAATyAwAVs7AxhgAEA2sgLYLDCwCSAYMBWAYdQDqAWHYBZAYWALdAtkf5hkBdGOwDsVCVh/AIe4AAWYAZe4AwtgKYkAADyGwXYAAAwAdwVxbAEPACGAxiABgguAUDEMAQxAA7AmAl3AkAkMgL2ABgAAHQAAOgAADBgAvgPZjwAAAAAu4wABdAGACBAAAHUO4AJgMBbC9SVgAQdR4CwCyHQdgsAWwGR29A6AJBYYWAQbjABDQDAQWuxgArILZGHwABuMOqKhWuP2Cw+gC6oYDt0AVgHj1ADGw6AAUAAdQAeBNAAbgAMIOgdQEA+gdQBAMYkGAGAAAwF8DCgdxbgBIPQQwAOgrjyAwACAGJewXAfUMgIBghsQDABACGIaYCYxDAQ9gABDAAF3DoAwEAZC2wAADsArAMOoAAfIwFYFkYAIBpBZAKwx27B1AVgtboMYEQJWFuAAr9x4CxUIY/QEAgsMMgAAMBWAeAAxDFe4eoUAALYADoG/UAg6bC/IAAAVw7iAfQYrq+wXwA9mMiP5AaDqIAJB1FkL4AkHUQBUguRH12AYdA+AugGALCABhcLgQAfIAADEOwAALIAPcNgEA+gBkAEP3ANwB+4WDAAAB0AADqAwEA0ACQ7BsxgIBhYAABgIEPcLZAQ0A7YASsg3GAQgsMLMBIYWAA6AHUaKANwAADAAAX9AHYAMTF8gAUMA3BgFwCwggDICeQCXsFwBgAAK4DuO/oINwGh3EICVwvcQ8gPqMRXqNRS01F1a81CEVdthVoHM0XHeH62MZUqk4Rk7RlUg4xk/RnSjOEoKUZpxezTugJAhezGA1kMAADH1I4HkgYIQ2ADW4hgMEIAGLcYAAACAGAAAWDFxgAkMA+ADADABDswQAFsBug6jQBb0AB2wAgsAwEOwAAAAwhLcYxAGbh7AAB6h8jAoLCsMAAXUYdAC4BkACwBYAMIBsAUBfArYBgAAAQCAADAh9AAQXAQDGRuNMAGIHJJZAaHKSjFylhLdmLW6+npaLnKpTpxTs5zeF/c8fxfxRKs50tMlVg/LzTm0rfFkE29hW4ro6d4vURi72yjyPiXjMtZpqui+k4zpu8nff27o5NTjNeel+lqNLpasLWu4NNL0kcieo57csXFRfl8zaS7BL26Oj4gqeilGUU5RXL8f/s73B/EsaVKEKjnF280Grwn6p7p+h4yEnGT5ev5E3K7V7W3xhhXuX4to0NfKc3OdGdNciX4X19/c6uk8UaOpyftEowhPEa0cxT7SW8X+h8wqZhfLt+goVJQmpQk1JdSD7cmmk0001dNZGfNuCeIq2k07pVHUqUr3SjKzh/2/wBti7/znrqFeb5o1qTd4xqRs0vdbjavogzzXDfGXDtYrVubT1P4Z5T+TsLiendpR5pRf44K6CtjHkrp1qVReSaf8/yLQAA67ArgNAgQwBCfYYAAWuMAAAGAgDIwEMA6AHQFvcdgyAAAAAWGAAFgsMBAAwDAW9AC/qEAwAADAdQKAEAACANw3AAGACAYAIB2EA7IBWXcAMLAA+AoDoHUAEAxdQgsJh1AAbYv7DsKzsAvgAD3AAAjKajv0AHPNrpHI47xejoaOaiUmtl935FXGeMaeh5XUfPD7oRzdetjxep4tGvrnqK2lp1YWsoNtW9fV+4Zta56/TOpGvWo6jV1L5lUkuVv0RydVrpaqtN1FyxbvGKSx+hRqNRKtXc3ZJ7KywirN7lE51JKKgp80f5EIzik04rPUTTFYiiyvhjTS6C5XbBHKfYC1OLVsphKmukr2K1vuWx5pK3LlLcC2jelUjJrL3s9/wDUnVUKnTy9V29TOvLflbs+jGp2+Sa+139D95QldNOP5r/Q6Gj4lqtK/qaSvUp5yovH5bMyRbzHdNZRXb6U7xyvXb5Gh6in4ieqivr81Kv/ANalhN/5o/2PQaXxK9OqceJxi4SXkr0XzRl+Wx89i6NSzT5J7W7f3LFKcYSg/PHq/wDQD65otfpNdSdTSV4VYp55Xle6NJ8i4fqdRoK8dRw+vKNZO1vwzXZo95wHxVp+Izhp9VD9n1UsJP7Zv0f9APRIAWwBT9AwAegDDoGAwAwsCD1APgB5ewgAMjH8AILAMAQAwABgGAAAsOwC9R7gAQWABgIBgACGwKAAAAAOgdQDcAAAD0AAAA/uACAYAYGP3AQUAAAAhh6hEQGACEx2EAtwHgTswE3ZXPN+IeL/ALPB0KLvU5OeTW0ff+x39XVhQ01SrUlyxhG7fY+X8V1c9bqa+oiuWDl5Yy3sEqrU61yuqaceZWnKT5nJ9/QxKcVhxuumRrlSflvd/KJ/uJK12nbdrYIpk4t4VkLJYnKjNODa90DjGd7uzCqrtFlOSlK0rZ6sg4STtYhnoBqqWh+GP9/kqvGV/Ll9ezIxm9r47A7LMWDaPXctpT83K5NJ9it5V0JfyAunPlur37WK1JLD+1/oNwlN33DkadrZBpOnPkdpLHRroXy+nUV1L5MrhOOOV+hNJP7rr1QNU+XlxJp+5fCbpvldpx7dSi0o9HKJbTadlF86t9r3QFsqkY2cHdPe+HFkKdWUJYeE72v/AFH5L2ldJdGV/SjfmpTWejf9Qj3/AIV8TR1EFo9dU/eJ8sJy3b7P+568+LUJ1IVozs4zi8tfiPoPhnxJHVr9l1lSKqxdoN4ckRqV6hDEMKdgAAABha4AkAAADANgC3qAfAwEO1wAAAfwHwEHwAAAwAAAAAAAYFCAYdAFYBgQIM3GBQCDoMBAMQDEwAA+QDHYAMKB2sGQCl0H0AAF8gAMBCJCCEDGxAJsVs+5Iy8QrToaScqSTqWahd4uBx/FdZy4cqEH98svsjxPEJ0qk4fTThTguSCazy938nR4tqatSUo1pv6fNeMPfKz1ODqKjcmr3zcrKqrUcmn2VrkMt4B7e448qXmbTICTb3ZJVHhS+0hPBFZ6hVsls6cmRk+bdq/UnF2WLNb2ZW8ydv1Ah1Jct1uJJPdE1C73AIxzh/mXRoXdtn2JUoc2693Y36fSSnNOKxvcxllp0xwtZqWmqRy+ZRR1NPwylJKyd5dLHV0XCVZOeVvnc69LQwUr26Hmz5d+PXx8Enrg0+D3vzQ5rDXh2Lp5cs+nQ9XToJWx6l30otWwjEyydbhh+PC1fD3MpOEm2uhzq/BalOMvK7I+jyoRzhFM9LCSykbnJlHO8WFfLJy1GnlbmeO5CVdVPvprm/ijj80e94jwKjWbk4fkeQ1/DZaWtKKjdLNz0YckyeXk4bj3GalqkllK6/JnSUYVNPHUad2qRyrb3ONKm08L8jRpq9bTrKtCXodXB9U8McW/8U4avqS/f0vLP17P5O30ufJ+D8WrcO1UNVRxGWJw6SR9Q0mopazTU69GScJq9+xlqVp32BAhhQAWGAACAAQAMIAAPQAHgA2AOgYAAGHYEAAADAQdBgAAAAAAAAAAUAAAAAAAZAAAA3AACwCyAGFB7sYgotuAWAAYvgYgFYYMNwEIdsAwIsw8Yklw6pzXt6Rv+hve5zuN1I0dA6s3JWdrpN7+gR844nVvqJq7t0W1jmSlzM6fG5U6mo56UpNPe8HH+Zy5XTXN1KyTXSOROT2YN5wIgLv4EO/oF37BSyujC9ySafp7Ak79whp9bk6abe46dKU2sI6uh4c5yTf2+27M5ZSOmGFyX8P0LkrtPmawel0mjp0oRiorCFpdKo2dtuiN1OKfwzx55XJ9DDCYxdTglFWVi+EMldOyZan2ZiRu1fGEVm5Z5WtjOm2i1Po9+51kcrTlFMrcbMtz3Brqy/FJkzzjddzg8X4ZVrXdNKx6OUURlBSi0ya1dxd7mq+Xa7T1NPPk+1Xs+5jc5OfLzWi3lSZ7nj3DlKDqcqfVnjtVQdG0k2ltdZPThludvFy8eruKYOWlqqlPMJK9u3qey8LcY/Y6dHSVX5HX5L/xRls/h/zPIc0az+nW5YybxOx1OHUai1+ljVsqcpxgp/5r3OjjH1hYQxbj+DLoBgAQAA8AAIAABiGADF0HsUAYACA6DEMAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAMgAAYfgAAKOgAL4ABPI9gAQl7jEwAOuwCuAGXiFOVXQ1oQinLldk1fJpYuZNtdgPmespSipOpGbnFeeTkpP+yOJUkpSfl64PpXiPQQraSVSKtZWkowTbX9DwFfSqGqlQWHe93tFFZrD9NuHOli9vkilbcsquUU6V7JdCpO+GRDeAsnu2Rs0OHmaQVNU28JGmlQaW2Xgs0lLme12mdnS6GVSSc38Loc889O3Hx7V8P0H1Jq0cJ7notLo40+V2u7j01KNOEYxVsGyFopJHmyy29mOMniUadkNJJsE3cmoPczpvaaytyccEHJQTFGd7MeJ60wdyxNsjTj5WycbG5WLEo+43fuCsiMprdZRtgWQ0iF7mPV8Z4dorrUa2lGX8KfNL8kWTbNuvWrVUFWoyi1e6PD8T0kYurSksp9jsarxro4XWm0tar6ytBf1ZnjKXiDTftFGEaWohJxlSbun8nTHGuWWeN6eR+klNrol23Ojwqcp6vTKMVeNVPzN2ViriGm1Gi1MIVqc4Sbu01gWgrypamFaMvNTqKWFl/J1ee+vr1OXPTjO1uZXs90SMnDNbT12khXoyTi1m34X2NZlowtYBgAAFgAYBsUAAGMEAMAAAAYAAAUDDcAIAAAAGIAAAGAgGACAAAAACgAYiADqAFB8AMAMIhiYUAHyFsgLoIeRABEbDcBPsK4xXAHkh1JNEeoEKlONWDjNXT3PnvH9BLh/ENQ/ujVV497dj6KZtVotPq/8alGbWzYSx8jqQck3GLdld9SqzUj1PHOG09JrJUtHQXPyubW65cnF1Omo06MZwrxd1f6bjZp9SsOfLcnQg3NEJbm/RUHK2N0Zt03jN11eG0E0nbfqd7T0lGPqZNDpvpwRvTthM8uXb34TU0vg8otjexl5/U0UZ3jaRitxdFu9i2TlGF9iqzeUbKEVWoXexJdremSUXVhKMW7rKJaJua5XixVGT02ulTe18exdWlHS1vrc37qpn0THxLdRuirYTDPLaxxeIeIKekajTipylFOOcHntX4p4hq5ypaPlXdpYj8nbHG3x58uSR6/W8R0+ipupqq8KcPV5fscOr4rqVrw4Tw9zvhVa75Y/l1PP6XR1dbWdSpKeprfxTyo+yO9p+C1lSX1qj5n+Hsa+Mx9Z+WWfnTHKnxPik+XXcT5Yv8A9ukmor4Rsj4LpypXoa2PN/mp/wCp0tJw6FCNnd+p0IU3FLkk18lmf4Xin28N9Cv4e4rCWu0lGth/Tc23CXqrduxv4HxHUVeJ6zWV43p1LOpKEcRfR2R6Li3Do8T4fU08/veab/hl0ZwfCvNDS6mnKLjVjUtNdmsWN3k1jty/jvOT6elr0tJxTSKFRKrTlHEsY9ux4PinDKvCtbKjLNKabpz/AIka9dxLU8D4rz6dp0aru6fQ7Or1Gk8ReH6lXTv99RXPGL3jJdPnJrDP5RjPG43Q8AapN6jTW3SqLPxY9ssnz3wbo9QtXHWwfLHktFW3ue8oVby5JTTkt7Inzm9Nfzyk3V4WwG4GmB1GAAAAADAXQYBugAYAAAQAAAAAAADEMBAMAABDAAAACwCGACGAAAAAAIADHcAAoxbITGxBQIYgC4vYYgEwewAAhDEAN2IsHhiYALqMXUDDruHx1T5rpSas/Le6PO+J+GQocJVWTqVaqmo3bwl7HsTzfjaXLwmHlu3VVvTDLGb4+cuLTyek4NQjV5cfaeeguevBSeHLoe24ZplRh5dpIxm6cU+2qCUUN4wiTVror23ZwseqULfJdGaTw9jNObXQoqaujp1etUUVb8zOtr8tdu7pZ8zae7NPDJfupRl0bR5P/wAxUab/AHSbt1sPR+JaVJP6lTlu222JhYl5ZXb4lK1WTWZLb2OJxLi7qaOVOUuVdn0M3EvE1GVpaalKpO33SxE5dJviGm1E63mrct44wrZsjphxW3dcs+eSahaKnqeL6uOloy5YJXnPtE9ZS4LpdPR+lBOMEs9363OX4HcYU9bU/H5Yr2ydrW6v6EJ9fLhd2M7ZdReLGWfKp0qml0NG0Ywox7tpXL6fEtO8xd1bduyt7s8ZqqlSrVknVSnZylJvb0IcL5a2sjHUVKjhyPCjfPYTDfplyaupHv6OqjXtyxpu+1qiZ19Np6MZvmleyTs33PC8L8PVas4zlOpShzXXK/Mkex0unjp4uEa1SSWFzZZZjJei22dtVSC+s2rWvdWPMwoRoeMdXQeKesp/Wiv83X+TPSXtfJ5/jjVDjvB9V3qSpS9nY3O2L1qqfEfh2Gs0Mp0MVqfmj6nN4HwWrR0mk1mnm4TqJqrDpJHueXmVjBw2mqE62me0ZOUPZ/6mLOtRuX/bdX8N0sdPSjCKtZdCTl9LUxfd2Zoin026mbidOX0fqwWYZZmzWPTpL8su3TvdXuMq08nKjGXdFp3l3NvJlNXQALOwFZFwD4DoAwAAAAGAhgAAsgAEAMQAADAAAAAAAAAAAAAAAAAAAAAAAQwDACADEACKoAAuAmK7QxAIAABfzExiAWWJku4gI7g0OwrY2AFgwceoRr8H1kOVf4Mmr9Ha5v8AgjUipQlGSupKzT6oJXxmnK04NdGe64XXjW08bPzLc8lxvQPhnF6+mzyKV4esXsdXw3qL1lSb/MznGuO96ejqKxnns3dKK6hxLXafQx5q87N/bFbv2PMa3ier1/kivoad9Fu/dnOY7dsuSYtXEONQpycNO1KXfdHFqT1Orq88nJtvqzpcP4ROtVi5wahvfuj08eG6LSxjKdKnG0U7stuOPUZmGWfdeRo8IrVIpzqcqfyLWcJlpqamqylzdLWO9xHW04Vfp0eWCS3aOVU1U68uV1YcqwthLley44SacZfws6XBvrU6kpxpSqRtsjNq6MqVaEpRtzv8z03hRU5ULyjeXMzWefxm4xxcczy1XF4RrnwzitSNVSp0Kr5Zp7xV8P4/uenr6OdeM5yq2ly2i90l3Rv4z4c0vFdF9SnBU9Sl5Zrr6M85wjikuFVv/DOMwkqUXaFTd0/7x/kYv+03HaT+d19L9PwbS8755Sqd2+p3uH8P0lFx5KKv3LVoKU6aq6ealCaupRd0/Yso0KkJrmykY7+3TU106FGSlUUKa2Zcopz83Vsz6GMvrXliyZrpfbd73bNztjKaQtzVOXfJ5/jqWq45wzQ0syhP6s1/Cun8matZxuFGctPooftWseFCP2xf+Z/0LuC8LnpZVNXrJ/V1tfM5P8PobnUc/a6yMVZfS1sKnSXlfz/tG61jncVvGleOHun2ZlpOdWtS1zUr8kl5TS60W1GXXBXqF9XRxml57JxObTdapqY3jK1+2Dlb8XbHGZx3tMuWnyfwvBcVUeqb2SLT0Y+PHn/0OgAM0yQwAAAAAOoAAD6gAAC2AOoAMQxEDAEAB8AAAAAAAAAAAAAAWAAEMAAAAAC6AAAw5AdhFUmHyP1FsAhDB3AQrDwJ2ABbXGxMBCGACEMO4C72IvYlYTwB43x/o+ajptal9jdOXzlHkdLqamlqqrTsppdcn1LjOhXEeFV9Nbzzj5H2kso+bUp8Oo8Orw1OnrVNe5OMc8sKa7+rv0L6x5W7gfDK3GtZLUatyqQWZN7yOxxDhWmnxHkpuTSVmkrKK7Il4Wq/T4RGcXyyv07f7ubV/wD2L9WrmLdOuMmlLlT0VG9ST5Y/mef4lxOvqako0E7QzK20F/vqdbxCp/s0HTTbu3b16HI4bwzUuT5m1Gf3HOSTuuuVt/1jDKmqsaycvqV3OKhi/ls75/IdbS1I5rrKe2x6uhw2hp258qbv8GLXRU62Usu3sX578ScUk7cPiN56alU5bKMkva50vDM+Wiv+5kfEEVDQadKPLdxx8NkvDceXTJyV3zbdhn/yvH1yPecPqXoqO5j41wLT8Th54L6iWGT0c7JHXj5oI5YO+fVeK0vBuMcLi58H1kZwv5tLW2v6dC58f4pp/LrOBVlJdabdn+jPT1tHOU+enLll1xhlFWlVh963e6N2/wDjnMZvq6cSj4i4lUl/y3BZqTwnVm0l+SLIaLjHE1//ACGr+hR/6VDyp+73f5nXp0ryvJt56m2nFYsMamWM+2bhvDNLoKShp6SjjL6s3WsNJDZpkuhg4rTlPSvl3WTdchWSlSfa1mBl0k/2nhsVGXK15b9jZRoxpUVFZt1OZw2Sp16uneF90Tqwxi5JO1tsmllFPlbe5YKK5UhnWPPbu7A0INioYC6jAEAWAAH0Eh9AEPoAAAxAAAAEDAAAAAAAAAAAAAAAAAAAAAAAAAAGAgAxAAFUhdBgArCZIQEXcLD2ACInkkyIAJjF0ABDEAC6/wAh9QAiz5/4z4QtJq/26lF/Rry81vwy/wBT6CzLxDQ0eIaKrpq6vCorX6p9GWJY+e8B1koUamnUvt88fWPX8sP8z0umm5JOW66ni9To9Zwfi/7M4v60Zp02liXa3oz1vCK9PV6PnpeWUcOL3i+qMZRvjv006xKVC9r2dzJTqT+rFRtax0VTc6TUtmrGCEHHLxJP9Tlk74rqjle7fsYox5puTV7PLZsldRjzLc53ENbS0FGUU+avP7ILdmZ66XUm6w8an+1cToadO6ppSnbp/tG/g9Nv6soq0XIp0HDqkKMqtfNetmXpc7fD9PT0nDVVfmvmy7lyy+kwwvro6OLx6naofb8HktD4hoS1b09ShWpf52rr9Nj0um1EakfJNSi+qJj0ufbmcY8Rz0XE6eg0mlnWqyV5yado+i7m1amtLQ82pSU5NcqRdOpS3aj6PqZ3yym5ye2z6G7+s46k0si8J7XNVGWMoyxqQ5rN/BfGceayY0za1rNgauKDuhsrCuTdytybTS2J1Nyi6t6sjUYNSvoauNe7SWH/AL9juadRcIyXVXucrXRU4ZStt8m3hdRVNDT/AMt4/kaxc8/G0N0IZ0cggAAGL5AAGAMAAAWQ6gMAAAAAAAAAGAAQAAAAAAAAAAAAAAAAAZAAAAAAAAADFYHlABVHwLYfQPgBCxYYtwBiHkQCYh7CsAmDAAExXGGAF1D4H1EAdBDuhMDx/FdPT1OtlLUO9SEscy+32OXKjqOG6mOq0UefmxOkvxr09T1/GtCq1J16f3xXmt1R5ui1WoTpKTi4St7dUcLbjl29Uxxzw6atJ4j4dUgvq1nSn1jNNWI1+N8Kpzc1qFU6+VNlcNNouJ0nVraem68JctS2Hf4LaXCdFSknS01NN9ZK/wDM1lYxhjk51Ximv4k+ThmllTp/9Wp/uxs4ZwWGnm9TqpvUah55pZS9jrQpRjZfBKS5VdHG5fUd5hJ3e1Til8HPq19VQclp5rlllxawbakrXuzBqq0aSk2Zjdrm1K8/rSdS3M8vl/ud7hepjKglGPK31PNJVKtduzSbwu56LhulcKHLVnyY3N5ajGNyybNPqJVNTKm5K67mmrSr1J3UHy3zbBHQaajppurzOpKXVm2rr40l5pwTey6sRq4/iv8AYq9RJyeUt/QJUalG3M27euw58RrKDnCDfurGSnDiGv1Uata1GksKCy38mmNfru6OfNC3bBpbsZtLTdNK7uXyfl2NRxvqura36Gar5Jp7329y+V2nixlqSTcJNZTwu2AsQqTjdczur9TXwlpUaiz/AIjZx9XUakuZNRcjp8Dk3o4ylvNtmsWc506jHcQW9Do4AYAAXyAAAwEMAAL4AAGIYAgAAAYgIGAAAAAAAAAAAAFAAAAAAEAAMKQAAQAAAYg+QAqhgAZAQAACdwe4fIuoAxW9QYAIXoNiAXyIYn7gO+BBcVwABAASSas0njNzy/ENB+w6urUhF/Tqq690eoKdTQjqKMqc1h7PsZyx+Ub48/hXgoar9k18q6zHapH+Jf3R6OEozjGcWnGSun3RytRwOT1NVTk1ZY9yzhblpFLRVJczp5g3vyv+zOV807/e547Kaa3IvqVxqJWTYOab3OWnXbLqLqMvTJxpQqaisllq+y2O3VXOpK26sZ9HThp+aVm7Y9zXkY9qzRaGGmp/UqK8vwp9CnUcSpUqrp2dSo9oQV3/AKGDWcS1mom6dGi6cb25nuT0ekrJq1Nu+7e41911xv1G6Oo19WnGNOEaMZPLfml/odPh2ghTmpzcqk2syllkdLpKn01zO1lbJ0aMqNKcY813YStZXUXw0/O02sK2DWoqP5EY1IyxHsSW7NvNbanHCCE1UTV9mK/lKIvlk9lkrFaJ2s0YKr5eao1aMcr2Nk60fp835nL4lq40uHVJN2ktk+4GLUzc5Rp35pSf6+x6HSQVGjTiumTzfh6hPVV/2ism4xvy37nqOhS+NICg+aCDqdXnMYugAPewCGADFkM2AYAHcAGLoADAAAAAAGAAQAAAAAAADEADEAAMBDABDEAAAbgMA+QCsQhgUHwJgwACIxAAmMQCYmMQAJgxAJ7CbGRsA+pEGw6+oAAAEFxN4C9we+5Rm1ml/aI3g+WrH7X39Geb4tRqUJx1EYvng7yXp1R61fcyFWhSrW+rTjL3M5Y7axz108r9VzinB43TLFWSd87YRm4lQlw3Wyo2aoy89F2x7fBmhqHOdlJY29ThljqvTjnMo6lOpzu2cFrpOU1KL3WUc6E3Fqd7LrbqbaVb6qtF+xitxZDTwUljJtoQjD7Ymem/g0RqW37WMukrRJSlCSukrWOZRhVjqYqUrpPdm/6qs1chfmb8qKjbQrdL3NkJP8zl6erGNSzXXf1N1GqpN3aN41jKNOLGXUvkw1dyfQtlWStfBzeI6xQhdNc2WjbkjVr8umqea9l8nH106nFK9Ohp0/pqXm/uc/VcQlUi4U72nHr0O94d4fJKVWrzeezXsPE9dvhekp6PSwp0+b1u+psyRirRwMotpSy13Lfkzbe5fCXNG5vGuWc+0t0GAyBpgAAbgMBDAAANgDoO4CAkAgAYAADAQyAAAAAAAAAGACGIBgAgGIACgAGEKzAYAYQHkOhVLYAABCGIBCJZEAngQ2n3EAPBFjZEAIv0GRAMC6DYvkIeRCvbYE8IoYLuD7MV7LcILiTuK41uVGXinD6fEdDOhPEt4SX4ZHhn9bSV5UdRT5akXZ+3ofR4o5vGOCUeKQy+SqsxkuhnLH5NY5XF5ONZzpqUVd3s432RqoVeVy5H5m+hyOIabW8Kq/S1lJqF/LUW0vknp+KU3HkcsteXpY4ZYWPRjySvQw1Fox5njYujVi0rO6PK1dRWjPe8G8ZtY00NbaNpPL3fYxcHSZ9vQuaaSu/gX13Bc2Wlv6HBfEZxsoyur3ftcX/iT5uWTahs7E+Na+cd+Gp+nOTviVml/Mu0+rtTjUbtnr1/3g83qtby04eb7XjP++hk1HFasoqMXZQ2a/Q3jixlnI9NqeMx+rh2hG7avl32ONquIzrvnm88ravhZOSp1JxtJrmkvM0dPhnDK2vnFTVqFPdvqzWtMb34nwTRVNVXg/pS+kpdVhn0GhD6cbOxk4fpIUKMIRVrI6KTH/p/4a2IvOSSE87FAmShLll6PchsxiVLNtXUDH9WdKX8UezDVcS0mk0stRXnJRjulByf5I6S7crjY1hg8LxD/iLRhJx4fop1P89Z8q/JEeG/8Q4VKqhxDRxpRf46cm7fDNaY294Mxafiug1MIzo6uk+bZOST/Jmy6auiGzC4IAp3AXUYD6gHsF8gMBYGAAAAMAAgAAAB7AAAAwEAAGwwEMQ2FIYgAAAAMYmAyhCGACYYGLcBCHYLZQCwJ+432EBFkSRFgJiHdEWEBFslb0INlB0BIQ742CC5GTC9hXKlO2CcG2QwWRRUTSwSRGNr2uTRFY+L6OGr0E4ygpOHmVzwuo4Np6suam/py9NmfSUr9LnkeIUHpddUpWxe8fY5cm53Hfi1eq8rqeH6rS3nTbqQSMrnK6vFr19T1is20KelozVpU00+yOX9P12vD+PIurJtW6ClVk8xcl3TPR1eFaZu/Jb/ALcWIx4Fp6k96iXTNrmpyYsXiyeblVl3vbHwadNSq1lzU6bnZWwei0/h2gql6nmindHc0eg09HlVGmoqOMbkvJPonDftwOC+H6tZ/UrNcrWFY9tp9JSoUYU4xso4sidGjGMFyxsXRTTHvda6nUSppLYsS63IwuSvg0wQmD7kb5CnuCAGQKor2ZTKD3Re8qxCUoxjeckkurFWOLxDw9wziN3W0sITf46flkeQ414RqcOh+06ev9SlFq6nuv7n0lxVjy3jPWfTp0dGsc37yXsti4W70zyTH4708ZHKnGp+HOMHa4XxfiOmpx+nqqqis8raafwzgxm+eSavzyt8HV5owpWva56pNvFXqtL4zUFbXUf/AJwO5puPcO1EFKNdJPbmWPzPmLanOytboOMKtN3oVJUpdeV4fxsLjCZV9bp6rT1V+7r05e0kXLKwfI4cQ11H/FpQrR7rDNlDxJ9FpSlqaD9G2jPwa+b6iB4Gj41dGSjKv9VdLwu/0O9ovFFCvHmqUnZfc4br4eTPxrUyj0A1ky6XX6XVL9zWi3/C8P8AI1Ea2AAAGAg6AGb+gwAgAAAABiAYgAAGIAoAAAdgAAMQhiKAGGAvcAYn7g9txZW4BcMAIBP3EN5EAmRG7CaCI4It5JdBFCTFuD9BdwhewSeNgvbNiLdyoXUaIkkVlJE4u5AmnYKmicStblkSKmcbxHp+ajT1MVmD5ZezOxcq1kadTR1oVpRjBxd5SdkvW5LNzTWOWrt4xNqRqp5W+TFF+be/tk20H6Hhymq+jj3CnElSWdi7kTWSCjyv2C6aqT9OhqoNJ9jBTl0NkEsO4iOzSs4X9B7Oxm01Ty2uaG8naXpwymqktyXQinkkaZQbsKO45EOpFWJibEFwiSK61KFWnKFRXjLcmgaW4CTR8x8Ua39u45W+m24wf04+y/1ue38R8SXDuF1KkZfvZLlh7nzXTpuo5yfq33OnHHLmy60Spp14wW0V+po1VVqaje9lsQgrJ1ZW8zuU3dSq2+538eb2tdHEOaWB/VcerFe1NFDaKjV9dxs1m2Suc1Kl5lf3KHPLK6lS0fYbXSuEYvVRivtud/61Sg1UpytJL8zg6POpTfQ7MvMop4JiZOpp9dCtyuX7ur06Z9DtaLj2q0toVn9Wmukt18njNY4xpKMUS0+ur0KUHKX1I9pFsiSvqmh4npdarUp2n/BLDNp8w0nEIVWpQbhLez/oz03DvENWklDVJ1YXtzfiX9zFw/HSZ/r1IFGm1en1cOahUUu66ovMNmAAQAAAAADAQDABAMAF0AYgABgFYc9xoQFBuL1H6CYBdEbsbYgAV98Bi4mA3ZCAVwgZFjvgi2UReGKTWw2RCE8B0C1w23KhEHe5Y+xAqUrElsKzGENbEr4I9RrH8wJpk4vO5nrV6WnpOrXqRpwjvKTskeP414zdpUOFqy2+tJZ+F/Vg29D4i4/R4Lpk7Rq6ibtClzfq/Q+d8T45xHirf7XqG4LKpx8sV8f3MNepOrNyqScpPLk3dsrJaSb9eq0En+y0VJ3lGKTZ1KE7s4tKXIodrHS0tVNb2PHnPt9LjvWnWh9o5wbK6UljK2uaN0cnVninGe7NunldK5nnTe5KhKztcu0rq0HboaYyx0MNF43NkWdcXHKLo5JXsVRl0JcxtjQkyKFKT3HEBvYi8Im1jcqk+UEWxd0ObtFvsQptsycb1seH8Kr6htXjG0V3ZYleA8VcTlruIOnF/uqOF7nMgrU1D+J2z2KJTdSo5Td5Sd37l8cvmvsrI9GE1Hkzy3Trz8tksEKSRXUd5WLqa7mvtn6Xza5FZlD732LZLGDPO3ctZRk13M9SV3a5ZUZnbu73MWtyNvDIXm3a51rKKWcGLhtO1Hmt1NVao3t7G8Z0xle2fUtznts9iuo0qViyTwmZdTUXLa+RSRo4c25tXxvc6tSpUpR54TcZL9fg5/CaTa58fmX66ajFK+S4+FbNDxuKlapelVW04t2PTaLxFqYxX1OWtHvff5PnkfNLC3N1GpUpeanJrG3QmpTdj6dpuPaKsv3knSl2lt+Z0adWnVipU6kZL0dz5hp9fGp5ZeWdvhmylq6lN3hKUXe3ldsmbh+NzOvoozxel8U1dO1TrzVX/K/u/Q9Fw7jWk4h5acnTqfwTw37GLjY1M5XSAOgGWjAAAABAFAAAAAABhGAFCe4mMTANiLaSB7CtZABFMb6CCGIV8ib3KB3IPHQbeBBA8IQXuHQqE0gs7DBruBB5EStgLIqI2GrbBkhWrU9PSlVrTjThBXcpOyQRPByONeItHwpOEn9bUWxSi9vfsef454unW5tPwtunB4dZ4k/ZdDykpOcm5Pmk3d3d7hPW/inF9ZxWr9TVVPIn5KUftXx/U5rd53JS2S7EV9xK1IciJOSTI2wRY9IoOVFSXVJlmmnyzs3gt4dD6uhp90iqtSdGpdrDPHv6fR11LHUoVOh0qMro4dGb2N9Go11MV0jqRSasQdJp3SFRqqXU1wz0DPiFJtWybKdS5RyZuWRVjUZvbTFvLJXK4S6ErnSVzsKTdycCmtKy9SdCakN9lnTTutjNWVr3NRm1HXJqsT1CjUTe54nxzxT9o1UNBSl5KXmnbrI7/FOILh2hq1m/MlZLu+h82q1Z1asqlWTlOb5m+5rj77Z5rro6afMu7NMko00kV6eH42SrSbPTHkql5qGqmrx3MkbcxtSX0/ZZEMkZbFE8PJZN9zPUfruLUiqo7sileaj3Y97ktOr10jn627NDlpadd0iDd5hNu3Knv0E/3VPNubdHZyV1ZpXz0MM/PVsW1pt3fdkNHTdSvH3MZXfTcmu3boW0+lU2umDnaio6kjRrK3NP6dN3jHCMzvFK5u/jHqMFZq3Y1xu4rHyY07z3+ToR5VHK/wD0IVGdPyJp2luWxr1KtJqm04reXWT9DO3LUylyXVGLtKX8XoWx8sbRwr7LBROhVis07PPm9zbTr8sk07We/Y5LqqE77Js0Upyl/hvmT3XYD3PBePqyoa6p6RqP+v8Ac9LGUZJOLTTymup8zo0JW572xf0OjoeLVtC/3WqpuHWEpJr/AEOWWM+nXG2eveDMPCuJUuJaf6kLRkvuje9vU3HNsAABQAAAAAAYgsCAoQh/AgERe4xYAi2LoN+wmVAyD7jZG9whS3GFh7lRGwWVgCwAl6g+4Cb6hCFdClJRTcmkkrtt4R5Ljvi2NNy0/Cmpz/FW6L27lS12+L8c0nCqf72XPWavGlHd/wBjwHFuNazi1W+ony007xpxxGJgq1alWpKpVnKc5O8pSd2yKG01+iTsggnbmFLcmlaJGkXYj+JE2VsETksCWSSV0RWwHr+Cu+kpesEbNVQ+pCxg4A1PhtL0bX6nVlJSja54cprJ9PC7xjl03ytRluupup+Yy1o8tb3LqUuXclWVqp1XTludPSVlM4kp32NOkqTjJPOCeNevQxXN0G4PsVaSrGUUbYxUkjrjNuOV0oXNH5JXwWSpWZTJOLLrSblU6ido5I6KvzVbXRXrJWg89DDwqo3qJPoYt1XSTcemckluZa88NlFTVReohQu+aabVl2OZ4p4quG8P5ab/AH9bEF29Te7l1HPUxm68p4p4j+16x0Kcv3dF59Zf6HEhHmml+ZGUr5bu/U1aSn+I9OGOpp4s8/ld1Y1ypJFE22XVpeb2KG7XOlcojSzM1vEbGTT5qGqo7JJoYlUy2vkz1HYum7ozTbcrGa1CeI+pPSK9TJCoX6GN5+pJ6t8dOKjyc2boo1mpdVxulhWLK8o0429DnuV5Ns6W6c52jUfQ2aGP06c6zWYry+5jS5mdKSVPTU6dt3zMzj7trK9aUpWd3uhSu7DlLp3HT+9Kxpk6UNpPFxVKj1FT6VN2pr7pLqRrVHJ/Qp//ACl2JR5YU1GG38wNEKv0qTpU8RfRC5rQvtfoVysrZ2Qk+aXlKhSTn5UvyPZ+GfDqjQ/adWn515Y+hm8McCepmtVqY/uovyp/iPbxVkklt0OOeX1Ho48PusNXhOknSlT+jHlasz5Zxjh0uF8XraaO0ZXhfrF7H2LqeD/4i6RxraXVxX3RcJP2yjGHrpn3E/AWtqviMaM7cri1/U+idD5L4P1Lp8XoN9Jr+x9asarlAAARoAAAAAAGLqHoAdShCewxMCLFuPcTQRFkWyTwQeSoXqGBy7oRUF/QXUGxNgDYlcTl2ZBsIndPJj4hxHS8O07rauooR6LdyfZLqYOO8e0/CqXIrVNTJeWmnt6v0PA6zWajXV5ajVVHUqPa+0V2S6FZ3tv434g1XFJOmm6Om6UovMv+5nH6dhMNyLIQIBsBIkiKyyxIQRkrLYpkX1MFKV5W7sVYuSap5K12LZ4gVLLFSPQ+HtRy6SpSb+2d/wAzsKbZwfDkPqV5w9meyp6SPKlY8nJP9nv4b/pHFqKpNrDyzTR0lSX3HV/ZVtYsVFw2RjTruMUdGki+nSjfY1cuCPKNG0qEFGWDpUpHNpN89jo04tx3N4sZrW8Mz1HcvTSdv9Qai1sb2xI42sjKcJY+TNw6HJKWOp1dVDmTSMPloRcpNJdzhlu16JZItr6mlo6M69aSUYK7bPnXFuI1OJ6+eoqXSeIR/hRs8Q8Ylr6/0aUv3EH/APkzjM9fHhqbeDm5PldQlmpY6FOKjSXd5OdSXNWsdKeIJLsdsXnyZ55ncqqO0dy2XUz1mu4pFmltd43Lq0t8FekXlHUdmWeJfVU3gphmTZOo7RwyMFaFzFbiubvI3cNj5rmF7nS4d5acpPblZcfUy8Q1lXmmzKni1xzlzzbFGyuLd1MZqNGlh9StGKXUv1NXnrySd+Xyr2RHRSVKnUrv8MW179DPSTk73uzU6iXutEVzXb6LBGpPkXJBeeX6DnNUqd/xbJdyqndNzk/M8v0AupxVKNvxPcldN+pXe+UOc0lgqHOTV0vy6nf8M8Elrq/1q6aoQfm9fQxcB4RV4nq0mrU45nJrZH0jS0KemowpUY8sIKyRzzz11Hbj4991fShGnBQhFRjFWSWyLERiNYOLuZ5vx3QVXw+5/wDSqRl+eD0jON4thz+Gdau0U/1RrH1MvHgfDGkdbjemjGo4tzW3VH2I+Z/8O6Dq8XdSUcUoOSfrsfTDVccQAARoAAAAAARiAdhFCE9hiAWOhFsbwReSiL63Isl03I4CFkTdgkyDlfqVDbIOV9xORW5FTabdjz/iPxBHh0P2fStS1cl7qmu7/sX8e4vHheico5rzxTj69/g+eVKk6tSVWrJznN3lJ5bYZ9OpUlVqSq1pynOTvJyd22JtMrmyVNpxtfYi6DF8knYi/YoYvX0JEWAR+4tiiuCNCjaKYiVRWZXSV5kq249MvM29ifazw67SViuP9B6h3mJfamL6Tx3PDU1HVy7tHuaE1KKsz5lpNRLTV41IPbp3PccL19LV0YzpvKw49YnDlx729XDlNfF3ok+VNGejUu8mhPBiO1pOKtYg4dSyUiLlkliyqoQcZ3N9OWNzOrNdrlsdtrCdLeznNqV7jjUTxcUkmZNXqaWjourWqRhBdZMrPTRqakYxu2kup4XxDxz9o5tLpJeRO05rr6IhxzxBV17lSoN06Gzezl/Y4DOuPH915+Tm6+OKKV/ZBUaUbk4K+Xsiiq7tpHZ51uji5TvjBvqptei2MeiVs2Ztm+66GsfGcvWae236mWo7ysaakrRZk3mTJY3UVan7lM73LoJKmUTfmLfCeqarJNWpEJ5nYnUxTRhpQdLTvl0FR+ljmM6UccOl6tIuKZOfF2bLXsVRzIsT8yRFaqr5NDGH8c/5BRSgnKWyW4ahOVSlTS+2G3uV1Gqk/pxfkjv6s2wFepP6knZfhRJO73It9O4J2ZFXRdrvBo4boavEdXGjSXmb+EZqFOWorQpU4uUpOySPpXh/hFPhekyk69T75dvQznnqN4YfKtXDdDS4fpo0KS9ZS6yZuiQJxOHr1a0sXQd7ISGVAc3xGr+Htev/AKLOkYeNRUuCa5PrQl/IuPsZy8cP/htRtptVWt1jFP8AU9seY8AUXS8Oxm//AHajkvbY9ObrlAAARQHuAAAAAGL5GArFQrbieBsTYEZMgSbyQZUJshJkpMqkyhSZXJ9bhKRTOZWalKdympVUISqSdoxV5N9EJyuea8VcSVOj+xUZeaeajXRdis2vPcX4hPiXEJ13fkWKce0TEwEZWFIKX3NAwi7VEFWtEbXLGrq5ForJEfkkyKV2FWU0XyVo9SFJFlZ2ianjFYa25bp1aDZRPc0QxS+DM9bvjPN3myyKXIVPdlsV+7IotnOGX6bVVtHWVWhNwku3UpunhgCV7DhfiehVShrF9Kf8W8X/AGPSUdRTqw56dSNSLW8Xc+WJFlKvWoS5qNWdNrrFtGLxz6dZzWevqTmhp3eHg+f0fEfFKVv3/wBRf54pmmPiriMViND/APAxeOus5sXu43HOtToQc61SMIJfdJ2SPn1XxJxWrdKuqf8A2RSMFbU168ubUVqlR95SuJxX7Zy/yJ9R7PiXizTULw0UHXnb7niP92eU1/ENRr5/U1VVyfSO0Y+yMbkllsXO2sLruztjjMXDLPLL0S9diDbbSQr3bu7kqMbsrCU1yQ+DHLMtzTqpXduxmXmmhVjo6RJQuWVXZ5YaeKVPYrrSvK1zfkZ+1FSV9iiGahbP7fYhRXnMVqNrdqZll1uaajtAyTZakQiuaqTrvCFRTvcK92Z+l+1B0Zf+mv3Rzup0amOHO/dMuJWCD3J08zXuQgWUkvqx9yK1ambjVm4/fLEfRFMbRVkFeTepqSl3sRu0aZ0ld3CN20luyF8nofC/CP23UfXrR/dQeU/xPsZuWputY43K6d3wjwX9npLW6iP72S8if4V3PVqxVTSjFJFqwee5bu3smMxmh1LI37FaLI7AqebDIokVknuZuJpy4Vq4rLdKS/Q1YE6aqx5GrqTSf5lnqXxPhelWh4ZptNH/ANqmov3tk1ABtxAAAUAAAAAARiAYsFCZFsbZDbqUJ2IN4JSZU3+gRFtlc32JN4KpMqVXNlE5PZEqkkipvJphRrNXDRaSpqKiuoLb+J9j57rNRLVaurXkrOcr27He8TcVo1+XSaaSlGMrzktm+x5u7vclJ+mRHsroRFJieGSYmFaIu8bkZEaMrxsSka+mUGOCI7lsUlHmIq6nbm+BalpDoyUn7ENSzX0x9sUvuNTXLRMyu5pepqq/4SRiN1kxcupZjYpdrltFiLTlGzBNonJEGgicUntuNRfRr5IQLPUoXLK236hyzXRfmO7Q7t7sBcs+6Hyu2ZBcd0lkqDyx6EJSwEmRWe5FSirl8FZX9CunDOxZUaUX0ZYlZa8ry3IUVeohVHllujV6iZn2teR0bclHZ7GOo7zZtrYp2uc78TybrEKo8D0yz8kKjLtPhXM/bX0srPBlqGiszLNtysMiLqCXLsQrvJdSVqZnrbi+E9VfiR0qiX/hz90c5fcvc6so34XNvuv5jEycqJdSXnRTH7jRTXm3JFo1GNTU9yFx6l/8zL4IRu9hUbOHaSprdVClTX3PL7H0vhulp6TTQpU1ZRVjz3hbh609D69Reeax6I9PT2PNyZ7unt4uP4zdaYvCLL9SmLJJ3ZmVuxZH2LUVRLImoxViyMSGaZFy2irz9isu063ZZ6mXi4AA25AAAAAAAAAAMeCLGyLKiNxOw2RbKIS3KmWSasVSaZUQfUoqysWylbJRUeLlZqiTb3OB4r1NWhoadOlLlVWTUmsN2O7KV3c4nijSy1HDHUgryovm911KzXjb4E/chCVsN4/kXVacqU3CpFxkt0zKooi8ZW3bsPcaugFiwmgatlfKHhrDAKTtKxOW5U/K7lt7osKUUXtP6XwVRWS6X2XLEqihO1a3cs1X5GdO1Ze5o1ebexJ4X1lp/wCIvc11v8NYM1FXq4NVX7RPFvrG9wpu0hy7kVuZVs3jtci4BSfl3LHexv1jxQ42ROOw2kLYaXZ9O4sWB5QnvnsA7+hGTYN4Iu99yEg3LIRuhRiXRj3QkWpRikiqtLG5c0krmWu7mqzGeWTbooZ3MSzI6WkjyxT+DOPrWXieqaSsjC3uadRPzMySZckiP3M101yxt6GWmryNV0ksEi1CtK7vczrMyyq+hGkryTF9I0peSxlq7mqWImSoKRCP3I68Vfh1Rd43OTD7zs0FfS1I9eVlxMnFeGaaKu7maf3Gmg/KjM9W+K9TnUS9jbwbR/tWsimvJHMjFUTlqGuux6zgulWmoJNeeWZHPly+MdeHD5V6HTWjBJLZGuDSSMFOWLGum+55Hu01RlfYsizNF2RfB3NRmr4bexbFFUNi1HSOdTRIiS3NMg00FaHyZjVR/wAPfqXFjPxMAA25gAAAAAAAAAMJFkrkWaRFkJE2yuQRCbuUydiyViqRUVysZ6ly+ZRUKlUsjKMXHlautmn1HcVysvA8a4a+Ha+0U/o1HeD/AKHo+McMhraKnFJVoxVpd/Rm7iWipcQ0kqNTD3hL+Fkql4q3bByz67duKfLqvA1ITp1HCpG0ouzTI7HqOLcNjqofUpq1Vf8A+jzM4ShNxnFxknZplxzmSZ4XGoq47XysP+YWGkjTmg1dW2ZKm8WG43337kE+Wp7gXK1yx5RCJNPuaRkqO0/k06h3pxa7FNeLuWOTlQXdEi1DTq9Rl9V4KdNht+pdUfYs8S+s0iHwWyRBr0MtROkzQ1dIyweTVHKNYs0ms7j5ETS6jx72KivlSWxGo1fBOT6GecrslWE22SjEUY3yWwViKlCNlsWq6d3uQXvuTusXNMozeNjHWeTTUeLGKo22ZyXE6K5qh1KStC9kc/TRvI6DxBrBcTJlrO8nkzS3Laj3KkvMSrFlNdfUtbwQivKEngIqqO5OgiuWWaKEcCerfE6jwY6m5rq+5jnuMjEUl5zt6J+RwezVjjadefodfTTcfj9C4Jk49VWm4vo7FtF2Wwa2PLqai/zEabSRPtfpr4ZR+tr+Z7RZ7CjFRgkcHw7p5Sjz23dz1FOjypdWePly3k9/DjrFOmmkmaYMjTg2i6NOxydk43ZfT6epCFMuhH0NyMVbC6LYlcUWI6RzqaY0yKZJGmTWTTQfkfuZkXUHabXdGoxl4vAANOYAAAAAAAAuAGHBEbItmkRZCRNlckgiqWxBq5ZLcrdyoqktzNUsjXLYy1cXLEZ5MingJsgm+xUSZn1DtJlrd9irUd/Q5cvjtw+q1kx8R4TT1tPmiuWqtpGqLuzVRs8Hk3Zent+Mymq8FqNPV0tZ0q0eWS/Jlaye81/DqOup/TqR9n1R5LiXC6/Dp+dc1Ju0ai/qenj5Zl1Xj5eG49zxhK6ixcsE0zs4HSldFqRmg7T33NK2uWJVVaNyEJNUmi6ptYzLCaJVizTtLJY8lNL7S1PYQqLItIse4mvkIUY+bbYvS2ILDLE/5lhUtsEb/wAwbXUqlJpWKgnLFiEVzPYWWXRjYz614UYq5ZbYErDbXQrJ2V9wxbd4BXYdNiiqq7ZMUt9zTWbVzMleSMVrFt0iSSL6srLcjp1ywsRrS8xudRm+s1Vq5GCFPLJ00YaWLBCbJXwyuTKRFZZshZRMtJXlk1PCyxilV1Hcyz3NFR4M8tyVcVumV5G6k7NZ6mPSqyualK3Q1izko4kl9eMukopmaN5Wgt5Oxp1vmowmls2h8IoPUa+F15Y+ZmeS67dOOfLUeu4Np1R08VbNsnWjmaRjoLkgkbNInKrzWPnW7r6cmo6FKF0aFSxsFKPlRoSVjrjHO1TGnYsUUTUR2NyMWoDuDFezKiWX1sTiVKWSxMsSp/BKnLlmiNxXzuaZbgFB80E/QZpyAAAAAB1AAAAMHQTQxPPU0iDISJyIMIqkyt7lsil37FRGRkrO1zVPYyV2ipWZu7I36CbuxZKh5ZXWs43J38uSNRXgzGc3G+K6yZo73NVEyrBqpZtY8WT6OLbCN3gdbTQrU3CpFSjLDT2CizRFEi14vjHhqrp+atoU6lLd0+sfbueffzfqfWOVPdHF414aoa9SrUEqOo/iW0vc9GHLZ1Xk5OGXvF88mvzLqM+ZIt12h1GirOlqabg+j6S9mZINwn7neX7jzWfVX1cPBll1NU7ShjcyyxLcVIlT+0nsyFP7SQVO40RSJxZUF3fcnGdmsFb/AJdRNhE5y7PBW7yYneTLIRsPV8OMUkT26iuF+mSoE77kr5WCA49rhFkXZN2CWEFrXFU2uVGWsyFBc9QKzyWaWP6mPa35GyOI7dDPVeWXyfkwzLUd+hu+MxU+5ZH7UVFl7RsYjR3sVzZOTIbyFIt06t0LptWRCmrRQ5mol9Vz2M0ssvm2kUbszWo2ULKO/Qm3ghTxHcJSNRio1pJ0ZR+Tq+G6VoTqW+52OJUldbno+BJQ0UH8nDnvT0/48/2dyn5pJXOtpYKNsdDmaNXlzHVo/cjxyPba303jYugzPAvizti5VchSZHmFzXOjGgRYcw/dEVFZLI4I2JRRYlWITtcaBmmWrTu9O3Zlhn0z8zRoLHO+gAAqAAAAALgBgEwsBpFbIy9ibISCKpP0KngtkVOxRCWTFXzKzNsupjr/AHFZrJJ2FclLDZDPMVCvnfqDd7rpYTW5G98LBL3FnVUyVpF9CWSqsrSZOg9jxZzVfR47uOjSdtjVC9jHS6GqDdzEbrTHJMqptJblt08m4xWTX6HTa6i6WopKcX+aPEcY8LajTc1XR3rUt7fij/c+gSasVSjGSsWZXHxjLCZevk8G1eMk1JOz6FFVWke947wOlq4urCKhWW0kt/c8TqqM6U5U6itOLO+HJMnl5OK4VVT+0a+4hTwpImtzo5rltkjf+YOV0R3Kh7hYEiVrAEbbjuyNwQErsdxITv3CJJu5OOHexBE+m5Spra5GfaxKOIkKrsipGOpmRq08eWJlSvU+TfCNorsZx9ay8Ko7JmWo8l9RmeTuy1IUSV/QSwhN5MqJCgsib9SymsphV8V5PUhJk21YrkaYVVH5SuCvNEqjHRWbmW/poTSiVTkTcmUyZazIg2ep4TjRUl6HlT1XDMaWjn8KOHL49PB67+lT5EdGjiSOfpbWRrjKzXQ8z1uimWxkZ4yxe+CSkblZ0vciPOU8/qCkPknxaYu5YkUQd+pdFm4zUopkkhRH8m2EkgBMGVE9O/3hrMdD/GRsLGMvQAAVkAAAAAAGAQxfBpEXj5K5FjISCKplLyXy64KZYKK3kyV1c2SRlrFZrFN/qV4TLai6XK5JPHTqEKSvgraeCbb77EW7gQrYt7CoyyFdlVOVn8nk5PX0OLx06MjXTlfPQ51GRspzSW5xdmpSazcl9TuZvqYISqXLtNNU6lh02pGL6vqX6ZtvcsrNml04Jrv6HnfEHBo6yn9WklGtFYfSXoencepRWp3Rqbl3GLqzVfJ5RlTqyhKNpLDT6MOp6XxRwxRvrKMcr77dUeZbwenHL5R488PjdJcyQoyu9iLfoSpq7ubYW7IV7sbk0sle5USvkk+nsRzb0He6AmmkiP4gv2BthElvckrXK8lkcoosTsuxTVfleclknbp0KK8vLhCpFVGN53Nl/IZ6Csrl0n6DFahNt9Sl7k5Mr6kqwxA8CvcigvpK5Si6OEWJUqjtgrcsBOV2VuWBakiEnktpLBTuy6OxI1TkyqTRKTK3YUgZ6rhT5tJS/wC1HlD0/BJc2jpel0ceXx34fXo9P9iXU0XstzHp5Wdv5GpO55q9cb6L5oZJSnZGbTT8trhUqWeRtZFn1PzJ05XZhVRNmmjLKJKtjfSbL4GWkzVBo7YuOS1YGiMXkfU6OaSyDEgbCLNOr1UazNpvv+DSajGXoAAKyAAYCAAAwC6jA0iMvUrkWOzISCKpFUkn0LplTzsUVSM1bPwaZmepaxWWOonnJVgtqu2f0KerwEQlgWLImyHVWCz1TqHeRXBPmJVvvCmtv6njze/jX07pdzQpNLBVBNoc5cqOTum6qTQQlKTM9+aSRqoxGk2sinc1aaPnIRjdGnTwtI1jGMr01qDaTsQqU1yvBqivLsRnC6O2nDbz/EdPGdKcWrxasz5xrKL02pqUuzx7H1XV08M+d+J6H0tYppb4GHV0nLN47cbd/JelyrYopq8i653eWlJ36iQr7jS9SicdgvkSYfJUNDvgSYlt3Akrlkb2wQSb7FkWu/QsSoyk2rGeo7tItqO2SqPmqX7EqxfTxGwSbsCsRm7lZ+0GRGyJlo+o4pZESChbk0QJJ3LERncqkyyoypkqw43uTbsiMcIUndogG22KzeFkupaapUtKzUToUNFFRu9/UzcpHTHC1z6WnlOzk7I73BkqdJw/hZjqRVOODRwuTjWmn1SZzyu47YYzGvQ0XypXZpU/KYactkaozxd9jz16Y10pqH5FGo1Cva5jratRbyZY1ZVZ+hGo6dGd+puob5ObQVl6m6lJtIyro05LBrg8GCi7myDZ3wrjnGiI2KN7DOriaBgg3aA0ab7n7Ggo02XJl5qeOWXoAAKgABgK4B8gBgBjF8mkRZBk2QYRXLYqad2WyK5ICmZnrWSZpkv0M1Z3bNJWSr5olNsF0/uK2sMMq2n06iZNrPwVzaUXfsS+NY+stR+Zjpt3ISbuSpnkze/Bsg8Z3I1FlhTePUk030Obqrp4kjdRV+pljBrpua6GHYiNUYpmmkkpKxng7WNNB3mdMXPJvivKRktya2Qnk7ODFXhdHifGOl/5f6tsxdz3dVHnPEtBVeGahdotmftq9zT5xCyVxtkU8EoQnP7It+yO+3l1sDRb+x6hr/DZGWnrx3gyfKL8KigWSNpLeL/IjzWZrbOqtWARXzkozQ2ml0fYd7EYNSY2rGkVVn6ipKxCo7yLI42Zn7X6TwQchyfqQbLUgvciF8DI0cR3sCwKTCH1JIrvclcCFRu5Ec3diisEVJs6vDdApRVSqrR3yc2hHnrRW9mep0un/aYxU35f4VhI5cmWnfhw32zVXQpWSjzLoo5FUhqK0bUaLgv4p4PSUdDQoQVoRcu5DU8sU8fB57n+PZOPfryGr0+ohPknJPHQloFOlqVzbNWOvqIRnO7RiqRWeVZR0mW5pxywky26lKacVklX1H04WvvsYdPUulkx6nUOrVai8PC9EY+O66XLUW/VlXq7+Vfqb6LUbWscuFWNJWvZWNOllVqyX06cuX+J7DKLhXapTWxvoX7nP0tGWLo6tGnZbfByda00Vk20sGakvQ001szthHDNemMSGdnE47CvdjQluQa9MvK2XFWnXkfqy03HK+gAAqAAAAAAAwieBgzSIsrZNkGEQkVSLJFcgK5GepZX9TRIzVcIqVkmldkHiJZO17kGr/BUV39Cqs/3bL2rW9jPWfk36mcvGsP+mKX3bjhjJCTyOO9zyZPfjGylI1Qz0MVF5NtN7I5ui1RtHKJxjbYccosjF8yAmljc1aX7zO7cuxo0SvI3j655+Oh0FYfuHc7vOqnFO5w+PRT4dqP+x/yO7LZnD8QNQ4TqpP8A6Uv5EV8y0Wm/aKqw3Hses0OjpxikoLC2SODwe7mlbY9TSmqdLNjnyZXenXhxkx2l+zU7bIqrUdNHDjFlkalXUS5YLlj3ZqjpoK2Lvu9znvTprbkPh8KzajTSj6qxnn4elVxTUL927HoH2iuhdQhUf3LcTOpeLG+vLrwfWkrrUUvazKNR4N4hTi5UpUqi9Hb+Z7ynTcla5P6TisP8zpOTJi8WD5jPgfE6GZaWpZfwq/8AIonSqwbjODUlung+n1FytNJ39SqrTp1VatRUr/xJM3jzWeueX+PL4+VNP6juiz4PoVfgPDa15fSjBv8Ahwc2t4Y0kbqnWnv6M3OWfbnf8fL6eOZFnro+EZy/96KXdxsVVfB9RJ/T1MH2Vmi/1xZ/jm8qNHU1Xh/X6dNypNpdY5OfOhVhiUTUsrFxs9QvYi33JNNEDTJjREd1ZsCD3JdEJK5dpabq1PRGbdNSbadDSfOsXuen0UlTir3uzjaVqlJW7HQhq6b7c3Y82dtezjkxjtuqsWMteqpdTKqs6lvpxbz2Jw01afmtyu+TlXWbZdVVXNh3OfWqSTfLlvpuduPDI1J81Vv2Rqo6OlSa+nBL1RqZyeJ/O315/T6TW1aTVOjJOStd4NVHw/qX5qlSEPa7weipxSZoik0upP6Vf5yeuLpuC0KFpTh9R/xPJ0Y6VR6G3lwSUVv2M931rqeM1Ojyo1U4WigUVcuiunqakS1OmtjRFWKoovgjtjHHKpx3uDGsIRtzPYSD8IIitun/AML5LCFBWpImdI4X0AAAAAAAAABh+RXwN3E/Y0iMnZFbZNkJWAhIgyTIsIqnexmrM1SM1UqVllnZkbFrWXYhNJlRCSuZNXiJsZi1mxnPxvj9c+/mZKLxcguqsTTtg8eT34rqfc3UXlGClvtY3UcLcxXSNtPaxop/0MtNmqmxEqUtjTokUStbBp0ll1OmPrnl41v2AjcLnRx0JbHnvFklHguoX8SUfzZ35O2TyXjSv/y1HTp5q1U/hA04vD6EYQTikdCNNN+Zso0tNwpKNsmtQ7PJ57d16pNRqpTUI2tZFqmp4uzOoWWG/YavFYX6kkNtdKy2X6GlVVhctuxgozk3dtminG9RVKj5bGtJa3U5YwmWZva98dyhVYPZk5SSNMCaXVoq5F8iknzX/Um9rKXQzWoplTk89R04qOZblm/sK1klfqRpCrVb8qZRGcrvmbSRc4EGk+nUlpIsj9OUbSSfuU1dHpq106cJe6QdbCu7+V/Jd0sjBX4FoqrblR5W8eVtGOfhnSSXkdWPyn/Q7vXuTbt0L88p9s/zxv08zLwrQ/61RfCKp+FaSTSr1L+yseqIpXY/pn+p/LD8eUj4Vj/15u29oo26Xw9pqMbSlOVzvWSWwRSb2F5Mr9rOLCeRy4cI00Y/4Kx3uycdFQg/LTSa7I6tr5INK+EYtrckZqdFRylkm6VumOxY1tYbediLtTyJK6K19xpmv72Kn99u5dGyhZLcuhLJQ077bEk3G19wjVGV8WLYlFN36l0JXlubjK2KLI2vcqUvQsj/AFNxitEFdZZbFZKovbJajrHKpA9twFIrJpu1gBew49iK3UsUo+xIUVaKXoM6OAAAAAAAAAADCRdyQmaRW2RluTaRCQRXLBF7EmRAqkUVC+WxRMqVS7EJLJY16EGVEHExa+L5Nje8mTWxvTeOhnLxrDquNfYtj0/UqeHYsX6HjyfQx8XU077m2jjLMVKWbXNcLbHOukbKb2yaqb6mSkut2aoxdhFq9PGxfp3aTMjxYdOq4SvfHc3K52bdLmQua5n+spLDIOq0zfyc/ivqztHc8J4h1C1HG6dO+KUb/LPW6qvam3fofPnVeo4xqKneVkN7TWrHW+tyJd7GvTt7y3ZhotLLXme3oaI1ru0Xscno22utFWzjqSVRz+2Kt3Mcm3b+iOhoYybs7rvlFkYtWRSV03n+Q3Bu6bt7E6yUPtlZ+pHSpufnb37lqRfRpuKTvL+RNuSe5qVpJQSITp4du40bUc91ZjTSu9iEoNX79ilzlzZzYjTQ6jva5Dnz6ozqo08jhPzNX2INCec7EZNdOpXGTfWxDmavkKulFWaIqLVrEXO6sySmQPPNawr3Y1JOWB3ST7sGyUv5hzArPZe4d7ANvqkPCTYoq2zFUVn5Ro2n0wKV+gt12HJXVhoO3p0Fy+gc6ikidOQ0bR5Wr3F9Lm9+6LrqV+5KOLYujWk2yOLWNyHKm9zdKCdsb5Kp0k27DRtRDDLoSV3noEqT7EHCSzYapuL01fcsg7sy+ZP2LqUsepZUsbISt7F8G31MkJ75NFNs6SueUWN2DcW6sNYNsJrYdP70hL7UWUY3qr3KzfG0AA24gAAAAAAAAAMRFkmRkaRBkJE3YhIIrasReSbI2wBVIoqb7GiRRUKildRNEmnvYQRC1kU6pXpO5pZTqP8ACl7C+LPXnZYn8k4vGxGriqxwldO/Q8efr6GHiyOM3zc2UMmOnFOxtp/arHOusb6TWEaqZipNmyDsSLVvLzXurlM9NLelJr0lsaKdwmnbE2vY6xyrmV4ami/qUVaay4X8sv7EtPrI6mDdnCadpRe8WapwrreUZLtLBzdZRcair0YtVFvb8S7MzYsqviuq+nppvsmeQ4anz8/d3Z2ePTrVNJ+7pVHzYfld0cPTwq04JOFRf/Fm8f8Alzyv+zrSm2vI98XNOmpqXd+xyY1X9lnY3aPVwoStOas902Z038tu3QopWVjp0aUYwvZGDS67TVLLnjk6MKlN/bNEhWPUSm6t3HymihB/fyr0HUhGcrXj+ZOlzUIpXvH0Y2q6PO901/MG3so/LKa2v01K31q0KV9uZ2uVrWaao/3deEr9poqRZO0YtyeSiMG8tlzSklt/cWFiTt6GWmVwbbdhONvaxpSUmKULppMDNd/H8x5UW7Da5bq3Uny3j8EFMpLl2JJ4TvsQqQ5berDzW+bAWrKwS5nf4I25UEcx9bASWPkSbUsPAsb3Gld+/QCxZdhz2uEVeN07MjJu9rgCxbOC2yvchBPP+8k4Np2AUlZfqNbKyx2HvewdH3KC2b7Di8+w07tCeOgRNSJRXrkhBXyyx5z12NRDkrXVrhGKaz06ibvuKMmn8FQ5U1JLGWxKjjBZG1007mjlTV7FklZtsZY0336F1JuKySlFXukCi+hfjo+W1ibsJ/ekThHAuS9Q0xtb0sXaZfvLlOxp063ZqesZeLwADbkAAAAAAAAAAwsiyRFmkReCDJshL2AiyDsSYmEVyRTO5fIqkiooknfsRZY0ICsqr/4UkXtEKsb05eqBHmtR/jMhHCLdZG1ZlMcnkz9e7C9L6UnextpPy3MFNZ2OjCPlVjlXaNNJ2saoZzkzU1sa6Mb/AAItaYLBKUowXeRBOyu2VzfU3tz1sTnd3byyOOxXKVg5l/cztrRyskQ5FLNsDlK7wy2PLhEVS9LTe8I/KM9Thumf3UKbv/lR1OiKpx8w0bcDU8D08ryp0kv+3BknwzUU1+6r1oW2tM9WlHkaZlrJZXYu6mo8xGPFqTtT1VRrbzJMhX1/F3L6MNX5urjBKx6GpDmi1C8U9+5mWjjCDUVb+aHyp8JXk9Vp9RUm51qlSrPrKTuZv2apFXjddj01elCF3ZHMqtt8kVg3jyVzy4oyabiGv0n+FqKit0vdHVo+JdXJfv6cJS25lhmF6WTe3uWx0UnDEcotyxTHDKO7peK0q2FV+nJ9Jqy/M309RNPzK6fVbM8otHOyadv6E6Wo1GlV6dV72a6GNT6de/t6ic4vMcPsydOrFq1+pw6HGJtfvqW3WP8AZm+jqKGoXNCav2eGQdCtFShghGKcU79blcHJKyd7d+g41fpvzbfyILmuaNhLfA1KMleLE03FY26lDkuq9wgna4QTvZrfYtiuWST6hAnZe4uXN/0JSTT2G7NdgqO+F3JxjZkVj3RbEIHHN0DWzHfG4ldPa5URkrSvfGxJJ3XboF73X6E1bl/oBFKzwDun6A/zBb7ADuumCKdnuSct7/HqVuXm2AvWTRGV4W9LGOMnzIt5rGpUs2vT8qsSS6orUse5OMsG2F0ftHEjF3SySW5WUllmygrU/dmWKNsFaCXoaxc86YABtzAAAAAAAZAAAwv0Isk/cgzSEyD9iUiLQEbC3Q/gQFbyVSRc1YqluVFTESluKwRFpEJrDyWW9SLW4HnNcrVnczxtlmvikWpt+piws9zz5zt6+O9NNFG2jd9MnPpt7Wyzoaff1OFenFspLua6dkjPSSRfG/5EhVkvtsVSwncs+DNWna5aRFzu7DvZ7mfn83uXU/UyqXXf3LYLKZCNyyNlb2Ki1N3SY3nKRGHmk36FkpJYKiHJfqUyheRo5klgqcZSu7WArUIx3ZjruUpuEd7HQVO7uwnRje9tkNG3BqaGpWqu/wBpF8MSSdspndjCKvbcpmsk0u3OekhB3awQqpJJ01t/I6k6PPi26FHTJ4tZk01tw3ppydrWTdwjwxOVnnn29z0EtMrvHsCpeVK2Vkdm45NDQRS5ZRWMMk9BBbx/I630/wB413VwlTTiiaq7c2lSr0opQqc0V0l/cnKaStVXJ/m6fma1G942t1KalGVSLaXpKI2mohCE4eaLUo90ShUvKyl8MNJoqiwm4fyZpnoZv7opvusGpWbNKYuzWDVeMoozOnJbq9i2nZrO/cInzJuzZJbW3KZX2a+RqXZ7dgaWuDjdxeOw4/qQjV5upO6vlFE453Y36YsRUs9hT5l1CHJNO43LFuooyutsCk1ezAIN2aJJK9+xC2VnBKzS+d0VEmk4tMqS/edrE3fkWMroCj1sALl57LFi1LmVyuybwWUtrPsWJTTUYllNudlbcSipY2LoJR3sajNTS5IEk79CN7tFiWdjTKcE3JI2oooRvLm7F51xcM72AACsgAAAAAQAAwAwMg99yTIs0hMgybINgRExiAg+hXIslsQkgitkbEn/ALuIqFYTV0SvgQHA4uv31n3ObUVreh1ON+WXM+hyufnSOOb08fi2Dd1u2dLS3UfMjn6eN7bHU00fLZ3PNXqjXRuzQsWZUklFPboRnVtBEVOrWUVZMw1JObt3CSc5YFBW3TIpKL57vbqaF2TIKzkl8lsYu9/yQE1t6DV3132FFd2yaVuvwUTpO183ZZZ/c37IrjbohppvLwNotwthcybtchKSxYi7rbqXaaWuSQm21chh/BZZ2QRUovA/p3/MttePuNw8jKuypwXLewSjfZbFlNJYfQeFG/d/mNJtWsicLO9sWLYwtcLZGjai2V7CdFuPqXWUXzPYUqsYrLJpdoRoLmJqlCMrXsVS1KzyZ9jm8T4xQ4eufU1VzvaEcyfx0Em/C3XrsfUiltZx/U4vFvFGk0adOi/rVv4Yu6j7s8pxHxFq9e5Rpv6NLsnl+7ONUqWwtzvjxfry58/1i6ev8RcQr1lUhXdJxeOTCNuh8XVYpR11BVbfjh5X8rqeZWWWwidLhjetOM5Mpd7fQ9DxrQa1JUtQozf4J+V/qdCyebZ9T5a2krGrS8Y4ho8UNVNRX4ZeaP5M55cP47Y/5H7H0rkvn/aJJSWzPG6PxlUjaOs00ZL+Km7P8md7Q+IuGauyjqFTn/DV8r/scrx5R2nLjXW6ZV/gk1226pjhUjKKad491lE1Dqiab2os09nYbysP+5eovvYbgpP7VcaTbMozaVv1JczTtJWZeqMV+HHuT+mnHFvZl0bihR5t1uDw7XLvpuPqv5C5LPYaTavlSySjnKWOw3B5/QlG8c74yiyFqUWvmw+ZT2K27yWPcsikmaZWwwsl0FdFMcmmjDmfojUc8rpoprlh7kwA6uAAAQAAAAAsAAAAfAAYGRY37CZpEWQZJsi/YBMT2B4DoBGRXInIhLIRXJCG0IqF1B2C5EDk8ahdZ9zh7O2T0nFafNSv2weeknf1OHJ1Xq4e41aam7J3OlTfKl7GPR2aSNzieavUKtZuD5RRTnBMg0727l9CDSswEl/IdsXsWKPmdiT+3PUDPjDsXRaUe+CMYvr2LFZQ7tkVGDuTis7EYwLEsYQNk59EEXjCuwqK3uThFvCXuVEUmneTJpXXuTVFPLLIpXx2LpNquVxknctinLcUkk3+RZDC/oWJQk7kmhE5PBUVtNoljFwbUf6EL5u8kVNyS62uVymo5/2iE5O/qVzxBzqzUIRy28JIm9mtFUqSqPlgmZ9TPT6Ol9fWVlBLZN5fwcXi3izT6ZSo8OX1an8f4UeQ1mt1WuqupqKspt9DpjxW91yz55Oo7/FfFU5uVLh/khtz9X/Y81Oc603OpJylJ5beQUPQkonoxxmPjyZ8ly9RbahYioOTLbJ9CWEbYQjTUcsJSwEpMrbATZFknki8EUEkRRZFAbuHarVaaaen1FSnnaMnY9TofEOtVo1lTqr1Vn+h5bSQzc6emje1297F+MvpM8p5Xqf/ADJRi/32lkv+2SYR8T6HmzCsrf5V/c4GqjdvGxgmrWx6D+WK/wBso9h/5n0bXlpVX+RbT8R6Kf4KqfqkzxlPK/r3NOnjeW2Nh/HE/vk9guO6CUbuU1f/ACMFxrh1/wDHt7pnlqslBRSKGuZSH8Yv969rHiehksaul+ZJa7RteXUQ+D5/lL2Z1+HvmhdvMck/jF/+i17ShppaimqtOScW+uLlq0db0/MnwZ30EfRs3nO4SNzlyZaWmkvua+DTFKMbLAwLJpm5W+gBZGVAAAAAAAAAAAAABz2RZJkWaRFkW0SZFgRYAxXwBGRXK5Z+RCQRWyJKRG5UK/cb7hYVsAUauPPQkrdMHnakLVXY9NJXOFraTp6h9uhy5Z078OWroaLySuzfGXMrtdMGGm0rLubFNdzy17Ym4ZTNEEuUpalZOK/InBtRSAuSv0BxuSi1foN5/wBCoqsnKzROMUnkfLkjNtO/WxFG0icVZ+hGMXv1uNvGSAWW3b5JJO2+5HaPoLnvhMC3nwkTi0luULJK91YbNJrPm9CadlllfNJ4SvYTjNtKUreiyVFkqkdh88nEgoRglj8wlUUc3AcsPuR5knjc5PEuPaTRXVSpzT6Qhl/6HlOI+ItbrE4U5fQpPFoPL92bx47k558uOL1PFfEGj4fePN9at/BF7e76HjOJ8Y13E5/vqnLT3VOOEYvW9+4Jnox45i8mfLlkioJEuVBcTZ0cklYFYhdjUgJXIt3Ai2AmRHcRAmILgkFSii6nFMhBYNNKOfksStmjh32N9H8PS0jHRvGLsss10k8b4ZuMt2oSfU504pLJ05q8F7XMGoVvzNJVNNXdjfpYow0fTexu08uWm79FdgjPqZNzwtgoS829yvUSam8j08rVPRorP2dek1KWLZN/C398bdCipG8ld4aNPD6fLVvm1hVnr3HApJ6SUe0jpnI4BK9Ca9jrnny9dsfAAMCKOoAAAAAFAdQAAAA6gAAAHPdmQZMizSIsiyWSL3AiJjYmgiNvQjImRYFUsEG7Fkkyt3Kg6iGFvUCLsjBxKjzQ50tjoWITgpR5Wrpks3NLjdXbg0MNcz64NaXM1YqqUnSqtbLoSjeDutkeTLHVfQwy3Gqnzc2OnUeVzSv6Cp1Yqyla/Ysc4NdDDe0otqF+pZBu2VllcLPr/qXRXLuVEorYKkfKvcUWk1kldPdhCjEjOHmvvYm2tkx8qe7Jpdq3CUkCpcqyWuaStErlO+LXJpTUXdZLIcq9/Up5r/czNrOKaTSR5q9aEPR7ssm/Et166PPGPuVVK0KcXKU0ksttnktf4virx0NJt/xz/sea1vEtZrpN6ivKSf4dkvg648Vvrhlz4zzt7TiXinRaVONKf16naGy92eW13H+Iaxu9X6cHtGGDjslBpYaO2PHI4Z8uWSzmu73Hf0IbB8nRxTTSE3gjfIMBuTFe4DSsgBAx3ItgO5Fu4CIATGyLClv0JxQkWwi3sEqdOBspQ29yqnTuaIJJZNyM2tFLM0k9jVTva3qZoNRasaYu9eKfa5pHSir0k0jm6tWna50qN3TslhMwa1WmmWLVNNdFg1p8tN2xdGaLSs7dC+14/AZYq+Vf1Cnd2tZWYp48vqSpYw+5WXQhJVJL9TdRioSivU5+izNKx0Kzca8EStx6fw9LE1/lTO2ef8OytWlH/Id845euuPhgAGVAhgAAALcAAACgAAAAAA57IMk+ojSI7EWSYmBFitsSIhCFYbuAEGitxLmiDVwiuwWJ2E0UQa9BSjgmJoDBrKDqRuvuWxz4xklZv2O1JZMlfTLn54p53Rz5Md9u3FyauqxwUutrPLZdGKc+uOxKVFt4Za4pZk0sWPNcXs+U0dGylmyVr2LKjd7t2T6LcyOvQi81L/DZGprqatyqUn7F+GX4xeTH9b6aS+2Pyybss7t9TmPiSivLTb+Tm8V43q9PpHVoQgs2d82RqcWVZvPhPt6NuKwse5XOvTpq85pLu3ZHzuv4g4pV31UoJ9IJIw1K1WreVWpKb/zNs1OH9Yv+RPqPoWo49w7TffqoOXaHmf6HH1fi+CutHp3LtKeF+R5NJvoPJucOMc8v8jK+OlquPcS1N067pxfSmuX9TmycpvmnJtt7thYdjpMZPHG5W+oiaJWEyoraDYk0RZFTi+ZDsQTsXLMblSoWAlYLBESVt8CJWwBF+4mvUlbcVgI/ADfci8BSYkgY0iKlGJooxyiFOJppxxsakYtWRyy5JLoQgvw3Jxu5Y2Nosp5nuaqd5VIyftgyxS589jdQ+3Z7lHRp2S5UjHrItx2NNPKfcNTG9LLy0FrmpWil2WSUpqML36bEZy8rKm20ys2oVbuYJ2s+pKydn1ITx1yGW7h7tWjndnW1UXz3ONw9uNaL7HerJTpPulcjUdHw/Vtr4LpOEkepPE8JrKGs0072tU5We2OWfrrgYABhoAIYAAAAAAXAAAAoAAA5zE9iTEzSIkbErCdwI2E0St6g0BG2RdSdhWCItYItZLGiIELC5SywWArtboRaLmrFclgqKJIrkmXyWSuSKjLUVmZqqNdRO5mqrDY1EtrBNeYiyc8SsQ9yojNXVzl8b1EKOi+m8yqYS9DqvseS43X+vxCefLDyoHrDLca2FurjW2xlpKKJWQkSKhKwiWBOwEXuDH7CZBFoi0ib9SLCollF9Ctk6X3EhVzQWGhZNIOXAWSQA2rAJiY7+hF+oEXYhJkmyBFgSLYIhFF9OIkLU6cfQ1UkuVYK6cb9C9LlxbNjcYNWV7dSULtMirWLI2jHmz2KhrEm098G2hbkVm7mOLwrKyNuma5GikbNM87/AOhbqFemZ6Ttb3yaq1pUl3CuJXxP5I3vH16lurjzNu6xsUX5UVlbfCUdiqorSbt0Jp3RCe/wBdo24TR6CjJSST6qx56hZTi+nU6tOo4ypvfOQsW0JuEm75hUTR9AoVFVowqLaUUzwVaHI6skvLJpo9fwGr9XhNFt/auX8jnm3g6IDEc3QwACAAAAAAAAAAAsAABzxDEaCbFuSsICINDACNgzce4ZCExbEhbgK3oJj+BNdmAiMtibsVsqK5Fcyx5KpbFRnqXuZ6mxdUdpFNRqxWWGpfnIbxv1uTqZyQdvgCupJRpSnfZNnh6snOcpPeTuew4pP6fDazva8bI8dvIlJ6kklGwR2I82SWzIqcVckRjtcOYqJfBFoL3Qr5CjANLuHwGQE9iDLNiLIIDg7SE0OO+5FXpgJbbBdGkP3FcLkWwBkWwvuQkyAkCWRIshEipU4miEWRhH+RfGODcjFqcEkiT+7YIRsyVS1uY0ghu7lqzF4sVLZE4vDyUCdnbOTdpXde/8jAnlM3aW/KCNlNWkjVKzpb9CiHosl0Xen67BpzNRHe663RkkrdLnRrRu7GOtHlW9gypva6ByVrjcbK79yi9tgjTBtpejudCjUTirvrj0OXSk1frc2ULXS632BHcqU5VNGs7HofC/PDRzpTWFK6OJKSjpYrq4nQ8NamU9bVpP7fppr8yZTeLpOq9OIYji6DIDEQMAEAwAAAA2DqAAMArniH1EaQMi/YkIBMRIQERvIB7BCaENieAEAAAvgrluW/BXN42KimWGVVHYskymoyooqGeoXVDLWlYrLNPcg91Yk99xPazA5nHp8vDpJbSkkeV7novEtTloUqaf3O5538HuyUiJOLTXsQJRdpGWlkR2vkisdSavY0iNgs+hK2AsERsHsNoAqIMfyICuRKKsN5EsdCKsTFddyKfqDYRK5G4ribwAORHLAlFEU4rBdTjcjBY2L6ccrJqRm1OCt/UtjH1CnG+SasnY2yeEr3IVHeNhysiKzZWAsh9iJRas+pFWRJK6eCoSXnXob9K27mC95LHybNM1u842A6McRVvkvjbkZng3yI02SpYDbLO13+Rk1ELxb63NUs3fyVVHzwwugZZJ/bj5Mc7Js2SWLJ9DHJXbzm+Ai2jiKdi+nPlmn2dzPB2Lb2yvzA7H7ZKol7WPQ+HpL9rpdLxkn7njtPU3R6fw9WUdTRcn1t+ZMvGsb29kAxHB2MQAUMAAABgBAAAAFgAArAIYO5pkgGIBOwrD9Q6ARH0AXQAwJ5HuIBWBgwaATwVSLGyqbKimRVU62LGyioys1RN5MVd3kaqjMNRq9yore/qOXRh79hdLAec8SSvqKUP4YXOPLY6fH2v/ABJ5vaKOZIlIh1ALAZbTi7r1RNdCqLs/5lieSxmrMA7dgA0iLDfqP4EAmHUNgIEIl6CYUhMHuIikx2DqMBJZLIoSLIxuWJU4RNFNJXuiFOKwXRVlujUZON7Dk72Fd9BXzkqCTbQRTUrg8dNweIu7KJya5UNySjYirDxLcIVry9DbQ/hRjSv0NunTeF0BHQgneN1ixobX0fkrgrWku3UHK6fo8htRIjmSY6n2pZ9SKaTDLNVWW9jJUV3jBurrN31Rjm+q7BFcFknJ4z1FHb5Co08AXUJJTSO7w+bhBOPR3R5vTytNeh6LRNfRT3swsfQNNVVfTU6qeJxTLTk+Gq31eGum3d0puPxuv5nXOFnbvO4QAAAAAADARAwEADuAsABhALBY0gsAAAhDBgRABPuACb7DEAtw9xsi2BGViqWUWyKZlSqZbFFQumZ6mxWay1na5jk/N8mis8mZ+ncrKPoFsp39GEkKcuW2MWu32A8pxmXNxSt6NIwSeS/VVPq6qpU/ik2Z2SrA0ReCaE0ZaQLIO8dyGwRdpBV8WSIRtsSWDTB7L3F8ErBYqIdQJWFkCImTI2ZFQaEiZGxFHoNCJRywJRRopwsiEY7WL4pZNRmpRWP7E0s2ILCJdn+hpDd0/ciG9xXtb3AG/Qb2QkrsG07+wEovGCRUsWyS5rTRU0vpK9k8m/TK87W3MNGzadzo0E1LG9gsbNoQvlsr+ospLoTn9i9DPe09+gaoebczIxa5rB0SuxPEr7hFOpusGTDv+Rpr1F3TMTKyn9r9Ctybdv1Hm1+pCX3O4RKH+IrM9LpFy6K/oecpRvJLfsenglT0MV3iRrF2PCdV/teop/xwjNfyPUnjPCM78Wku1Fr9UezOWXrrj4ADoBloAAAAAAAADID5AAAwgAvY0gYAACYhsQAxDfcQCF1G/cQCAZFgQk7FMmXSKZlRRN9CioXSbKKtkis1grtNvJQWVn5iBWUX3MnFKv0eH1pXzay+TW8HJ8Q1HHR04fxzz8FHm+rIMli7EzDURuMQWIptepHoO4NASg72LormM0XZ3NdNprZYNRMkZYFctksbFTVmWpDuNWIJjv0Js0lykWn3HfGAuiohZ3ItFz6i5SKpa7IupQb6DjC72L4JISFpxiSsr7iW+2Qe5plNXY3iJCOMXGnh43KErpYHZWI7IcX0YDiKW2Auk9+pCTe3qQSuknkjKWRPKIt5A26Zp2OzQjeHMcXQpupFWO/Sjyr1KsKrKyXaxRBZfaxZN+pRdc+WUOUoxZROe6T9SNSburdyirU810WM2lOScmrFMpJbojUqJsqbb6hlcnzPbctcH8ldJYTZsVNytjDKg0dHnrR9zta2ooclO/4TPwzT2fM1sQ4jU/5y/RGXSdR0fDVR0OOUP/q80H+V/wCh78+dcMqKGu0VbFo1kn84PovQ5Z+umAAAMtgBZABggQAAAABgAADEIfQCoBIAATDcGDAREbEAgGIBbCY2KQFcyibsXSKZlZUTaKK7tHcvllmevezKjnTd28kfklP7hbFZRlc8/wCJZtVqMO0Wz0Ls8HnPErX7VSX+QDidQYAZaJiZITIqPQaeLCBhTaLaUipO+5KOJbliVru3sRlG7FGS7EnjY365qnFojd3LbXRFxyZ01srvYL9AaaF1CpXwO4l3YXAnF2JpvGSq/oSTCJp2e5ZcqurErtIqJ4XwNkL3Y+YoG2JZE5eor/qBK+ckZSy7g+1yF8ZCHdjjumQV9y2jG7QHR4ZTcq1+x2Kj5YdFgyaClywTaJaufm5UVZ1EatRcryZ3Ualm+wqkrwx3M86lvW5pm0VKyWWZJ1XOVr4FWm3u9yuLV7jbOj5s2sXUqbbt3I0qXNk3UYXSzcQWUqPKkvyNNKOUOCvH2wXaeHNNcu3UVqRu00VSo3fY5usl9ScsXl0N+qqcsOSLtg5Eqq+7rckayq/RVHCajPCjJSXwz6lSkp04yWzVz5Tb6t3Tx1Z9O4XJz4bppN3vTj/I55xrjrUAhmHQAAAAAAAAAAAAAYgAGVCEMAEDATATEMLgRYhsQAKWwyMiiqRTMtmUyb7FZqp7lFfKL3uZ9RsEc+f3Ct6k5biKiDR5Tj8ubic1/DFI9a0eP45Z8UrW7r+QT7c5iGw+TLQBh8jvYKi0JkrCaII7EoyyRtuAVapF8GmjJF/kWxlZmpWbF0rpibyNPmQnHBpgWTQnHI7eoIml2ilgRP5CyvkaNoWJbjtjYdl3Gl2jdk74FYFnA0m0rhzdbkbobKmzFe2AbSVhX/QAv0DqK1+g7ZuA4K/Q3aWlfNiijTu7nSglSglJ2KNcJfTp5MdWqm+a+7FUrtxt0KG1y98GpEtOc5N/BlqzsrIsq1Fyu26Mk5cwvTPqM5XXclQi5Mr3bOjw2hzNvsjMaW0qC5b/AKGzTwSm7K2CDXJDKJ6S85yxstzRIsi3KbjbBvoQVKPM9uhnpRX1U+iRY6l7XeLmWoo1dRuTt1Rzpr16m3Wyw0kYr2t1NMWtV7Qg49Fk+geF9T+08Fou+ad4P4PnMZNxPWeCdZFVK2jb+7zxX8zGc6bwvb2ICYHJ2MBAAwFcAGAgAfyBEAMgABUILg9wAQnYYgE9hdBiv0ATENsQC2IyJEZblRTMpkWy3ZTPcqK2UVy927meswjFJeYLXRKW9xWKhfJ4nicubiFd95s9tUkoU5TbxFNnga03OrOT/E2xU+1bEO4GWi6AGQ3AYgaBAJq6FYnuDQVXYadhtESKujKxdGXMZE7FsJu5qVmxoUWxOL6CjJvqSaN+ufiNmg2G+/YUvcBLuwugdkhMB3GRxZW7j36AHceWLfYlFXATFjuScXf+wlBp+4DirllOF5JW2Y4w7o2aakpPneEtwLKNONKPPLHZdyM6ik5Sk8tlWq1F5pbR6IrTzuakS1Z9Ru6sJtqLuFFWlkJvp0KwplZxMstzZKLsZ5JdEZreKEVk6nDaip1Vd+5zV9xtoR5Y3vYQrraiH1IJxxdkdNFU6c7KzZDTV74exfNWk036o1pZUoyawvkHLp2KYys5X7g5S5Vypsmj5IamSs7vY5/Nl5vbsdCvRcqPM3eXXsc+ELu1rDxlqpPy+dWi/wBTp+GpSpccoz2jzcv5nPpRtRy/Ma9FXcJxdvMpJ49CXuNSPp+4EKUuelCdrXSeSeDg9AAGACGAAAAABgBABkFsMW5UHyF8AGwCFcbyiPwAMi9xsiwAMBa4vkBEZEiEioqmUSeS6RTLuVFcngzVWaZMz1EEZZbgElaQIqMXGJcnCtQ088tjxMt7ntOPf+k1fSx4qSJSeojuIaI0NwGgCEsj3BAgGkA7hYoVkRcbD2Y07kFbTQJtE7ITiF2lGTL4VE7GTPYlF2ZZdJZtsISXqEZXsyd7s3vbnrSFhWzsTflexOnC7uBTGLuWRgrjat0BXC6EY2vddSSiu5FuxG7GzSyWJDW+xC77he3UmzSxeZpepqrTVGjyLDe5mptKd7bEa9RzldmolVSk5SJ02rq7K723GnkhY3UeW11m4Vd1j8ivTPHKaeVRSNsM0U5XRTODTsaJeWTsUVXfNyVYreHg0UJc1uZ4RnV7ZLKb6JEi10aTSxFbo0ut9qk89zNQpy8km/KSvvGK9U+ppGmpDzJyeHlWJ005eVYW2A06dSlyzXmRfSjy4sGpEVBUo2bumYNRp+Wo3Bex1K0eb5WDXw/gGt1qTqw+lT/invb2JbJ6a/HCoKVRqMYtz2SXU9XwTw1UU4anWvltlU+vydvhvBdHw5c1OnzVP45ZZ0Tllnvx0xw/RawxIDDofwAgAYAAAAAAY7AIAMYBcCoHsJjEACAT2AUiI20IBNgwDoAPYrkTdyEiopk9yqSyXSuVSKiqWehnqrBpZTV2CMUlkS9RyBbFRg46nLhNZJXtZnipWZ9ElCNSEoSV4yVmjw3FNHLQa2VJu8XmLXVEp9sTDqN46YErXIp9AtcBpPsUINgSySZAkwQh4KHgixhhkCuO97isLboFS6CsCY7hE47E2ypMdy7TS7mvFF9C3cxJ2yW06jTNSpY2Tim/Yhyq39QjNS65JpW69DbG7FThb+gnBFslf27kJSSZNG0VC/5ByIle6QWuNHyQbt6EMt5LGsbdSOL5AhZkoKw5JWuyCnJytEitEJcstzSp3h6vYxqDeW8mqhG9sZNxmq5pqaTbuyFanJUr7F+p5nNZ2I1rSpLObBPGOlnfLNFNO/a5W0opOPXctpXsmZjTfTajCMWyxxTalH8zNGSaulctVeFP75X9DSNVPEr9S91o01z1JKGc3OVW1spJfSXL0u8sptOrO853fqRrbu6Hi1Olr6NVUuenGeeY+j06kalONSDvGSuj5Lp4qM4q/U+h+GNX+0cMVOUrzovl+OhyzdMK7Ig2DBh0CGIADoMQAAxAAA9gAAyAfIAYwEMqAQABFg2NkQEyJIiAbBkTAAZCXcmyuRUVMrkWSK5dioqe+5XVyixldRBGOSIpE6iyRTsVDWDyXiz/ANRhn/2z1h5LxX/6lD/7aIOJzNMd0RsKxlpYrhexBSaHzehTSyLTXqNlakiasXaaFsA10GnncT3uAW9CJPoIBdBNMeGSsQV3GsitaQ1joFPI0/QkkuxFoILjuQ67kgLac2n8mynLm+45984ZfRm1Lc3jWMo0SeWrFWebYkpJTs1cUrqqnFW9ze2NFFyk7blihJ3ukQjJxm8+hb917CJVLbfMrrBVDLysk5JXt3BK0tiNRby2htkojG7+S/mclYjFPmsy2JKso2as7XLqU/pz2wUQXLLJOdanGN7pA0urvnyvyKFe+WVvVfwJv1eCqVapPrb2FyizGtEuRLzSS/oVy1EYfYrmfl6vPuNIz8lmMiyNacmk3ZPsTtNvcpaxvkupu9nnKItWRi7ZZdTSb+CMHdZVyWU1kuk20U3azbPS+EdV9LijpSl5a0bfKPLJrCOhoa37PWpVYvzU5Jks6XGvqIdCNKaqUoTjtJJokcncB6gADFkNgAAAAAA3BgABkAMdhWYxbFQCYMAFgQxdQEyJJkWAhiAoGVyJ/JXLARWyuRZIrkVFViuq/wBSxldXYIyTTIblk8kF2Kg+Dy/i2k46mhVtiUeX8j1OO55nxc5fW06v5OV/mQebYhsRlo0gyF8jQBYNnuOw7ARUmh876oLIQElUXYFKPcg0xDZpZddxqRUF7YuXZpbJLcWbkFNofN6A0tjMcrNFXNnYmpp7su00GhhzJ9QTW1wGicXYgmrll433LETUmthtu9+u5U5R7i+qkXaaW3v0HF/JndS/TcTqS6D5J8Wm93kb5Y5cjH9ST3kwi3cfNfg1utCP23fsQdeTzGNvcrjJdidl8bjdqakHNUlvL8hKKbH7D2BsKK7D9h3XyC99kE2Er2E165JYF13KIPOO5arJ4eyI4bJxSIL6d3i5OdnYpi7Mmm5R+00ytTvawnValyp+hVGnUcsYSNWl0jdRXd+r9CLH07w/WnW4LpZz+7kt+R0TPoKcKWhoQp/aoKxoOL0TwdQAApiAEAAHQAAAEAwAAMQAG5UBEbeBADIsd3YW4C6kbjYig3DqAfAQiEiZCWAKpYRXJlkimSKiD3ITsTdyuplBGae5XbNi2eCrqENKx5XxdJ/tdGHaF/1PVLHU8p4uf/PUv/t/1A4DEP4EZaFhgHwFSTGRJIqABiCCxFonbAgqFhPcmJpkEQAAo6jEmyVgFYTGDyAlvuWFawyxNBKFa7wTccXIIlfpcoBYu8jbuRtd9AhXuxXJKOfQUlYimpWLIz6FI07FlLGlO5JZRnjOxbGd+pqVixPkGopdQum8ZBrsVDaXcHy4YrNK1hOMhs0nzLsg54kOS/UPp26sdnSxV0tidOuuiKYwSdixQSHZ0u+s5Z2sdPQTX0Jz62sceUJJ+p0tC7aeqn6MEr6XwKq6vB9PJu9o2/I3nB8H6hVeGSpdaU/0eTvHO+u08AxDIo6gAAFg7hcNgAAAAAV/UAMQABUJhcAATyR2dgACLEAFDEABAyEgACmRXIAKiD3K5gARmn7la/UAAFk8z4up2q6er3i4gAR5tiADLQDIAFAwABpk07gBUPcW1wAqEJgBAmhNABFRJJgAVLBFpoACIk1cACpRV2TaSACs0KSRB2YAAltuDT7gAUmnuIAIovZkoyYAEXQqZL4WYAbjnUnfp0CV7ABplBN9h5us7gAUKLbwy6MbAARbUiuROO6NFColRnndABSPQeC+IqlxKWmltWjj3R70AOWXrrx+DoMAMugEAAMQAADAAE7XAAA//9k="
                ></image>
                <image
                  id="image1_1_5086"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex justify-center items-center w-[136px] absolute left-[21px] top-[434px] overflow-hidden gap-2.5 px-12 py-3 bg-white"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#252b42]">
                WOMEN
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-4"
        >
          <div className="flex-grow-0 flex-shrink-0 w-60 h-[242px] relative overflow-hidden bg-white">
            <svg
              width="240"
              height="242"
              viewBox="0 0 240 242"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-60 h-[242px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5093)">
                <rect width="240" height="242" fill="url(#pattern0_1_5093)"></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5093)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5093"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5093"
                    transform="matrix(0.00314123 0 0 0.00311526 -0.257035 0)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5093"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5093"
                    transform="matrix(0.00277778 0 0 0.00274334 0 -0.125482)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5093">
                  <rect width="240" height="242" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5093"
                  width="482"
                  height="321"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
                <image
                  id="image1_1_5093"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex justify-start items-start w-[170px] absolute left-3.5 top-[171px] overflow-hidden gap-2.5 px-[26px] py-3 bg-white"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#252b42]">
                ACCESSORIES
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-60 h-[242px] relative overflow-hidden bg-white">
            <svg
              width="240"
              height="242"
              viewBox="0 0 240 242"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-60 h-[242px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5099)">
                <rect width="240" height="242" fill="url(#pattern0_1_5099)"></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5099)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5099"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5099"
                    transform="matrix(0.00401606 0 0 0.00398287 0 -0.459873)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5099"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5099"
                    transform="matrix(0.00277778 0 0 0.00274334 0 -0.125482)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5099">
                  <rect width="240" height="242" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5099"
                  width="249"
                  height="482"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
                <image
                  id="image1_1_5099"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex justify-start items-start w-[120px] absolute left-[18px] top-44 overflow-hidden gap-2.5 px-10 py-3 bg-white"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#252b42]">
                KIDS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[1652px] relative overflow-hidden bg-white">
    <div
      className="flex flex-col justify-start items-center w-[1124px] absolute left-[195px] top-0 overflow-hidden gap-20 py-20"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[692px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[691px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-neutral-500">
            Featured Products
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-[#252b42]">
            BESTSELLER PRODUCTS
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[238px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="239"
              height="427"
              viewBox="0 0 239 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5114)">
                <rect width="239" height="427" fill="url(#pattern0_1_5114)"></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5114"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5114"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5114">
                  <rect width="239" height="427" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5114"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMADQkKCwoIDQsKCw4ODQ8TIBUTEhITJxweFyAuKTEwLiktLDM6Sj4zNkY3LC1AV0FGTE5SU1IyPlphWlBgSlFST//bAEMBDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAcgBaAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EADsQAAICAQMDAgQFAQcDBAMAAAABAhEDBCExBRJBUXEGE2GBIjKRobHBFCMzQlLh8CQ00RU1U3JisvH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgMBAAIDAQAAAAAAAAABAhEDITFBEjITImEE/9oADAMBAAIRAxEAPwD6ESAAAJAAAAAAAAAAAAAAABDaSsCQV8mrxYpVklSS3dOl7+hOLVYcrrHkhN1ezsGm8EJ2iQAAAAAAAAAAAEEgCASQAIJAEAkAQAAAAAAACASQwAAAyJAAAAAAAAFAAAAFAABQBDkkm3wgJexzdf1TSaWDeTMlJJtJJt+9I5/UuoanT5N3HtfcnGT/ADK9mvT6njM+t1GXU5siy1jyx+XNSaaXOy8tc19t9yLIsdd+I4aqLhp5V8ztc2nVpqmm/FXuUNFr9fp383R6pSyzfdkxtttJWk6fivS9mmcmco4sj+XLuabqUqW3h17GmOonFJKVOCdV4vxfoGn0/pHxDk1eRY5ptJJOUVatq937HX1PVMOnwvJkmlFK16v2XufJ+ndZydOeScIKcpJJW9k/X3oo5uqarVZJTyTbbeyUnS+g3Usj6qvinA8yxvHkhbrulSS9ODraXqen1DiozVvhcM+M4tXm7JKE2k9mnLn7FjTa7JgzRyLecXbtvkbpqPtSafDJPI9C+JlnTWojSirck7STfpyerx5I5IKUXafDEu0s0zABUAAAAAAAAAABAJAEChQAgEkAAAAAAAAAZAAAAAAAAAAAAAAAAFbW6jHp8MsmSdRS3S3ssSajFtvZHhvifqL1MpQTyvFFUmm1BNNp2/L/ANyWrJtzev8AXZy1knp1BqCpSau/s/J5PPqZ5Lcny2275b8+5lqcrlK2293bbtmhR7pUlb2pEaRTklbb24Rthos+S2oNI7XSelxyybyU3Gm1e/sen0vS8TSTjsufqc8uTV1HXHi3N14BaLMk3KLSqr9CnO8eRpNqnTpfufU9R0nTPG3CNN+HwzxnXOizxuUscXXOy4LOSW6peLrccPFSyWm2lzvybbe6kqt8+hWUZRjXDT3NylapvdPhnSuTfiySxztSTbbS/wBz3Hw98RZ4xxYM2SCxNVGT3kqWyv09GzwSb7WnW+3FUXNBqPlZkpqEk6Tb2f0afKIevs+j1UdThhNf5la2qyweM+HOqY8WTHhzueKM1alJrscqVtNcJts9jCSkk000+GnZYzZpkACoAAAAAAAAAAAAAIBJFAQCSAAAAAADIAAAAAAJAgEgCCQAABDdK26QHM67rZ6XQyeFr5jTpvZUlbV+r4PlvWdZPvngWSLjJ98lHi37s9v8a6uGPpsIXC5NySabe3DT8ff1PmOWbyTc3K23b3slbnUYxl3bWk/qXum4Pm6m5JuMVeyOa07bpJfQ9F8PKbxSnjxvJNyvtTSpV5ZjO6nTeE3e3punaeMcKUUqT5rk6+GKSSukji6bV6/vUZYMMI+l2zrTyOOmWSqbW69GeezV29M7Wcjh2VZx9fjjkjKnGVLdJplDLgzayV5NTPsv8sXS/UyWLBpGoOFN/wCa3f7l0SWV5HqmBRz5Ekkm79Dnq4tO062/2O51iN5G+V6nEcfwvZ+qZ6MLuPNyTVbE1OKbVN8NEttp+GlumuDCDbUls6W3uFUmmm063TXJqsOz0jXY8WTszxnLG023F21t9dvU+l9A6gtVilBtScW3CaVd8VStrw/B8gxOnvbW+yZ6/wCGupzwTwQxqc5d1zja3g+VX0e4iWbfSgadJqIarD8yF1dbqtzeVlAAAAAAAAFAAAAAAAAgEkACCQBAAAyAAAAkAAAAAAAAAac8kopVdNN3x9zdwcP4g1k8GhzShkjilPG+1t77efcLJt4L4z1eTP1WeNydYn2pN/v+lHmmlSpc8lzO5Zcks02+6Tfcr3vwVcrSdNpX4XBlpqc6i22kd74c1LwdLzTbf57bStv6HnM7baW9eEes+ENMsvT5WrTm1TM8nUdeL9lqWs1j12PDj08XFK+6M7TXvVf+D0qi5dLbkmnJ0r5SMNPoYYlfal6ui5qcmHFpVBvb1b2Rxtl8jvJZ9cCGm1EYJQbcFdpOm2/R+EcrD0nqOTUds55WnO3KUm6Xpuz1OmnGOZwbUk1aZZy5YQi+xJN+RMrrSXHvbx/W9EsGGm7aW7PMKPde6ryes69mvFO99jyMZOKaW9J8nTjvTnzTVa4usuy5XgzTcJKKTabt3yjBp2neyXBLTStPxVtHVwbW33JpJLwvPtZ1OnZZ6fUxnFwbSpKS5vxt5ObjUZQac6caary73svdMU8uaK2a7lTlsvXnxwQfUugSUNNixYskZ4XjcotRaad01bfv4R2Tg9ETi1z86W+VSVU/pW1Pb9jvGoz9AAEQCQBAAAAAAAAAAAAABRBIYEAACQABIAAAAAAAAAAwm6i96+p4f4x1DyqUINzjifdSV1e1t+/p6HtdQ9k3wmm1fKPAfEUnqOp5smZpRxNRjji6tPdt/V1t6ErUeZ1unjjwY8qnJvI2mn6Jvf8Ag5c3cm1vSbbfg6XUnJygmlGLtqK8L/ycvJabSVtNpJenqRVeduVJbI9j8D6iKx5tPJruhPuS9U/90eRmu1pum2rdeC90HVvRdWwZG0sc38uW/h8X96M5zeOm8MtZR9VnkXyWk92jlZsMZaRYJO0v9TtV9bMtVlyrTN4acmqV8L6nPeizZMactVBXu/wN/wBTzybezHHbpaDHDS42pzUpUkuKSXCVeDDUahb0zirFmxZ1HHqskknbuCSLGXJs9xYa1XM6vk7ou3secg13yrlOkd3qsk8bbo89bcnvSb4R24/Hl5r223Ukm02+SXF7puklt5MIuMqU7VcMzSpUnb8HVyZYVOTcXK09ktn49TudExyjqH8yHdKNJK6V+Nnyvp6HK0jTkouCq00/RnR6dgjkyLLHNJSaSuC3hfj1pbEH0vosIOGRuTlNTttu7tbP9DsHmPhbOp5MuGLtY0u3neL3u3zumenNRn6AAIAAAAAIBJAAAAAAAAAAMACAABJJBIAAAACQIJAAAACnr0nGm32uLVrlOtn9j511DUQj1NPsxtQqNxg0nttynu9/U9z1PVYvnfIm2pODpK7a259F4X1PH9d0mPLnxOElj1DbXa5Litm96TtfoStRwMs8eLW6nLkh3pwbgmmnbdLarVK/0OTPH8tRtpt71w/r9rPR5pafPok4QjCWCKVRbby5JJNyd8raq8O/RHB1eWebKs05yc3anJ0999l9NyKoZWlJ7b3dckS2Tq007T9DZlT7F3Umkq9jXlXDUdmuSj33Q+px12ixttfMSUZxfho7T0sZRTSSs+a9GjrVleXQXLJHZ409pL0aPb6Lq2aWFRz6XUQklTi8btP9DzZ4/jenpw5NzVbtRijjTdqzlZ5U2dWcdZql/wBPosrT4eSoL99/2MYdCzSXfrsyS/8AjxbL7t7v9jEq5cmM+vJa9zytwxruly16L6nJUYwm4t26q0uD2HWMePS45Y8MflwUbfat39/seQyrty200k+LvY78d6ebLLd2wW0mls+Ubovufa0rW92aZprI2t16syguHdUddIsYnKLce21LlfX1+h2+kOUcGfJinCMkklFtJtq21Xm1as4ccnDTey9rPT/C0cE9TJdndLJB9i2dPe0t/bkQem+EllWTJmzSbeRqKe1NJXt6VZ608p0TNLNreztSzQbTSbSxry2ns7SS9dj1YjNAAVAAAAAAIZIAgAAAAAAAAAAQCQBNAAAAABJBIAAAA3SsADn58cJap5J47bglbSaavZfz+p5PqGDBPJ1LUKaWCKhKMpNQTkmlJRb5tJpVw19T2Guzx00YOOGeWcpNQhGk20m6t7cI8f1PUrEp6lQnDDjyqMY5If3cG2nKKTd234454DUcPqb08el4cOlwzhqHD5uTJkvupO9r4V7p+V7nn00u2Xc5ZU6UK2aa3b9DrdS189Xm+dmm82PG54seNqlFNpqnfNfXajiOPcpSbpJpSXKfi/5Iqvktuqfpv6EtqnFxd82Q33ZE7brZP6EupbNU2qthFroeoyaXqeGWOVW+1rw0/U+waHK82mjOSptbnxrp0L1eJtUu5M+s9JyKeCKvZLZHHkK6U3fHBoniUk73LKWxi0uHuctI891np8NRp5KMfx00ndc+H9D51r9NLT5njmmnHZq9j67q4wjhlOTUUly3SPm/XseKWolPDJ5ZSbdpUl4fvv8AydMLq6WS1wErXpe3HgyUFHdVTe6bJlGaatXvv9PobFBJtJ3f6HeUFG1fKS3R6H4Wljx9QWbK5yjiSaUaTtul/wA9DzqlSpXd7UdPpTxrU41ly5McJSXe4umlyvXyRX0TR4dPHLKekezm5fhnck26dNeHfB6TFfy1appVzZy+haLSYNHDJopvJjyfj7pctulfC9DrmmagEkUEAAAAAAAACCSAAAAABgAAAAAEgAAAAJAAAAAAABxdVpJ6vqsMupg3gwpSivmSXZJPlpUnf/NjxnX9dl6h1PU6bDPG9N3qUI42mm1sm3xbfK4X2Pedbxzz9OyYcbaeSlaVp7ptP0T4s8ll6Fl6Z0nI5vG5ZZpSc4fhSd3t52fNLglajyfVsLw5opPG4zSa7JWlv9fv+hz9TGWLHTVyar1VXyvS/wCC/wBTzvNqccFFOOCCxwUt3JJ8t7c23Zzc8ZRb7nba3aZNq0RTTblTd7q/sEm52neyTIgm27tO9vob4Y5SbUVdqr9PoW3pGWhd6lNu0+fp7H0rouohLDBKM7SSujw/ROnrPkjOUG8XdU3WyXhn0TQdPWOC+TN1XF3R5s7u9LZ06MZWlSe/qJvJVxpJeeTZDH8tXJtv0RhqW3JYUryTX5Va7U/N8WZ+JJuuPrsbzzdxebItowS2X28vxb4K+LocMccmXUQU8s40o89qqufLPU4sEcWNKk5Vu65ZEsKfg1MLO61cutR8zfRc0dQ8XyGoXSklW27V+r+psn8KZJfjhUX6M+iPSQbvtV+pktJC+Dc2xt84xfCmrlK5JUnwv5K0+j9Q6dmU/kzSbackraTfOx9Whp4RVUg8WN8xX6Gpb9Xbm/C1Q6Tjx/M72m29qp3ujtFJQhpZvIlJxnNylvsm6V+2xdOku4l9AAVEAkgAAAAAAEEgCAAADAAAAAAAJAAAkgkAAAAAAAABsU+p6darTPF3OLu006f7Fw15FbJl4R4bWdChCefI4KKSbbflelvxwjxE9O8k3HGqatNJbJrk+q9f0ObW9Py4dNKKyNp1JbSXlHmtJ0VaDFebH35O591JVb4t+EcpdNyvEvTyxyXcmk6fpZb0OnWWatzSk6bSO9rOjZM+sxwwRTUlxapPmr9DtdO+FsMXH+0XOmm6bSv0Fy3BX+GdPj0WpyabMlByacG3Sb9OFyqr2foz1uPS4MK73UKTbd1+phk6Xp9R2uUalFUpKr+/qbsXTdPjpy7sjXHc7X6GNU6v1j855G8ejg21aeRrZbbNXyb9PpoYU3zOTuUn5b5N6iopJJJLwia3NTH7S35GNE0iQaZRSJ4RAbAhujBsyaswZAklOLhK6apm9JJJLhKiunuWFul7G8CpABtAAAQAAAAAAACAAAAAAAAAABIAAkAAAAAAAAAADXPds2GEuSZeDS4pt+5Vy6RSbatX9dy4m1OvDM+3yzlrauFLpM4amGTE4JJJUo7v3d8HXxYu2KXpyzd2q+DJJISQ2hJJbE0TQKRADABsiyG6MG7Tp39PJNjJtWhd2/QrvJu15W5tg+5KuG22JdjNmDMmYvyBinuWI/lXsVr3LMN4L2N4lZAA2gAABBIAgAAAABAAAAAAAAAAAkAASAAAAAAAAAABjLkyMZEy8GCV5E/Tc2GMVSb9STmqQRZIQAIbCxDZFhsxcibEtmmajL/MlLw+GZt/U1zaappNEoq6jJPHvlTVcZErT96LOhyLLpYTTTTXKdrllbMpRTeObX0fBPR5ylhyQkknGbVRVKuf6mJf7FdBLcwfJs43MH5Z0Gt8ljH/AIaK75ZYxf4aNYjMAHRAAAAwAIAAAAAQAAAAAAAAAAJAAEgAAAAAAAAAAYyMjGRMvAXCBinaolHNUiwAg2YthmDJVGzBsNmDbIEpGDlYbZg3JcRv7mbRjlU2m62MOjv+8zr/APJP9iXOaTuNfc29PglknNJruqzM/YXmYPZGbWxhJbHYa3yWMX+GjQ1uWMe0F7FxKyAB0QAAAAAQAAAAAEEkAAAAAAAAASAAJAAAAAAPIAAAAYy5ZkYy8mcvBri/x16o2UaU/wC9RvMTxUUGtiSGEQzCRmzCRFa5Gp34NzRHbbJoV2pPh0HGX+plhxiuWYOWNcpslgryTrfcuabGo44ut22aHLHLZRplxJxhFNU0qLhPaJZgzNmuRoYvk3w/KvYrvksxVRXsax9EhgG0AAAAAEAAAAAIYDAAAAAAAAAEgACQQSAAAAAAAAAMJeTM1yarkxn4NadZI+5vKztST+qLDZiKWGwQyiGzBuzJmJBAolIkDFpctGMleyRm19TCSfhkowULyxTW9ouS4XuVsUZxyJyW3qWZcGsJ1SsWYMzfBgwNfLLS4S+hWS3LKNYAADaAAAAACAAAAAEAAAAAAAAAACQAAJIJAAAAAAAAAPZGuVNb0Zvg1yf1Oed7WMGk5JWlubmVpvfxyWSQQQyQBizFGTRBBKARIENLluka5ZUv8OFv1ZsaT5MHvsv2JRGnlOU28i3q19CxL8rNEIzjJO6vavU3z2izph4VjZi6oleoa+hka0t0WDR/mXubzWCAANgAAAAAgAAAAAZAAAAAAAAAAEgAASQSAAAAAAAABi2a5s2SNU2csvVaMj2N2nzKa7W/xJb/AFXqV8st6KWLJL+15GpuklS9Of5OmGG4a27Qsq49UmqybP1RtWeDV9yoxcbL4NjI8mp6jGuZpfcwlq8Ke07f0Q/G34LCBSfUIb9kW2tt9jTPW5ZKo1FfRWanFlTVdGeSEE3J0kUc/U1C1hgm/V8FLJKU23OTfuzS072R0nDJ6sizpNZqJ67HLNkuLdUlSV7Hdyusb+38nl1Jxmmnuv2PRxyLNo1kTu4p/cmWMniWNi4Ik9hF2kJcHEa7/EiwVnyWE7S9jWAkAG0AAAAAEAAAAAIAAAAAAAAAAEgAASAAAAAAAAA+AMGacjpG6TpFTPKkzlfVaJy/GyjpJOWXUJxaUcnam1zSW5Zcr3XlkKklSo9PHNYxpMnta5RSWeSyxTcmpOmq42u0W5bbq/qivFKM+9qTfCtrZHSDY02w0kk/qQ5Nu0v3IcpekUr33bNDHF+bIvSb/hGx0ldlfD3PVZ05tRTTSS8tepucYpt1b9XuBrlkinStv0Ss1TlNptJL3d/sjZnbUXNPeL3S8ryak+9WlafqQY9qk922/wBjrdIz7z08ndptL6+TlN9i35J0moeHV48jTST8+TGU3Czcenh+RP6CXAxu4JriiJHkrLB8m+P5F7Fd8liH5V7GsRkADaAAAEEkAAAAAAEAAAAAAAAAADIAAAAAAQAAAAGDCSqTlb3SVeCZXUIxnJLng5uqzKnSfoi3nkkmcycHqM/Ym1FJyk/RI5Tu6WRmlUUvRJBi9l9XZF2rPbJqaaZcorO5ZpV4VL3ZYRpgvxyfqWCe17LwO1NNGfkJWyivgcVnzwV3CUU7+qT/AKmx+TTiXbr87X+dJ/oqNzKMHsyu5PE3FK091/4LD4MJxUo158AaFkTbtfWitrpNdrTpWWKimpU7Tppvg1ayKljaS43RmrHrtM70+N3zFfwZSNWhd6LC/WC/hG2R476w1PksQ/KvYrvksQVQXsXH0ZAA2gAAAAAgAAAABAJIAAAAwAAAAGQAAAAAAAAJAEGubNk0nBp8NUapukzGd+LFLVzpMx02P5fT8uZr8WXZe1mvPeTNHGnbk0i/rIqOjUI7JNJew453sct7L7ELgmW7ZHg9bSU9zCKqbCdNE8TZRk0QvJL5IXkCs9tWn6po2y5NTTeZP0ZukUa2RXglgDRlik3Li1T9jRldYre9bMtTexUyKlKHhq19v+IzSPU6Bp6HBXHy1/Bulyyh0HI8nR8EnyouP6Nouvz6njy6rN9YPktR/KvYquu6rVrxZaWySLgUABtAAAGAABBJAAAACCSAAAAAAABQAyAAAAACR5AAAARI0Zn+FmWSUYZFLJPttUk3s/JqyyjKLSkn7NHHO9rIraOKya3ua2gm/vwW+oSS0zXq0jXoIJfMl5bS+xHVbWCDXClv+h1454fXMcqYs1y33XPoQpPyeppm3TM+WvSjUpp7N0bIvhfoSiZOppeKC2bIatpmRUaZKp2Z3cUJrchOlRVYPkxbM3ya5AYzdmjKvwX6G1s1Tdxa+hmjufD8e3o+JfWX/wCzLz5KvRVXSNP9Yt/q2WnyeLP2s31Tx6LHHqs9anP5mSCg03tSfodMrQ3yL3LRrCahbtAJZBtAAAAAAAAEAAAAAIAAAAAAABkAAABIAAAAABzupy7ssIeit/f/APhQmk4NUr9ixqpd+om72ul7IqTkm2jhld2vXhNYyLvQppwz40lcZp/qv9ix1X/BivDl/Qp9AX95qp+LjH77sudVX/TRfpNfwzvx/HDOayrk1W5Chbbf2Mk65InOoukelGqcUvJrhkcHTku36s1zc5uk2jGeJRi3JvZWXQvYMqy40002nTo3HE0WtWPVrG1WPI+1tvh+H/z1O2kSzQiStWa3sbG0ka3Ygh8GuRnZjJFGl7cmrJJKDpeDc1dmnLW0FvKTSS93Rmj0+gh8vp+CHlY1/BnN0m0raWy9TYkowUV4SRraPDld1lX6ZlzZ4Keow/Kl3NKN3suGdEr4klkW3qWDeHh9AAbRAAAAAAAGBAAAAACAAAAAAAAZAAAEABIAAGGWXZilOrpNmZDSaaatPZoLPXByyqDdnNwZ55VlbTXbJpNrZr6F7XxePFljVtNr3Rx+ldReVT0bxJQx908cl5TpNP7o89j3Tzp6b4f/AOzyevzXf6IsdW/7Jv0mmUPhzL3f2rHe6kpJe6a/odHqavQ5Po0/3O+F8eTkms3GfBi1a3JXCIbPVEaZqnsaczbi0yzMq5+Cwc3PFb0j0Gkz/P00Z3cqqXuuTg5Y87l3peR487x/5Zt37+BSus0YtGbexiyQapLY1ybRsl5NM3sUa55HdJUToMfz+p4IvdKXc/ZbmnI9y50CcFq8uTImlGKjF1aTfP7I553WNXVvj0knsa7IefC1tlh92kaJ6vTRdS1GJN8JzR4rWfxqzi3yIsFTQyhkTlDJGaTabi7SLZ0w7iWaugEA2gAAAAAEEkAAAADBAAAAAAAAAGQCAAAACSAAJIAHD6ums84pW2k0n52PKaTDPp+u+ZlyXjcm5wS8P0PoWo0+PUY3Ca38Nco4ep6PJzblhWWK3TW/7cnLLG73Hr4uTHWqqYHGWrX9hzOMJNW8ab5PR6mD/sEozl3SUEm65arcaHDixaaHytPHDatxSpp/ybc67tPkXrF/wdMJpx5M/wArqRwapGDNstkaWeqMsJ8FbNdFmT2K2XgsFLKlT33Zt0/4cia5TuzCa3ZuwqppLm7FV2k04p+GrNctmThd40vTYTMxGqRombpvY0TZoVsrpNnS0GL5WmimqlL8T93/ALUc+EFl1EIPhu37Lc7EeLPNz3yO3HPrDLFNbpMqTxxk3cU/sWsrtOivds8tjt8dfokVDTTilsp3+x0Tn9HX9zkfrJfwdA74+R4uT9qAA0yAAAAQAAAAAgAAAAAAAAAAArIABAAAAAAAsWAAAAhq016qiQBwMiptGiWzZc1UezNONq0/53Kk9n6Hol3G2ps05N0zZJ7mqe5oVppN/WzZga+Za3dUjCcXfO5f6ToZ6nK3dRjTlK7fsjOWUkP9W8GOawubX4bq/qRM7GbDCOjePGklFWl7HHnwzON2m9tE+GaJ8M3zK83szpFadM29fFJ8RbZ2VtFfRHE0Lf8A6lJKMm3jaTStLdPc6mom4xbulwePn/Z6OObjKbTTZoe+4eWsaXlmiWTtxq+ZOkvVs4Oj0HR3/wBLJek/6IvlHpEXHQRb5k2/6f0Ltnox8jx5/tUgArACAAAAAAgAAAAAAAMAAAAAAVkAAgAAAAAAWQBIIAAAAcTq6cdYmm1cE9v0OdPLNLlP3R0utf8Acw/+n9Wcqb5s4ZZ5Y26r18eMuM3GMss36foaZZMjbXcq+iMnyapcsn8uV+ukwxnxCbbVtv3PTdAgo6Scq3cq/Rf7nmILdHrejR7enRfq2zXHbbuuXN1jqLzSaafDVHDyx7ZOL5TaO4crWx7dRL0btfc9OF7080c+a2KuXjYurG8uRQjy358FmOkx4lLubU2qU/8AS/VfU63KRpW0EVj0VuNSlNtt7N+P02KXUcrlLDjT/PkV+y3f9Dp6ltxcW25QpNtV3bcr3ODnlJ65N/lxxaT+r5f6UePlu8np45qbWsuRPUYsSaubbf0S5f60YZZp6vHDwouX34X9Sh/asEdbLVSzxdQWOCu6XL49WXYxnLIm2u6apVu6/wCMzMbb41uSeu/03VPHCMMjajWya/g6yaaTTTT4aPOY8OTSy+TJfiSTqUt2vWzpaLVJTUG6TdNPlM766eTKbu3SABGAAiwJIAAAAAAAAAAAAAAAAAAkkgASCABNkWAAAAAAWABAA4/Xds2F+XF/ycibVe51uv7SwP6NfwcaUjzcn7PbxfrGD5ZhLgyb3MXvZiOjGD/Evc9h0tJdOw15Tf7s8elUj2HTP/bsH/1/qzrx+vPz+LRR6lD8s0vVNl4r66Mp6TJGH52rj7o9Euq889cuCePtyuORpycbgr7duWuWvY3/ADZ4cEnqJwcU7U15Xt4ZXx6p44PDPJjx5G7hKV9vdw1v580crqLzYMbWonCam24vG7T+3g3bL3fG5L5G3UauUtNLUSaULb5qldJHltXq8uacu6bUW7cU9v8Acz1mqm4LEnNwTtRb2s508jb4S+9mJcMbbb2638rJJ0sYMcsslCKvfnwj3vwxoMMdNHUZLnmi+1N8Kkt0vU8X06Wy9Wz13TuqR0WgeNYnPI5WrdJbL7sz/Jcr14zljqf6tfEOKUZ4dTBKKinGeR8RV2r/AHMdE8eaEc2LJHLLZOVVX2ON1Hq2TUTa1WSbim3DHjSSTqt007+5u6Bq9Fmxylp4OGXvcJRSaTap21459jpPNMasj2AMYSUoqS4aMjDmAAAAAFgAAAAAAAAAAAAFggAZAAAAAAAAAEAAAAAFgcf4hi3jwyXCbX7I83PK4yp8Hq+uRb0KfpNfvaPKamN7s8/JO3s4LvHTKMrqt0bGtjVplaV7llxVGHa9NCX4j1/TVXT8Cf8AoX8nk4R7siS3bZ7LBD5eDHj/ANMUv2OvHO3m571I2XSt8Iq5MnfO06S4Rvyv8FerOVmWbvyT0+puSe0Jbxb9H6bHok+uEjPW5I41GSgpTltTSadK6afL9Dg9VyyyqKkkko2lVVe/Hgu63JqJxxvUY/lOS7lFO/NXZzskJ5m0m235bOXJlv8ArHo48df2rz2rVNmGi6Zm1zc7cMadW03ft4PRw6RheRTzXNr/ACvhv2OhDBaUIR42peBhxX3Jc+SfHM0vT8Glgu1W15e7/QsfK1WVP5EIYl/8mVW17JOl922dHFpYRbqKcnu1Fbfd+S3jjDtbtSlF1XhM7SSTUcbXAw/D+bU29Tqkm5JtxhWyX8nb0uj0+gxvHpcahbuUvMn6tmjUZ80dRhd1FTXcl5T2f8nQaTGtJba36LJs8bf1RbObBvHNTXhnRTTSa4e6M2MWJsAEQAAUBACJAIsCQQSAAIAAAAAAMgAAAAAAAQAAAAAAACr1GHzNBmXpG19tzyeZJ3sAceT16v8An8rXhTW1Fh/l3YByd6YaUr8nrsE/mafHP/VFP9gDrxvNzfGOoi5Y3T3SfB5h6GTi9PpHmx5Xkd5E29ud3dIA9OPjlisdRzZsjx4JaeaeKorK2mpquaXDtcGrFHtVVv8AuwCYybb30uYtPKVd1q/8q5fv6FyGCMY00kn4QBWap5s+THOWOSSS4pUmvDNXTZP52eDf50pK/VbP+gBqeL8b9RjUlwZ4MypQk6aVOwAjc6a24Lull3YUm94ugDF8ZvjdZFgGWQAAAAAAAAAAAAAIAAAAD//Z"
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.38452" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.46143" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.53833" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.61523" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[241px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="240"
              height="427"
              viewBox="0 0 240 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5129)">
                <rect
                  width="239"
                  height="427"
                  transform="translate(0.5)"
                  fill="url(#pattern0_1_5129)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5129"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5129"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5129">
                  <rect width="239" height="427" fill="white" transform="translate(0.5)"></rect>
                </clipPath>
                <image
                  id="image0_1_5129"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.88464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.96155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.03845" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.11536" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-60">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="239"
              height="427"
              viewBox="0 0 239 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5144)">
                <rect width="239" height="427" fill="url(#pattern0_1_5144)"></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5144"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5144"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5144">
                  <rect width="239" height="427" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5144"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMADQkKCwoIDQsKCw4ODQ8TIBUTEhITJxweFyAuKTEwLiktLDM6Sj4zNkY3LC1AV0FGTE5SU1IyPlphWlBgSlFST//bAEMBDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAcgBaAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIDBQQGB//EADoQAAICAQIEBAQEAwcFAQAAAAABAhEDBCEFMUFREmFxkRMigaEGMrHBI0LhFBU0UmJj8CQzU3LR8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACYRAQEAAgMAAgEEAgMAAAAAAAABAhEDITEEIhITIzJBUWEUcYH/2gAMAwEAAhEDEQA/APvkACoqAAAAAACoAAKAoAAAAAAAAAClAAIAUUCAUAAACgAAAAAAAh1AAEBSAKAAEAAAABQMEYQAAUKQoQAAAAAOhSFAFAAAAAAAAACgACBQAAAAAACAoAgAAAAKAAIAAARlIAAAEAABgAAAAIAABQgAAQAAACgACgAAAAAAAAAKBAoQAAA8ep4no9Lk+HmzJT/ypW/TY8n4g4r/AHfpnDE0s003fPwpc369jj6DhLyxWp1EHCcla8Um5Jtdeifoc8s9dR0ww33Xuzfib4U2lom4r/cSftVfc6HDeM6TiPyY3LHl648iSf06P6HGnwhJNOanF9Gqa9Gjh6vSZ9Jkc8LknF2m3t9H0fqZmdlbvHNdP0YHD/DXGnxLDLDqHWpxLe1XiXf17ncOsss3HKyy6qMFIVkAAUAAAABE6AvQgAAgBgABYAAAAKgAAoACAAQAAAUIBAUAAAAAAAAAAUAAA2km26S3bBq1ba0mZrZ+B/oS9LI+L1mR67X58894uajFdkmtj6bHbVcqPlMWVxwYVFJyy50lbpbW3+x03xScc0cUNRhc3zjFNs88u7bXrk66djLGou3S8zmamenlCUFkg21TV/Yy4nkyZMeFY1J+NN0uux4cODiT1EseSGKGBOkkuarn7jW+1n+3E02rnw3i0c0bTxTSkn1i/wBuh+lwnHJjjODuMkmn5Pc+B4vwzDk1eKcnOmvDNRaTkua36H1/AcinwrFBNt4l8N27arlb9GjfHe9OPJj1t0QAdnBAAFAAECUUARgAAQpAAAAAAAGAwIAAqgAIFIOoAAWBQgEBQAAAAAAAAABQAANGvkoaHPNuksbf2N5xfxLna0U8MXS8HilXN26S99/oZyuptrGbsj5G7fDlJ7fGafq20v0Pp9LwzS4WsmPHHx00nXJN3XufK6uD/urJlhalgblFrvGSf6WfScM1y1OmhkTTbSZ55Xs1uab9TmwQ0+NvIvHGfhrnvzafY35Z+GHPZqzl5dc1PJHDpG2pW3Klb7q9+nY2zzzlplLJBQk1+VO6LV/Gz1zuK5UniyOVKM20lzdJul7HY/BmSeTh+dzvfM3v3aPmOL6iDyYMSacoN5JLskmvvZ2vwhrYYs89HNpPLFTgm+q2a/52LjftHPknVfXAA9DyIAwwoAABCkCAAAgAAAAAAABAAAAAoIUAAAAAApURACgAAAAAACgQARQAAPn/AMSpK03+aMdvRtn0B8j+IM61XEXiTpYVu72S6nPkuo68c3k5mLwZOHarG3/M0/rSOF+HeMZNDnWh1MZVB0pLeq6NHW0icoajKk1inkSj5pbt/p7nDSg+MY8irfIk/qnZwx8sr0XcssfoOm1WlyY1kbg33a3PDxTVLwv4K6czbpdJBJNJU1yoz4hpV/ZcjS3UW9ibum9zb5PT4vG3KTcp5pOU5Psui8ti48s8eeWRSaljnGSa573/APD1wio6iUUqUINL2Vf88jQtK1DNJp/LKDfmq/qNs2P03BJ5NPjnJU5QTfq0mZmnRu9Hhd38iV99kbj1zx4rOwhSFQAAAhSACBgAAAAAAAEAAAAAACKEAAAAAACgACgAAAAAAChSFCAAQCTqLa59D8+4zkliwZGmviZck1J9aTv919z7nVaj4acYpOVXvyR8dx3Syy3NK3JydJdXX/w4ctnj1cOFk3XjzSWHh+LHH+WK/S3+iPmMGd5cmNKmoycotc+ae/sz6rV4HkwSS3bxuvWmeHhXBYS+HPNUYw5Qjsr62+pyxvVd5x3K9PsNEk8EW+qTR65Y4yhJSSaaa+h4cUfDFU2qW25tt1Vv3Ltq8N/y+f1eN6abbj+W033St/oeaOohKcoeOLU0k0nu10fkfR5tPDK05QjJrurLi02OL2xwW97JE01MJPXS4VqMcNDixzck4qra5nvjkhL8s078zlxSSVbIl1yZ1mdk04ZfHlvTrkZ4tJqm8ixzdp7JvnfY9p1llm48ueFwuqAA0wgDAROgDAAAdQAAAMhWQAGAAAAFQIigAAAAAFQAAoAAAAAAEFCkKEB5gxyy8OKT6pMi4zd05eaTlklJvZtnl1OD4uFrk+nqb580L2t8+R5b3e31cZ1I4ssUoR8M1UocvNG3S44V8idenI6mXGnFJxTvujWsTjyS+hnWq1jqeMYLY2qKCjRmkahaiiZpUEXYrNqN1SNUW5RT6NmWZvwNrmkasElLGq8hVk/tZS8GWM1tTT+53L9jhZ1sjtYZeLBjl3in9jpx3+nk+TPKzAB2eQIGAiABgAAAAIAAAAAAGA+QAFIUAAAAAAIpCgUEKAAAAIAKqBChA16l1p5+hsNWq/w0vOl9yXyt4fyn/bl5H81eRonJpwrrNI2TdyfY8WvzPDBSTqpJv0TV/azyX19fGbdOb2owsrdk3NVmCKu4SFbEBujByZm0a57IDXPI1szz8Om5Ym3/AJ2vZtfsNRKk30Ss1cGlLJo8c5pKUk267tsVuTqujkV0dTRO9Fhf+hHMa3R09Eq0WFf6f3Z14/a8XyvI3gA7PCgBADAAAAAQAAAAAADAAgAqKQoAAAAB0AFIUCghQAAAAAKFIihA06t1ppfT9TcebiEksCXdmcrqV04pvORzHuedQWbiODFJKUZSSaatNdfselbrlsauH1k4zjrdQUn7L+p5pN2PqW6xr0KDUpJqkm0l2SZlRkndvq22RmqxLUoPkGGRpizVl5M2tmvKriwPE055IwptOSVd7aNulxrFLJBKlHJJJfVmWmV67Btf8RPb3NjXh1eoX+4/1JZ1tZl9tf6bHu0dLRtPSYmv8tHNfKz38Od6OHk2vuzpx+vL8mfWPUAQ7vEjAFhAAACAAAAAAACyAAAABUUiCAoAAAAAAgBSkL0AAAAAAoUhQgeDiLcskILklb7bnvOZr5uOqdtKKinb6+hz5PHo+PN5vNldY2k2l1ZOCwUtZka2rE0n2tpfsa80lOLldrsjbwqKjDWTTatRivXd0ccf5PdydYWN0W+TST8uTMjFO9mqaMl2fMqJyI+QZCKj5GE90zJvajGXJhWvRUtfhbVrxV9aZu1C8OvzqubT90jDQprWY5Pl42r+hs1dLiORd0n9i2fViX93/wAYdHse7hn+Cj6v9Twu62Z0dAktKku7vy3NcfunP5M+sr0MhWyHd88AAAEYAMABQAWEALIAAAAEAGSAQAoAAAAAAAKVEQAoAAAAAEABTl62paibapKlbZ1Dlah+LJJ2t2+hz5PHp+NPta8kqSd1T6nT4VpVDSNzSfxX4qa6cl9v1PHp9P8A2jUqDapbteSO6kkqSquxjjx/uuvyeTWsY8uTQwlvCTg+z3R556TNHlFS80/2OjKXhi202l0St+xbtvyOlxlcMebKONKM47SjJeqaHw8n/jk16M7NnlhDUriE5vKnp3GlHs9v6mf046f8m/4c5YssnSxTb/8AVo2R0WaadpQXm7f2Ore/MxVOTimnT3V/qJxz+0vycr48UNDCCTeSTad7bKzw6uV8Rk11jHb6Hbkr2bSOPxHE4amOVO1JU/JoZzU6a4OS5Z/apWytHr4fJNZIdmnXr/8Ah5E9lzN/Dv8Au5dq2XXzZjD11+R3hXvAB6HzgABUAAAAAQAoEAAQAAEAAGSAQAoAAAAAAACKgVAAAAAAUAAQbqLfZNnIlv1V9jqZ5eDTzl2TOR4m1st+bZy5L5Hs+LPa6HDMXhhLI1vN0vRf1PfZq08FjwQilVJG2zeM1JHn5MvyytNqonIpDTJ1I0l6tl6kaba8iB1sx8KTlKKSk6tpbsyfMARJJOk7Z4eJxvBfKmnZ7meXW43l0+SCdOUWk/OtiWbljXHdZSuero3aB1qMi7xT+5og7xxb5tbm3Rutal0cWjjh7Hu5pvB0gAeh85AUgAAAAAAJRQBAUgQAAUoABFQCCAoAAAAAEAgKik6lAAAAAEFAChGrU76eeye3U5TaSbfJNfqdTVutNLzpfc5OZtYZUt9q9zjyex7vjz6Wu+tkUxi+a8yvmdXiGQWRlFXMXbJZdkiCPmwgADNeRXSW9mwwnumk6Yqz1xYyThKt0pNeza/Y2aR3rcW+9O/Y0YIRx4XCDbSnNJvm/mZ6OHL/AKtv/Q/2PPj/AC0+jyX9uuoAD0vmhCkCAACgAAAAAQpAAACAAAqCAAoAAAAAUhQCKAAAAAABQpOpQjxcSz48UMeOc4xlkk/Cm93S3pdTk63UY8eJwc0sk01BNNW0rpPlex1eKafFkhjzzX8TDL5Guz2a/wCdjwavSY9Xp3DIk2mpRfZrdM45Tdezizkw07eGXjxQn3in7o2Hl0ORT00OjSprs1serodZ48uXrG72HkLpjmVBVyHQxm/Cm39CwkpQTT2ZBkQpCgzXkdRb7KzYzRndQfeqJfGsZuyOZJpptJq23Xa3ZdE2tZjqqaad8+W1fUk4vqXRRrW47vk2vY4Y+vockn6djrAA9D5oQoCIAAoBQAACgBCkAAAIAAClIUAAAAAAoBQAAAAAAAAqgIBHk4i28EYrrNfa2eL4kY5HDqldeXI92ujJxhNK1Bu167WeGMIuepyyScoOKjvuk+fu/wBDll3XfjsmLdw7J/Eyw3q7XsdNcjk6Jr4za6s6qdo3j4xlO0YumGYp7o0wZoqUGn1GNeFNLo2ZSe6X1C2b8yDIAFEeyPJq2lFJvbmetnL4pkccc/C/mql5N7GcrqN4TdaM2OMsbfhVPyPPwjGo8VbbnSg2l4nV7b1y5WenxeHRR8TuVJX3Zr0cb4rj8HRPxelO/wBjlPY7238bNu2ADu8oAAAAAAAIdRQAVAUlAAAAAAAqIVBAAAAkCgCkKAAAAABRAAIoAAjSlFxatNU/Q4Ovjqsc08MnCUU1JNWpx6bde53zXmxQywqaut0+q9DOU3OnTDL8b344+i1c56lPJijC3TcXsduPLY8UNJjhkbq7ae6Vo9qVJIYyydmdlu4j5GKfzIyka06mVhse82+yoq2ZjHdX3ZkBTIxRbKJI4vGckMTTcJzk3H5Yrmr7+x2pcjw6vHkyuKgoJLe3zszlLZ03hZL25mpypLFBqq3a8+3vR7eFaSeNyz5FTmko3z33b8j0aXS48fzuKlkT/M1v9Ox6jOOOrutZ57moEooOjkjABAABQoUAAAYAAAIAAKgKAIUiKEEALAFRABSmKKBQQoAAAAABQSygCPkygDW1uvUzZg+a9TKT5BUlyNf8yrqbJPazXDefoQbUqSXYoAQTL1IuYvcKT/KzQnaTN8vys80Xt6Mo3Q5NeZlRhj5P1MyCgEsAAAICkKHQoAEYKQIUAAoAAAACIigAAAAAAApABQiFAoAAAAKAABYsAIxf5/qWS2J/MZPdBWDdpoxxc2G6tDD1ZBtAAAdR1ROTAr5Hle02vM9XQ8uVVkT6MDbifyv1NhrxP5X6mYRQQBQABAAFApAFLDFhhBAAKAEAoACILCAApABQAAsAWAL0IAMgS9ygAAAAAUAAGN/MzJ8jH+ZruJK40Bqm7tmeJUmY+FvmZYndvpdEGwgAQLs7Iwr3CquTRoypSTXU3N1zRpypp+Jb9wGC6d9zaasTtv3NoCwAAAAQABVLAAQAAAAAAAFQAAAQBFFkKAAAApCgAgABSACiyADIEFgUEsARJ22kVRt22Iu212K9gqOoq6NeL8rfdsOTkzKCpfUgyBLARSXTTAq0wMmYtJrsVO0RhWCilO1yaMzCNp0/UzAAgsCgWAgACqAgAoAsAQWAAAAAACAAIAFAAAAUhQIUAAAAHQAAAAAAABfmZk+Rh/MZPZBWl7N+ZsjfhRrf5kjYuS9CCgBhALmAnugHJ+TDRWrROa8yq1t/xF6MzNTf8ReptIAAQAAAAAUAAAAsALAAAAgAABAAACgAAADYAAKQACghQAIUAAAABAD5os3UGyPmWatL1CtStO3zZtNTfzpdjYQUEsWAAsWUZXu0KJzSfUqdoDQ9si9Taa5r+IvU2EAAAAAAABQAAAAAAAAIUAQFARALFgAABQQAXkLIAKLIALYIAKCFsKWCFsAALAGVNowbOZrNRnw6mUIZZKMkpJdu9exm3U2uM3dR0Gn8RLqbDh8OyznxeXxZym3iaTbut0ztWJdzZlPxuqoMbLZplQSxYGcXsgupipNcjzLiOFZZ48ilCUG1dWn6US3XrUlvjdNfOvUzs80dZhzZ1ix+Jum22qVI32N78LLPWXMXREwVFASKBCkAFAAAAAAAAAAAAAYgWAgBYsAUgACxYsAUiFgUgsALAsWAsWQWBbFkABs5usxZM/EIxhFteFK6dK73bOi7syilFq3u96ZLNzTUy/G7jhQx5NJxXG5wbS2coptNNd68ztWM6UoNXSd/Uxi7SfkJNeFy/Lus0wmRFSKytksABZyNbFR17a/mSf15fsdajx5dG8+peR5PDGkkkrexnKWzUbwsl3Xm0EkuIJPa4NL12Z1rPP8A2HHjjGSTeSMk1N80uq22qr9z0pfT6jHGyapnlLelRehi6T2KjTKlMepQAACAAAFIAqihYCAsgAoIAqAAICgAFCgAAAAUAAJZbIwAAAAAAASw2BbpXVvoWKaTp77t+Zinbt/QzVPd8zUHnnco01vSf23Jia+HGn0M20kptqopt+lHm00vFji1fUzSPUmZI1psqbIrOwYWxbAzoQ5U+TZg5bMzgk1b5IsiVlKTbcUqdWzXBpptd7a7GWSkl81NtPnTvt9uRrupN8r3asthG2yowTMkyKyQImE9wMiAAB1AAC9wAAIUASwAFgAAAAgAAAAAAAAyFAEBaFAQFoUBAABA1tsUVYEjy2MnaXJmuGSCdOaUk6pun7GyU1KNJp+jNSo8mp3xSTdOmkY4IVFJLZKkXPu1HnKWyRvxw8KRmrFUdi+EzoJAYeEjibKDQVommkzZBreFbqrfdiStMxg7ySaVW7oRK2u9nzruamrb2rpXkb1TW+xpyOrrma3BIu0ZpGGLdP1NiRhQtAtFEBaFAS9wK3AAIWLAItksAAKAQAoAAAgAAAWAAKQMABYAAdQKAAUWgIEgUCUKKQDTl0+PLvOKb70eV8MwuTdVfbY6AA8+DSYcDbhBeJ8292ehIBAKKCgQVZaAGNGrLGaXiw14l0fJm4Ac2ev1eNtPRx26rJ/QmPVavNaelgt9m5vb7HRaT5pBRS5JDdNMMEJRh/Eacnu65G0VQAAtCgAAAEooAhDJogCiFAAAAAABAAAAAFIAA6FAACgAFbBAAAAAKABAgAAoABQSAAtDkgAHQABUAAQFAAC9QAAAAAAAAABAAAAAFAAgAA//2Q=="
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.38464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.46155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.53845" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.61536" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-60">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="239"
              height="427"
              viewBox="0 0 239 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5159)">
                <rect width="239" height="427" fill="url(#pattern0_1_5159)"></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5159"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5159"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5159">
                  <rect width="239" height="427" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5159"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.38464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.46155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.53845" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.61536" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[238px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="239"
              height="427"
              viewBox="0 0 239 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5175)">
                <rect width="239" height="427" fill="url(#pattern0_1_5175)"></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5175"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5175"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5175">
                  <rect width="239" height="427" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5175"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.38452" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.46143" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.53833" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.61523" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[241px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="240"
              height="427"
              viewBox="0 0 240 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5190)">
                <rect
                  width="239"
                  height="427"
                  transform="translate(0.5)"
                  fill="url(#pattern0_1_5190)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5190"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5190"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5190">
                  <rect width="239" height="427" fill="white" transform="translate(0.5)"></rect>
                </clipPath>
                <image
                  id="image0_1_5190"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.88464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.96155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.03845" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.11536" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-60">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="239"
              height="427"
              viewBox="0 0 239 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5205)">
                <rect width="239" height="427" fill="url(#pattern0_1_5205)"></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5205"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5205"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5205">
                  <rect width="239" height="427" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5205"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMADQkKCwoIDQsKCw4ODQ8TIBUTEhITJxweFyAuKTEwLiktLDM6Sj4zNkY3LC1AV0FGTE5SU1IyPlphWlBgSlFST//bAEMBDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAcgBaAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEQQAAIBAwIEBAQEAwMKBgMAAAABAgMEESExBRJBUQZhcZETgaHBIjKx0RRCUiNicgcVJDM0NUOSk+EWJVNzg6JUssL/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALREBAQACAQIFAwMEAwEAAAAAAAECEQMhMQQFEhNBMlFhFBViIjNScSM0QsH/2gAMAwEAAhEDEQA/APQAAQAAAJAZRAAIAAAAAAAAABOAAAAFMm1FtLLSzgSbWEsJvqzXcXvIWdrKbSnUekE9Vnu/JC3Sybulji97aUrSopzVSbjhJPVv9jh580m5vOc5xnZd0XLjic3Xl8Xmm298YXtsRGcG03FRTbxjplYa9Dhlba744yKFLloydRfiUsYfZGPc18/DSaWmW/NldzJyjvron6rT7E07VXEnHOHy5XmRqwt6jUEqFPn7t4Wfuy9lyeHFRl2axkxqM3QnyzxFJ4y9y/WqKrSzlSS6p7Pz7CkZ/Cq7sr2FenFwmniUdlNdV2O/oVYV6MasHmMllHklK+rUqjhNJxT6nc+FuKRqwdFyzF6pPdPqbwtl1XPObm46YgkHVxQCSAAAAAAAAAAAAAAAAAAAAAEgQSQwBJAAAAAAAAAJwAGAAAAAAACltJPOxwniu9nK+VGDfLHRpPb19jua01Tpub1S6HmfE5yub+tUnLLlNttaJLOn0MZ9m8J12mzoOvNKEceb1NxDgMOTVtSeuMl3gVvGNFT5VtpobqGrT6nG3q9Mmo5yrwKok2mm3v5lhcLr0ZrCb10wtTr1FPVrIaSecfQDi77hFxUfxHFp7vyNdTtJ0Kjymns8vRrqd9VSaZoL+ilNtLqS2xZJXMXNBxlLKbxrvjQzOCVqlCtmLacXv9y/XpKb21awYVo3CpJLOYprTt0LLuM2ar07hl5G8tIzTSkliSXQzDmfDEXVoOtRrNPOHFpNP9jplsd8LbOrzZyS9AAGmQgkgAAAAAAAAAAAAAAAAACSAAAAAEgQAwAA6kgAAAAAAAAABgC1c0/i21SCWri8euNDzriMPh1HNpZnLKT756npWxw/iy0nTuYulFOLy0lvq8vT1MZzpt047102PCY4sabTy2k8mwisGu4I3/mmi2m2srHo2ZFW5rUnlW/NFbpPLOOnol2z1sQ031MW24hTrrHK4NbqS2MlyTW5UWZp6roay7p5bytDPubqlRWZPboamfEI121So1JJdUtDNm25WA4f2yi+rwjU3Slb38lHRTT+uq+pvOVyuY/ha1TwzT+Iaclc0cJ/jjphb4ewx76qZ9nUeDqycakFFvnakmtksa5OsOS8D0JUadRVE1LkSWe2TrT0Ydnl5O4ADTAAAIBIAgAAAAAAAAAAAABIAKAAAAACACSAAAAAAAAAAAAAAGk47a/GvbOq5YjBTb9v+5uzXcXpOpTg4tpxbzjs9DOU3HTiusmusIOPDacYb5bXuzDubS7qzkvjTUcaKLw0/wBjZ2sHSoRpyabTeq2ZkYTWiTZxj0VzVpTv7ecITqTq78zm0zd5m7X4iWGlsXJ0o5y0myaj5baWNthrdWfZzlxcXFW4jCNN8reJSWMpeWS2o8UpOUnUnKOVyxkklj1RtIUoOfNhZ7mS4QcVoiS6i6m9tfSc6jjKpFKRauaUK1NNpfEhOUYt77dDPqRSaS0NbdQuJ1UoJRpxmmn1k32/Qmju6Pw5bKjwqjNtuU05Nvze30NuY9hRdvY0aUvzRgs+r1f6mQenGajx53eVAAVkAAAAAQAAAAAAAAAAAAAkAFAAdSAAAAAAAAAAAAAAAAAAABRVp/FpuGcZ64Kwheqy66xqK9OdGfLJpvfTbBNOWVqX79YrRb2ax7GOlh6HDKar04XclpXklFNvCzqyzWrU3aySmtdc5LtWdJxcKk4pLfLMCvCEotRqU/h43yTbpFug4tp05cyaznJkOXLH0LVtThSTaabfXOSmcm210yZ2tQ5c1QyOCWk7vluJxUacKj33k0+nkWIQcqkYLVyaS9zqIU4UoKFNJRWiSWh0wxlu648mdx6RUADs8wAAAAAAAAQSAIAAAAAAAAAAEgAoAAgAAAACgACAAAAAAAAAAAAIclFZk0l3bwi3UuLelT+JUr0oQ/qlNJe+Sii9pfFo4X5lqvU1VKsqiaT1WjT3TNzOSlBODTT1TXVGrvLCUqjuLRqNT+aL2n69n5nPPC3rHXjzk6VYqW9Go250YuXdrX3NfccPt3LEqbSxjCejNrCskkqkXCS3TFSrTk8YRx1Y9GOeuzUUrKhRkppPK2XM8exVKpyvL2L9zXp0oNyaSXVvCRplcVryri1ozqLP5sYXuTrVt31rbWF1Cne061RPki+m+dkdTTqQqwU4PK9Njlra0VrBV72aclrGC2T+7NZ4g4vxDh9SzvbObguaUZR3jJYTSa67M78eNk1Xm5LLejvgcvaeOOGVLKnUu1OlcNtTpQi54x1zosP3OlpVIVqMKtOSlCcVKLXVNZTOllndyVgAgAAAAAAAAgAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAA57xlxS44ZYUVaVHTqVZtOSSyklrjO26OIp+KvEFvNuF/KtBp6VIptemUbvx/f06t1QtKU4TdBNzaeWpPTD+SWnmcbnD1O2OMs6sW3fRlV+MX960766q1Wm2lOWiz5bGb4ct7W647bQvJqNHm5lF7SktVHyy/26moeJLDSaEU4PMJtNbJvY1Z00Sva5v3KHFv8AEnr+p59wjxjd2sY0r+nK4pLRTT/Gl67P56+Z23DeKWXEqPxLOvCeFrHaUfVPVHKyxqXa7OEJ6VIJ/IxZ2FrJttNPybRnzWVs/kY1RtaKMm/QxcZWpbO1YM+F2CfNOmpNf1NvHuU17qjbw5aEE2tFhaIxOJcZ4fZtxuLmKmv+HD8UvZbfM5biHid1YyjZUZUo7czac3nqui+rLMPwXO/dt7/ilG1mql5Uc6j1VOLy/bp8zmeLcZueKVF8TEKMPyU47Lzfd+ZrqlRuUpSm5Sby23ltlHMm8tpLt1OsxkYttVwaUsPOvY9W8GX1O44BbUHWpuvSTg6amnJJN4bW+x5L8RbIrpValOanTcoyTypJ4afkxlNxJdPdgcF4a8aTUoWnGJOUXhQuOq/xd15798nepppNNNNZTTymjlZZ3bAAQAAAAAEMEkAAAAAAAAASACgACAAAAAAAAAAAA6g53jniq24c5ULZK4uFo8P8EH5vq/JFktvRLZO7e3NxQtKMq1zVhSpx3lJ4X/dnIcf8ZUZW07fhMqinLR18YwuuE9c+ZyvEuK3fE6zqXdaU2to7Jei2Rrm8to6zCTrWbdk8yk5Oo228ttbsttVMaST9UXHtgjJtFluqnnC+TJVSa3g36F0NFTan4nNFLDTTT7Fdvd1rasqlCpOnUi9JRbTKGlh+hEdXLvklV0Np4v4xbpKrOFddqkNfdYMLiXiLi3EMqrXnCm/+HT/AseeNX82amfOnhN47FGaj2g892zOou6l871UEvNsJuME5Yzq9NiicKzWfiJPskS4v4cYvLytX8yptSo01rObb9Rz0U9Em/LUrVGH9CLsaajskvRDSrCm3pCk35tYK0qrf8sV7l3AwNG1ChPKbqP5JI63w/wCLqvC7SNpc0ZXNKD/BJzxKC7arVduxy2HglEsl7m7HqvDvFXCr+Sh8V0Kj0UaqSTfZPb9Dd9E+54gm09zd8J8S8R4ZywhW+LRX/CqZcV6dV8jFw+zUv3eqA0/A/EVpxiPJH+yuUsulJ5yu6fVfU3BiyzuoACAQSAIAAAAAAABIAAAAAAAAAAAAAAHJRi5SeEk22+iW7KOd8X8Ylw+0Vtbyar1k8tPWMds+r29zziU3JttvLNhx3iEuI8SrXDb5ZSfIn0itEvY1beq9T0YzUc7d1CZD0ZK3DRRGA0sDGhL7hFOwJaICqX1T2wRD80vkVPTTyKYL8T1IK8lLbexXjqyMalSqGnjUpaxheRcktCif5kuuESrImKwyvGSmCyV4ERGNMDBJBTZgYGAA6B7hhIKu0Lipb1oVKM3CpFpxknhprqj1jw/xSPF+FU7l4VVfhqxXSS3+T0fzPH2/7R9lodd4A4g6PFp2cpfguYNpf3o6r3WUc85ubaleigA4tAA6gQCSAAAAAACQAAAAAAAAAAAAA0vi++/guAVuV4qV2qMMb67v2TN0cN/lFuM17K3UtIRlUa828L6JmsJupbqOOqvMs9C2916lbeV6FvO2O56HPR/MTuTjD1MihY3dz/s9tWq+cKbf6ILrbG6hm2h4c4zUxy8MucPvDH6mVT8HccqLLtFD/HUin+pNw1XPkNHTLwRxprLp0F61kUVPBfG4rKoUpv8Au1l98E3F1XNv7Mph+Zm14jwHifDaPxr20lTptqKlzJrL2Wj8mY9twniNxR+Pb2VxVpNtKUKbaeNHqhuGmKR1M18M4hF4lY3KfnRl+xT/AJuvf/w7j/pS/YuzVYby9CiTzWa7JIzZ2F5Gm5ytLiMUsuTpySS7t4KKPDr2vNzo2lxUi3o4020/RpC2JJVlLCWxJsY8C4tLGOG3b/8AiZfh4Z43JZXDbj5pL9WTcNVp3qDdPwvx3D/8tre6/cx63AuLUc/E4bdJLqqbf6ZLuLqtbnQY9iqpSqU5ctSEoNdJJp/UjDaCWKehOcIPfYoqPEG+uCotxeW33Zn8IuHacWtLhPHw6sW/TKz9MmBBPGEXYZT03wzFm41HuOmdNugMDgl2r3g1pcJpudKKlh5xJLDXujPODYAAIAAAAAAABIAKAAAAAgAAAAAB5d4wuHceJLpZyqbVNeWEvu2eordHjF/WnX4nXqVH+KdSTfrlnTDvtnLsx8tPUhvEnnbdFb1eqafmilxbWPZnWsx6vwTgHC7WzoVoWsKlSpTjJ1KqUm20npnRLXobtJRSUUklsksI1/h6o6nh+wm93bwz8lj7Gwbwjha6BKRCJQDAwOmoyu69yGnLf5QnjgEF1dxD9GZXgmKXhi1x1cm/+ZmL/lCTfAIPGka8G/LRo2HhCn8PwzYpppum5P5tv7m72Sd2517v3GX3fuPkyGZVqPFdV0vDV622uaCgte7S+5HhWPLwCzSbw6ae/fLMLx7U+H4dcc6zrQXtl/YzvCzzwCye/wDZI1eyfLcYGAvmPcypgjbbQq+TKWwKKtKnWXLWpwqLtOKf6mtuPDnBrjLqcOopvrBOD+mDagS2Dj7/AMCWdROVhc1KMt1Gp+OPvo19TjOP8DveDOCuowcKjxCpTeU2tcd0/U9ge5zHjDg15xlWdGzVPFOcpTc54Sykl69TUyvyljzOCzHLTS7dSptKEsLGFg6qXgXisY5VW0fkpv8AYtrwPxOdNqVW2hJv8rm39UjfqjOq6jwFNS8NQWcuNaafun9zozReFeEXPBbKrbXFalUU5qpBwzo8YaefRG9ON7twABBAJIAAAACQAABQAAAAEAAAAABTVqKlRnUk8KEXJvySz9jxSu3KpKbeOZt+7ye2uMaicJpSi1hprKa7Mor2dtXhyVLejNLZSppr9DpjdJZt4wk2lLuiGtcaZ6anrs+B8KqJOXDrZ46KCX6F+hw+yto4t7ShT/w01+uDVzjPpYHhCbn4asc5zGDi8+TaNvN64ENHghvMjnW44ziPG+IK9rwp3EqcITcVGKSwk8b4MSXFL+a/FeV35czX6FHFo8vF7qParJ/XJNOhCXDKlxl88a0YLXTDWdvU8tttvV+iww4scJdTrpkcLurh8RpKVeo1PMZJybTTT7mt+JPCzJ7d2ZnCv952+f6n+jMBvRE3dOkxxmd1Phk+IbmtV8K2MJ1JSTqTTTec4axn0yx4erVYXdrTVSaitMczxs+ha41GUvDlhyxbSrVXJrpqieBa8Stl/e+zOtvSR4+Pjm+S6XYcQvYYUbuutP8A1H+5t7jjV/HhllVp12pz54yeE+bDSTeVvqc+vPsZ9fXg1k+1Sqv0Zzls31ejk4sLceka7xHxW9vbSlRuq3PFT5kuVLVJrovMq4VxG9p2cKcLqtGnBYjFSaSRr+LvMKfqy/w5YtIvvk65W+3Hn4+LD9TlNTUb+7urh8MspOvV5pOom+d5eGsZ1KODXNb/ADrQzWm0m3hzbWib2yVyuqttwmx+FyPndRvmgpdVtlPBVw2/rVr6EJxo6xnlqjFNYi9mtTnO86ulxvoupNdWC+I3sqjm7uspN5bU2tfQv0uO8TptYu5yXaSTX1RrU9F6GVRrWipqFa0cmt6kari38mmiS3fd3y48NfTt0fAuOXd9fK2uI02uVtyimnp88HR9Dk/DSs3xRyt3XUlTlmM0mktOq/Y6zod8LbOtfE8ZjjjyaxmoobwyylzVkvLUrm8TwUU3icn5JI28q7PDaS2SLCWde7L8ly0m3uyyliEQLuMYfyKiJaQT7MklAAEEAkgAAAGQABIAKAAABAIgAAAACiY/mRcfctx/Mi4WCMezIej8irZ4DWUBbxieemCN5Fa0KMahY4XxBHl43deck/dIijpwW4XevD9GZHiaOON1X3jF/T/sWLaravh9W3uKlSDlVjUThDmyksY123PL/wCq+/jbeHG632UcK/3pb6/zfZmuabZu+Hf5uXEaHwpXUp8+I8yillp741waZrVrzJZqOuGXqzt1pRV4hOhQ/hakZOM4TjTysJczWWu+qMngUccRtc/1/Zly6pKfBbFtJtVquG1/hKuEpLilrjT+0RrfWRiT+jK/7YmNXgzqyxwW0x/61X/+TCaWX6mRUrwlw23oJvnhUnJ6aYaWNfczL3dM5bcdff8A+NJxfanjuzKstLOn3wYnFnrTXkzNtP8AZaa6YR0z/tx5+Lr4nNtLx/8AlPD/AP5P/wBkUcHeL9N9KVR//Rlz4lnXsbajVr1KU6KkmlS5k8vO+UXeHrh1vdKpUv26bjKLToyT1TXmupiTrK3ctYZY6u+rULp6GZRpWU6cee6q06jWuaXNHPlh5+hVKxottUeIWsop6OblBteeUFw6u/8AV1Lep/grRb+rQks+HS542d9Nx4ZoUqfFJSpXVKqvhtYimmtVrhr7nV9DlPDNnc2/E5yr0ZQj8Jrm0abyuq0Or6HfjnR8Xxtl5e+2PV/MRRXNUfZMmq/xC2Wjb66m3lV3DziKImsKKCXPWz0RNRZmkEVtZg15FKeUmXP5S2tvQlEgAgEdSSOoAAAAABIAKDAAAAEAAAAAATwy6tUW2vw+Yg2t9jUFx6kPVEhrOqApWzISyyehMVgDkfEtvWqcWzCjOfNTjhxi3nGV0NfHhPEZrMbOrjplY/U78p3ZzvHLd178PH5YYTGTs4yw4LxGlfUKlS1lGEZpyba0XuY74BxRybVo8Zf8y/c7xrCJSHtTWk/X8m96cjX4HfPg9tTVJOpCpOUoKSyk9vLoWeH8G4hR4hQqVLWahGeW8p4XudoB7c3Kk8dyTG4/dwEuDcSTb/gq3ySf3Lb4VxFN5s6//Kz0MgntR0nmPJ8yPHuNUatG7hTr0p05KGcSTTw3v9DY8Nsr6raQnGzruLWj5HhrujdeMuA3/EeK0ri0hCUHSUW3NLDTf2Z1XC6E6HD7elUSUoU4xeHlZSSeDplhLjI48fi8sOTLPXdwkuH3yWXZ18f+2/2LcrW4j+a3rL1g19j0th7f9zn7U+70TzLL5xeXNOL1TXqmiVjO6Z6a4Rl+aKa80mUStbaS/Fb0XnvTX7Gfa/Lc8znzi5Pwl/vOfZUn+qOwexZo2Vrb1HUoUKdObWG4xw2uxdk8I64Y+maeDxPLOXP1SaYtxLEW/kXKTaoruyxdvMVFbymkv1+xkwxol0L8uK5TikimetRIuJYRRFc1RvsVFxrESzF5z6l6ekWY9J5ckSi4ACAAAIBJAAAASACgAAAAAAAgAACUsrTdBPVrswlqipxTedn3NQE8b7CTSeNs7eYb5VqtO6KG04tboCtLKWSrocXx7jXEbXiVW2oXDhSSTWIrKTSe+DTS4xxKX5r6vr2m0c7ySXT6HH5fyZ4zLfSvTNfMJaHl8uK8Qaw7y4/6j/confXU/wA91WfrUf7k96fZ0nlefzk9SbWdWl6sSq04r8VSC9ZJHlDqzby5yeerbZQ5tvVt+pPe/Dc8rvzk9X/irff+Io/9RfuFc27elxRfpNfueUZyxknvfhf2v+T1h1qX/q0/+ZfuPjUn/wAWn/zL9zyfmY5i+9+D9r/k9WlWt8pOtST85r9yfj0Ev9dTS/xr9zyjIb9B734P2v8Ak9YVWnL8tSD9JJ/cnmi9pJ+jR5NlrZ+wU5rVSafkx7v4S+V/bJ6ytXoVdOvseURuq8ccteovSb/cuLiF6truv/1H+492fZm+V5fGT1Jp9iibwmeZx4pfx1je3Cf/ALj/AHK1x3i0Gmr6s/KTTXs0WcsvwxfLM52rvKss1qceqy/sZdJLGWjluEcZnxGq3UilOmlB42b3bx03OkoSlJLKa+RuXfV4c8LhdX4ZTf4dBCLWrRSk8bFxPCyzTmt15JRZj0X+N+aFaTnPC2RFJONRZ6olGQACAAABBIYEAACQAUAAAAAAAEAAAch4m45e2t9O3o1JUqccLMVhvRPOfmamh4n4jSxi8qP/ANxJr6o2nja1hG5o3XPKLqxcWkt2tn7PHyOVSpwTUZuTe7qNtHDK2Xu+/wCG4+PPixvpjoqXjS+oz/t4Uqke7jy5+aN3aeKeF3eFVk7ao/69n81p74PPl1Sws9IyTXsyzJOLwof8rxj1TE5LDl8FxZdpp0niWpTq8XqTpTjODjFqUWmnp3RqGU0Mqik31fTBLM27u3t4sPRhMfsNklLZUsYI2MjGuxLaGX2YDYZGvYAESyMvPT3GfT3AMNhvXde5S2mt17gSQ9A3p09w9wiVsMkLPYN4WqwFTnBS3h5JyUTehYzl2XeAcdo8Or1HWhUk3Nt8qT+511DxvZNYjbV2l1yl9zy+Tcbma6cxmwlOVNQpvC6t7I6eqzs+VjwcfJbcp1eiz8d2MViNtVcuzkkRT8cW1R4naVEn1Uk/1SOEhCgoKLSyv5l3K/hyxinKLXm8Mz7mTvPAcOuz0ah4k4TVw3WdNvpOLX6ZM2hxKwuakY0LqnKWdIp4b9EzytRrReWvqZ3DlWq3lCDeHKpFLG6eUanJXHk8u49WyvVGA92Dq+MAAAQSQwAAAkAFAAAAAAABAAAHCeLI148Vn8fnlGazSw3jl7Ltjqc64vOmfnUOw8bVE6lvTjN80YtuKW2Xo/oci48zy0m+7eH9Dhn0tfo/B25cWO4tSfK9XhrbKT+yZZnVmnitFOL2kloZM6cuX8sWuzbMSdNxzhSpvyeU/kZjvnudmZbNOgsPKy9W8lb2LNkn/DJYS1ei2LsiN43pDGu5Uk8LXHoijdpLd7FzbTsStHlljC7v3HUY1KGF2GF2QBAwuy9hotkvYMgoewHoOgEab6exDSe6XsVNFPqEokn0RE44g2lqllFa0G4VbhJSisETSwy3H8E3Hsyub0KzvcaWuoq6kpbNpmXTq0ZJJKeUtlqYt2kr5prK0+ZsLei5RXM/hrGkY7/MuXZ4eKW52RVCnBtYo1X5t4Ls6UIrKU/PDzglW1NbuTfnJlSpQjrFyWOzZl7ZjZOqilUjnCrZ8pbmz4Nd07XitCvUpxnCEtU90nplea3NVVTlHZSa/qWfrui7w2yuru+p0LSMpc++WsJdXnsjU/DjzWeizLs9dymk08p7MFFKDp0YQby4RUW++FjJWeh+avcAAQAAEAACQAUAAAAAAAEAkADlvGlCk40KzbVV5i0tmlrn5N/U4+SUXiMG2db4zrU5VaFGMszhFuSXRPGPnocq3r5HDO9X6LwEvszbFqqtUWMKK8nqY1WNaksxqc66poz5rK3wjGqwTemTMerPHcV2UnK2Taw23oXXsUW0eWgljqyuWhFxlk6kFmTfRFfkUwWIru9Sc5bRK0nogAAAQ69AHzIG46lAIYABlKJewitAJI3JeiKfIG1musTT7rBO8UTWWabfValMXmJWL3a25xG+cnjRLBsqC5aSaTbNXdtfx+uySyZVs6lfLUuWC3fct7R5uLKTOyM1yqN/kS9WilqrvjHoIKMf9XFyf9UnoJupjeXyhn9TEeu3ooc8vE9H0ZXTqTpSVSOYyi08p+zRTz05Lkm22+klg2/hvhMeJXzoVZtUoLnbSy2k0seW+5uTfSPPzZTHG5V6NQk529KcvzOEW/VpZLgSSWEsJaJdgeiPzVu6AAIAACAABIAKAAAAAgAAASABx3jGlCF7SqRWJVIZl54eE/Y5hvB1HjRpXVDLSSpv9WcpKWW+Rad3sefPu/SeCtvDiSaay9F3ZjVa8IpqCc35LQuOKk8vM/XRexRVwlqseRmPRlbrouWk3K3y1h5ehW1lpd9C3av/AEfLWNWXYatt7INY9ptU8r5BLUNpvfQlIKLcMeQ6EDqGAURgIYHUBglAZwBD3C2D1I6AGUt67Et4Rbb1QTattPK3zoWYaJrqtC8ksZZaaSnLGz1Klam+/wBqljd4RsbSmnTjH+WOjXd/sYN2krhy7PQ2lnBxt45zsW9o83Dj/wAmVX2sLCSRS2yp6dMsobberSMR66pnFTWJLKOw8A2k6Vrc155alJU4N9UtX+qXyORgm5pJ5benmencHslw/htK3zmSTlJru3l/t8jrxzdfL8xzkw192aAGdnxAAAAAAAAAAAAAUAAAABAJIJA5PxtRWbau2stOGH5a5OQabeWs+p1PjRKne0ajqN89PHL2w916/Y5ZucnpHC7s4Z96/R+C6cOPVEs4w2/RIx60mk2o4Mhxqf1JfIsVZVI4Tw02lsYenK9FdtGSt1zvVtv0zsXklgPfCJS0x20DUmpIJY2JW40GMBRBjOoe2xAD0HQhalEgNBAOhDDKd2BU2Ut6EvZlubwEqJS7FKy3sEm3sVqOC1INZW+EUNYec6bIut4WS1Pd+SBWvrpOum9s5a7m0pRc4Jzb12S2RqZ/juor+8l9TdwWIpC9o48PW2qHTgtlj0bRQ+aOzyuz/cusoZI7Ve4ZR/ieJW1GLxz1Ipp+qz9D1bvg8w4DZVrvjFsqCaUJqUpL+VJpt/T6npz1bO/HOj4fmOW85NgANvnAAAAAAAAAAAAAAAAAAAEgAc74vsI1rSF7l89H8LXRpvf1T/U4to9I41S+Nwe6gll/DbXqtfsectY6HHkmrt9zy3O3jsvwttZRjXCwk+zT+plMxblJxfozEfQq9nOxKbTLVKXNBNdUi5nDTI1Lvqr67E4KU9tck5C7B6kNsa5AnoQiRsAYzoQ2UN6YJoVZ1IW5Cb6slPqVNjKGssqb3CaT3BUqOCG9SJTSWM+xRzNtYLo2rm0mkyzN4puXcqnLLePRFE8OKi9AzaxaEea8h65NvsjDsqHxL6nTg1zzajFvpnd/JZO0XA7J2qThPmx+fneW+/YWvNebHh6X5cq2sFDeWbW94NVoJzoydWPVYw1+5rqVCVWvCjBPmnJRS828COk5scsdyu48G2at+E/xDWJ3EubP91aL7s35bt6Mbe3p0KaSjTgorHksFw9Empp+c5c7nncqAArmAAAAAIAAEgAoAAgAAAOgJAAACirFTpTg9pRafzWDzF0pyqunCMpyTxiKyeotJpp7M56FlSsZyo0k2k3+JrV51yznyzpK93g/Ee1LJ8uapcFvqqT+HCCf9UsfRGLxPhNxaU3OryOOzcW3j5Ha09E1oYV/bwup0aNRNwq1Yxkk8aN4Zxj1XxfJ89nJ8do2nCrbhtSzdWTu6HxJRk8qLWNV11edH2NdC8g0str1RtPHsof+II21OKjStqEKcYrZLGcL3RoFBuOVoloeucMs6vHj4/lw7XcbCN1ReP7TD88IrVWm9qmfRo1vw03jrgolSWNiXw8+K7zzXL5xbZSg/wCd/JonMP6nn1NLTpPMk84IdNrq/cz+nrf7rP8AFum4rq/cjmj3fuzR1YtRzl+4ccp7j2D90/i3icM7J+ryMw/pXsc9OE3nDaS313ZMIuVGTbeU09x7J+6T/Fv3OnjVR+hQ6lP+57o0lOMai5Kjw0/wy+zEredNp8rfmtUxOD8pfNP4ty6lPbMV6Mh1Kf8AUv8AmNO6KjPRLVJtdit0klnC2LOH8pfNL/i2ilS7p/Ml1IdHj0Zq6dJTWWiHbpSxnGVkez+Unmn8Wzc4JbtPumWZzy9Jt+xgOlh4TyXbalisk+uhLxam9t4ePueUx1pvvC9nWr8XjXxmnRXNPLWmcpaeuTvZLlp8r7Gi8JcOlRpyu6ia+JBRiu6Tbz7s381ltHC9XPlytyYDeV6GPZcPdbj9rXpU9INyqtLRJLTPnloyprGUu5tuDU+WzcnvObftoOObrlnncZdNh0IJIPS8QAAABDAnJAAAAASAAAAAAAASOoAAAAai9z/GT+X6G3NXeLN1PK7foY5Ozrw/UtQWc6Fq4xF06j2hUjL2aL8FhJIt3MVKjJd0zjI9F6vP/F9RVPFF/LOcVOVfJJfY16WIxj7l7jSnHjNz8Z5k6jk33T1TLEXnXsj34dY8Gc1dKv5mQ0St2T1ydGFOEk3jUo5csrm86IJYGhZrRTWMEwpN400fXpoVVMddi/et0qdGjHRwppyz3er+mDFurp0xm5bWHNKT5Y7J+77kOmowkl1X3K6UcPySRNXSEvT7l10Y2tqkuXOCpKSjjLx6l2KzBE402Lo2x4U9W2s5K5rCwVtJMtzfNUUUTQrglGK01ZetrS4vblUbSk6s2sYS0Xm30RseAcInxO756iataWOd7cz/AKV9+yO+oUaNtTUKNKFOKWMRSRyz5JOkd+Pi9U3XL2Hgqmpupf3Dk3jNOlol83q/lg20fDPCISi42usXlNzbz666m2UsrKGcJnnuVvevRMZj2iUo04KMUklphItuWrb23Jk8rctVJYg0vQw2xm8tt9Wb6yh8OypRe/Ll/PU1NpQdevGGPw7yfkb5JJYSwlsjpxzXVw5svhAAOjgAAAQSQAAAAAASAAAAAAAASEAAAAGvv44rJrdo2Br7+Wa0V2RM+zpxfUspNIiUebKfVEww0VN416HB6bXIeKeBzuU721TdWEcTgv5kuq819TlKUswfseqNZTb6s8+8R2X8DxeThHFOv+NJbJ9V76/M9HDn8V5+bDp6owUMlKaa3Jex6nlUvVkvYYIbApnqVPMstttvq2UtFT0iTR8KYLDaKar/AAyS8iqDy2VSpOVGVRYxFpP55wLdRZLb0RTeYlXXBRT/AClb7iJe6ibwzY8A4NU4nXdWo3C3g8OS3b7L9+hj2FrC94lb2s58kas1Fvrjy83sehTpWvD7VQpuNKlThh5eEkuuTjyZ2dI9HDxy9aqpK14dZqnTUaVGmu+Eu7b+5ztXxhayv429KnUnTcsOqsJLXdJ7rzNPxvi1TiVzGjRk1aRevT4nm/I16pRVRPC0MY8Vs3W8+aS6xepwa5FjGOmpDeuDWcBvf4vhVFttzguSXqtn7YM9vDbb8jhZZdO0u5tU5LGOxZm08Jbbick/Tqyu2pOvXjDDw9X5ISbLdTbY8MpOFu5tYc3p6IzSEkkklhJYS7EneTU08lu7tAAYQAAAgkgAAAAAAkAFAAEAAASAAAAAGuvn/pD9EbE1t607mS7JL6Gc+zpx/UtwedSrffoW08FTeEc3oW5ySeO5ofFXD5XnD3UpxbqUXzJLdrqvbX5GwvbhUqlNt6OaT+ehk3OXBtbNaiXV2txlmq8wpSyitlEWlXqJdJNL3ZXlt+p78buPnWaukZ1DY2I3bZWRLUmbxAIpqPTBKKKbxnJkwa/hq0W0m3FpN6vD/wC5jUnhv0K28vTVks3G8criQ09CsiKwkiTTFWaraaabTTymnhpl6dxeXcYxu7qrVitoym2vYtVFlouRa5VqT0y3da9Vk1EvCax0Jbw8kNlLeU0yst94Y4gre5nQm8RqrMf8S/dfodU5uS1e/wBDzilUlTqRnFtSg00+zR21jeq7t6c4JOUllpPRPzZ5ObHV29vBnuemthzJJLp0N5YW6o0FJr8c1l+S6I4bifE80q1C3mpSScZ1IvRPGqX3Z39usW1FdqcV9EYwnVrmlkn5XAyAdHmAAAAAEAAAAAAAAkAAAAACJAAAAAAANbfx5bhSW01l+q0NkYPElrTfdNGcuzfHf6mHGemc64DknHfUo2hJ41SyUW1WNejGpB6POnZrRr3RzeqON8a3Vale0IU5uMYx58J4beevsdjCoqthTqP+eCl7rJxHjeMlxOllYTpaPvqzrbCfxeC2koNtOjHCWvRFs/plZl3lY89r03Rvrim1hxqSWPLOfuSX+Npx43cJrDynj5IsI9mF3I8XJNZUZAe4+ZthKeEW6j0LhamSiKb/ABF5vTBjZw0ZG6EVKJbIRL3KyiSyilJoqJSQFGU1qM4epU6a6aBQSWoVQ3qsLOehl293cUqErenU5ITeZYSz8n0MfC0SW/1JacJYaaaeqfQxZL0axtnVtFTjGjiKwlBpL5HqVs82tF96cX9EeXxalSi1s4fY9NsXmwtn3oxf/wBUeXDvX0vGSenGz7L4ANvAEAAOoACgACAAAAAKkABAAAAABIAAAAAY96l/CybWzTXuZBEoqUXGSTTWGn1Fm4surtpItSUkvMw+HyVOpXoZWFPmS7J7/VfU2V1aO2bnTbcG+r1T7GqqxdC6d0otqUeWSW+M5ycLLL1ezCyzo0njm3UrWhcJZcJtNrs1+6Ri+HPElGxtP4O9U1COfhzis4TecNb7nS1HRvrVrSpSnlNNe6a6M4fi/Aq9g3Wh/aUM7reKzpn9zphZZ6a55zKX1YqOL3VG+4rWubeLVOWEsrDeFjOOhZWxapLuXT1YzU08eVtttGQSyOhtkbLUty43hFuXcyRYqyxKKfWSRmPc19w3zemxsE84fcRaqRDYbHTzNMjGoIAnmZetIwqVJKom9Mpa6v5alhl+0lyV08pJpptrK1XqjGe/TdOvDr1zfZlyhGEGlSjLLTcUsNLVZXXOxi37Tuari8rm+uNfqX51KaqU5xmouDbylnPlp+5iV3BqTpttN5eVjXJy45Zd17PE5Y3H0xnWUnK1S6xbXyZ6fwqXPwiznnOaEH9EeXcO/wBTJd9fY9K8PNy8PWDe/wAFL20Oc+qteI37WG2yIANPEAAKAAIAAKAAAAAJAAQAAAAASCABIAAAADTeKakqfDIuLabqppp6rCbOUfiCdtX+FdwdWk4rVJKSf3R0/ix/6DQj3qN+y/7nnvFFm5foiY4zLOyvXb6PDTKd9t7Q4pw1yqTo3Lt5PVqcGlL9Vk1lz4gqV7KvbToQk55jGom1o31XfBqUu5Djrk6zhxl28uXPlZpTGOFsVAHVxGQ9iXsUt6CillL2wVdSJ6JvsiEYlRc0m+jZnJ6Is2drUvLyhbUlmdWpGEV5t4yZVek6FepRlvTm4v5Nr7Cd1qjJOdCPQk0zQdQyAQbBHUqCmQ/yyC0GMxfoS9lndncPfKo9snpvAoOnwKxg91Rjn56nmFt+FRXkepcHqKrwe0mutJL5rT7Hjxu8q+r4vHXFgzAAbfPAAAAAAAAAAAAAEgAIAAAAAAAAkAAAABz/AIsb+FbR/vSf0RwPEl/bp+SAHH/cezl/6mP+2GQ0Ael81HUdACqgokwDNEIiabi0uuEARXQ+BLT4/iSjUayqEJVH5NLC+rJ8Z2X8H4grTSxTr4qLTvv9U/cAzPqX4aJEoA6sUIYBKITJ6bACFEVRTbx3QAvatYfVGWvw1EuyR6P4Wnz8BoJv8spL65+4B4MO77fjv7UbcAHZ8kAAQAAUAAAAAAAB/9k="
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.38464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.46155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.53845" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.61536" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-60">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[239px] relative overflow-hidden bg-white"
          >
            <svg
              width="239"
              height="427"
              viewBox="0 0 239 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[427px] relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5220)">
                <rect width="239" height="427" fill="url(#pattern0_1_5220)"></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5220"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5220"
                    transform="matrix(0.00391801 0 0 0.00219298 -0.205241 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5220">
                  <rect width="239" height="427" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5220"
                  width="360"
                  height="456"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <div
              className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <p
                className="flex-grow-0 flex-shrink-0 w-[131px] text-base font-bold text-center text-[#252b42]"
              >
                Graphic Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                English Department
              </p>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px] px-[3px] py-[5px]"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[52px] text-base font-bold text-center text-[#bdbdbd]"
                >
                  $16.48
                </p>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[45px] text-base font-bold text-center text-[#23856d]"
                >
                  $6.48
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.38464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.46155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.53845" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.61536" cy="8" r="8" fill="#252B42"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="flex-grow-0 flex-shrink-0 w-[1440px] h-[709px] relative rounded-[5px] bg-white border border-[#dedede]"
  >
    <div className="w-[1440px] h-[709px] absolute left-0 top-0 overflow-hidden">
      <div className="w-[1440px] h-[709px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[1440px] h-[711px] absolute left-0 top-0 overflow-hidden bg-[#23856d]"></div>
        <div
          className="flex flex-col justify-start items-start w-[1036px] h-[711px] absolute left-[209px] top-0 overflow-hidden gap-20 py-28"
        >
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[599px] overflow-hidden gap-[30px]"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[509px] relative overflow-hidden gap-[30px] pt-[60px]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">SUMMER 2020</p>
              <p
                className="flex-grow-0 flex-shrink-0 w-[509px] text-[58px] font-bold text-left text-white"
              >
                Vita classNameic Product
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[341px] text-sm text-left text-white">
                We know how large objects will act, We know how are objects will act, We know
              </p>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[34px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                  $16.48
                </p>
                <div
                  className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                    ADD TO CART
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[510px] relative overflow-hidden"
            >
              <img
                src="shop-hero-2-png-picture-1.png"
                className="flex-grow-0 flex-shrink-0 w-[443px] h-[685px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-6 h-[44.47px] absolute left-[1381px] top-[401px] overflow-hidden"></div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[682px] relative overflow-hidden bg-white">
    <div
      className="flex justify-end items-center w-[1439px] absolute left-0 top-0 overflow-hidden gap-[30px]"
    >
      <div className="flex-grow-0 flex-shrink-0 w-[704px] h-[682px] relative">
        <div className="w-[704px] h-[682px] absolute left-0 top-0 overflow-hidden">
          <div className="w-[632px] h-[491.99px] absolute left-9 top-[117px]">
            <img
              src="asian-woman-man-with-winter-clothes-1.png"
              className="w-[725px] h-[774px] absolute left-[-137.85px] top-[-211.85px] object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[573px] relative overflow-hidden gap-[30px]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#bdbdbd]">
          SUMMER 2020
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
          <span className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]"
            >Part of the Neural </span><br /><span
            className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]"
            >Universe</span>
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500">
          <span className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500"
            >We know how large objects will act, </span><br /><span
            className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500"
            >but things on a small scale.</span>
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
              BUY NOW
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] border border-[#2dc071]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#2dc071]">
              READ MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[1044px] relative overflow-hidden bg-white">
    <div
      className="flex flex-col justify-start items-center w-[1050px] absolute left-[195px] top-0 gap-20 py-28"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[692px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[691px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#23a6f0]">
            Practice Advice
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-center text-[#252b42]">
            Featured Posts
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            <span className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500"
              >Problems trying to resolve the conflict between </span>
              <br /><span className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500"
              >the two major realms of classNameical physics: Newtonian mechanics
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-[30px]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[328px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[348px] relative overflow-hidden bg-white"
          >
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] relative overflow-hidden">
            <div
  className="w-[348px] h-[300px] absolute left-0 top-0 overflow-hidden bg-[url('/unsplash_hhdhcfaifhu.jpeg')] bg-cover bg-no-repeat bg-center"
></div>

              <div
                className="flex justify-start items-center absolute left-5 top-5 overflow-hidden px-2.5 rounded-[3px] bg-[#e74040]"
                style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1)" }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                  NEW
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8ec2f2]">Google</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">Trending</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">New</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]">
                <span className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >Loudest à la Madison #1 </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >(L'integral)</span>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500">
                <span className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >We focus on ergonomics and meeting </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >you where you work. It's only a </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >keystroke away.</span>
              </p>
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden py-[15px]"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_17)">
                      <path
                        d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_17">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    22 April 2021
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-[14.67px] relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_22)">
                      <path
                        d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z"
                        fill="#23856D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_22">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0.5 0.666504)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    10 comments
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                  Learn More
                </p>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_7008_27)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_7008_27">
                      <rect width="9" height="16" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[328px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[348px] relative overflow-hidden bg-white"
            style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1);"}}
          >
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] relative overflow-hidden">
            <div
  className="w-[348px] h-[300px] absolute left-0 top-0 overflow-hidden bg-[url('/unsplash_degu-ocub1y.jpeg')] bg-cover bg-no-repeat bg-center"
></div>

              <div
                className="flex justify-start items-center absolute left-5 top-5 overflow-hidden px-2.5 rounded-[3px] bg-[#e74040]"
                style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1);"}}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                  NEW
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8ec2f2]">Google</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">Trending</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">New</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]">
                <span className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >Loudest à la Madison #1 </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >(L'integral)</span>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500">
                <span className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >We focus on ergonomics and meeting </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >you where you work. It's only a </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >keystroke away.</span>
              </p>
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden py-[15px]"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_105)">
                      <path
                        d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_105">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    22 April 2021
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-[14.67px] relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_110)">
                      <path
                        d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z"
                        fill="#23856D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_110">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0.5 0.666504)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    10 comments
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                  Learn More
                </p>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_7008_115)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_7008_115">
                      <rect width="9" height="16" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[329px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[348px] relative overflow-hidden bg-white 0px 2px 4px 0 rgba(0,0,0,0.1)"
          >
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] relative overflow-hidden">
            <div
  className="w-[348px] h-[300px] absolute left-0 top-0 overflow-hidden bg-[url('/unsplash_tveqstc2uz8.jpeg')] bg-cover bg-no-repeat bg-center"
></div>

              <div
                className="flex justify-start items-center absolute left-5 top-5 overflow-hidden px-2.5 rounded-[3px] bg-[#e74040]"
                style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1);"}}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                  NEW
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8ec2f2]">Google</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">Trending</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">New</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]">
                <span className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >Loudest à la Madison #1 </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >(L'integral)</span>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500">
                <span className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >We focus on ergonomics and meeting </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >you where you work. It's only a </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >keystroke away.</span>
              </p>
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden py-[15px]"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_155)">
                      <path
                        d="M7.99934 14.6667C4.70379 14.6232 2.04278 11.9622 1.99934 8.66668C2.04278 5.37113 4.70379 2.71011 7.99934 2.66668C11.2949 2.71011 13.9559 5.37113 13.9993 8.66668C13.9559 11.9622 11.2949 14.6232 7.99934 14.6667ZM7.99934 4.00001C5.43612 4.03376 3.36642 6.10346 3.33268 8.66668C3.36642 11.2299 5.43612 13.2996 7.99934 13.3333C10.5626 13.2996 12.6323 11.2299 12.666 8.66668C12.6323 6.10346 10.5626 4.03376 7.99934 4.00001ZM11.3327 9.33334H7.33268V5.33334H8.66601V8.00001H11.3327V9.33334ZM13.5273 4.47201L11.5213 2.47201L12.4607 1.52734L14.4673 3.52734L13.5273 4.47134V4.47201ZM2.47068 4.47201L1.52734 3.52734L3.52134 1.52734L4.46468 2.47201L2.47201 4.47201H2.47068Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_155">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    22 April 2021
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-[14.67px] relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_160)">
                      <path
                        d="M15.8333 13.8332H1.5V0.833171C1.5 0.741504 1.425 0.666504 1.33333 0.666504H0.166667C0.075 0.666504 0 0.741504 0 0.833171V15.1665C0 15.2582 0.075 15.3332 0.166667 15.3332H15.8333C15.925 15.3332 16 15.2582 16 15.1665V13.9998C16 13.9082 15.925 13.8332 15.8333 13.8332ZM3 12.4998H14.1667C14.2583 12.4998 14.3333 12.4248 14.3333 12.3332V3.24984C14.3333 3.09984 14.1521 3.02692 14.0479 3.13109L9.66667 7.51234L7.05417 4.929C7.02284 4.89799 6.98054 4.88059 6.93646 4.88059C6.89238 4.88059 6.85007 4.89799 6.81875 4.929L2.88125 8.879C2.86596 8.89433 2.85385 8.91252 2.84562 8.93255C2.8374 8.95257 2.83322 8.97402 2.83333 8.99567V12.3332C2.83333 12.4248 2.90833 12.4998 3 12.4998Z"
                        fill="#23856D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_160">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0 0.666504)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    10 comments
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                  Learn More
                </p>
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_7008_165)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_7008_165">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="self-stretch flex-grow-0 flex-shrink-0 h-[488px] relative overflow-hidden bg-white">
    <div className="w-[1440px] h-[142px] absolute left-0 top-0 overflow-hidden bg-neutral-50">
      <div
        className="flex flex-col justify-start items-start w-[1050px] absolute left-[195px] top-0 overflow-hidden py-10"
      >
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[577.5px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[236px] relative overflow-hidden gap-2.5"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[187px] h-[58px] relative overflow-hidden">
              <p className="absolute left-0 top-[13px] text-2xl font-bold text-left text-[#252b42]">
                Bandage
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[236px] overflow-hidden"
          >
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_1_5293)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_5293">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                  </clipPath>
                </defs></svg>
                <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_1_5296)">
                  <path
                    d="M13 1C10.0149 1 9.6395 1.01375 8.46663 1.066C7.29375 1.121 6.49487 1.30525 5.795 1.5775C5.06088 1.85363 4.39593 2.28676 3.84663 2.84663C3.2871 3.39621 2.85402 4.06108 2.5775 4.795C2.30525 5.4935 2.11963 6.29375 2.066 7.4625C2.01375 8.63812 2 9.01213 2 12.0014C2 14.9879 2.01375 15.3619 2.066 16.5347C2.121 17.7063 2.30525 18.5051 2.5775 19.205C2.85938 19.9282 3.23475 20.5415 3.84663 21.1534C4.45713 21.7652 5.07037 22.142 5.79363 22.4225C6.49487 22.6947 7.29238 22.8804 8.46388 22.934C9.63813 22.9862 10.0121 23 13 23C15.9879 23 16.3605 22.9862 17.5347 22.934C18.7049 22.879 19.5065 22.6947 20.2064 22.4225C20.94 22.1462 21.6045 21.7131 22.1534 21.1534C22.7652 20.5415 23.1406 19.9282 23.4225 19.205C23.6934 18.5051 23.879 17.7063 23.934 16.5347C23.9862 15.3619 24 14.9879 24 12C24 9.01213 23.9862 8.63813 23.934 7.46388C23.879 6.29375 23.6934 5.4935 23.4225 4.795C23.146 4.06106 22.7129 3.39618 22.1534 2.84663C21.6042 2.28655 20.9392 1.85339 20.205 1.5775C19.5037 1.30525 18.7035 1.11963 17.5334 1.066C16.3591 1.01375 15.9865 1 12.9973 1H13.0014H13ZM12.0141 2.98275H13.0014C15.9384 2.98275 16.2863 2.99238 17.4454 3.046C18.5179 3.09413 19.1009 3.27425 19.4886 3.42412C20.0015 3.6235 20.3686 3.86275 20.7536 4.24775C21.1386 4.63275 21.3765 4.9985 21.5759 5.51275C21.7271 5.89913 21.9059 6.48213 21.954 7.55463C22.0076 8.71375 22.0186 9.06163 22.0186 11.9973C22.0186 14.9329 22.0076 15.2821 21.954 16.4412C21.9059 17.5138 21.7257 18.0954 21.5759 18.4831C21.3995 18.9607 21.118 19.3926 20.7522 19.7467C20.3672 20.1318 20.0015 20.3696 19.4873 20.569C19.1023 20.7203 18.5192 20.899 17.4454 20.9485C16.2863 21.0007 15.9384 21.0131 13.0014 21.0131C10.0644 21.0131 9.71513 21.0007 8.556 20.9485C7.4835 20.899 6.90188 20.7203 6.51412 20.569C6.03631 20.3929 5.60405 20.1119 5.24913 19.7467C4.88303 19.392 4.60112 18.9598 4.42412 18.4818C4.27425 18.0954 4.09413 17.5124 4.046 16.4399C3.99375 15.2808 3.98275 14.9329 3.98275 11.9945C3.98275 9.0575 3.99375 8.711 4.046 7.55187C4.0955 6.47937 4.27425 5.89638 4.4255 5.50863C4.62488 4.99575 4.86412 4.62862 5.24913 4.24362C5.63412 3.85862 5.99988 3.62075 6.51412 3.42138C6.90188 3.27013 7.4835 3.09138 8.556 3.04188C9.57075 2.99513 9.964 2.98138 12.0141 2.98V2.98275ZM18.8726 4.80875C18.6993 4.80875 18.5276 4.84289 18.3675 4.90923C18.2073 4.97557 18.0618 5.0728 17.9392 5.19537C17.8167 5.31794 17.7194 5.46346 17.6531 5.62361C17.5868 5.78376 17.5526 5.95541 17.5526 6.12875C17.5526 6.30209 17.5868 6.47374 17.6531 6.63389C17.7194 6.79404 17.8167 6.93956 17.9392 7.06213C18.0618 7.1847 18.2073 7.28193 18.3675 7.34827C18.5276 7.41461 18.6993 7.44875 18.8726 7.44875C19.2227 7.44875 19.5585 7.30968 19.806 7.06213C20.0536 6.81458 20.1926 6.47884 20.1926 6.12875C20.1926 5.77866 20.0536 5.44292 19.806 5.19537C19.5585 4.94782 19.2227 4.80875 18.8726 4.80875ZM13.0014 6.3515C12.2521 6.33981 11.508 6.47729 10.8123 6.75594C10.1167 7.0346 9.48346 7.44885 8.94946 7.97458C8.41546 8.50032 7.99138 9.12703 7.70191 9.81823C7.41244 10.5094 7.26336 11.2513 7.26336 12.0007C7.26336 12.7501 7.41244 13.4919 7.70191 14.1831C7.99138 14.8743 8.41546 15.5011 8.94946 16.0268C9.48346 16.5525 10.1167 16.9668 10.8123 17.2454C11.508 17.5241 12.2521 17.6616 13.0014 17.6499C14.4844 17.6267 15.8988 17.0214 16.9393 15.9645C17.9799 14.9076 18.5631 13.4839 18.5631 12.0007C18.5631 10.5175 17.9799 9.09382 16.9393 8.03691C15.8988 6.97999 14.4844 6.37464 13.0014 6.3515ZM13.0014 8.33288C13.974 8.33288 14.9067 8.71923 15.5944 9.40695C16.2821 10.0947 16.6685 11.0274 16.6685 12C16.6685 12.9726 16.2821 13.9053 15.5944 14.593C14.9067 15.2808 13.974 15.6671 13.0014 15.6671C12.0288 15.6671 11.096 15.2808 10.4083 14.593C9.72061 13.9053 9.33425 12.9726 9.33425 12C9.33425 11.0274 9.72061 10.0947 10.4083 9.40695C11.096 8.71923 12.0288 8.33288 13.0014 8.33288Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_5296">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                  </clipPath>
                </defs></svg>
                <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-[19.76px] relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_1_5299)">
                  <path
                    d="M8.91075 19C17.213 19 21.7546 12.0731 21.7546 6.07669C21.7546 5.88285 21.7546 5.68625 21.7464 5.49241C22.6306 4.84789 23.3937 4.04993 24 3.13592C23.1741 3.50262 22.2988 3.7443 21.4026 3.85312C22.3466 3.28495 23.0536 2.391 23.3923 1.3374C22.5054 1.86647 21.5346 2.23787 20.5226 2.43534C19.8423 1.70572 18.9419 1.22237 17.9611 1.06016C16.9803 0.897946 15.9737 1.06592 15.0973 1.53807C14.2209 2.01023 13.5236 2.7602 13.1134 3.67182C12.7031 4.58345 12.6029 5.60585 12.8281 6.58066C11.0334 6.49005 9.27762 6.02057 7.67468 5.20269C6.07175 4.3848 4.65744 3.23678 3.5235 1.83307C2.94784 2.83421 2.77216 4.01843 3.03214 5.14526C3.29211 6.27209 3.96825 7.25705 4.92325 7.90013C4.20762 7.87565 3.50772 7.68215 2.88 7.33524V7.39754C2.88123 8.44631 3.24205 9.46247 3.90145 10.2743C4.56086 11.0861 5.4784 11.6438 6.499 11.853C6.11161 11.9605 5.71144 12.014 5.30963 12.0122C5.02635 12.0131 4.74365 11.9867 4.46537 11.9333C4.75383 12.8361 5.3155 13.6254 6.07171 14.1908C6.82793 14.7561 7.74081 15.0691 8.6825 15.0859C7.08276 16.3511 5.10668 17.0373 3.0725 17.034C2.71407 17.0355 2.35588 17.0147 2 16.9716C4.06458 18.297 6.46228 19.0008 8.91075 19Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_5299">
                    <rect
                      width="24"
                      height="19.7647"
                      fill="white"
                      transform="translate(0.5 0.117676)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      width="1057"
      height="1"
      viewBox="0 0 1057 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[194px] top-[137px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2="1057" y2="0.5" stroke="#E6E6E6"></line>
    </svg>
    <div className="w-[1440px] h-[272px] absolute left-0 top-[142px] overflow-hidden bg-white">
      <div
        className="flex flex-col justify-start items-start w-[1050px] absolute left-[195px] top-0 overflow-hidden py-[50px]"
      >
        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[30px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[148px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Company Info
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                About Us
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Carrier
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                We are hiring
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Blog
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[152px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Legal
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                About Us
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Carrier
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                We are hiring
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Blog
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[148px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Features
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Business Marketing
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                User Analytic
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Live Chat
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Unlimited Support
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[152px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Resources
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                IOS &#x26; Android
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Watch a Demo
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Customers
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                API
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[321px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Get In Touch
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-[321px] h-[87px] relative">
              <div className="w-[321px] h-[58px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="w-[321px] h-[58px] absolute left-0 top-0 overflow-hidden rounded-[5px] bg-[#f9f9f9] border border-[#e6e6e6]"
                >
                  <p className="absolute left-5 top-[15px] text-sm text-left text-neutral-500">
                    Your Email
                  </p>
                </div>
                <div className="w-[117px] h-[58px] absolute left-[204px] top-0 overflow-hidden">
                  <div
                    className="w-[117px] h-[58px] absolute left-0 top-0 overflow-hidden rounded-tr-[5px] rounded-br-[5px] bg-[#23a6f0] border border-[#e6e6e6]"
                  >
                    <p className="absolute left-[22.5px] top-[15px] text-sm text-center text-white">
                      Subscribe
                    </p>
                  </div>
                </div>
              </div>
              <p className="absolute left-0.5 top-[59px] text-xs text-left text-neutral-500">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[1440px] h-[74px] absolute left-0 top-[414px] overflow-hidden bg-neutral-50">
      <div
        className="flex flex-col justify-start items-start w-[1050px] absolute left-[195px] top-0 overflow-hidden py-[25px]"
      >
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[213px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[600px] relative overflow-hidden"
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page