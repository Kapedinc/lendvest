import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray900:
    "border border-bluegray_900 border-solid text-bluegray_900",
  GradientTealA400Blue400: "bg-gradient  text-white_A700",
  OutlineWhiteA700: "border border-solid border-white_A700 text-white_A700",
  FillTealA401: "bg-teal_A401 text-white_A700",
  FillTeal100: "bg-teal_100 text-white_A700",
  FillTeal101: "bg-teal_101 text-white_A700",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] 2xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "xl:p-[10px] 2xl:p-[11px] p-[12px] 3xl:p-[13px] lg:p-[8px]",
  lg: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] p-[15px] 3xl:p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "OutlineBluegray900",
    "GradientTealA400Blue400",
    "OutlineWhiteA700",
    "FillTealA401",
    "FillTeal100",
    "FillTeal101",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = { className: "", variant: "", size: "" };

export { Button };
