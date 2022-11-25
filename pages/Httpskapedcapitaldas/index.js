import React from "react";

import { Column, Text, Input, Button, Row, List, Img, Stack } from "components";
import Header from "components/Header/Header";

const HttpskapedcapitaldasPage = () => {
  return (
    <>
      <Column className="font-rubik items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[73px] w-[100%]">
            <Column className="items-center justify-end lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[8px] w-[26%]">
              <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                <Column className="items-center justify-start p-[2px] w-[100%]">
                  <Text
                    className="font-medium mb-[3px] text-bluegray_700 w-[auto]"
                    variant="body1"
                  >
                    Welcome Back
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] p-[1px] w-[100%]">
                  <Text
                    className="font-normal lg:leading-[15px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] mb-[3px] not-italic text-bluegray_700 text-center w-[66%]"
                    variant="body7"
                  >
                    Enter your credentials to sign in to your account
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_401 input1"
                    wrapClassName="w-[100%]"
                    type="email"
                    name="input"
                    placeholder="Email Address"
                    variant="OutlineGray402"
                  ></Input>
                </Column>
                <Column className="items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Input
                    className="placeholder:text-gray_401 input1"
                    wrapClassName="w-[100%]"
                    type="password"
                    name="input One"
                    placeholder="Password"
                    variant="OutlineGray402"
                  ></Input>
                </Column>
                <Button
                  className="font-normal lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
                  size="lg"
                  variant="FillTeal101"
                >
                  Sign in
                </Button>
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[30%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text
                      className="not-italic text-gray_602 w-[auto]"
                      variant="body10"
                    >
                      Forgot Password?
                    </Text>
                    <div className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] mt-[2px] outline outline-[0.5px] outline-gray_507 w-[100%]"></div>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="items-center justify-start xl:mt-[123px] 2xl:mt-[139px] 3xl:mt-[166px] lg:mt-[98px] w-[100%]">
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
                      Checking your rate generates a soft credit inquiry, which
                      is visible only to you. A hard credit inquiry that may
                      affect your credit score only appears when your loan is
                      issued.
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HttpskapedcapitaldasPage;
