import React, { FC } from "react";
import { Form } from "../../molecules/Form";
import { Row, Col } from "antd";
import { FormItem } from "../../molecules/Form/FormItem";
import { Input } from "../../atoms/Input";
import { Dropdown } from "../../atoms/Dropdown";
import { Button } from "../../atoms/Button";
import { Rule } from "antd/lib/form";

interface props {
  titleValidation?: Rule[];
  typeValidation?: Rule[];
  onFinish?: ((values: any) => void) | undefined;
  onFinishFailed?: ((values: any) => void) | undefined;
}

export const Action: FC<props> = ({
  titleValidation,
  typeValidation,
  onFinish,
  onFinishFailed,
}) => {
  return (
    <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Row gutter={24}>
        <Col xs={24} xl={8}>
          <FormItem label="Title" name="title" rules={titleValidation}>
            <Input placeholder="title of the todo item" />
          </FormItem>
        </Col>
        <Col xs={24} xl={4}>
          <FormItem label="Type" name="type" rules={typeValidation}>
            <Dropdown placeholder="type" />
          </FormItem>
        </Col>
        <Col
          xs={24}
          xl={4}
          className="flex items-center"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button type="primary" classes="w-full mt-1" htmlType="submit">
            Add +
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
