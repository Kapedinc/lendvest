import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  Row,
  SelectBox,
  Input,
  List,
  Button,
} from "components";

const HttpskapedcapitalborrowPage = () => {
  return (
    <>
      <Column className="font-rubik items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_103 items-center justify-start w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Stack className="bg-white_A700 lg:h-[48px] xl:h-[60px] 2xl:h-[67px] 3xl:h-[81px] lg:px-[13px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] w-[100%]">
              <Stack className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] inset-y-[0] left-[0] my-[auto] w-[7%]">
                <Img
                  src="images/img_lendy20logosv.png"
                  className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] w-[100%]"
                  alt="Lendy20logosv"
                />
              </Stack>
            </Stack>
            <div className="lg:h-[48px] xl:h-[60px] 2xl:h-[67px] 3xl:h-[81px] outline outline-[0.5px] outline-gray_201 w-[100%]"></div>
          </Column>
          <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[56px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[8px] w-[70%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start pr-[2px] py-[2px] w-[100%]">
                <Text
                  className="mb-[3px] text-gray_700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Check your rate
                </Text>
              </Column>
              <Row className="items-start justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[100%]">
                <Column className="items-center justify-start w-[71%]">
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius4 w-[100%]">
                    <Stack className="2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="absolute items-center justify-start top-[0] w-[100%]">
                        <Column className="justify-start p-[1px] w-[100%]">
                          <Text className="div42" variant="body7">
                            How much would you like to borrow?
                          </Text>
                        </Column>
                        <div className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] outline outline-[0.5px] outline-gray_300 w-[100%]"></div>
                      </Column>
                      <Column className="absolute bottom-[0] inset-x-[0] items-end justify-start mx-[auto] lg:pl-[105px] xl:pl-[132px] 2xl:pl-[148px] 3xl:pl-[178px] w-[95%]">
                        <Row className="items-center justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Amount
                          </Text>
                          <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[86%]">
                            <Row className="bg-white_A700 border border-gray_300 border-solid items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <Text className="Three" variant="body2">
                                $
                              </Text>
                              <Text className="Amount_One" variant="body9">
                                Amount
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Stack>
                    <Column className="items-end justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] 2xl:pl-[110px] 3xl:pl-[132px] lg:pl-[78px] xl:pl-[98px] w-[95%]">
                      <Row className="items-center justify-end py-[1px] w-[100%]">
                        <Text className="div43" variant="body8">
                          Loan Purpose
                        </Text>
                        <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[81%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_500 w-[100%]"
                            placeholderClassName="text-gray_500"
                            name="selectdropdown"
                            placeholder="Loan Purpose"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="mr-[1px] lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                                alt="arrow_down"
                              />
                            }
                            size="md"
                            variant="OutlineGray300"
                          ></SelectBox>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] p-[1px] rounded-radius4 w-[100%]">
                    <Stack className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[90px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="absolute items-center justify-start top-[0] w-[100%]">
                        <Column className="justify-start p-[1px] w-[100%]">
                          <Text className="div42" variant="body7">
                            Tell Us About Yourself
                          </Text>
                        </Column>
                        <div className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] outline outline-[0.5px] outline-gray_300 w-[100%]"></div>
                      </Column>
                      <Column className="absolute bottom-[0] inset-x-[0] items-end justify-start mx-[auto] xl:pl-[120px] 2xl:pl-[135px] 3xl:pl-[162px] lg:pl-[96px] w-[95%]">
                        <Row className="items-start justify-end w-[100%]">
                          <Text className="div44" variant="body8">
                            Full Name
                          </Text>
                          <Row className="items-start justify-between lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[84%]">
                            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[48%]">
                              <Input
                                className="placeholder:text-gray_401 input1"
                                wrapClassName="w-[100%]"
                                type="text"
                                name="input"
                                placeholder="First Name"
                              ></Input>
                            </Column>
                            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[48%]">
                              <Input
                                className="placeholder:text-gray_401 input1"
                                wrapClassName="w-[100%]"
                                type="text"
                                name="input One"
                                placeholder="Last Name"
                              ></Input>
                            </Column>
                          </Row>
                        </Row>
                      </Column>
                    </Stack>
                    <Column className="items-center justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mt-[1px] w-[95%]">
                      <Column className="items-end justify-start xl:pl-[104px] 2xl:pl-[117px] 3xl:pl-[140px] lg:pl-[83px] w-[100%]">
                        <Row className="items-center justify-end lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Date of Birth
                          </Text>
                          <Column className="items-center lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[82%]">
                            <Input
                              className="placeholder:text-gray_401 input1"
                              wrapClassName="w-[100%]"
                              name="input Two"
                              placeholder="Date of Birth (MM/DD/YYYY)"
                            ></Input>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="items-end justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] 2xl:pl-[102px] 3xl:pl-[123px] lg:pl-[73px] xl:pl-[91px] w-[100%]">
                        <Row className="items-center justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Street Address
                          </Text>
                          <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[80%]">
                            <Input
                              className="placeholder:text-gray_401 input1"
                              wrapClassName="w-[100%]"
                              name="input Three"
                              placeholder="Apt/Suite No, Street"
                            ></Input>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="items-end justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:pl-[109px] 2xl:pl-[122px] 3xl:pl-[147px] lg:pl-[87px] w-[100%]">
                        <Row className="items-start justify-end w-[100%]">
                          <Text className="div44" variant="body8">
                            City & State
                          </Text>
                          <Row className="items-start justify-between lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[82%]">
                            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[48%]">
                              <Input
                                className="placeholder:text-gray_401 input1"
                                wrapClassName="w-[100%]"
                                name="input Four"
                                placeholder="City"
                              ></Input>
                            </Column>
                            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[48%]">
                              <SelectBox
                                className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_500 w-[100%]"
                                placeholderClassName="text-gray_500"
                                name="select"
                                placeholder="State"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown.svg"
                                    className="mr-[1px] lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                                    alt="arrow_down"
                                  />
                                }
                                size="md"
                                variant="OutlineGray300"
                              ></SelectBox>
                            </Column>
                          </Row>
                        </Row>
                      </Column>
                      <Column className="items-end justify-start mt-[1px] xl:pl-[106px] 2xl:pl-[120px] 3xl:pl-[144px] lg:pl-[85px] w-[100%]">
                        <Row className="items-start justify-end w-[100%]">
                          <Text className="div44" variant="body8">
                            ZIP & Phone
                          </Text>
                          <Row className="items-start justify-between lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] w-[82%]">
                            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[48%]">
                              <Input
                                className="placeholder:text-gray_401 input1"
                                wrapClassName="w-[100%]"
                                name="input Five"
                                placeholder="Zip/Postal Code"
                              ></Input>
                            </Column>
                            <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] w-[48%]">
                              <Input
                                className="placeholder:text-gray_401 input1"
                                wrapClassName="w-[100%]"
                                type="number"
                                name="inputphone"
                                placeholder="Phone Number"
                              ></Input>
                            </Column>
                          </Row>
                        </Row>
                      </Column>
                      <Column className="items-center justify-start mt-[1px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[32px] w-[100%]">
                        <Row className="items-center justify-between lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Monthly Housing Payment
                          </Text>
                          <Column className="items-center w-[70%]">
                            <Row className="bg-white_A700 border border-gray_300 border-solid items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <Text className="Three" variant="body2">
                                $
                              </Text>
                              <Text className="Amount_One" variant="body9">
                                Monthly Housing Payment
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] p-[1px] rounded-radius4 w-[100%]">
                    <Stack className="2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="absolute items-center justify-start top-[0] w-[100%]">
                        <Column className="justify-start p-[1px] w-[100%]">
                          <Text className="div42" variant="body7">
                            What is your income?
                          </Text>
                        </Column>
                        <div className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] outline outline-[0.5px] outline-gray_300 w-[100%]"></div>
                      </Column>
                      <Column className="absolute bottom-[0] inset-x-[0] items-end justify-start mx-[auto] lg:pl-[50px] xl:pl-[62px] 2xl:pl-[70px] 3xl:pl-[84px] w-[95%]">
                        <Row className="items-center justify-end py-[1px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Employment Status
                          </Text>
                          <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[75%]">
                            <SelectBox
                              className="font-normal not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_500 w-[100%]"
                              placeholderClassName="text-gray_500"
                              name="selectdropdown One"
                              placeholder="Employment Status"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="mr-[1px] lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                                  alt="arrow_down"
                                />
                              }
                              size="md"
                              variant="OutlineGray300"
                            ></SelectBox>
                          </Column>
                        </Row>
                      </Column>
                    </Stack>
                    <List
                      className="gap-[0] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] min-h-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[95%]"
                      orientation="vertical"
                    >
                      <Column className="items-end justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:pl-[29px] xl:pl-[36px] 2xl:pl-[40px] 3xl:pl-[49px] w-[100%]">
                        <Row className="items-center justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Individual Yearly Income
                          </Text>
                          <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[72%]">
                            <Row className="bg-white_A700 border border-gray_300 border-solid items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <Text className="Three" variant="body2">
                                $
                              </Text>
                              <Text className="Amount_One" variant="body9">
                                Individual Yearly Income
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="items-end justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:pl-[27px] xl:pl-[33px] 2xl:pl-[38px] 3xl:pl-[45px] w-[100%]">
                        <Row className="items-end justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                          <Text
                            className="font-normal lg:leading-[10px] xl:leading-[12px] 2xl:leading-[14px] 3xl:leading-[17px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_702 text-right w-[26%]"
                            variant="body8"
                          >
                            <span className="text-gray_702 font-rubik lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                              Additional Yearly Income
                              <br />
                            </span>
                            <span className="text-gray_702 font-rubik lg:text-[6px] xl:text-[8px] 2xl:text-[9px] 3xl:text-[11px]">
                              (Optional)
                            </span>
                          </Text>
                          <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[71%]">
                            <Row className="bg-white_A700 border border-gray_300 border-solid items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <Text className="Three" variant="body2">
                                $
                              </Text>
                              <Text className="Amount_One" variant="body9">
                                Additional Yearly Income
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </List>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] p-[1px] rounded-radius4 w-[100%]">
                    <Stack className="2xl:h-[110px] 3xl:h-[132px] lg:h-[78px] xl:h-[98px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="absolute items-center justify-start top-[0] w-[100%]">
                        <Column className="justify-start p-[1px] w-[100%]">
                          <Text className="div42" variant="body7">
                            Save your information
                          </Text>
                        </Column>
                        <div className="lg:h-[34px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] outline outline-[0.5px] outline-gray_300 w-[100%]"></div>
                      </Column>
                      <Column className="absolute bottom-[0] inset-x-[0] items-end justify-start mx-[auto] 2xl:pl-[107px] 3xl:pl-[129px] lg:pl-[76px] xl:pl-[95px] w-[95%]">
                        <Row className="items-center justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                          <Text className="div43" variant="body8">
                            Email Address
                          </Text>
                          <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[80%]">
                            <Input
                              className="placeholder:text-gray_401 input1"
                              wrapClassName="w-[100%]"
                              type="email"
                              name="input Six"
                              placeholder="Email Address"
                            ></Input>
                          </Column>
                        </Row>
                      </Column>
                    </Stack>
                    <Column className="items-end justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] 3xl:pl-[107px] lg:pl-[63px] xl:pl-[79px] 2xl:pl-[89px] w-[95%]">
                      <Row className="items-center justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] w-[100%]">
                        <Text className="div43" variant="body8">
                          Create Password
                        </Text>
                        <Column className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[78%]">
                          <Input
                            className="placeholder:text-gray_401 input1"
                            wrapClassName="w-[100%]"
                            type="password"
                            name="input Seven"
                            placeholder="Password"
                          ></Input>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                    <Column className="items-center justify-start pr-[1px] py-[1px] w-[100%]">
                      <Text
                        className="font-normal lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] mb-[4px] not-italic text-bluegray_700 w-[99%]"
                        variant="body8"
                      >
                        <span className="text-bluegray_700 font-rubik lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                          The following documents contain important information,
                          including your agreement to do business with{" "}
                        </span>
                        <span className="text-bluegray_700 font-rubik font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                          Lendy
                        </span>
                        <span className="text-bluegray_700 font-rubik lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                          {" "}
                          electronically.{" "}
                        </span>
                        <span className="text-bluegray_700 font-rubik font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                          By clicking the box below, you confirm that you agree
                          by electronic signature to:
                        </span>
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[86%]">
                      <Row className="items-start pb-[3px] pr-[3px] w-[100%]">
                        <div className="bg-white_A700 border border-gray_300 border-solid lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"></div>
                        <Text
                          className="font-normal lg:leading-[13px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[22px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic text-gray_602 w-[92%]"
                          variant="body9"
                        >
                          the Credit Report Authorization, Terms of Use and
                          Electronic Consent, Data Terms of Use & Prosper
                          privacy policies.
                        </Text>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[162px] xl:ml-[203px] 2xl:ml-[228px] 3xl:ml-[274px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[36%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Button
                          className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
                          size="lg"
                          variant="FillTeal100"
                        >
                          Get your rates
                        </Button>
                        <Column className="items-end justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] p-[1px] w-[100%]">
                          <Text
                            className="font-normal lg:leading-[13px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[22px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] mt-[1px] not-italic text-gray_602 w-[89%]"
                            variant="body9"
                          >
                            Checking your rate won't affect your credit score!
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[26%]">
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-center lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius4 w-[100%]">
                    <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Img
                          src="images/img_clock_53X49.svg"
                          className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] w-[25%]"
                          alt="clock"
                        />
                        <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] p-[1px] w-[100%]">
                          <Text
                            className="font-normal lg:leading-[15px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] mb-[3px] not-italic text-bluegray_700 text-center w-[76%]"
                            variant="body7"
                          >
                            Check your rate in 5 minutes
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Img
                          src="images/img_info.svg"
                          className="lg:h-[30px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] lg:w-[29px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[49px]"
                          alt="info"
                        />
                        <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] p-[1px] w-[100%]">
                          <Text
                            className="font-normal mb-[1px] not-italic text-bluegray_700 w-[auto]"
                            variant="body7"
                          >
                            Get lower rates
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                    <List
                      className="gap-[0] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] min-h-[auto] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="items-center justify-start lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Img
                            src="images/img_computer_48X48.svg"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                            alt="computer"
                          />
                          <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] p-[1px] w-[100%]">
                            <Text className="div52" variant="body7">
                              Single monthly payments
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Img
                            src="images/img_calendar.svg"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                            alt="calendar"
                          />
                          <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] p-[1px] w-[100%]">
                            <Text className="div52" variant="body7">
                              Fixed terms—3 or 5 years*
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                    </List>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mt-[47px] xl:mt-[59px] 2xl:mt-[66px] 3xl:mt-[80px] w-[100%]">
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
                      alt="divborder Five"
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

export default HttpskapedcapitalborrowPage;
