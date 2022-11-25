import React from "react";

import { Column, Row, Img, Text, List, Stack, Input } from "components";

const HttpskapedcapitalverPage = () => {
  return (
    <>
      <Column className="font-rubik items-center justify-end mx-[auto] w-[100%]">
        <Column className="bg-bluegray_50 items-center justify-start lg:pb-[39px] xl:pb-[49px] 2xl:pb-[56px] 3xl:pb-[67px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="bg-white_A700 items-center justify-start lg:px-[173px] xl:px-[216px] 2xl:px-[243px] 3xl:px-[292px] w-[100%]">
              <Column className="items-center justify-start w-[97%]">
                <Row className="items-center justify-between w-[100%]">
                  <Img
                    src="images/img_https3a2f2fs_60X133.png"
                    className="lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] w-[14%]"
                    alt="https3A2F2Fs"
                  />
                  <div className="bg-blue_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                </Row>
              </Column>
            </Column>
            <Column className="bg-teal_A700 justify-start lg:px-[173px] xl:px-[216px] 2xl:px-[243px] 3xl:px-[292px] shadow-bs1 w-[100%]">
              <Column className="items-center justify-start w-[68%]">
                <Row className="items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                  <Text
                    className="font-medium mb-[1px] ml-[3px] text-white_A700 w-[auto]"
                    variant="body9"
                  >
                    Dashboard
                  </Text>
                  <Text
                    className="font-medium mb-[1px] lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] text-white_A700 w-[auto]"
                    variant="body9"
                  >
                    Investments
                  </Text>
                  <Text className="Loans" variant="body9">
                    Loans
                  </Text>
                  <Text className="Loans" variant="body9">
                    Users
                  </Text>
                  <Text className="Loans" variant="body9">
                    Withdrawals
                  </Text>
                  <Text
                    className="font-medium mb-[1px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] text-white_A700 w-[auto]"
                    variant="body9"
                  >
                    Transactions
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[100%]">
              <Column className="items-center justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[32px] 3xl:pb-[100px] lg:pb-[59px] xl:pb-[74px] 2xl:pb-[83px] w-[67%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="justify-start pr-[2px] py-[2px] w-[100%]">
                    <Text className="div73" variant="body3">
                      Welcome back
                    </Text>
                  </Column>
                  <Column className="justify-start mt-[1px] pr-[1px] py-[1px] w-[100%]">
                    <Text className="a" variant="body9">
                      Here is your account overview
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] w-[100%]">
                  <List
                    className="lg:gap-[13px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-4 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius4 w-[100%]">
                      <Column className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[96%]">
                        <Column className="items-center justify-start w-[20%]">
                          <Text className="div75" variant="body9">
                            Users
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[7%]">
                          <Text
                            className="not-italic text-gray_606 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[35%]">
                          <Text
                            className="not-italic text-gray_508 w-[auto]"
                            variant="body10"
                          >
                            1 Investors
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius4 w-[100%]">
                      <Column className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[96%]">
                        <Column className="items-center justify-start w-[26%]">
                          <Text className="div75" variant="body9">
                            Loaned
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[71%]">
                          <Text
                            className="not-italic text-teal_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $326,875
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[30%]">
                          <Text
                            className="not-italic text-gray_508 w-[auto]"
                            variant="body10"
                          >
                            26 Loans
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius4 w-[100%]">
                      <Column className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[96%]">
                        <Column className="items-center justify-start w-[44%]">
                          <Text className="div75" variant="body9">
                            Investments
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[20%]">
                          <Text
                            className="not-italic text-gray_606 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            30
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[54%]">
                          <Text
                            className="not-italic text-gray_508 w-[auto]"
                            variant="body10"
                          >
                            $11,408 Average
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-end mb-[2px] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius4 w-[100%]">
                      <Column className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[96%]">
                        <Column className="items-center justify-start w-[24%]">
                          <Text className="div75" variant="body9">
                            Repaid
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[35%]">
                          <Text
                            className="not-italic text-blue_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $712
                          </Text>
                        </Column>
                        <Column className="items-center justify-start mt-[4px] w-[39%]">
                          <Text
                            className="not-italic text-gray_508 w-[auto]"
                            variant="body10"
                          >
                            8 Payments
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </List>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[100%]">
                    <Stack className="bg-white_A700 border border-gray_300 border-solid lg:h-[306px] xl:h-[383px] 2xl:h-[430px] 3xl:h-[516px] px-[1px] rounded-radius4 w-[49%]">
                      <Column className="absolute inset-x-[0] items-center justify-start top-[3%] w-[100%]">
                        <Column className="justify-start p-[1px] w-[100%]">
                          <Text className="div85" variant="body7">
                            Loans Requiring Action
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] outline outline-[0.5px] outline-gray_300 lg:pb-[16px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] w-[100%]">
                          <Input
                            className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] placeholder:text-blue_400 text-blue_400 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="div"
                            placeholder="Submitted for listing (0)"
                            size="sm"
                            variant="FillGray104"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="absolute inset-x-[0] items-center justify-start pb-[3px] px-[3px] top-[21%] w-[100%]">
                        <div className="bg-gray_50 border border-solid border-teal_102 lg:h-[32px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] rounded-radius50 lg:w-[31px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[52px]"></div>
                        <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[44%]">
                          <Text
                            className="not-italic text-gray_607 w-[auto]"
                            variant="body10"
                          >
                            No submitted loans pending action
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="bg-white_A700 border border-gray_300 border-solid lg:h-[306px] xl:h-[383px] 2xl:h-[430px] 3xl:h-[516px] px-[1px] rounded-radius4 w-[49%]">
                      <Column className="absolute inset-x-[0] items-center justify-start top-[3%] w-[100%]">
                        <Column className="justify-start p-[1px] w-[100%]">
                          <Text className="div85" variant="body7">
                            Pending Withdrawals
                          </Text>
                        </Column>
                        <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] outline outline-[0.5px] outline-gray_300 lg:pb-[16px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] w-[100%]">
                          <Input
                            className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] placeholder:text-teal_401 text-teal_401 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="div Two"
                            placeholder="Withdrawals (3)"
                            size="sm"
                            variant="FillGray104"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start lg:pb-[144px] xl:pb-[180px] 2xl:pb-[202px] 3xl:pb-[243px] w-[100%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Column className="bg-white_A700 justify-end my-[0] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                            <Row className="items-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mr-[auto] mt-[1px] w-[83%]">
                              <Text
                                className="bg-blue_100 flex items-center 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 text-blue_400 w-[34px]"
                                variant="body6"
                              >
                                J
                              </Text>
                              <Column className="justify-start xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[43%]">
                                <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                                  <Text className="a" variant="body9">
                                    John Doe
                                  </Text>
                                </Column>
                                <Column className="items-center justify-start mt-[1px] w-[73%]">
                                  <Text
                                    className="not-italic text-gray_508 w-[auto]"
                                    variant="body10"
                                  >
                                    investor@lendy.com
                                  </Text>
                                </Column>
                              </Column>
                              <Text className="price_Three" variant="body9">
                                $500
                              </Text>
                              <Text
                                className="lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-gray_508 w-[auto]"
                                variant="body10"
                              >
                                2 years ago
                              </Text>
                            </Row>
                          </Column>
                          <Stack className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[0] w-[100%]">
                            <Column className="absolute bg-white_A700 inset-y-[2%] justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                              <Row className="items-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mr-[auto] mt-[1px] w-[86%]">
                                <Column className="bg-blue_100 lg:h-[24px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-start lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] rounded-radius50 lg:w-[23px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]">
                                  <Text
                                    className="mb-[1px] text-blue_400 w-[auto]"
                                    variant="body6"
                                  >
                                    J
                                  </Text>
                                </Column>
                                <Column className="justify-start xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[41%]">
                                  <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                                    <Text className="a" variant="body9">
                                      John Doe
                                    </Text>
                                  </Column>
                                  <Column className="items-center justify-start mt-[1px] w-[73%]">
                                    <Text
                                      className="not-italic text-gray_508 w-[auto]"
                                      variant="body10"
                                    >
                                      investor@demo.com
                                    </Text>
                                  </Column>
                                </Column>
                                <Text className="price_Three" variant="body9">
                                  $200
                                </Text>
                                <Text
                                  className="lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-gray_508 w-[auto]"
                                  variant="body10"
                                >
                                  6 months ago
                                </Text>
                              </Row>
                            </Column>
                            <div className="absolute lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] outline outline-[0.5px] outline-gray_202 w-[100%]"></div>
                          </Stack>
                          <Stack className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] my-[0] w-[100%]">
                            <Column className="absolute bg-white_A700 inset-y-[2%] justify-end lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                              <Row className="items-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mr-[auto] mt-[1px] w-[86%]">
                                <Column className="bg-blue_100 lg:h-[24px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-start lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] rounded-radius50 lg:w-[23px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]">
                                  <Text
                                    className="mb-[1px] text-blue_400 w-[auto]"
                                    variant="body6"
                                  >
                                    J
                                  </Text>
                                </Column>
                                <Column className="justify-start xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[41%]">
                                  <Column className="justify-start pr-[1px] py-[1px] w-[100%]">
                                    <Text className="a" variant="body9">
                                      John Doe
                                    </Text>
                                  </Column>
                                  <Column className="items-center justify-start mt-[1px] w-[73%]">
                                    <Text
                                      className="not-italic text-gray_508 w-[auto]"
                                      variant="body10"
                                    >
                                      investor@demo.com
                                    </Text>
                                  </Column>
                                </Column>
                                <Text className="price_Three" variant="body9">
                                  $25
                                </Text>
                                <Text
                                  className="lg:ml-[44px] xl:ml-[55px] 2xl:ml-[61px] 3xl:ml-[74px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-gray_508 w-[auto]"
                                  variant="body10"
                                >
                                  6 months ago
                                </Text>
                              </Row>
                            </Column>
                            <div className="absolute lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] outline outline-[0.5px] outline-gray_202 w-[100%]"></div>
                          </Stack>
                        </List>
                      </Column>
                    </Stack>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[100%]">
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center p-[1px] rounded-radius4 w-[59%]">
                      <Stack className="3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                        <Column className="absolute bottom-[2%] items-center justify-start w-[100%]">
                          <Column className="justify-start p-[1px] w-[100%]">
                            <Text
                              className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              Investment Portfolio Distribution
                            </Text>
                          </Column>
                          <div className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] outline outline-[0.5px] outline-gray_300 w-[100%]"></div>
                        </Column>
                        <Row className="absolute bottom-[0] inset-x-[0] items-center justify-between mx-[auto] w-[92%]">
                          <Row className="items-center justify-between w-[47%]">
                            <Text
                              className="bg-teal_51 flex font-medium items-center xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius50 text-teal_A400 w-[36px]"
                              variant="body7"
                            >
                              A
                            </Text>
                            <div
                              className="3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] overflow-hidden relative w-[59%]"
                              name="div Three"
                            >
                              <div className="w-full h-full absolute bg-gray_104 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-teal_A400"
                                style={{ width: "39%" }}
                              ></div>
                            </div>
                            <Text
                              className="font-medium text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              37%
                            </Text>
                          </Row>
                          <Row className="items-center justify-between w-[47%]">
                            <Text
                              className="bg-teal_52 flex font-medium items-center xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius50 text-teal_A701 w-[36px]"
                              variant="body7"
                            >
                              B
                            </Text>
                            <div
                              className="3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] overflow-hidden relative w-[59%]"
                              name="div Four"
                            >
                              <div className="w-full h-full absolute bg-gray_104 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-teal_A701"
                                style={{ width: "39%" }}
                              ></div>
                            </div>
                            <Text
                              className="font-medium text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              7%
                            </Text>
                          </Row>
                        </Row>
                      </Stack>
                      <Column className="justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[92%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Row className="items-center justify-between w-[47%]">
                            <Text
                              className="bg-teal_53 flex font-medium items-center xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius50 text-blue_400 w-[36px]"
                              variant="body7"
                            >
                              C
                            </Text>
                            <div
                              className="3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] overflow-hidden relative w-[59%]"
                              name="div Five"
                            >
                              <div className="w-full h-full absolute bg-gray_104 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-blue_400"
                                style={{ width: "53%" }}
                              ></div>
                            </div>
                            <Text
                              className="font-medium text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              53%
                            </Text>
                          </Row>
                          <Row className="items-center justify-between w-[47%]">
                            <Text
                              className="bg-orange_50 flex font-medium items-center xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius50 text-orange_400 w-[36px]"
                              variant="body7"
                            >
                              D
                            </Text>
                            <div
                              className="3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] overflow-hidden relative w-[59%]"
                              name="div Six"
                            >
                              <div className="w-full h-full absolute bg-gray_104 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-orange_400"
                                style={{ width: "5%" }}
                              ></div>
                            </div>
                            <Text
                              className="font-medium text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              0%
                            </Text>
                          </Row>
                        </Row>
                        <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[47%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="bg-red_100 flex font-medium items-center xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius50 text-red_A200 w-[36px]"
                              variant="body7"
                            >
                              E
                            </Text>
                            <div
                              className="3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] overflow-hidden relative w-[59%]"
                              name="div Seven"
                            >
                              <div className="w-full h-full absolute bg-gray_104 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-red_A200"
                                style={{ width: "39%" }}
                              ></div>
                            </div>
                            <Text
                              className="font-medium text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              3%
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center pl-[1px] py-[1px] rounded-radius4 w-[39%]">
                      <Column className="items-center justify-start lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Column className="justify-start p-[1px] w-[100%]">
                            <Text
                              className="font-medium mb-[1px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] text-gray_701 w-[auto]"
                              variant="body7"
                            >
                              Investors Account Summary
                            </Text>
                          </Column>
                          <div className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] outline outline-[0.5px] outline-gray_300 w-[100%]"></div>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[87%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Text className="AvailableCash" variant="body9">
                              Available Cash
                            </Text>
                            <Text className="div43" variant="body3">
                              $0
                            </Text>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Text className="AvailableCash" variant="body9">
                              Pending
                            </Text>
                            <Text className="div43" variant="body3">
                              $3500
                            </Text>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Text className="AvailableCash" variant="body9">
                              Invested
                            </Text>
                            <Text className="div43" variant="body3">
                              $342225
                            </Text>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <Text
                              className="font-medium mt-[3px] text-gray_602 w-[auto]"
                              variant="body9"
                            >
                              Account Value
                            </Text>
                            <Text
                              className="font-medium text-gray_702 w-[auto]"
                              variant="body3"
                            >
                              $345725
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HttpskapedcapitalverPage;
