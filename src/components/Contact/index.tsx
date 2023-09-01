import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, FormikValues } from "formik";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

import ContactForm from "./ContactForm";

const validate = (values: FormikValues) => {
  const errors = {
    from_name: "",
    userEmail: "",
    message: "",
  };

  if (!values.from_name) {
    errors.from_name = "Name cannot be empty!";
  }

  if (!values.userEmail) {
    errors.userEmail = "Email cannot be empty!";
  }

  if (!values.message) {
    errors.message = "Message cannot be left empty!";
  }

  return errors;
};

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => emailjs.init("Olsev5DtTdwvneSxV"), []);

  const handleSubmit = async (values: FormikValues) => {
    const serviceId = "service_hzjdb2n";
    const templateId = "contact_form";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, values);
      alert("Email successfully sent!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box m={10} p={10} background="blackAlpha.900">
      <Heading as="h6" textAlign="center">
        Contact
      </Heading>
      <Text textAlign="center">
        Need to get in touch? Feel free to drop a message...
      </Text>
      <Center id="contact-form">
        <Box
          m={10}
          p={5}
          border="3px solid #03a062" 
          boxShadow="md"
          w="100%"
        >
          <Formik
            initialValues={{
              from_name: "",
              userEmail: "",
              message: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
            validate={validate}
          >
            {({ errors, touched }) => (
              <ContactForm
                errors={errors}
                touched={touched}
                loading={loading}
              />
            )}
          </Formik>
        </Box>
      </Center>
      <Text textAlign="center">...or you can reach me on my social media</Text>
    </Box>
  );
};

export default Contact;
