import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Input,
  SelectBox,
  Img,
  Button,
  List,
} from "components";
import Header from "components/Header/Header";

const HttpskapedcapitalloansPage = () => {
  return (
    <>
      <Column className="font-rubik items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[1196px] xl:h-[1496px] 2xl:h-[1683px] 3xl:h-[2019px] w-[100%]">
            <Column className="absolute items-center justify-start top-[0] w-[100%]">
              <Column className="bg-white_A700 items-center justify-start pb-[1px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="bg-white_A700 items-center justify-start lg:pb-[27px] xl:pb-[33px] 2xl:pb-[38px] 3xl:pb-[45px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Header className="w-[100%]" />
                      <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]">
                        <Column className="items-center justify-start lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] w-[100%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start rounded-radius5 w-[72%]"
                            style={{
                              backgroundImage:
                                "url('images/defaultNoData.png')",
                            }}
                          >
                            <Row className="bg-indigo_900_75 items-start lg:p-[31px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[52px] rounded-radius5 w-[100%]">
                              <Column className="justify-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[62%]">
                                <Column className="justify-start w-[67%]">
                                  <Column className="justify-start pr-[3px] py-[3px] w-[100%]">
                                    <Text
                                      className="lg:leading-[34px] xl:leading-[42px] 2xl:leading-[48px] 3xl:leading-[57px] mb-[1px] text-white_A700 w-[93%]"
                                      as="h2"
                                      variant="h2"
                                    >
                                      Get personal loans of up to $50,000
                                    </Text>
                                  </Column>
                                  <Column className="items-center justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[62%]">
                                    <Column className="items-center justify-start w-[100%]">
                                      <Column className="justify-start p-[1px] w-[100%]">
                                        <Text className="div30" variant="body5">
                                          Get low rates
                                        </Text>
                                      </Column>
                                      <Column className="items-end justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] p-[1px] w-[100%]">
                                        <Text
                                          className="font-medium xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[16px] lg:mr-[9px] text-white_A700 w-[auto]"
                                          variant="body5"
                                        >
                                          Apply online in minutes
                                        </Text>
                                      </Column>
                                      <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] p-[1px] w-[100%]">
                                        <Text
                                          className="font-medium text-white_A700 w-[auto]"
                                          variant="body5"
                                        >
                                          Convenient Payback
                                        </Text>
                                      </Column>
                                    </Column>
                                  </Column>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 justify-start mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius5 w-[33%]">
                                <Column className="items-center justify-start ml-[2px] w-[74%]">
                                  <Text
                                    className="font-medium text-bluegray_700 w-[auto]"
                                    variant="body5"
                                  >
                                    How much do you need?
                                  </Text>
                                </Column>
                                <Column className="items-center justify-start ml-[2px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                                  <Input
                                    className="placeholder:text-gray_401 input1"
                                    wrapClassName="w-[100%]"
                                    name="price One"
                                    placeholder="Enter up to $50,000"
                                  ></Input>
                                </Column>
                                <Column className="items-center justify-start ml-[2px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                  <Stack className="border border-gray_300 border-solid lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] w-[100%]">
                                    <SelectBox
                                      className="absolute font-normal inset-[0] justify-center m-[auto] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_500 w-[96%]"
                                      placeholderClassName="text-gray_500"
                                      name="GroupTen"
                                      placeholder="Why do you need a loan?"
                                      isSearchable={false}
                                      isMulti={false}
                                      indicator={
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="mr-[0] right-[0] absolute lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                                          alt="arrow_down"
                                        />
                                      }
                                    ></SelectBox>
                                    <div className="absolute bg-white_A700 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] inset-y-[0] my-[auto] right-[0] w-[14%]"></div>
                                  </Stack>
                                </Column>
                                <Column className="items-center justify-start mb-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                                  <Button
                                    className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
                                    size="lg"
                                    variant="FillTeal101"
                                  >
                                    Check your rate
                                  </Button>
                                </Column>
                              </Column>
                            </Row>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_div_2.svg"
                          className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[45px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[58%]"
                          alt="div"
                        />
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="items-center justify-start outline outline-[0.5px] outline-gray_400 lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                <Column className="items-center justify-start lg:mb-[49px] xl:mb-[61px] 2xl:mb-[69px] 3xl:mb-[83px] w-[78%]">
                  <Column className="items-center justify-end lg:py-[20px] xl:py-[25px] 2xl:py-[28px] 3xl:py-[34px] w-[100%]">
                    <Column className="items-center justify-start mt-[3px] p-[3px] w-[100%]">
                      <Text className="div32" as="h5" variant="h5">
                        Get your own personalized loans to achieve your goals
                      </Text>
                    </Column>
                    <Column className="items-center justify-start mt-[3px] p-[1px] w-[100%]">
                      <Text
                        className="font-normal lg:leading-[15px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] mb-[1px] not-italic text-bluegray_700 text-center w-[35%]"
                        variant="body7"
                      >
                        Consolidating debt? Paying for a large expense like home
                        improvement or a special occasion? We have you covered.
                      </Text>
                    </Column>
                    <Column className="items-center justify-end lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                      <List
                        className="lg:gap-[40px] xl:gap-[50px] 2xl:gap-[57px] 3xl:gap-[68px] grid grid-cols-3 min-h-[auto] mt-[2px] w-[90%]"
                        orientation="horizontal"
                      >
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="bg-gray_100 border border-solid border-teal_50 2xl:h-[107px] 3xl:h-[129px] lg:h-[76px] xl:h-[95px] lg:px-[19px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[33px] rounded-radius50 2xl:w-[106px] 3xl:w-[128px] lg:w-[75px] xl:w-[94px]">
                            <Img
                              src="images/img_home.svg"
                              className="absolute lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] inset-[0] justify-center m-[auto] w-[46%]"
                              alt="home"
                            />
                          </Stack>
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                            <Column className="items-center justify-start p-[1px] w-[100%]">
                              <Text className="div7" variant="body5">
                                Home Improvement Loans
                              </Text>
                            </Column>
                            <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] p-[1px] w-[100%]">
                              <Text className="div58" variant="body7">
                                Whether you want to remodel your kitchen or
                                upgrade security. Lendy has you covered.
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="bg-gray_100 border border-solid border-teal_50 2xl:h-[107px] 3xl:h-[129px] lg:h-[76px] xl:h-[95px] lg:px-[19px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[33px] rounded-radius50 2xl:w-[106px] 3xl:w-[128px] lg:w-[75px] xl:w-[94px]">
                            <Img
                              src="images/img_car.svg"
                              className="absolute lg:h-[28px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] inset-[0] justify-center m-[auto] w-[47%]"
                              alt="car"
                            />
                          </Stack>
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                            <Column className="items-center justify-start p-[1px] w-[100%]">
                              <Text className="div7" variant="body5">
                                Auto Financing
                              </Text>
                            </Column>
                            <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] p-[1px] w-[100%]">
                              <Text className="div58" variant="body7">
                                With Lendy you can get any kind of vehicle  you
                                want in any condition you prefer.
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                        <Column className="items-center justify-start w-[100%]">
                          <Stack className="bg-gray_100 border border-solid border-teal_50 2xl:h-[107px] 3xl:h-[129px] lg:h-[76px] xl:h-[95px] lg:px-[19px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[33px] rounded-radius50 2xl:w-[106px] 3xl:w-[128px] lg:w-[75px] xl:w-[94px]">
                            <Img
                              src="images/img_folder.svg"
                              className="absolute lg:h-[30px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] inset-[0] justify-center m-[auto] w-[47%]"
                              alt="folder"
                            />
                          </Stack>
                          <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                            <Column className="items-center justify-start p-[1px] w-[100%]">
                              <Text className="div7" variant="body5">
                                Credit card Consolidation
                              </Text>
                            </Column>
                            <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] p-[1px] w-[100%]">
                              <Text
                                className="font-normal lg:leading-[15px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] not-italic text-bluegray_700 text-center w-[86%]"
                                variant="body7"
                              >
                                Refinance your credit cards with a personalized
                                loan for Lendy and simplify your finances.
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                      </List>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
              <Stack className="lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] w-[100%]">
                <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="bg-gray_101 justify-start w-[100%]">
                      <Column className="items-center justify-start w-[52%]">
                        <Column className="bg-gray_101 items-center justify-start lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
                          <Column className="justify-start p-[2px] w-[93%]">
                            <Text className="div35" variant="body1">
                              Get a loan in 3 simple steps
                            </Text>
                          </Column>
                          <List
                            className="font-opensans gap-[0] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] min-h-[auto] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[86%]"
                            orientation="vertical"
                          >
                            <Column className="listdiv_one">
                              <Row className="items-start justify-between w-[98%]">
                                <Text className="div13" variant="body3">
                                  1
                                </Text>
                                <Column className="font-rubik justify-start lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[88%]">
                                  <Text
                                    className="font-medium text-gray_700 w-[auto]"
                                    variant="body4"
                                  >
                                    Check your rate
                                  </Text>
                                  <Text
                                    className="font-normal lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_700 w-[94%]"
                                    variant="body8"
                                  >
                                    Select your loan amount, answer a few
                                    questions and get your lowest eligible rates
                                    instantly.
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="listdiv_one">
                              <Row className="items-start justify-between w-[98%]">
                                <Text className="div15" variant="body3">
                                  2
                                </Text>
                                <Column className="font-rubik justify-start lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[88%]">
                                  <Text
                                    className="font-medium text-gray_700 w-[auto]"
                                    variant="body4"
                                  >
                                    Choose your loan
                                  </Text>
                                  <Text
                                    className="font-normal lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_700 w-[auto]"
                                    variant="body8"
                                  >
                                    Choose the offer with the terms that work
                                    best for you.
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="listdiv_one">
                              <Row className="items-start justify-between w-[98%]">
                                <Text className="div15" variant="body3">
                                  3
                                </Text>
                                <Column className="font-rubik justify-end lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[88%]">
                                  <Text
                                    className="font-medium text-gray_700 w-[auto]"
                                    variant="body4"
                                  >
                                    Get your funds
                                  </Text>
                                  <Text
                                    className="font-normal lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[50px] not-italic text-bluegray_700 w-[auto]"
                                    variant="body8"
                                  >
                                    Your money goes straight to your bank
                                    account via direct deposit.
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </List>
                        </Column>
                      </Column>
                    </Column>
                    <div className="bg-white_A700 lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] w-[100%]"></div>
                  </Column>
                </Column>
                <Img
                  src="images/img_div_517X730.png"
                  className="div_Eight"
                  alt="div Five"
                />
              </Stack>
            </Column>
          </Stack>
          <Column
            className="bg-cover bg-repeat items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/defaultNoData.png')" }}
          >
            <Column className="bg-bluegray_900_c4 items-center justify-start lg:p-[51px] xl:p-[64px] 2xl:p-[72px] 3xl:p-[86px] w-[100%]">
              <Column className="items-center justify-start lg:mb-[23px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] w-[46%]">
                <Column className="items-center justify-start p-[3px] w-[100%]">
                  <Text
                    className="mb-[3px] text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    We want to help you succeed
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] p-[2px] w-[100%]">
                  <Text className="div23" variant="body1">
                    Get your rate in just 2 minutes — it won't affect your
                    credit score!
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[33%]">
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    size="lg"
                    variant="OutlineWhiteA700"
                  >
                    Get Started Now
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="items-center justify-start w-[100%]">
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

export default HttpskapedcapitalloansPage;
