import React from 'react'

const Home = () => {
  return (
    <>
   
    <div className="container-fluid">
      <div className="row">
        {/* SIDEBAR MENU  */}
      
        {/* MAIN CONTENT */}
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
          <div className="title-group mb-3">
            <h1 className="h2 mb-0">Overview</h1>
            <small className="text-muted">Hello Thomas, welcome back!</small>
          </div>
          <div className="row my-4">
            <div className="col-lg-12 col-12">
              <div className="custom-block bg-white">
                <h5 className="mb-4">History</h5>
                <div id="pie-chart" style={{ minHeight: "227.7px" }}>
                  <div
                    id="apexcharts5ovmcmhm"
                    className="apexcharts-canvas apexcharts5ovmcmhm apexcharts-theme-light"
                    style={{ width: 380, height: "227.7px" }}
                  >
                    <svg
                      id="SvgjsSvg1001"
                      width={380}
                      height="227.7"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x={0} y={0} width={380} height="227.7">
                        <div
                          className="apexcharts-legend apexcharts-align-center apx-legend-position-right"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            position: "absolute",
                            left: "auto",
                            top: 24,
                            right: 5
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 5px" }}
                            rel={1}
                            seriesname="Balance"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(0, 143, 251) !important",
                                color: "rgb(0, 143, 251)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={1}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                              rel={1}
                              i={0}
                              data:default-text="Balance"
                              data:collapsed="false"
                            >
                              Balance
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 5px" }}
                            rel={2}
                            seriesname="Expense"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(0, 227, 150) !important",
                                color: "rgb(0, 227, 150)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={2}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                              rel={2}
                              i={1}
                              data:default-text="Expense"
                              data:collapsed="false"
                            >
                              Expense
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 5px" }}
                            rel={3}
                            seriesname="CreditxLoan"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(254, 176, 25) !important",
                                color: "rgb(254, 176, 25)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                              rel={3}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                              rel={3}
                              i={2}
                              data:default-text="Credit%20Loan"
                              data:collapsed="false"
                            >
                              Credit Loan
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                          }}
                        />
                      </foreignObject>
                      <g
                        id="SvgjsG1003"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(22, 0)"
                      >
                        <defs id="SvgjsDefs1002">
                          <clipPath id="gridRectMask5ovmcmhm">
                            <rect
                              id="SvgjsRect1005"
                              width={231}
                              height={249}
                              x={-3}
                              y={-1}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMask5ovmcmhm" />
                          <clipPath id="nonForecastMask5ovmcmhm" />
                          <clipPath id="gridRectMarkerMask5ovmcmhm">
                            <rect
                              id="SvgjsRect1006"
                              width={229}
                              height={251}
                              x={-2}
                              y={-2}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <filter
                            id="SvgjsFilter1014"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1015"
                              floodColor="#000000"
                              floodOpacity="0.45"
                              result="SvgjsFeFlood1015Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1016"
                              in="SvgjsFeFlood1015Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1016Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1017"
                              dx={1}
                              dy={1}
                              result="SvgjsFeOffset1017Out"
                              in="SvgjsFeComposite1016Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1018"
                              stdDeviation={1}
                              result="SvgjsFeGaussianBlur1018Out"
                              in="SvgjsFeOffset1017Out"
                            />
                            <feBlend
                              id="SvgjsFeBlend1019"
                              in="SourceGraphic"
                              in2="SvgjsFeGaussianBlur1018Out"
                              mode="normal"
                              result="SvgjsFeBlend1019Out"
                            />
                          </filter>
                          <filter
                            id="SvgjsFilter1024"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1025"
                              floodColor="#000000"
                              floodOpacity="0.45"
                              result="SvgjsFeFlood1025Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1026"
                              in="SvgjsFeFlood1025Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1026Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1027"
                              dx={1}
                              dy={1}
                              result="SvgjsFeOffset1027Out"
                              in="SvgjsFeComposite1026Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1028"
                              stdDeviation={1}
                              result="SvgjsFeGaussianBlur1028Out"
                              in="SvgjsFeOffset1027Out"
                            />
                            <feBlend
                              id="SvgjsFeBlend1029"
                              in="SourceGraphic"
                              in2="SvgjsFeGaussianBlur1028Out"
                              mode="normal"
                              result="SvgjsFeBlend1029Out"
                            />
                          </filter>
                          <filter
                            id="SvgjsFilter1034"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1035"
                              floodColor="#000000"
                              floodOpacity="0.45"
                              result="SvgjsFeFlood1035Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1036"
                              in="SvgjsFeFlood1035Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1036Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1037"
                              dx={1}
                              dy={1}
                              result="SvgjsFeOffset1037Out"
                              in="SvgjsFeComposite1036Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1038"
                              stdDeviation={1}
                              result="SvgjsFeGaussianBlur1038Out"
                              in="SvgjsFeOffset1037Out"
                            />
                            <feBlend
                              id="SvgjsFeBlend1039"
                              in="SourceGraphic"
                              in2="SvgjsFeGaussianBlur1038Out"
                              mode="normal"
                              result="SvgjsFeBlend1039Out"
                            />
                          </filter>
                        </defs>
                        <g id="SvgjsG1007" className="apexcharts-pie">
                          <g id="SvgjsG1008" transform="translate(0, 0) scale(1)">
                            <g id="SvgjsG1009" className="apexcharts-slices">
                              <g
                                id="SvgjsG1010"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Balance"
                                rel={1}
                                data:realindex={0}
                              >
                                <path
                                  id="SvgjsPath1011"
                                  d="M 112.5 8.743902439024382 A 103.75609756097562 103.75609756097562 0 0 1 202.3554162853415 60.6219512195122 L 112.5 112.5 L 112.5 8.743902439024382"
                                  fill="rgba(0,143,251,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-0"
                                  index={0}
                                  j={0}
                                  data:angle={60}
                                  data:startangle={0}
                                  data:strokewidth={2}
                                  data:value={13}
                                  data:pathorig="M 112.5 8.743902439024382 A 103.75609756097562 103.75609756097562 0 0 1 202.3554162853415 60.6219512195122 L 112.5 112.5 L 112.5 8.743902439024382"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1020"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Expense"
                                rel={2}
                                data:realindex={1}
                              >
                                <path
                                  id="SvgjsPath1021"
                                  d="M 202.3554162853415 60.6219512195122 A 103.75609756097562 103.75609756097562 0 1 1 10.840745517370564 133.2538853981291 L 112.5 112.5 L 202.3554162853415 60.6219512195122"
                                  fill="rgba(0,227,150,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-1"
                                  index={0}
                                  j={1}
                                  data:angle="198.46153846153845"
                                  data:startangle={60}
                                  data:strokewidth={2}
                                  data:value={43}
                                  data:pathorig="M 202.3554162853415 60.6219512195122 A 103.75609756097562 103.75609756097562 0 1 1 10.840745517370564 133.2538853981291 L 112.5 112.5 L 202.3554162853415 60.6219512195122"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1030"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="CreditxLoan"
                                rel={3}
                                data:realindex={2}
                              >
                                <path
                                  id="SvgjsPath1031"
                                  d="M 10.840745517370564 133.2538853981291 A 103.75609756097562 103.75609756097562 0 0 1 112.48189114487732 8.743904019320112 L 112.5 112.5 L 10.840745517370564 133.2538853981291"
                                  fill="rgba(254,176,25,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-pie-slice-2"
                                  index={0}
                                  j={2}
                                  data:angle="101.53846153846155"
                                  data:startangle="258.46153846153845"
                                  data:strokewidth={2}
                                  data:value={22}
                                  data:pathorig="M 10.840745517370564 133.2538853981291 A 103.75609756097562 103.75609756097562 0 0 1 112.48189114487732 8.743904019320112 L 112.5 112.5 L 10.840745517370564 133.2538853981291"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1012"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1013"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="154.00243902439024"
                                  y="40.61566697172678"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                  filter="url(#SvgjsFilter1014)"
                                >
                                  16.7%
                                </text>
                              </g>
                              <g
                                id="SvgjsG1022"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1023"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="141.93393540446726"
                                  y="190.11090919773181"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                  filter="url(#SvgjsFilter1024)"
                                >
                                  55.1%
                                </text>
                              </g>
                              <g
                                id="SvgjsG1032"
                                className="apexcharts-datalabels"
                              >
                                <text
                                  id="SvgjsText1033"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="48.204009607515246"
                                  y="60.00394872619054"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={600}
                                  fill="#ffffff"
                                  className="apexcharts-text apexcharts-pie-label"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                  filter="url(#SvgjsFilter1034)"
                                >
                                  28.2%
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine1040"
                          x1={0}
                          y1={0}
                          x2={225}
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1041"
                          x1={0}
                          y1={0}
                          x2={225}
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                      </g>
                      <g id="SvgjsG1004" className="apexcharts-annotations" />
                    </svg>
                    <div
                      className="apexcharts-tooltip apexcharts-theme-dark"
                      style={{ left: "185.875px", top: "107.85px" }}
                    >
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-active"
                        style={{
                          order: 1,
                          display: "flex",
                          backgroundColor: "rgb(0, 227, 150)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(0, 227, 150)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Expense:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              43
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{
                          order: 2,
                          display: "none",
                          backgroundColor: "rgb(0, 227, 150)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(0, 227, 150)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Expense:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              43
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{
                          order: 3,
                          display: "none",
                          backgroundColor: "rgb(0, 227, 150)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(0, 227, 150)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Expense:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              43
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="custom-block bg-white">
                <div id="chart" style={{ minHeight: 365 }}>
                  <div
                    id="apexcharts20i9p1jzi"
                    className="apexcharts-canvas apexcharts20i9p1jzi apexcharts-theme-light"
                    style={{ width: 1259, height: 350 }}
                  >
                    <svg
                      id="SvgjsSvg1042"
                      width={1259}
                      height={350}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x={0} y={0} width={1259} height={350}>
                        <div
                          className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            inset: "auto 0px 1px",
                            position: "absolute",
                            maxHeight: 175
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 5px" }}
                            rel={1}
                            seriesname="Income"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(0, 143, 251) !important",
                                color: "rgb(0, 143, 251)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 2
                              }}
                              rel={1}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                              rel={1}
                              i={0}
                              data:default-text="Income"
                              data:collapsed="false"
                            >
                              Income
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 5px" }}
                            rel={2}
                            seriesname="Expense"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(0, 227, 150) !important",
                                color: "rgb(0, 227, 150)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 2
                              }}
                              rel={2}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                              rel={2}
                              i={1}
                              data:default-text="Expense"
                              data:collapsed="false"
                            >
                              Expense
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            style={{ margin: "2px 5px" }}
                            rel={3}
                            seriesname="Transfer"
                            data:collapsed="false"
                          >
                            <span
                              className="apexcharts-legend-marker"
                              style={{
                                background: "rgb(254, 176, 25) !important",
                                color: "rgb(254, 176, 25)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 2
                              }}
                              rel={3}
                              data:collapsed="false"
                            />
                            <span
                              className="apexcharts-legend-text"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                              rel={3}
                              i={2}
                              data:default-text="Transfer"
                              data:collapsed="false"
                            >
                              Transfer
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                          }}
                        />
                      </foreignObject>
                      <g
                        id="SvgjsG1044"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(62.76666259765625, 30)"
                      >
                        <defs id="SvgjsDefs1043">
                          <linearGradient
                            id="SvgjsLinearGradient1049"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1050"
                              stopOpacity="0.4"
                              stopColor="rgba(216,227,240,0.4)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1051"
                              stopOpacity="0.5"
                              stopColor="rgba(190,209,230,0.5)"
                              offset={1}
                            />
                            <stop
                              id="SvgjsStop1052"
                              stopOpacity="0.5"
                              stopColor="rgba(190,209,230,0.5)"
                              offset={1}
                            />
                          </linearGradient>
                          <clipPath id="gridRectMask20i9p1jzi">
                            <rect
                              id="SvgjsRect1054"
                              width="1192.2333374023438"
                              height="267.480599691391"
                              x={-3}
                              y={-1}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMask20i9p1jzi" />
                          <clipPath id="nonForecastMask20i9p1jzi" />
                          <clipPath id="gridRectMarkerMask20i9p1jzi">
                            <rect
                              id="SvgjsRect1055"
                              width="1190.2333374023438"
                              height="269.480599691391"
                              x={-2}
                              y={-2}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <rect
                          id="SvgjsRect1053"
                          width="24.164012428566267"
                          height="265.480599691391"
                          x="79.20595680519386"
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          strokeDasharray={3}
                          fill="url(#SvgjsLinearGradient1049)"
                          className="apexcharts-xcrosshairs"
                          y2="265.480599691391"
                          filter="none"
                          fillOpacity="0.9"
                          x1="79.20595680519386"
                          x2="79.20595680519386"
                        />
                        <g
                          id="SvgjsG1120"
                          className="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG1121"
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText1123"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="65.90185207790799"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1124">Feb</tspan>
                              <title>Feb</title>
                            </text>
                            <text
                              id="SvgjsText1126"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="197.70555623372397"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1127">Mar</tspan>
                              <title>Mar</title>
                            </text>
                            <text
                              id="SvgjsText1129"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="329.5092603895399"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1130">Apr</tspan>
                              <title>Apr</title>
                            </text>
                            <text
                              id="SvgjsText1132"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="461.31296454535595"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1133">May</tspan>
                              <title>May</title>
                            </text>
                            <text
                              id="SvgjsText1135"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="593.1166687011719"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1136">Jun</tspan>
                              <title>Jun</title>
                            </text>
                            <text
                              id="SvgjsText1138"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="724.9203728569878"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1139">Jul</tspan>
                              <title>Jul</title>
                            </text>
                            <text
                              id="SvgjsText1141"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="856.7240770128037"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1142">Aug</tspan>
                              <title>Aug</title>
                            </text>
                            <text
                              id="SvgjsText1144"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="988.5277811686196"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1145">Sep</tspan>
                              <title>Sep</title>
                            </text>
                            <text
                              id="SvgjsText1147"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="1120.3314853244356"
                              y="294.480599691391"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1148">Oct</tspan>
                              <title>Oct</title>
                            </text>
                          </g>
                          <line
                            id="SvgjsLine1149"
                            x1={0}
                            y1="266.480599691391"
                            x2="1186.2333374023438"
                            y2="266.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g id="SvgjsG1169" className="apexcharts-grid">
                          <g
                            id="SvgjsG1170"
                            className="apexcharts-gridlines-horizontal"
                          >
                            <line
                              id="SvgjsLine1182"
                              x1={0}
                              y1={0}
                              x2="1186.2333374023438"
                              y2={0}
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1183"
                              x1={0}
                              y1="66.37014992284774"
                              x2="1186.2333374023438"
                              y2="66.37014992284774"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1184"
                              x1={0}
                              y1="132.7402998456955"
                              x2="1186.2333374023438"
                              y2="132.7402998456955"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1185"
                              x1={0}
                              y1="199.11044976854322"
                              x2="1186.2333374023438"
                              y2="199.11044976854322"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1186"
                              x1={0}
                              y1="265.480599691391"
                              x2="1186.2333374023438"
                              y2="265.480599691391"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            id="SvgjsG1171"
                            className="apexcharts-gridlines-vertical"
                          />
                          <line
                            id="SvgjsLine1172"
                            x1={0}
                            y1="266.480599691391"
                            x2={0}
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1173"
                            x1="131.80370415581598"
                            y1="266.480599691391"
                            x2="131.80370415581598"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1174"
                            x1="263.60740831163196"
                            y1="266.480599691391"
                            x2="263.60740831163196"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1175"
                            x1="395.41111246744794"
                            y1="266.480599691391"
                            x2="395.41111246744794"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1176"
                            x1="527.2148166232639"
                            y1="266.480599691391"
                            x2="527.2148166232639"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1177"
                            x1="659.0185207790798"
                            y1="266.480599691391"
                            x2="659.0185207790798"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1178"
                            x1="790.8222249348958"
                            y1="266.480599691391"
                            x2="790.8222249348958"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1179"
                            x1="922.6259290907117"
                            y1="266.480599691391"
                            x2="922.6259290907117"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1180"
                            x1="1054.4296332465276"
                            y1="266.480599691391"
                            x2="1054.4296332465276"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1181"
                            x1="1186.2333374023435"
                            y1="266.480599691391"
                            x2="1186.2333374023435"
                            y2="272.480599691391"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-xaxis-tick"
                          />
                          <line
                            id="SvgjsLine1188"
                            x1={0}
                            y1="265.480599691391"
                            x2="1186.2333374023438"
                            y2="265.480599691391"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            id="SvgjsLine1187"
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="265.480599691391"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g
                          id="SvgjsG1056"
                          className="apexcharts-bar-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG1057"
                            className="apexcharts-series"
                            rel={1}
                            seriesname="Income"
                            data:realindex={0}
                          >
                            <path
                              id="SvgjsPath1061"
                              d="M29.65583343505859 265.480599691391L29.65583343505859 168.13771313788095C29.65583343505859 168.13771313788095 29.65583343505859 168.13771313788095 29.65583343505859 168.13771313788095L51.819845863624856 168.13771313788095C51.81984586362486 168.13771313788095 51.81984586362486 168.13771313788095 51.819845863624856 168.13771313788095L51.819845863624856 168.13771313788095L51.819845863624856 265.480599691391L51.819845863624856 265.480599691391C51.819845863624856 265.480599691391 29.65583343505859 265.480599691391 29.65583343505859 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 29.65583343505859 265.480599691391L 29.65583343505859 168.13771313788095Q 29.65583343505859 168.13771313788095 29.65583343505859 168.13771313788095L 51.819845863624856 168.13771313788095Q 51.819845863624856 168.13771313788095 51.819845863624856 168.13771313788095L 51.819845863624856 168.13771313788095L 51.819845863624856 265.480599691391L 51.819845863624856 265.480599691391z"
                              pathfrom="M 29.65583343505859 265.480599691391L 29.65583343505859 265.480599691391L 51.819845863624856 265.480599691391L 51.819845863624856 265.480599691391L 51.819845863624856 265.480599691391L 51.819845863624856 265.480599691391L 51.819845863624856 265.480599691391L 29.65583343505859 265.480599691391"
                              cy="168.13771313788095"
                              cx="160.45953759087456"
                              j={0}
                              val={44}
                              barheight="97.34288655351003"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1063"
                              d="M161.45953759087456 265.480599691391L161.45953759087456 143.80199149950346C161.45953759087456 143.80199149950346 161.45953759087456 143.80199149950346 161.45953759087456 143.80199149950346L183.6235500194408 143.80199149950346C183.6235500194408 143.80199149950346 183.6235500194408 143.80199149950346 183.6235500194408 143.80199149950346L183.6235500194408 143.80199149950346L183.6235500194408 265.480599691391L183.6235500194408 265.480599691391C183.6235500194408 265.480599691391 161.45953759087456 265.480599691391 161.45953759087456 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 161.45953759087456 265.480599691391L 161.45953759087456 143.80199149950346Q 161.45953759087456 143.80199149950346 161.45953759087456 143.80199149950346L 183.6235500194408 143.80199149950346Q 183.6235500194408 143.80199149950346 183.6235500194408 143.80199149950346L 183.6235500194408 143.80199149950346L 183.6235500194408 265.480599691391L 183.6235500194408 265.480599691391z"
                              pathfrom="M 161.45953759087456 265.480599691391L 161.45953759087456 265.480599691391L 183.6235500194408 265.480599691391L 183.6235500194408 265.480599691391L 183.6235500194408 265.480599691391L 183.6235500194408 265.480599691391L 183.6235500194408 265.480599691391L 161.45953759087456 265.480599691391"
                              cy="143.80199149950346"
                              cx="292.26324174669054"
                              j={1}
                              val={55}
                              barheight="121.67860819188752"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1065"
                              d="M293.26324174669054 265.480599691391L293.26324174669054 139.37731483798026C293.26324174669054 139.37731483798026 293.26324174669054 139.37731483798026 293.26324174669054 139.37731483798026L315.4272541752568 139.37731483798026C315.4272541752568 139.37731483798026 315.4272541752568 139.37731483798026 315.4272541752568 139.37731483798026L315.4272541752568 139.37731483798026L315.4272541752568 265.480599691391L315.4272541752568 265.480599691391C315.4272541752568 265.480599691391 293.26324174669054 265.480599691391 293.26324174669054 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 293.26324174669054 265.480599691391L 293.26324174669054 139.37731483798026Q 293.26324174669054 139.37731483798026 293.26324174669054 139.37731483798026L 315.4272541752568 139.37731483798026Q 315.4272541752568 139.37731483798026 315.4272541752568 139.37731483798026L 315.4272541752568 139.37731483798026L 315.4272541752568 265.480599691391L 315.4272541752568 265.480599691391z"
                              pathfrom="M 293.26324174669054 265.480599691391L 293.26324174669054 265.480599691391L 315.4272541752568 265.480599691391L 315.4272541752568 265.480599691391L 315.4272541752568 265.480599691391L 315.4272541752568 265.480599691391L 315.4272541752568 265.480599691391L 293.26324174669054 265.480599691391"
                              cy="139.37731483798026"
                              cx="424.0669459025065"
                              j={2}
                              val={57}
                              barheight="126.10328485341071"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1067"
                              d="M425.0669459025065 265.480599691391L425.0669459025065 141.58965316874185C425.0669459025065 141.58965316874185 425.0669459025065 141.58965316874185 425.0669459025065 141.58965316874185L447.23095833107277 141.58965316874185C447.23095833107277 141.58965316874185 447.23095833107277 141.58965316874185 447.23095833107277 141.58965316874185L447.23095833107277 141.58965316874185L447.23095833107277 265.480599691391L447.23095833107277 265.480599691391C447.23095833107277 265.480599691391 425.0669459025065 265.480599691391 425.0669459025065 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 425.0669459025065 265.480599691391L 425.0669459025065 141.58965316874185Q 425.0669459025065 141.58965316874185 425.0669459025065 141.58965316874185L 447.23095833107277 141.58965316874185Q 447.23095833107277 141.58965316874185 447.23095833107277 141.58965316874185L 447.23095833107277 141.58965316874185L 447.23095833107277 265.480599691391L 447.23095833107277 265.480599691391z"
                              pathfrom="M 425.0669459025065 265.480599691391L 425.0669459025065 265.480599691391L 447.23095833107277 265.480599691391L 447.23095833107277 265.480599691391L 447.23095833107277 265.480599691391L 447.23095833107277 265.480599691391L 447.23095833107277 265.480599691391L 425.0669459025065 265.480599691391"
                              cy="141.58965316874185"
                              cx="555.8706500583226"
                              j={3}
                              val={56}
                              barheight="123.89094652264912"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1069"
                              d="M556.8706500583226 265.480599691391L556.8706500583226 130.5279615149339C556.8706500583226 130.5279615149339 556.8706500583226 130.5279615149339 556.8706500583226 130.5279615149339L579.0346624868888 130.5279615149339C579.0346624868888 130.5279615149339 579.0346624868888 130.5279615149339 579.0346624868888 130.5279615149339L579.0346624868888 130.5279615149339L579.0346624868888 265.480599691391L579.0346624868888 265.480599691391C579.0346624868888 265.480599691391 556.8706500583226 265.480599691391 556.8706500583226 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 556.8706500583226 265.480599691391L 556.8706500583226 130.5279615149339Q 556.8706500583226 130.5279615149339 556.8706500583226 130.5279615149339L 579.0346624868888 130.5279615149339Q 579.0346624868888 130.5279615149339 579.0346624868888 130.5279615149339L 579.0346624868888 130.5279615149339L 579.0346624868888 265.480599691391L 579.0346624868888 265.480599691391z"
                              pathfrom="M 556.8706500583226 265.480599691391L 556.8706500583226 265.480599691391L 579.0346624868888 265.480599691391L 579.0346624868888 265.480599691391L 579.0346624868888 265.480599691391L 579.0346624868888 265.480599691391L 579.0346624868888 265.480599691391L 556.8706500583226 265.480599691391"
                              cy="130.5279615149339"
                              cx="687.6743542141385"
                              j={4}
                              val={61}
                              barheight="134.95263817645707"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1071"
                              d="M688.6743542141385 265.480599691391L688.6743542141385 137.16497650721868C688.6743542141385 137.16497650721868 688.6743542141385 137.16497650721868 688.6743542141385 137.16497650721868L710.8383666427047 137.16497650721868C710.8383666427047 137.16497650721868 710.8383666427047 137.16497650721868 710.8383666427047 137.16497650721868L710.8383666427047 137.16497650721868L710.8383666427047 265.480599691391L710.8383666427047 265.480599691391C710.8383666427047 265.480599691391 688.6743542141385 265.480599691391 688.6743542141385 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 688.6743542141385 265.480599691391L 688.6743542141385 137.16497650721868Q 688.6743542141385 137.16497650721868 688.6743542141385 137.16497650721868L 710.8383666427047 137.16497650721868Q 710.8383666427047 137.16497650721868 710.8383666427047 137.16497650721868L 710.8383666427047 137.16497650721868L 710.8383666427047 265.480599691391L 710.8383666427047 265.480599691391z"
                              pathfrom="M 688.6743542141385 265.480599691391L 688.6743542141385 265.480599691391L 710.8383666427047 265.480599691391L 710.8383666427047 265.480599691391L 710.8383666427047 265.480599691391L 710.8383666427047 265.480599691391L 710.8383666427047 265.480599691391L 688.6743542141385 265.480599691391"
                              cy="137.16497650721868"
                              cx="819.4780583699544"
                              j={5}
                              val={58}
                              barheight="128.3156231841723"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1073"
                              d="M820.4780583699544 265.480599691391L820.4780583699544 126.10328485341071C820.4780583699544 126.10328485341071 820.4780583699544 126.10328485341071 820.4780583699544 126.10328485341071L842.6420707985206 126.10328485341071C842.6420707985205 126.10328485341071 842.6420707985205 126.10328485341071 842.6420707985206 126.10328485341071L842.6420707985206 126.10328485341071L842.6420707985206 265.480599691391L842.6420707985206 265.480599691391C842.6420707985206 265.480599691391 820.4780583699544 265.480599691391 820.4780583699544 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 820.4780583699544 265.480599691391L 820.4780583699544 126.10328485341071Q 820.4780583699544 126.10328485341071 820.4780583699544 126.10328485341071L 842.6420707985206 126.10328485341071Q 842.6420707985206 126.10328485341071 842.6420707985206 126.10328485341071L 842.6420707985206 126.10328485341071L 842.6420707985206 265.480599691391L 842.6420707985206 265.480599691391z"
                              pathfrom="M 820.4780583699544 265.480599691391L 820.4780583699544 265.480599691391L 842.6420707985206 265.480599691391L 842.6420707985206 265.480599691391L 842.6420707985206 265.480599691391L 842.6420707985206 265.480599691391L 842.6420707985206 265.480599691391L 820.4780583699544 265.480599691391"
                              cy="126.10328485341071"
                              cx="951.2817625257703"
                              j={6}
                              val={63}
                              barheight="139.37731483798026"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1075"
                              d="M952.2817625257703 265.480599691391L952.2817625257703 132.7402998456955C952.2817625257703 132.7402998456955 952.2817625257703 132.7402998456955 952.2817625257703 132.7402998456955L974.4457749543366 132.7402998456955C974.4457749543365 132.7402998456955 974.4457749543365 132.7402998456955 974.4457749543366 132.7402998456955L974.4457749543366 132.7402998456955L974.4457749543366 265.480599691391L974.4457749543366 265.480599691391C974.4457749543366 265.480599691391 952.2817625257703 265.480599691391 952.2817625257703 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 952.2817625257703 265.480599691391L 952.2817625257703 132.7402998456955Q 952.2817625257703 132.7402998456955 952.2817625257703 132.7402998456955L 974.4457749543366 132.7402998456955Q 974.4457749543366 132.7402998456955 974.4457749543366 132.7402998456955L 974.4457749543366 132.7402998456955L 974.4457749543366 265.480599691391L 974.4457749543366 265.480599691391z"
                              pathfrom="M 952.2817625257703 265.480599691391L 952.2817625257703 265.480599691391L 974.4457749543366 265.480599691391L 974.4457749543366 265.480599691391L 974.4457749543366 265.480599691391L 974.4457749543366 265.480599691391L 974.4457749543366 265.480599691391L 952.2817625257703 265.480599691391"
                              cy="132.7402998456955"
                              cx="1083.0854666815862"
                              j={7}
                              val={60}
                              barheight="132.7402998456955"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1077"
                              d="M1084.0854666815862 265.480599691391L1084.0854666815862 119.46626986112594C1084.0854666815862 119.46626986112594 1084.0854666815862 119.46626986112594 1084.0854666815862 119.46626986112594L1106.2494791101526 119.46626986112594C1106.2494791101526 119.46626986112594 1106.2494791101526 119.46626986112594 1106.2494791101526 119.46626986112594L1106.2494791101526 119.46626986112594L1106.2494791101526 265.480599691391L1106.2494791101526 265.480599691391C1106.2494791101526 265.480599691391 1084.0854666815862 265.480599691391 1084.0854666815862 265.480599691391 "
                              fill="rgba(0,143,251,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 1084.0854666815862 265.480599691391L 1084.0854666815862 119.46626986112594Q 1084.0854666815862 119.46626986112594 1084.0854666815862 119.46626986112594L 1106.2494791101526 119.46626986112594Q 1106.2494791101526 119.46626986112594 1106.2494791101526 119.46626986112594L 1106.2494791101526 119.46626986112594L 1106.2494791101526 265.480599691391L 1106.2494791101526 265.480599691391z"
                              pathfrom="M 1084.0854666815862 265.480599691391L 1084.0854666815862 265.480599691391L 1106.2494791101526 265.480599691391L 1106.2494791101526 265.480599691391L 1106.2494791101526 265.480599691391L 1106.2494791101526 265.480599691391L 1106.2494791101526 265.480599691391L 1084.0854666815862 265.480599691391"
                              cy="119.46626986112594"
                              cx="1214.8891708374022"
                              j={8}
                              val={66}
                              barheight="146.01432983026504"
                              barwidth="24.164012428566267"
                            />
                            <g
                              id="SvgjsG1059"
                              className="apexcharts-bar-goals-markers"
                              style={{ pointerEvents: "none" }}
                            >
                              <g
                                id="SvgjsG1060"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1062"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1064"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1066"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1068"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1070"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1072"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1074"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1076"
                                classname="apexcharts-bar-goals-groups"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1078"
                            className="apexcharts-series"
                            rel={2}
                            seriesname="Expense"
                            data:realindex={1}
                          >
                            <path
                              id="SvgjsPath1082"
                              d="M53.819845863624856 265.480599691391L53.819845863624856 97.34288655351003C53.81984586362485 97.34288655351003 53.81984586362485 97.34288655351003 53.819845863624856 97.34288655351003L75.98385829219112 97.34288655351003C75.98385829219112 97.34288655351003 75.98385829219112 97.34288655351003 75.98385829219112 97.34288655351003L75.98385829219112 97.34288655351003L75.98385829219112 265.480599691391L75.98385829219112 265.480599691391C75.98385829219112 265.480599691391 53.819845863624856 265.480599691391 53.819845863624856 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 53.819845863624856 265.480599691391L 53.819845863624856 97.34288655351003Q 53.819845863624856 97.34288655351003 53.819845863624856 97.34288655351003L 75.98385829219112 97.34288655351003Q 75.98385829219112 97.34288655351003 75.98385829219112 97.34288655351003L 75.98385829219112 97.34288655351003L 75.98385829219112 265.480599691391L 75.98385829219112 265.480599691391z"
                              pathfrom="M 53.819845863624856 265.480599691391L 53.819845863624856 265.480599691391L 75.98385829219112 265.480599691391L 75.98385829219112 265.480599691391L 75.98385829219112 265.480599691391L 75.98385829219112 265.480599691391L 75.98385829219112 265.480599691391L 53.819845863624856 265.480599691391"
                              cy="97.34288655351003"
                              cx="184.6235500194408"
                              j={0}
                              val={76}
                              barheight="168.13771313788095"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1084"
                              d="M185.6235500194408 265.480599691391L185.6235500194408 77.4318415766557C185.6235500194408 77.4318415766557 185.6235500194408 77.4318415766557 185.6235500194408 77.4318415766557L207.78756244800707 77.4318415766557C207.78756244800707 77.4318415766557 207.78756244800707 77.4318415766557 207.78756244800707 77.4318415766557L207.78756244800707 77.4318415766557L207.78756244800707 265.480599691391L207.78756244800707 265.480599691391C207.78756244800707 265.480599691391 185.6235500194408 265.480599691391 185.6235500194408 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 185.6235500194408 265.480599691391L 185.6235500194408 77.4318415766557Q 185.6235500194408 77.4318415766557 185.6235500194408 77.4318415766557L 207.78756244800707 77.4318415766557Q 207.78756244800707 77.4318415766557 207.78756244800707 77.4318415766557L 207.78756244800707 77.4318415766557L 207.78756244800707 265.480599691391L 207.78756244800707 265.480599691391z"
                              pathfrom="M 185.6235500194408 265.480599691391L 185.6235500194408 265.480599691391L 207.78756244800707 265.480599691391L 207.78756244800707 265.480599691391L 207.78756244800707 265.480599691391L 207.78756244800707 265.480599691391L 207.78756244800707 265.480599691391L 185.6235500194408 265.480599691391"
                              cy="77.4318415766557"
                              cx="316.4272541752568"
                              j={1}
                              val={85}
                              barheight="188.04875811473528"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1086"
                              d="M317.4272541752568 265.480599691391L317.4272541752568 42.03442828447024C317.4272541752568 42.03442828447024 317.4272541752568 42.03442828447024 317.4272541752568 42.03442828447024L339.59126660382304 42.03442828447024C339.59126660382304 42.03442828447024 339.59126660382304 42.03442828447024 339.59126660382304 42.03442828447024L339.59126660382304 42.03442828447024L339.59126660382304 265.480599691391L339.59126660382304 265.480599691391C339.59126660382304 265.480599691391 317.4272541752568 265.480599691391 317.4272541752568 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 317.4272541752568 265.480599691391L 317.4272541752568 42.03442828447024Q 317.4272541752568 42.03442828447024 317.4272541752568 42.03442828447024L 339.59126660382304 42.03442828447024Q 339.59126660382304 42.03442828447024 339.59126660382304 42.03442828447024L 339.59126660382304 42.03442828447024L 339.59126660382304 265.480599691391L 339.59126660382304 265.480599691391z"
                              pathfrom="M 317.4272541752568 265.480599691391L 317.4272541752568 265.480599691391L 339.59126660382304 265.480599691391L 339.59126660382304 265.480599691391L 339.59126660382304 265.480599691391L 339.59126660382304 265.480599691391L 339.59126660382304 265.480599691391L 317.4272541752568 265.480599691391"
                              cy="42.03442828447024"
                              cx="448.23095833107277"
                              j={2}
                              val={101}
                              barheight="223.44617140692074"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1088"
                              d="M449.23095833107277 265.480599691391L449.23095833107277 48.671443276755014C449.23095833107277 48.671443276755014 449.23095833107277 48.671443276755014 449.23095833107277 48.671443276755014L471.394970759639 48.671443276755014C471.394970759639 48.671443276755014 471.394970759639 48.671443276755014 471.394970759639 48.671443276755014L471.394970759639 48.671443276755014L471.394970759639 265.480599691391L471.394970759639 265.480599691391C471.394970759639 265.480599691391 449.23095833107277 265.480599691391 449.23095833107277 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 449.23095833107277 265.480599691391L 449.23095833107277 48.671443276755014Q 449.23095833107277 48.671443276755014 449.23095833107277 48.671443276755014L 471.394970759639 48.671443276755014Q 471.394970759639 48.671443276755014 471.394970759639 48.671443276755014L 471.394970759639 48.671443276755014L 471.394970759639 265.480599691391L 471.394970759639 265.480599691391z"
                              pathfrom="M 449.23095833107277 265.480599691391L 449.23095833107277 265.480599691391L 471.394970759639 265.480599691391L 471.394970759639 265.480599691391L 471.394970759639 265.480599691391L 471.394970759639 265.480599691391L 471.394970759639 265.480599691391L 449.23095833107277 265.480599691391"
                              cy="48.671443276755014"
                              cx="580.0346624868888"
                              j={3}
                              val={98}
                              barheight="216.80915641463596"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1090"
                              d="M581.0346624868888 265.480599691391L581.0346624868888 73.00716491513253C581.0346624868888 73.00716491513253 581.0346624868888 73.00716491513253 581.0346624868888 73.00716491513253L603.1986749154551 73.00716491513253C603.1986749154551 73.00716491513253 603.1986749154551 73.00716491513253 603.1986749154551 73.00716491513253L603.1986749154551 73.00716491513253L603.1986749154551 265.480599691391L603.1986749154551 265.480599691391C603.1986749154551 265.480599691391 581.0346624868888 265.480599691391 581.0346624868888 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 581.0346624868888 265.480599691391L 581.0346624868888 73.00716491513253Q 581.0346624868888 73.00716491513253 581.0346624868888 73.00716491513253L 603.1986749154551 73.00716491513253Q 603.1986749154551 73.00716491513253 603.1986749154551 73.00716491513253L 603.1986749154551 73.00716491513253L 603.1986749154551 265.480599691391L 603.1986749154551 265.480599691391z"
                              pathfrom="M 581.0346624868888 265.480599691391L 581.0346624868888 265.480599691391L 603.1986749154551 265.480599691391L 603.1986749154551 265.480599691391L 603.1986749154551 265.480599691391L 603.1986749154551 265.480599691391L 603.1986749154551 265.480599691391L 581.0346624868888 265.480599691391"
                              cy="73.00716491513253"
                              cx="711.8383666427047"
                              j={4}
                              val={87}
                              barheight="192.47343477625844"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1092"
                              d="M712.8383666427047 265.480599691391L712.8383666427047 33.18507496142388C712.8383666427047 33.18507496142388 712.8383666427047 33.18507496142388 712.8383666427047 33.18507496142388L735.002379071271 33.18507496142388C735.002379071271 33.18507496142388 735.002379071271 33.18507496142388 735.002379071271 33.18507496142388L735.002379071271 33.18507496142388L735.002379071271 265.480599691391L735.002379071271 265.480599691391C735.002379071271 265.480599691391 712.8383666427047 265.480599691391 712.8383666427047 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 712.8383666427047 265.480599691391L 712.8383666427047 33.18507496142388Q 712.8383666427047 33.18507496142388 712.8383666427047 33.18507496142388L 735.002379071271 33.18507496142388Q 735.002379071271 33.18507496142388 735.002379071271 33.18507496142388L 735.002379071271 33.18507496142388L 735.002379071271 265.480599691391L 735.002379071271 265.480599691391z"
                              pathfrom="M 712.8383666427047 265.480599691391L 712.8383666427047 265.480599691391L 735.002379071271 265.480599691391L 735.002379071271 265.480599691391L 735.002379071271 265.480599691391L 735.002379071271 265.480599691391L 735.002379071271 265.480599691391L 712.8383666427047 265.480599691391"
                              cy="33.18507496142388"
                              cx="843.6420707985206"
                              j={5}
                              val={105}
                              barheight="232.2955247299671"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1094"
                              d="M844.6420707985206 265.480599691391L844.6420707985206 64.15781159208618C844.6420707985206 64.15781159208618 844.6420707985206 64.15781159208618 844.6420707985206 64.15781159208618L866.8060832270869 64.15781159208618C866.8060832270869 64.15781159208618 866.8060832270869 64.15781159208618 866.8060832270869 64.15781159208618L866.8060832270869 64.15781159208618L866.8060832270869 265.480599691391L866.8060832270869 265.480599691391C866.8060832270869 265.480599691391 844.6420707985206 265.480599691391 844.6420707985206 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 844.6420707985206 265.480599691391L 844.6420707985206 64.15781159208618Q 844.6420707985206 64.15781159208618 844.6420707985206 64.15781159208618L 866.8060832270869 64.15781159208618Q 866.8060832270869 64.15781159208618 866.8060832270869 64.15781159208618L 866.8060832270869 64.15781159208618L 866.8060832270869 265.480599691391L 866.8060832270869 265.480599691391z"
                              pathfrom="M 844.6420707985206 265.480599691391L 844.6420707985206 265.480599691391L 866.8060832270869 265.480599691391L 866.8060832270869 265.480599691391L 866.8060832270869 265.480599691391L 866.8060832270869 265.480599691391L 866.8060832270869 265.480599691391L 844.6420707985206 265.480599691391"
                              cy="64.15781159208618"
                              cx="975.4457749543366"
                              j={6}
                              val={91}
                              barheight="201.3227880993048"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1096"
                              d="M976.4457749543366 265.480599691391L976.4457749543366 13.274029984569552C976.4457749543366 13.274029984569552 976.4457749543366 13.274029984569552 976.4457749543366 13.274029984569552L998.6097873829028 13.274029984569552C998.6097873829028 13.274029984569552 998.6097873829028 13.274029984569552 998.6097873829028 13.274029984569552L998.6097873829028 13.274029984569552L998.6097873829028 265.480599691391L998.6097873829028 265.480599691391C998.6097873829028 265.480599691391 976.4457749543366 265.480599691391 976.4457749543366 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 976.4457749543366 265.480599691391L 976.4457749543366 13.274029984569552Q 976.4457749543366 13.274029984569552 976.4457749543366 13.274029984569552L 998.6097873829028 13.274029984569552Q 998.6097873829028 13.274029984569552 998.6097873829028 13.274029984569552L 998.6097873829028 13.274029984569552L 998.6097873829028 265.480599691391L 998.6097873829028 265.480599691391z"
                              pathfrom="M 976.4457749543366 265.480599691391L 976.4457749543366 265.480599691391L 998.6097873829028 265.480599691391L 998.6097873829028 265.480599691391L 998.6097873829028 265.480599691391L 998.6097873829028 265.480599691391L 998.6097873829028 265.480599691391L 976.4457749543366 265.480599691391"
                              cy="13.274029984569552"
                              cx="1107.2494791101526"
                              j={7}
                              val={114}
                              barheight="252.20656970682143"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1098"
                              d="M1108.2494791101526 265.480599691391L1108.2494791101526 57.5207965998014C1108.2494791101526 57.5207965998014 1108.2494791101526 57.5207965998014 1108.2494791101526 57.5207965998014L1130.413491538719 57.5207965998014C1130.413491538719 57.5207965998014 1130.413491538719 57.5207965998014 1130.413491538719 57.5207965998014L1130.413491538719 57.5207965998014L1130.413491538719 265.480599691391L1130.413491538719 265.480599691391C1130.413491538719 265.480599691391 1108.2494791101526 265.480599691391 1108.2494791101526 265.480599691391 "
                              fill="rgba(0,227,150,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 1108.2494791101526 265.480599691391L 1108.2494791101526 57.5207965998014Q 1108.2494791101526 57.5207965998014 1108.2494791101526 57.5207965998014L 1130.413491538719 57.5207965998014Q 1130.413491538719 57.5207965998014 1130.413491538719 57.5207965998014L 1130.413491538719 57.5207965998014L 1130.413491538719 265.480599691391L 1130.413491538719 265.480599691391z"
                              pathfrom="M 1108.2494791101526 265.480599691391L 1108.2494791101526 265.480599691391L 1130.413491538719 265.480599691391L 1130.413491538719 265.480599691391L 1130.413491538719 265.480599691391L 1130.413491538719 265.480599691391L 1130.413491538719 265.480599691391L 1108.2494791101526 265.480599691391"
                              cy="57.5207965998014"
                              cx="1239.0531832659685"
                              j={8}
                              val={94}
                              barheight="207.95980309158958"
                              barwidth="24.164012428566267"
                            />
                            <g
                              id="SvgjsG1080"
                              className="apexcharts-bar-goals-markers"
                              style={{ pointerEvents: "none" }}
                            >
                              <g
                                id="SvgjsG1081"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1083"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1085"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1087"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1089"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1091"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1093"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1095"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1097"
                                classname="apexcharts-bar-goals-groups"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1099"
                            className="apexcharts-series"
                            rel={3}
                            seriesname="Transfer"
                            data:realindex={2}
                          >
                            <path
                              id="SvgjsPath1103"
                              d="M77.98385829219112 265.480599691391L77.98385829219112 188.04875811473528C77.98385829219112 188.04875811473528 77.98385829219112 188.04875811473528 77.98385829219112 188.04875811473528L100.14787072075738 188.04875811473528C100.1478707207574 188.04875811473528 100.1478707207574 188.04875811473528 100.14787072075738 188.04875811473528L100.14787072075738 188.04875811473528L100.14787072075738 265.480599691391L100.14787072075738 265.480599691391C100.14787072075738 265.480599691391 77.98385829219112 265.480599691391 77.98385829219112 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 77.98385829219112 265.480599691391L 77.98385829219112 188.04875811473528Q 77.98385829219112 188.04875811473528 77.98385829219112 188.04875811473528L 100.14787072075738 188.04875811473528Q 100.14787072075738 188.04875811473528 100.14787072075738 188.04875811473528L 100.14787072075738 188.04875811473528L 100.14787072075738 265.480599691391L 100.14787072075738 265.480599691391z"
                              pathfrom="M 77.98385829219112 265.480599691391L 77.98385829219112 265.480599691391L 100.14787072075738 265.480599691391L 100.14787072075738 265.480599691391L 100.14787072075738 265.480599691391L 100.14787072075738 265.480599691391L 100.14787072075738 265.480599691391L 77.98385829219112 265.480599691391"
                              cy="188.04875811473528"
                              cx="208.7875624480071"
                              j={0}
                              val={35}
                              barheight="77.4318415766557"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1105"
                              d="M209.7875624480071 265.480599691391L209.7875624480071 174.77472813016573C209.78756244800712 174.77472813016573 209.78756244800712 174.77472813016573 209.7875624480071 174.77472813016573L231.95157487657337 174.77472813016573C231.95157487657337 174.77472813016573 231.95157487657337 174.77472813016573 231.95157487657337 174.77472813016573L231.95157487657337 174.77472813016573L231.95157487657337 265.480599691391L231.95157487657337 265.480599691391C231.95157487657337 265.480599691391 209.7875624480071 265.480599691391 209.7875624480071 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 209.7875624480071 265.480599691391L 209.7875624480071 174.77472813016573Q 209.7875624480071 174.77472813016573 209.7875624480071 174.77472813016573L 231.95157487657337 174.77472813016573Q 231.95157487657337 174.77472813016573 231.95157487657337 174.77472813016573L 231.95157487657337 174.77472813016573L 231.95157487657337 265.480599691391L 231.95157487657337 265.480599691391z"
                              pathfrom="M 209.7875624480071 265.480599691391L 209.7875624480071 265.480599691391L 231.95157487657337 265.480599691391L 231.95157487657337 265.480599691391L 231.95157487657337 265.480599691391L 231.95157487657337 265.480599691391L 231.95157487657337 265.480599691391L 209.7875624480071 265.480599691391"
                              cy="174.77472813016573"
                              cx="340.5912666038231"
                              j={1}
                              val={41}
                              barheight="90.70587156122525"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1107"
                              d="M341.5912666038231 265.480599691391L341.5912666038231 185.83641978397367C341.5912666038231 185.83641978397367 341.5912666038231 185.83641978397367 341.5912666038231 185.83641978397367L363.75527903238935 185.83641978397367C363.75527903238935 185.83641978397367 363.75527903238935 185.83641978397367 363.75527903238935 185.83641978397367L363.75527903238935 185.83641978397367L363.75527903238935 265.480599691391L363.75527903238935 265.480599691391C363.75527903238935 265.480599691391 341.5912666038231 265.480599691391 341.5912666038231 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 341.5912666038231 265.480599691391L 341.5912666038231 185.83641978397367Q 341.5912666038231 185.83641978397367 341.5912666038231 185.83641978397367L 363.75527903238935 185.83641978397367Q 363.75527903238935 185.83641978397367 363.75527903238935 185.83641978397367L 363.75527903238935 185.83641978397367L 363.75527903238935 265.480599691391L 363.75527903238935 265.480599691391z"
                              pathfrom="M 341.5912666038231 265.480599691391L 341.5912666038231 265.480599691391L 363.75527903238935 265.480599691391L 363.75527903238935 265.480599691391L 363.75527903238935 265.480599691391L 363.75527903238935 265.480599691391L 363.75527903238935 265.480599691391L 341.5912666038231 265.480599691391"
                              cy="185.83641978397367"
                              cx="472.394970759639"
                              j={2}
                              val={36}
                              barheight="79.6441799074173"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1109"
                              d="M473.394970759639 265.480599691391L473.394970759639 207.9598030915896C473.394970759639 207.9598030915896 473.394970759639 207.9598030915896 473.394970759639 207.9598030915896L495.5589831882053 207.9598030915896C495.5589831882053 207.9598030915896 495.5589831882053 207.9598030915896 495.5589831882053 207.9598030915896L495.5589831882053 207.9598030915896L495.5589831882053 265.480599691391L495.5589831882053 265.480599691391C495.5589831882053 265.480599691391 473.394970759639 265.480599691391 473.394970759639 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 473.394970759639 265.480599691391L 473.394970759639 207.9598030915896Q 473.394970759639 207.9598030915896 473.394970759639 207.9598030915896L 495.5589831882053 207.9598030915896Q 495.5589831882053 207.9598030915896 495.5589831882053 207.9598030915896L 495.5589831882053 207.9598030915896L 495.5589831882053 265.480599691391L 495.5589831882053 265.480599691391z"
                              pathfrom="M 473.394970759639 265.480599691391L 473.394970759639 265.480599691391L 495.5589831882053 265.480599691391L 495.5589831882053 265.480599691391L 495.5589831882053 265.480599691391L 495.5589831882053 265.480599691391L 495.5589831882053 265.480599691391L 473.394970759639 265.480599691391"
                              cy="207.9598030915896"
                              cx="604.1986749154551"
                              j={3}
                              val={26}
                              barheight="57.52079659980138"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1111"
                              d="M605.1986749154551 265.480599691391L605.1986749154551 165.92537480711937C605.1986749154551 165.92537480711937 605.1986749154551 165.92537480711937 605.1986749154551 165.92537480711937L627.3626873440213 165.92537480711937C627.3626873440213 165.92537480711937 627.3626873440213 165.92537480711937 627.3626873440213 165.92537480711937L627.3626873440213 165.92537480711937L627.3626873440213 265.480599691391L627.3626873440213 265.480599691391C627.3626873440213 265.480599691391 605.1986749154551 265.480599691391 605.1986749154551 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 605.1986749154551 265.480599691391L 605.1986749154551 165.92537480711937Q 605.1986749154551 165.92537480711937 605.1986749154551 165.92537480711937L 627.3626873440213 165.92537480711937Q 627.3626873440213 165.92537480711937 627.3626873440213 165.92537480711937L 627.3626873440213 165.92537480711937L 627.3626873440213 265.480599691391L 627.3626873440213 265.480599691391z"
                              pathfrom="M 605.1986749154551 265.480599691391L 605.1986749154551 265.480599691391L 627.3626873440213 265.480599691391L 627.3626873440213 265.480599691391L 627.3626873440213 265.480599691391L 627.3626873440213 265.480599691391L 627.3626873440213 265.480599691391L 605.1986749154551 265.480599691391"
                              cy="165.92537480711937"
                              cx="736.002379071271"
                              j={4}
                              val={45}
                              barheight="99.55522488427161"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1113"
                              d="M737.002379071271 265.480599691391L737.002379071271 159.2883598148346C737.002379071271 159.2883598148346 737.002379071271 159.2883598148346 737.002379071271 159.2883598148346L759.1663914998372 159.2883598148346C759.1663914998372 159.2883598148346 759.1663914998372 159.2883598148346 759.1663914998372 159.2883598148346L759.1663914998372 159.2883598148346L759.1663914998372 265.480599691391L759.1663914998372 265.480599691391C759.1663914998372 265.480599691391 737.002379071271 265.480599691391 737.002379071271 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 737.002379071271 265.480599691391L 737.002379071271 159.2883598148346Q 737.002379071271 159.2883598148346 737.002379071271 159.2883598148346L 759.1663914998372 159.2883598148346Q 759.1663914998372 159.2883598148346 759.1663914998372 159.2883598148346L 759.1663914998372 159.2883598148346L 759.1663914998372 265.480599691391L 759.1663914998372 265.480599691391z"
                              pathfrom="M 737.002379071271 265.480599691391L 737.002379071271 265.480599691391L 759.1663914998372 265.480599691391L 759.1663914998372 265.480599691391L 759.1663914998372 265.480599691391L 759.1663914998372 265.480599691391L 759.1663914998372 265.480599691391L 737.002379071271 265.480599691391"
                              cy="159.2883598148346"
                              cx="867.8060832270869"
                              j={5}
                              val={48}
                              barheight="106.19223987655639"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1115"
                              d="M868.8060832270869 265.480599691391L868.8060832270869 150.43900649178823C868.8060832270869 150.43900649178823 868.8060832270869 150.43900649178823 868.8060832270869 150.43900649178823L890.9700956556532 150.43900649178823C890.9700956556532 150.43900649178823 890.9700956556532 150.43900649178823 890.9700956556532 150.43900649178823L890.9700956556532 150.43900649178823L890.9700956556532 265.480599691391L890.9700956556532 265.480599691391C890.9700956556532 265.480599691391 868.8060832270869 265.480599691391 868.8060832270869 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 868.8060832270869 265.480599691391L 868.8060832270869 150.43900649178823Q 868.8060832270869 150.43900649178823 868.8060832270869 150.43900649178823L 890.9700956556532 150.43900649178823Q 890.9700956556532 150.43900649178823 890.9700956556532 150.43900649178823L 890.9700956556532 150.43900649178823L 890.9700956556532 265.480599691391L 890.9700956556532 265.480599691391z"
                              pathfrom="M 868.8060832270869 265.480599691391L 868.8060832270869 265.480599691391L 890.9700956556532 265.480599691391L 890.9700956556532 265.480599691391L 890.9700956556532 265.480599691391L 890.9700956556532 265.480599691391L 890.9700956556532 265.480599691391L 868.8060832270869 265.480599691391"
                              cy="150.43900649178823"
                              cx="999.6097873829028"
                              j={6}
                              val={52}
                              barheight="115.04159319960276"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1117"
                              d="M1000.6097873829028 265.480599691391L1000.6097873829028 148.22666816102662C1000.6097873829028 148.22666816102662 1000.6097873829028 148.22666816102662 1000.6097873829028 148.22666816102662L1022.7737998114692 148.22666816102662C1022.7737998114692 148.22666816102662 1022.7737998114692 148.22666816102662 1022.7737998114692 148.22666816102662L1022.7737998114692 148.22666816102662L1022.7737998114692 265.480599691391L1022.7737998114692 265.480599691391C1022.7737998114692 265.480599691391 1000.6097873829028 265.480599691391 1000.6097873829028 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 1000.6097873829028 265.480599691391L 1000.6097873829028 148.22666816102662Q 1000.6097873829028 148.22666816102662 1000.6097873829028 148.22666816102662L 1022.7737998114692 148.22666816102662Q 1022.7737998114692 148.22666816102662 1022.7737998114692 148.22666816102662L 1022.7737998114692 148.22666816102662L 1022.7737998114692 265.480599691391L 1022.7737998114692 265.480599691391z"
                              pathfrom="M 1000.6097873829028 265.480599691391L 1000.6097873829028 265.480599691391L 1022.7737998114692 265.480599691391L 1022.7737998114692 265.480599691391L 1022.7737998114692 265.480599691391L 1022.7737998114692 265.480599691391L 1022.7737998114692 265.480599691391L 1000.6097873829028 265.480599691391"
                              cy="148.22666816102662"
                              cx="1131.4134915387187"
                              j={7}
                              val={53}
                              barheight="117.25393153036434"
                              barwidth="24.164012428566267"
                            />
                            <path
                              id="SvgjsPath1119"
                              d="M1132.4134915387187 265.480599691391L1132.4134915387187 174.77472813016573C1132.4134915387187 174.77472813016573 1132.4134915387187 174.77472813016573 1132.4134915387187 174.77472813016573L1154.577503967285 174.77472813016573C1154.577503967285 174.77472813016573 1154.577503967285 174.77472813016573 1154.577503967285 174.77472813016573L1154.577503967285 174.77472813016573L1154.577503967285 265.480599691391L1154.577503967285 265.480599691391C1154.577503967285 265.480599691391 1132.4134915387187 265.480599691391 1132.4134915387187 265.480599691391 "
                              fill="rgba(254,176,25,1)"
                              fillOpacity={1}
                              stroke="transparent"
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={2}
                              clipPath="url(#gridRectMask20i9p1jzi)"
                              pathto="M 1132.4134915387187 265.480599691391L 1132.4134915387187 174.77472813016573Q 1132.4134915387187 174.77472813016573 1132.4134915387187 174.77472813016573L 1154.577503967285 174.77472813016573Q 1154.577503967285 174.77472813016573 1154.577503967285 174.77472813016573L 1154.577503967285 174.77472813016573L 1154.577503967285 265.480599691391L 1154.577503967285 265.480599691391z"
                              pathfrom="M 1132.4134915387187 265.480599691391L 1132.4134915387187 265.480599691391L 1154.577503967285 265.480599691391L 1154.577503967285 265.480599691391L 1154.577503967285 265.480599691391L 1154.577503967285 265.480599691391L 1154.577503967285 265.480599691391L 1132.4134915387187 265.480599691391"
                              cy="174.77472813016573"
                              cx="1263.2171956945347"
                              j={8}
                              val={41}
                              barheight="90.70587156122525"
                              barwidth="24.164012428566267"
                            />
                            <g
                              id="SvgjsG1101"
                              className="apexcharts-bar-goals-markers"
                              style={{ pointerEvents: "none" }}
                            >
                              <g
                                id="SvgjsG1102"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1104"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1106"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1108"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1110"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1112"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1114"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1116"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1118"
                                classname="apexcharts-bar-goals-groups"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1058"
                            className="apexcharts-datalabels"
                            data:realindex={0}
                          />
                          <g
                            id="SvgjsG1079"
                            className="apexcharts-datalabels"
                            data:realindex={1}
                          />
                          <g
                            id="SvgjsG1100"
                            className="apexcharts-datalabels"
                            data:realindex={2}
                          />
                        </g>
                        <line
                          id="SvgjsLine1189"
                          x1={0}
                          y1={0}
                          x2="1186.2333374023438"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1190"
                          x1={0}
                          y1={0}
                          x2="1186.2333374023438"
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g
                          id="SvgjsG1191"
                          className="apexcharts-yaxis-annotations"
                        />
                        <g
                          id="SvgjsG1192"
                          className="apexcharts-xaxis-annotations"
                        />
                        <g
                          id="SvgjsG1193"
                          className="apexcharts-point-annotations"
                        />
                      </g>
                      <g
                        id="SvgjsG1150"
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(32.76666259765625, 0)"
                      >
                        <g id="SvgjsG1151" className="apexcharts-yaxis-texts-g">
                          <text
                            id="SvgjsText1153"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="31.4"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1154">120</tspan>
                            <title>120</title>
                          </text>
                          <text
                            id="SvgjsText1156"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="97.77014992284775"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1157">90</tspan>
                            <title>90</title>
                          </text>
                          <text
                            id="SvgjsText1159"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="164.1402998456955"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1160">60</tspan>
                            <title>60</title>
                          </text>
                          <text
                            id="SvgjsText1162"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="230.51044976854322"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1163">30</tspan>
                            <title>30</title>
                          </text>
                          <text
                            id="SvgjsText1165"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="296.88059969139096"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1166">0</tspan>
                            <title>0</title>
                          </text>
                        </g>
                        <g id="SvgjsG1167" className="apexcharts-yaxis-title">
                          <text
                            id="SvgjsText1168"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x="23.541671752929688"
                            y="162.7402998456955"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={900}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-title-text "
                            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                            transform="rotate(-90 -17.783329010009766 158.46528911590576)"
                          >
                            $ (thousands)
                          </text>
                        </g>
                      </g>
                      <g id="SvgjsG1045" className="apexcharts-annotations" />
                    </svg>
                    <div
                      className="apexcharts-tooltip apexcharts-theme-light"
                      style={{ left: "154.055px", top: "183.075px" }}
                    >
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      >
                        Feb
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-active"
                        style={{ order: 1, display: "flex" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(254, 176, 25)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Transfer:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              $ 35 thousands
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 2, display: "none" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(254, 176, 25)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Transfer:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              $ 35 thousands
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 3, display: "none" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(254, 176, 25)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Transfer:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">
                              $ 35 thousands
                            </span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                    <div
                      className="apexcharts-toolbar"
                      style={{ top: 0, right: 3 }}
                    >
                      <div className="apexcharts-menu-icon" title="Menu">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z" />
                          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                      </div>
                      <div className="apexcharts-menu">
                        <div
                          className="apexcharts-menu-item exportSVG"
                          title="Download SVG"
                        >
                          Download SVG
                        </div>
                        <div
                          className="apexcharts-menu-item exportPNG"
                          title="Download PNG"
                        >
                          Download PNG
                        </div>
                        <div
                          className="apexcharts-menu-item exportCSV"
                          title="Download CSV"
                        >
                          Download CSV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <p className="copyright-text">
                    Copyright © Convert React - Design:{" "}
                    <a rel="sponsored" href="/" target="_blank">
                      Thuan Nguyen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  </>
  
  )
}

export default Home
