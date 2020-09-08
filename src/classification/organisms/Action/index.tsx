import React from "react";
import { Form } from "../../molecules/Form";
import { Row, Col } from "antd";
import { FormItem } from "../../molecules/Form/FormItem";
import { Input } from "../../atoms/Input";
import { Dropdown } from "../../atoms/Dropdown";
import { Button } from "../../atoms/Button";

export const Action = () => {
  return (
    <Form layout="vertical">
      <Row gutter={24}>
        <Col xs={24} xl={8}>
          <FormItem label="Title" name="title">
            <Input placeholder="title of the todo" />
          </FormItem>
        </Col>
        <Col xs={24} xl={4}>
          <FormItem label="Title" name="title">
            <Dropdown placeholder="type" />
          </FormItem>
        </Col>
        <Col
          xs={24}
          xl={4}
          className="flex items-center"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button type="primary" classes="w-full mt-1">
            Add +
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
