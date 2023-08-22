import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => emailjs.init("Olsev5DtTdwvneSxV"), []);

  const handleSubmit = async () => {
    const serviceId = "service_hzjdb2n";
    const templateId = "contact_form";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current?.value,
        recipient: emailRef.current?.value,
      });
      alert("Email successfully sent!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(nameRef.current?.value);

  return (
    <Formik
      initialValues={{
        userName: "",
        userEmail: "",
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, resetForm }) => (
        <Form>
          <VStack spacing={3}>
            <FormControl>
              <FormLabel htmlFor="userName">Name:</FormLabel>
              <Field
                innerRef={nameRef}
                as={Input}
                type="text"
                name="userName"
                id="userName"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="userEmail">Email:</FormLabel>
              <Field
                innerRef={emailRef}
                as={Input}
                type="text"
                name="userEmail"
                id="userEmail"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="message">Message:</FormLabel>
              <Field as={Textarea} type="text" name="message" id="message" />
            </FormControl>

            <Button type="submit" isDisabled={loading}>
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
    // <FormControl onSubmit={handleSubmit}>
    //     <FormLabel>Name</FormLabel>
    //     <Input ref={nameRef} type="text" name="user_name" />
    //     <FormLabel>Email</FormLabel>
    //     <Input ref={emailRef} type="email" name="user_email" />
    //     <FormLabel>Message</FormLabel>
    //     <Textarea name="message" />
    //     <Button isLoading={loading}>Send!</Button>
    // </FormControl>
  );
};

export default Contact;
