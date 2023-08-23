import { Form, Field, FormikErrors, FormikTouched } from 'formik';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, Textarea, HStack } from '@chakra-ui/react';

interface ContactFormProps {
    errors: FormikErrors<{ from_name: '', userEmail: '', message: '' }>
    touched: FormikTouched<{ from_name: '', userEmail: '', message: '' }>
    loading: boolean
}

const ContactForm = (props: ContactFormProps) => {
    return (
        <Form>
            <HStack spacing={10}>
                <FormControl isRequired isInvalid={!!props.errors.from_name && props.touched.from_name}>
                    <FormLabel htmlFor="from_name">Name:</FormLabel>
                    <Field
                        as={Input}
                        type="text"
                        name="from_name"
                        id="from_name"
                        maxW="100%"
                    />
                    <FormErrorMessage>{props.errors.from_name}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!props.errors.userEmail && props.touched.userEmail}>
                    <FormLabel htmlFor="userEmail">Email:</FormLabel>
                    <Field
                        as={Input}
                        type="text"
                        name="userEmail"
                        id="userEmail"
                    />
                    <FormErrorMessage>{props.errors.userEmail}</FormErrorMessage>
                </FormControl>
            </HStack>

            <FormControl isRequired isInvalid={!!props.errors.message && props.touched.message}>
              <FormLabel htmlFor="message">Message:</FormLabel>
              <Field as={Textarea} type="text" name="message" id="message" />
              <FormErrorMessage>{props.errors.message}</FormErrorMessage>
            </FormControl>

            <Button type="submit" isDisabled={props.loading}>
              Submit
            </Button>
        </Form>
    )
}

export default ContactForm;