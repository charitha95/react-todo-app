import React, { FC } from "react";
import { Form as AntForm } from "antd";
import { FormLayout } from "antd/lib/form/Form";
import { Store } from "antd/lib/form/interface";

interface props {
  name?: string;
  layout?: FormLayout;
  initialValues?: Store;
  onFinish?: ((values: any) => void) | undefined;
  onFinishFailed?: ((values: any) => void) | undefined;
  children?: React.ReactNode;
}

export const Form: FC<props> = ({
  name,
  layout,
  initialValues,
  onFinish,
  onFinishFailed,
  children,
}) => {
  return (
    <AntForm
      name={name}
      layout={layout}
      initialValues={{ ...initialValues }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {children}
    </AntForm>
  );
};
