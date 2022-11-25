import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[27px] xl:text-[33px] 2xl:text-[38px] text-[40px] 3xl:text-[45px]",
  h2: "font-medium lg:text-[24px] xl:text-[30px] 2xl:text-[34px] text-[36px] 3xl:text-[41px]",
  h3: "font-medium lg:text-[20px] xl:text-[26px] 2xl:text-[29px] text-[31px] 3xl:text-[35px]",
  h4: "font-normal lg:text-[20px] xl:text-[25px] 2xl:text-[28px] text-[30px] 3xl:text-[34px]",
  h5: "font-medium lg:text-[18px] xl:text-[23px] 2xl:text-[26px] text-[28px] 3xl:text-[32px]",
  h6: "font-medium lg:text-[17px] xl:text-[22px] 2xl:text-[24px] text-[26px] 3xl:text-[29px]",
  body1:
    "lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-[24px] 3xl:text-[27px]",
  body2:
    "font-normal lg:text-[15px] xl:text-[19px] 2xl:text-[21px] text-[23px] 3xl:text-[26px]",
  body3:
    "lg:text-[13px] xl:text-[16px] 2xl:text-[19px] text-[20px] 3xl:text-[22px]",
  body4:
    "lg:text-[12px] xl:text-[16px] 2xl:text-[18px] text-[19px] 3xl:text-[21px]",
  body5:
    "lg:text-[12px] xl:text-[15px] 2xl:text-[17px] text-[18px] 3xl:text-[20px]",
  body6:
    "font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] text-[17px] 3xl:text-[19px]",
  body7:
    "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] text-[16px] 3xl:text-[18px]",
  body8:
    "lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-[15px] 3xl:text-[17px]",
  body9:
    "xl:text-[11px] 2xl:text-[13px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body10:
    "font-normal xl:text-[11px] 2xl:text-[12px] text-[13px] 3xl:text-[14px] lg:text-[8px]",
  body11:
    "font-normal xl:text-[10px] 2xl:text-[11px] text-[12px] 3xl:text-[13px] lg:text-[8px]",
  body12:
    "font-normal text-[10px] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
