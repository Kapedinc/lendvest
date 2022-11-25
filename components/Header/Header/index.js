import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
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
                    className="font-normal font-rubik mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] not-italic text-bluegray_900 w-[auto]"
                    variant="body7"
                  >
                    Borrow
                  </Text>
                </Column>
                <Column className="border border-gray_600 border-solid lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[8px] w-[50%]">
                  <Text
                    className="font-normal font-rubik mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] not-italic text-bluegray_900 w-[auto]"
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
                      className="font-normal font-rubik not-italic text-bluegray_900 w-[auto]"
                      variant="body7"
                    >
                      About us
                    </Text>
                  </Column>
                  <Text
                    className="font-normal font-rubik lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic text-bluegray_900 w-[auto]"
                    variant="body7"
                  >
                    Admin
                  </Text>
                  <Button
                    className="font-normal font-rubik lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[34%]"
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
      </header>
    </>
  );
};

export default Header;
