import React from "react";

import { Column, Text, Row, SelectBox, Img, List, Stack } from "components";
import Header from "components/Header/Header";

const HttpskapedcapitallistingsPage = () => {
  return (
    <>
      <Column className="font-rubik items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_103 items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
            <Column className="items-center justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
              <Column className="items-center justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[75%]">
                <Column className="justify-start pr-[2px] py-[2px] w-[100%]">
                  <Text className="div73" variant="body3">
                    Browse Loan Requests
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                  <Column className="items-center justify-start lg:mb-[35px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] w-[100%]">
                    <Column className="justify-start pr-[1px] pt-[1px] w-[100%]">
                      <Row className="items-center w-[22%]">
                        <Column className="w-[44%]">
                          <Column className="items-center justify-start w-[31%]">
                            <Text
                              className="not-italic text-bluegray_400 w-[auto]"
                              variant="body12"
                            >
                              RATING
                            </Text>
                          </Column>
                          <SelectBox
                            className="font-normal mt-[3px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_604 w-[100%]"
                            placeholderClassName="text-gray_604"
                            name="div"
                            placeholder="All"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="mr-[1px] lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray300_1"
                          ></SelectBox>
                        </Column>
                        <Column className="lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[44%]">
                          <Column className="items-center justify-start w-[70%]">
                            <Text
                              className="not-italic text-bluegray_400 w-[auto]"
                              variant="body12"
                            >
                              TERM (MONTHS)
                            </Text>
                          </Column>
                          <SelectBox
                            className="font-normal mt-[3px] not-italic xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_604 w-[100%]"
                            placeholderClassName="text-gray_604"
                            name="div One"
                            placeholder="All"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="mr-[1px] lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray300_1"
                          ></SelectBox>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-center p-[1px] rounded-radius4 w-[100%]">
                        <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 3xl:mr-[1178px] lg:mr-[698px] xl:mr-[873px] 2xl:mr-[982px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[4%]">
                          <Text className="div75" variant="body9">
                            0 loans
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mb-[57px] xl:mb-[72px] 2xl:mb-[81px] 3xl:mb-[97px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                          <Column className="bg-gray_104 items-center justify-start 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[100%]">
                            <Row className="items-center mb-[1px] p-[1px] w-[100%]">
                              <Text
                                className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] not-italic text-gray_702 w-[auto]"
                                variant="body10"
                              >
                                Loan
                              </Text>
                              <Text
                                className="lg:ml-[140px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] not-italic text-gray_702 w-[auto]"
                                variant="body10"
                              >
                                Rating
                              </Text>
                              <Text
                                className="lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[64px] not-italic text-gray_702 w-[auto]"
                                variant="body10"
                              >
                                Amount
                              </Text>
                              <Text
                                className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] not-italic text-gray_702 w-[auto]"
                                variant="body10"
                              >
                                Yield
                              </Text>
                              <Text
                                className="lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[83px] not-italic text-gray_702 w-[auto]"
                                variant="body10"
                              >
                                Time Left
                              </Text>
                            </Row>
                          </Column>
                          <Column className="items-center justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                            <div className="bg-gray_50 border border-solid border-teal_102 lg:h-[44px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[74px] rounded-radius50 lg:w-[43px] xl:w-[54px] 2xl:w-[60px] 3xl:w-[73px]"></div>
                            <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] p-[1px] w-[100%]">
                              <Text
                                className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] not-italic text-gray_605 w-[auto]"
                                variant="body8"
                              >
                                No loans found
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] w-[100%]">
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

export default HttpskapedcapitallistingsPage;
