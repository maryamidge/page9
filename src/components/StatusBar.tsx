import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <header
      className="flex w-full flex-col items-start absolute h-[54px] z-10 left-0 top-0"
      role="banner"
      aria-label="Status bar"
    >
      <div className="flex w-full justify-center items-center relative px-2.5 py-0">
        <div className="flex justify-center items-center flex-[1_0_0] relative pt-[18px] pb-[13px] px-0">
          <div className="flex flex-col items-start relative">
            <time
              className="text-black text-center text-lg font-[590] leading-[23px] tracking-[-0.44px] relative"
              aria-label="Current time"
            >
              1:47
            </time>
          </div>
        </div>
        
        <div className="flex flex-col items-start relative pt-[11px] pb-1.5 px-0">
          <div
            className="flex w-[126px] h-[37px] justify-center items-center relative bg-black rounded-[100px]"
            aria-label="Dynamic Island"
            role="presentation"
          />
        </div>
        
        <div className="flex justify-center items-center flex-[1_0_0] relative pt-[18px] pb-[13px] px-0">
          <div className="flex items-start gap-[3px] relative" role="group" aria-label="System status icons">
            <div className="flex flex-col items-start relative" aria-label="Cellular signal">
              <div className="flex w-[27px] justify-center items-center relative pl-0.5 pr-[2.604px] pt-[3px] pb-[5.582px]">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg width=\"23\" height=\"15\" viewBox=\"0 0 23 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"cellular-icon\" style=\"width: 22px; height: 14px; flex-shrink: 0; position: absolute; left: 2px; top: 3px\" aria-hidden=\"true\"> <g clip-path=\"url(#clip0_4_414)\"> <path opacity=\"0.2\" d=\"M19.5117 14.4102H21.5122C22.0352 14.4102 22.3838 14.0449 22.3838 13.5054V11.7783C22.3838 11.2388 22.0352 10.8818 21.5122 10.8818H19.5117C18.9888 10.8818 18.6401 11.2388 18.6401 11.7783V13.5054C18.6401 14.0449 18.9888 14.4102 19.5117 14.4102Z\" fill=\"black\"></path> <path d=\"M19.5151 14.4102H21.5322C22.0469 14.4102 22.3955 14.0449 22.3955 13.5054V0.904785C22.3955 0.365234 22.0469 0 21.5322 0H19.5151C19.0005 0 18.6436 0.365234 18.6436 0.904785V13.5054C18.6436 14.0449 19.0005 14.4102 19.5151 14.4102Z\" fill=\"black\"></path> <path opacity=\"0.2\" d=\"M13.3018 14.4102H15.3022C15.8252 14.4102 16.1738 14.0449 16.1738 13.5054V11.7783C16.1738 11.2388 15.8252 10.8818 15.3022 10.8818H13.3018C12.7788 10.8818 12.4302 11.2388 12.4302 11.7783V13.5054C12.4302 14.0449 12.7788 14.4102 13.3018 14.4102Z\" fill=\"black\"></path> <path d=\"M13.3062 14.4102H15.3066C15.8213 14.4102 16.1782 14.0449 16.1782 13.5054V4.18359C16.1782 3.64404 15.8213 3.27881 15.3066 3.27881H13.3062C12.7832 3.27881 12.4346 3.64404 12.4346 4.18359V13.5054C12.4346 14.0449 12.7832 14.4102 13.3062 14.4102Z\" fill=\"black\"></path> <path opacity=\"0.2\" d=\"M7.0918 14.4102H9.09228C9.61523 14.4102 9.96386 14.0449 9.96386 13.5054V11.7783C9.96386 11.2388 9.61523 10.8818 9.09228 10.8818H7.0918C6.56885 10.8818 6.22021 11.2388 6.22021 11.7783V13.5054C6.22021 14.0449 6.56885 14.4102 7.0918 14.4102Z\" fill=\"black\"></path> <path d=\"M7.08887 14.4102H9.08936C9.6123 14.4102 9.96094 14.0449 9.96094 13.5054V7.18848C9.96094 6.64893 9.6123 6.28369 9.08936 6.28369H7.08887C6.56592 6.28369 6.21729 6.64893 6.21729 7.18848V13.5054C6.21729 14.0449 6.56592 14.4102 7.08887 14.4102Z\" fill=\"black\"></path> <path opacity=\"0.2\" d=\"M0.871582 14.4102H2.87207C3.39502 14.4102 3.74365 14.0449 3.74365 13.5054V11.7783C3.74365 11.2388 3.39502 10.8818 2.87207 10.8818H0.871582C0.348633 10.8818 0 11.2388 0 11.7783V13.5054C0 14.0449 0.348633 14.4102 0.871582 14.4102Z\" fill=\"black\"></path> <path d=\"M0.871582 14.4102H2.87207C3.39502 14.4102 3.74365 14.0449 3.74365 13.5054V9.77832C3.74365 9.23877 3.39502 8.88184 2.87207 8.88184H0.871582C0.348633 8.88184 0 9.23877 0 9.77832V13.5054C0 14.0449 0.348633 14.4102 0.871582 14.4102Z\" fill=\"black\"></path> </g> <defs> <clipPath id=\"clip0_4_414\"> <rect width=\"22.3955\" height=\"14.4185\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start relative" aria-label="Wi-Fi signal">
              <div className="flex w-[23px] h-[23px] justify-center items-center relative pl-0.5 pr-[1.886px] pt-1 pb-[5.196px]">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg width=\"20\" height=\"14\" viewBox=\"0 0 20 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"wifi-icon\" style=\"width: 19px; height: 14px; flex-shrink: 0; position: absolute; left: 2px; top: 4px\" aria-hidden=\"true\"> <g clip-path=\"url(#clip0_4_426)\"> <path d=\"M9.55546 13.8042C9.73808 13.8042 9.8958 13.7212 10.2195 13.4058L12.2449 11.4634C12.3694 11.3389 12.4026 11.1562 12.2864 11.0068C11.7469 10.3096 10.7259 9.70361 9.55546 9.70361C8.35185 9.70361 7.33085 10.3345 6.7913 11.0566C6.7083 11.1895 6.7415 11.3389 6.87431 11.4634L8.8914 13.4058C9.21513 13.7129 9.37285 13.8042 9.55546 13.8042ZM4.69951 9.28857C4.88212 9.46289 5.10624 9.43799 5.27226 9.25537C6.26835 8.15137 7.89531 7.34619 9.55546 7.35449C11.2322 7.34619 12.8592 8.17627 13.8719 9.28027C14.0213 9.45459 14.2288 9.44629 14.4114 9.28027L15.698 8.00195C15.8309 7.86914 15.8475 7.68652 15.7229 7.53711C14.4695 6.00146 12.1453 4.84766 9.55546 4.84766C6.96562 4.84766 4.6414 6.00146 3.38798 7.53711C3.26347 7.68652 3.27177 7.85254 3.41288 8.00195L4.69951 9.28857ZM1.25468 5.81885C1.4207 5.97656 1.65312 5.97656 1.81083 5.81055C3.85283 3.64404 6.54228 2.49854 9.55546 2.49854C12.5852 2.49854 15.2913 3.65234 17.3167 5.81885C17.4661 5.96826 17.6902 5.95996 17.8562 5.80225L19.0018 4.65674C19.1512 4.50732 19.1429 4.32471 19.0267 4.18359C17.076 1.77637 13.407 0.00830078 9.55546 0.00830078C5.7122 0.00830078 2.02665 1.77637 0.0842717 4.18359C-0.0319392 4.32471 -0.0319392 4.50732 0.109174 4.65674L1.25468 5.81885Z\" fill=\"black\"></path> </g> <defs> <clipPath id=\"clip0_4_426\"> <rect width=\"19.1139\" height=\"13.8042\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start relative" aria-label="Battery level">
              <div className="flex w-9 h-[23px] justify-center items-center relative pl-[3px] pr-[2.152px] pt-1 pb-[5.045px]">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "<svg width=\"31\" height=\"14\" viewBox=\"0 0 31 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"battery-icon\" style=\"width: 31px; height: 14px; flex-shrink: 0; position: absolute; left: 3px; top: 4px\" aria-hidden=\"true\"> <g clip-path=\"url(#clip0_4_430)\"> <path opacity=\"0.4\" d=\"M5.52245 13.9548H22.2027C24.1495 13.9548 25.5399 13.7363 26.5323 12.7438C27.5281 11.7513 27.7326 10.3858 27.7326 8.4323V5.5391C27.7326 3.58564 27.5281 2.21343 26.5323 1.22429C25.5365 0.231817 24.1495 0.0166512 22.2027 0.0166512H5.46101C3.58972 0.0166512 2.19603 0.235147 1.20356 1.23095C0.207754 2.22342 0 3.59971 0 5.47025V8.4323C0 10.3858 0.204423 11.7546 1.1969 12.7438C2.19603 13.7363 3.57973 13.9548 5.52245 13.9548ZM5.23907 12.6249C3.97279 12.6249 2.83261 12.4245 2.17068 11.77C1.51949 11.1081 1.32989 9.98529 1.32989 8.71568V5.31384C1.32989 3.99277 1.51949 2.85667 2.16735 2.19474C2.82928 1.52948 3.98686 1.34321 5.3046 1.34321H22.4935C23.7598 1.34321 24.9 1.54688 25.5512 2.19807C26.2131 2.86 26.4027 3.97536 26.4027 5.24498V8.71568C26.4027 9.98529 26.2098 11.1081 25.5512 11.77C24.9 12.4279 23.7598 12.6249 22.4935 12.6249H5.23907ZM28.9771 9.60105C29.7724 9.55067 30.8478 8.52565 30.8478 6.98199C30.8478 5.44242 29.7724 4.4174 28.9771 4.36702V9.60105Z\" fill=\"black\"></path> <path d=\"M4.86311 11.522H22.8806C23.8442 11.522 24.4171 11.3713 24.7811 11.0072C25.1452 10.6398 25.3033 10.0636 25.3033 9.09928V4.86879C25.3033 3.8978 25.1452 3.32825 24.7845 2.96087C24.4171 2.60015 23.8375 2.44611 22.8806 2.44611H4.93197C3.90287 2.44611 3.30926 2.59682 2.95928 2.95754C2.59855 3.32492 2.44043 3.91854 2.44043 4.93023V9.09928C2.44043 10.0736 2.59855 10.6398 2.95928 11.0072C3.32666 11.3679 3.9062 11.522 4.86311 11.522Z\" fill=\"black\"></path> </g> <defs> <clipPath id=\"clip0_4_430\"> <rect width=\"30.8478\" height=\"13.9548\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
