import React from "react";

import { Column, Row, Img, Text, Button, List, Stack } from "components";

const HttpskapedcapitalaboutPage = () => {
  return (
    <>
      <Column className="font-rubik items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Column className="bg-white_A700 items-center justify-start w-[100%]">
            <header className="w-[100%]">
              <Column className="bg-white_A700 items-center justify-start lg:pb-[25px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start pb-[2px] px-[2px] w-[100%]">
                      <Column className="items-center justify-start w-[77%]">
                        <Row className="bg-white_A700 items-center lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                          <Img
                            src="images/img_lendy20logosv.png"
                            className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[9%]"
                            alt="Lendy20logosv"
                          />
                          <Row className="items-center lg:ml-[249px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] mt-[2px] w-[18%]">
                            <Column className="border border-gray_600 border-solid lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[50%]">
                              <Text
                                className="font-normal mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] not-italic text-bluegray_900 w-[auto]"
                                variant="body7"
                              >
                                Borrow
                              </Text>
                            </Column>
                            <Column className="border border-gray_600 border-solid lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[50%]">
                              <Text
                                className="font-normal mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] not-italic text-bluegray_900 w-[auto]"
                                variant="body7"
                              >
                                Invest
                              </Text>
                            </Column>
                          </Row>
                          <Column className="items-end lg:ml-[118px] xl:ml-[148px] 2xl:ml-[166px] 3xl:ml-[200px] mt-[2px] lg:pl-[13px] xl:pl-[16px] 2xl:pl-[19px] 3xl:pl-[22px] w-[26%]">
                            <Row className="items-center justify-end w-[100%]">
                              <Column className="items-center w-[24%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  variant="body7"
                                >
                                  About us
                                </Text>
                              </Column>
                              <Text
                                className="font-normal lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic text-bluegray_900 w-[auto]"
                                variant="body7"
                              >
                                Admin
                              </Text>
                              <Button
                                className="font-normal lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[34%]"
                                size="sm"
                                variant="OutlineBluegray900"
                              >
                                Sign in
                              </Button>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-center justify-end lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[8px] w-[67%]">
                    <Column className="justify-start w-[100%]">
                      <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                        <Text
                          className="lg:leading-[34px] xl:leading-[42px] 2xl:leading-[48px] 3xl:leading-[57px] mb-[1px] text-bluegray_900 w-[54%]"
                          as="h2"
                          variant="h2"
                        >
                          Your financial well-being is our mission at Lendy.
                        </Text>
                      </Column>
                      <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[29%]">
                        <Button
                          className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[35%]"
                          size="sm"
                          variant="OutlineBluegray900"
                        >
                          About Us
                        </Button>
                        <Button
                          className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[26%]"
                          size="sm"
                          variant="OutlineBluegray900"
                        >
                          Team
                        </Button>
                        <Button
                          className="font-normal lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[28%]"
                          size="sm"
                          variant="OutlineBluegray900"
                        >
                          Press
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </header>
            <div className="bg-bluegray_400_38 lg:h-[200px] xl:h-[250px] 2xl:h-[282px] 3xl:h-[338px] w-[100%]"></div>
          </Column>
          <Column className="items-center justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] lg:pt-[22px] xl:pt-[27px] 2xl:pt-[31px] 3xl:pt-[37px] w-[77%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start p-[3px] w-[100%]">
                <Text className="div32" as="h5" variant="h5">
                  About Us
                </Text>
              </Column>
              <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] p-[3px] w-[100%]">
                <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[56%]">
                  <Text
                    className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[29px] not-italic text-bluegray_700 text-center w-[96%]"
                    variant="body7"
                  >
                    Lendy was founded in 2010 as the second peer-to-peer lending
                    marketplace in the United States. Since then, Lendy has
                    facilitated more than $3.5 billion in loans to more than
                    180,000 people.
                  </Text>
                  <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Text
                      className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[29px] not-italic text-bluegray_700 text-center w-[99%]"
                      variant="body7"
                    >
                      Through Lendy, people can invest in each other in a way
                      that is financially and socially rewarding. Borrowers
                      apply online for a fixed-rate, fixed-term loan between
                      $2,000 and $40,000. Individuals and institutions can
                      invest in the loans and earn attractive returns. Lendy
                      handles all loan servicing on behalf of the matched
                      borrowers and investors.
                    </Text>
                    <Text
                      className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[29px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 text-center w-[100%]"
                      variant="body7"
                    >
                      Lendy Marketplace is backed by leading investors including
                      Sequoia Capital, Francisco Partners, Institutional Venture
                      Partners, and Credit Suisse NEXT Fund.
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="font-opensans items-center justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] lg:p-[34px] xl:p-[43px] 2xl:p-[48px] 3xl:p-[58px] w-[100%]">
            <Row className="items-start justify-center mb-[1px] w-[71%]">
              <Column className="items-center justify-start lg:pb-[3px] 2xl:pb-[4px] xl:pb-[4px] 3xl:pb-[5px] w-[27%]">
                <Column className="items-center justify-start pt-[3px] px-[3px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    180,400
                  </Text>
                </Column>
                <Column className="font-rubik items-center justify-start mt-[4px] w-[34%]">
                  <Text className="div18" variant="body5">
                    Customers
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-start 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] p-[1px] w-[27%]">
                <Column className="items-center justify-start w-[78%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    $3.5 Billion
                  </Text>
                </Column>
                <Column className="font-rubik items-center justify-start my-[3px] w-[30%]">
                  <Text className="div18" variant="body5">
                    Borrowed
                  </Text>
                </Column>
              </Column>
              <Column className="font-rubik items-center justify-start 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:pb-[3px] 2xl:pb-[4px] xl:pb-[4px] 3xl:pb-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[27%]">
                <Text className="div18" variant="body5">
                  Average Customer Rating
                </Text>
              </Column>
            </Row>
          </Column>
          <Column className="font-rubik items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] 3xl:pb-[10px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] w-[97%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[38%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start p-[3px] w-[100%]">
                    <Text className="div32" as="h5" variant="h5">
                      Team
                    </Text>
                  </Column>
                  <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] p-[1px] w-[100%]">
                    <Text
                      className="font-normal lg:leading-[15px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] not-italic text-bluegray_700 text-center w-[86%]"
                      variant="body7"
                    >
                      Lendy was founded by a well experienced team with a
                      combined experience of over 25 years in the financial
                      services industry.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] lg:pb-[33px] xl:pb-[42px] 2xl:pb-[47px] 3xl:pb-[57px] lg:px-[33px] xl:px-[42px] 2xl:px-[47px] 3xl:px-[57px] w-[100%]">
                <Column className="justify-start lg:ml-[188px] xl:ml-[236px] 2xl:ml-[265px] 3xl:ml-[319px] w-[16%]">
                  <Img
                    src="images/img_div_bluegray_100.svg"
                    className="lg:h-[124px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] w-[100%]"
                    alt="div One"
                  />
                  <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] pr-[1px] py-[1px] w-[100%]">
                    <Text
                      className="font-medium mb-[1px] text-gray_701 w-[auto]"
                      variant="body7"
                    >
                      Vashon Gonzales
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[27%]">
                    <Text
                      className="not-italic text-gray_702 w-[auto]"
                      variant="body10"
                    >
                      Chairman
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="font-rubik items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:py-[27px] xl:py-[34px] 2xl:py-[39px] 3xl:py-[46px] w-[97%]">
            <Column className="items-center justify-start lg:mb-[20px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] 2xl:px-[109px] 3xl:px-[131px] lg:px-[77px] xl:px-[97px] w-[100%]">
              <Column className="items-center justify-start w-[63%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start p-[3px] w-[100%]">
                    <Text className="div32" as="h5" variant="h5">
                      Press Coverage
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] p-[1px] w-[100%]">
                    <Text className="div37" variant="body7">
                      Lendy has been covered in by major news outlets and media
                      companies
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Img
                src="images/img_div_3.svg"
                className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[45px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] w-[71%]"
                alt="div Two"
              />
              <List
                className="3xl:gap-[109px] lg:gap-[64px] xl:gap-[81px] 2xl:gap-[91px] grid grid-cols-3 min-h-[auto] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 items-center justify-start lg:p-[16px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius2 shadow-bs w-[100%]">
                  <Column className="justify-start mb-[3px] w-[97%]">
                    <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                      <Text className="div7" variant="body8">
                        Forbes
                      </Text>
                    </Column>
                    <Column className="justify-start mt-[3px] pr-[1px] py-[1px] w-[100%]">
                      <Text className="div71" variant="body9">
                        May 29, 2018
                      </Text>
                    </Column>
                    <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] pr-[1px] py-[1px] w-[100%]">
                      <Text className="div72" variant="body4">
                        CEO Alicia Goodwin Talks Borrowing and Investing with
                        Lendy
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[36%]">
                      <Button
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
                        size="sm"
                        variant="OutlineBluegray900"
                      >
                        Read More
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[16px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius2 shadow-bs w-[100%]">
                  <Column className="justify-start mb-[3px] w-[97%]">
                    <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                      <Text className="div7" variant="body8">
                        Forbes
                      </Text>
                    </Column>
                    <Column className="justify-start mt-[3px] pr-[1px] py-[1px] w-[100%]">
                      <Text className="div71" variant="body9">
                        May 29, 2018
                      </Text>
                    </Column>
                    <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] pr-[1px] py-[1px] w-[100%]">
                      <Text className="div72" variant="body4">
                        CEO Alicia Goodwin Talks Borrowing and Investing with
                        Lendy
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[36%]">
                      <Button
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
                        size="sm"
                        variant="OutlineBluegray900"
                      >
                        Read More
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:p-[16px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius2 shadow-bs w-[100%]">
                  <Column className="justify-start mb-[3px] w-[97%]">
                    <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                      <Text className="div7" variant="body8">
                        Forbes
                      </Text>
                    </Column>
                    <Column className="justify-start mt-[3px] pr-[1px] py-[1px] w-[100%]">
                      <Text className="div71" variant="body9">
                        May 29, 2018
                      </Text>
                    </Column>
                    <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] pr-[1px] py-[1px] w-[100%]">
                      <Text className="div72" variant="body4">
                        CEO Alicia Goodwin Talks Borrowing and Investing with
                        Lendy
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[36%]">
                      <Button
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
                        size="sm"
                        variant="OutlineBluegray900"
                      >
                        Read More
                      </Button>
                    </Column>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
          <Column className="font-rubik items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[100%]">
            <Column className="items-center justify-start outline outline-[0.5px] outline-gray_102 lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] w-[100%]">
              <Column className="items-center justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] w-[83%]">
                <Column className="items-center justify-start lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] lg:px-[13px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] w-[100%]">
                  <Row className="items-end lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] w-[100%]">
                    <List
                      className="gap-[0] grid grid-cols-3 min-h-[auto] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[66%]"
                      orientation="horizontal"
                    >
                      <Column className="justify-start w-[100%]">
                        <Column className="items-center justify-start w-[20%]">
                          <Text className="div24" variant="body8">
                            Borrow
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[32%]">
                          <Text className="div25" variant="body9">
                            How it Works
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[29%]">
                          <Text className="div25" variant="body9">
                            Loan Types
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[42%]">
                          <Text className="div25" variant="body9">
                            Check Your Rate
                          </Text>
                        </Column>
                      </Column>
                      <Column className="justify-start w-[100%]">
                        <Column className="items-center justify-start w-[17%]">
                          <Text className="div24" variant="body8">
                            Invest
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[32%]">
                          <Text className="div25" variant="body9">
                            How it Works
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[21%]">
                          <Text className="div25" variant="body9">
                            Benefits
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[29%]">
                          <Text className="div25" variant="body9">
                            Get Started
                          </Text>
                        </Column>
                      </Column>
                      <Column className="justify-start w-[100%]">
                        <Column className="items-center justify-start w-[26%]">
                          <Text className="div24" variant="body8">
                            Company
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[16%]">
                          <Text className="div25" variant="body9">
                            About
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[14%]">
                          <Text className="div25" variant="body9">
                            Team
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[14%]">
                          <Text className="div25" variant="body9">
                            Press
                          </Text>
                        </Column>
                      </Column>
                    </List>
                    <Column className="justify-start lg:pb-[29px] xl:pb-[37px] 2xl:pb-[41px] 3xl:pb-[50px] w-[34%]">
                      <Img
                        src="images/img_https3a2f2fs.png"
                        className="https3A2F2Fs"
                        alt="https3A2F2Fs"
                      />
                      <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] pr-[2px] py-[2px] w-[100%]">
                        <Text className="div26" variant="body8">
                          Since 2009, we've helped 180 thousand people achieve
                          greater financial wellness, and that number is
                          growing.
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="items-center justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[97%]">
                  <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] w-[100%]">
                    <Row className="absolute inset-y-[39%] items-start justify-between w-[100%]">
                      <Column className="justify-start pr-[1px] py-[1px] w-[28%]">
                        <Text className="a" variant="body9">
                          Built with ❤️ and without code by Zeroqode 😊
                        </Text>
                      </Column>
                      <Row className="items-center justify-between mt-[2px] pr-[2px] w-[18%]">
                        <Column className="items-center w-[41%]">
                          <Text className="div25" variant="body9">
                            Terms of Use
                          </Text>
                        </Column>
                        <Column className="items-center w-[44%]">
                          <Text className="div25" variant="body9">
                            Privacy Policy
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                    <Img
                      src="images/img_divborder.svg"
                      className="divborder"
                      alt="divborder"
                    />
                  </Stack>
                </Column>
                <Column className="items-center justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] p-[3px] w-[100%]">
                  <Text className="div28" variant="body11">
                    {`3.77% - 8.03% average historical returns for loan grades A through E originated from January 2010 through March 2017. Because the likelihood of a loan charging off increases over time, historical returns include only those loans that were issued 18 months or more before the last day of the most recently completed quarter. The range in returns represents 10th and 90th percentile performance as illustrated here, for the period January 2010 through September 2018. The return is weighted based on platform issuance by grade. Historical Returns are Lendy's adjusted net annualized returns ("ANAR"). ANAR is calculated using the formula described here.`}
                    <br />
                    Checking your rate generates a soft credit inquiry, which is
                    visible only to you. A hard credit inquiry that may affect
                    your credit score only appears when your loan is issued.
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HttpskapedcapitalaboutPage;
