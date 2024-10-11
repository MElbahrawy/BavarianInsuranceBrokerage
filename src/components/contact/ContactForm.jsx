import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <div className="bg-body-secondary d-flex align-items-center p-3 flex-column">
      <h2 className="my-5">عايز تتواصل معانا ؟</h2>
      <Form className="w-100">
        <Form.Group className="mb-4">
          <Form.Label>ادخل اسمك</Form.Label>
          <Form.Control type="text" placeholder="اسمك..." required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>ادخل بريدك الالكتروني</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>ادخل رقم هاتفك</Form.Label>
          <Form.Control type="text" placeholder="0123456789" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>اكتب لنا</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="اكتب نوع الاستفسار ..."
            required
          />
        </Form.Group>
        <Button
          className="secondary-background text-light my-4 px-4 py-2"
          variant="dark"
          type="submit"
          disabled
        >
          أتصل بي الأن
        </Button>
      </Form>
    </div>
  );
}
